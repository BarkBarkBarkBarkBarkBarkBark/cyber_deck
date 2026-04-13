import Stripe from "stripe"

// Lazy-initialized so build succeeds without env vars set.
// At runtime, any request to the checkout API will fail fast with a clear message
// if the key is missing.
let _stripe: Stripe | null = null

export function getStripe(): Stripe {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error(
      "STRIPE_SECRET_KEY is not set. Add it to your .env.local or Vercel environment variables."
    )
  }
  if (!_stripe) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2026-03-25.dahlia",
    })
  }
  return _stripe
}

// Map product slugs to Stripe Price IDs.
// After creating products in your Stripe dashboard, paste the price IDs here
// or set the env vars below.
// Format: price_xxxxxxxxxxxxxxxxxxxxxxxx
export function getStripePriceId(slug: string): string | null {
  const map: Record<string, string | null> = {
    "field-deck-lite": process.env.STRIPE_PRICE_FIELD_DECK_LITE ?? null,
    "operator-deck": process.env.STRIPE_PRICE_OPERATOR_DECK ?? null,
    "custom-build": null, // Custom builds use quote flow, not direct checkout
  }
  return map[slug] ?? null
}
