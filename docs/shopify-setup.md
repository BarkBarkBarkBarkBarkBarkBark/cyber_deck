# Shopify + TikTok Shop Setup

## 1. Create a Shopify Store

1. Go to [shopify.com](https://www.shopify.com) and create a store
2. The **Starter plan** ($5/mo) is sufficient for Buy Button usage
3. Note your store domain: `your-store.myshopify.com`

## 2. Add Products

Create these three products in Shopify Admin → Products:

| Product | Price | Status |
|---------|-------|--------|
| Field Deck Lite | $349.00 | Draft (or Active when ready) |
| Operator Deck | $699.00 | Draft (or Active when ready) |
| Custom Build Program | N/A | Not needed (uses contact form) |

After creating each product, note the **product ID** from the admin URL:
`https://admin.shopify.com/store/your-store/products/PRODUCT_ID`

## 3. Enable Buy Button Sales Channel

1. Shopify Admin → Settings → Apps and sales channels
2. Click "Shopify App Store" → search "Buy Button"
3. Install the **Buy Button channel**
4. This enables the Storefront API access needed by the site

## 4. Get Storefront Access Token

1. Shopify Admin → Settings → Apps and sales channels → Develop apps
2. Click "Create an app" → name it "hosaka-web"
3. Configure Storefront API scopes:
   - `unauthenticated_read_products`
   - `unauthenticated_write_checkouts`
   - `unauthenticated_read_checkouts`
4. Install the app → copy the **Storefront access token**

## 5. Set Environment Variables

In Vercel (or `.env.local` for dev):

```
NEXT_PUBLIC_SHOPIFY_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN=your-storefront-access-token
NEXT_PUBLIC_SHOPIFY_PRODUCT_FIELD_DECK_LITE=1234567890
NEXT_PUBLIC_SHOPIFY_PRODUCT_OPERATOR_DECK=1234567891
```

## 6. TikTok Shop Integration

1. Shopify Admin → Sales Channels → click the **+** button
2. Search for and install **TikTok**
3. Connect your **TikTok for Business** account
4. Sync your product catalog (Field Deck Lite, Operator Deck)
5. Enable TikTok Shopping features:
   - Product links in videos
   - TikTok Shop tab on your profile
   - Live shopping (optional)

TikTok Shop and the Buy Buttons on hosaka.xyz share the same
Shopify inventory and order management — one dashboard for everything.

## Testing

Before going live:
1. Use Shopify's test mode (Bogus Gateway) to verify checkout flow
2. Confirm Buy Buttons render on product pages
3. Verify TikTok product sync in Shopify admin
4. Place a test order through both channels
