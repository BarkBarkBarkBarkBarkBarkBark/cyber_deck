/**
 * Shopify Online Store (public storefront). Product detail + cart live here.
 *
 * Set in .env:
 *   NEXT_PUBLIC_SHOPIFY_STORE_URL=https://shop.hosaka.xyz
 *
 * Optional overrides (defaults match shop.hosaka.xyz):
 *   NEXT_PUBLIC_SHOPIFY_HANDLE_FIELD_DECK_LITE=cyber-deck
 *   NEXT_PUBLIC_SHOPIFY_HANDLE_OPERATOR_DECK=ai-cyber-deck
 *   NEXT_PUBLIC_SHOPIFY_VARIANT_FIELD_DECK_LITE=48058999374065
 *   NEXT_PUBLIC_SHOPIFY_VARIANT_OPERATOR_DECK=48059038761201
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

/** Shopify product handle + default variant id (preselects SKU on PDP). */
function shopifyProductForSlug(
  slug: string,
): { handle: string; variantId: string | null } | null {
  if (slug === "custom-build") return null
  if (slug === "field-deck-lite") {
    return {
      handle:
        process.env.NEXT_PUBLIC_SHOPIFY_HANDLE_FIELD_DECK_LITE?.trim() ||
        "cyber-deck",
      variantId:
        process.env.NEXT_PUBLIC_SHOPIFY_VARIANT_FIELD_DECK_LITE?.trim() ||
        "48058999374065",
    }
  }
  if (slug === "operator-deck") {
    return {
      handle:
        process.env.NEXT_PUBLIC_SHOPIFY_HANDLE_OPERATOR_DECK?.trim() ||
        "ai-cyber-deck",
      variantId:
        process.env.NEXT_PUBLIC_SHOPIFY_VARIANT_OPERATOR_DECK?.trim() ||
        "48059038761201",
    }
  }
  return { handle: slug, variantId: null }
}

/**
 * Full URL to the product page on Shopify. Null for custom-build or if store URL unset.
 */
export function getShopifyProductPageUrl(slug: string): string | null {
  const base = normalizeStoreBase()
  if (!base) return null
  const spec = shopifyProductForSlug(slug)
  if (!spec) return null
  const q = spec.variantId ? `?variant=${spec.variantId}` : ""
  return `${base}/products/${spec.handle}${q}`
}
