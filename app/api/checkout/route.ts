import { NextRequest, NextResponse } from "next/server"
import { getStripe, getStripePriceId } from "@/lib/stripe"
import { getProductBySlug } from "@/data/products"

export async function POST(req: NextRequest) {
  try {
    const { slug, quantity = 1 } = await req.json()

    if (!slug) {
      return NextResponse.json({ error: "Product slug is required" }, { status: 400 })
    }

    const product = getProductBySlug(slug)
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    if (slug === "custom-build") {
      return NextResponse.json(
        { error: "Custom builds use the inquiry form, not direct checkout" },
        { status: 400 }
      )
    }

    const priceId = getStripePriceId(slug)
    if (!priceId) {
      return NextResponse.json(
        { error: "Stripe price not configured for this product. Contact support." },
        { status: 503 }
      )
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity,
        },
      ],
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/products/${slug}`,
      metadata: {
        productSlug: slug,
        productName: product.name,
      },
      shipping_address_collection: {
        allowed_countries: ["US", "CA", "GB", "AU", "DE", "FR", "NL"],
      },
      payment_intent_data: {
        metadata: {
          productSlug: slug,
          productName: product.name,
        },
      },
      custom_text: {
        submit: {
          message:
            "Your order will be built and shipped within 4–6 weeks. You'll receive a confirmation email with order details.",
        },
      },
      allow_promotion_codes: true,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("[Stripe Checkout]", error)
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    )
  }
}
