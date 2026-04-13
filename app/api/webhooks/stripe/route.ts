import { NextRequest, NextResponse } from "next/server"
import { getStripe } from "@/lib/stripe"
import Stripe from "stripe"

// This secret is generated in your Stripe dashboard under:
// Developers → Webhooks → your endpoint → Signing secret
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

export async function POST(req: NextRequest) {
  if (!webhookSecret) {
    console.error("[Stripe Webhook] STRIPE_WEBHOOK_SECRET is not set")
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 })
  }

  const body = await req.text()
  const signature = req.headers.get("stripe-signature")

  if (!signature) {
    return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = getStripe().webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    console.error("[Stripe Webhook] Signature verification failed:", err)
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session

        // TODO: When you add Supabase, insert an order record here:
        // await supabase.from("orders").insert({
        //   stripe_session_id: session.id,
        //   stripe_payment_intent: session.payment_intent,
        //   customer_email: session.customer_details?.email,
        //   customer_name: session.customer_details?.name,
        //   product_slug: session.metadata?.productSlug,
        //   product_name: session.metadata?.productName,
        //   amount_total: session.amount_total,
        //   currency: session.currency,
        //   shipping: session.shipping_details,
        //   status: "confirmed",
        // })

        // TODO: When you add Resend, send a confirmation email here:
        // await resend.emails.send({ ... })

        console.log("[Order Confirmed]", {
          sessionId: session.id,
          email: session.customer_details?.email,
          name: session.customer_details?.name,
          product: session.metadata?.productName,
          amount: session.amount_total,
        })

        break
      }

      case "payment_intent.payment_failed": {
        const intent = event.data.object as Stripe.PaymentIntent
        console.warn("[Payment Failed]", {
          id: intent.id,
          reason: intent.last_payment_error?.message,
        })
        break
      }

      default:
        // Unhandled event types — safe to ignore
        break
    }
  } catch (error) {
    console.error("[Stripe Webhook] Handler error:", error)
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 })
  }

  return NextResponse.json({ received: true })
}
