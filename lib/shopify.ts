/**
 * Shopify Online Store (public storefront). Product detail + cart live here.
 *
 * Set in .env:
 *   NEXT_PUBLIC_SHOPIFY_STORE_URL=https://shop.hosaka.xyz
 *
 * Optional handle overrides if Shopify URL handles differ from site slugs:
 *   NEXT_PUBLIC_SHOPIFY_HANDLE_FIELD_DECK_LITE=field-deck-lite
 *   NEXT_PUBLIC_SHOPIFY_HANDLE_OPERATOR_DECK=operator-deck
 */

function normalizeStoreBase(): string {
  const raw = process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL?.trim() ?? ""
  return raw.replace(/\/$/, "")
}

/** Base storefront URL, no trailing slash. Empty if unset. */
export function getShopifyStoreBaseUrl(): string {
  return normalizeStoreBase()
}

/** Main catalog view on Shopify (all products). */
export function getShopifyProductsIndexUrl(): string | null {
  const base = normalizeStoreBase()
  if (!base) return null
  return `${base}/collections/all`
}

function productHandleForSlug(slug: string): string {
  if (slug === "field-deck-lite") {
    return (
      process.env.NEXT_PUBLIC_SHOPIFY_HANDLE_FIELD_DECK_LITE?.trim() ||
      "field-deck-lite"
    )
  }
  if (slug === "operator-deck") {
    return (
      process.env.NEXT_PUBLIC_SHOPIFY_HANDLE_OPERATOR_DECK?.trim() ||
      "operator-deck"
    )
  }
  return slug
}

/**
 * Full URL to the product page on Shopify. Null for custom-build or if store URL unset.
 */
export function getShopifyProductPageUrl(slug: string): string | null {
  if (slug === "custom-build") return null
  const base = normalizeStoreBase()
  if (!base) return null
  return `${base}/products/${productHandleForSlug(slug)}`
}
