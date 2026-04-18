# Shopify storefront (product pages + checkout)

The marketing site (hosaka.xyz) links **out** to your **Shopify Online Store** for catalog, product detail, cart, and checkout. You maintain products only in Shopify.

## 1. Store URL

In `.env` / Vercel:

```env
NEXT_PUBLIC_SHOPIFY_STORE_URL=https://shop.hosaka.xyz
```

Use your real **customer-facing** shop URL (custom domain or `https://your-store.myshopify.com`). No trailing slash.

**Separate:** Storefront API / admin still use `*.myshopify.com` if you add headless features later; this variable is only for **browser links** to the Online Store.

## 2. Product handles

Paths are built as:

`{NEXT_PUBLIC_SHOPIFY_STORE_URL}/products/{handle}`

By default, handles match this site’s slugs:

| Site slug           | Shopify product URL (default handle)   |
|---------------------|----------------------------------------|
| `field-deck-lite`   | `/products/field-deck-lite`            |
| `operator-deck`     | `/products/operator-deck`              |
| `custom-build`      | Stays on hosaka.xyz (`/products/custom-build`) |

If your Shopify handles differ, set:

```env
NEXT_PUBLIC_SHOPIFY_HANDLE_FIELD_DECK_LITE=your-shopify-handle
NEXT_PUBLIC_SHOPIFY_HANDLE_OPERATOR_DECK=your-shopify-handle
```

## 3. What changes on the site

- **Hero “Buy”** → flagship product on Shopify (`field-deck-lite` handle by default).
- **Navbar “Products”** → `…/collections/all` when store URL is set.
- **Product cards / footer** → Shopify product URLs for the two decks; custom build stays local.
- **`/products/field-deck-lite` and `/products/operator-deck`** → **307 redirect** to Shopify when `NEXT_PUBLIC_SHOPIFY_STORE_URL` is set.

## 4. TikTok Shop

Still configured in **Shopify admin → Sales channels → TikTok**. Same catalog as the Online Store.

## 5. Optional: Storefront API app

You only need a **custom app + Storefront token** if you add headless cart/checkout again. For “everything on Shopify,” **store URL + handles** are enough.
