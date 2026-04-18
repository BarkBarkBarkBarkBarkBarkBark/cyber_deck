/**
 * Map product slugs to Shopify product GIDs.
 * After creating products in your Shopify admin, set these env vars
 * to the numeric product ID (visible in the Shopify admin URL).
 */
export function getShopifyProductId(slug: string): string | null {
  const map: Record<string, string | null> = {
    "field-deck-lite": process.env.NEXT_PUBLIC_SHOPIFY_PRODUCT_FIELD_DECK_LITE ?? null,
    "operator-deck": process.env.NEXT_PUBLIC_SHOPIFY_PRODUCT_OPERATOR_DECK ?? null,
    "custom-build": null,
  }
  return map[slug] ?? null
}
