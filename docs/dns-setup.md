# GoDaddy DNS Setup for hosaka.xyz

## Subdomains

| Subdomain | Points to | Purpose |
|-----------|-----------|---------|
| `hosaka.xyz` (apex) | Vercel (cyber_deck) | Main site: info, shop, demo |
| `www.hosaka.xyz` | Vercel (cyber_deck) | Redirect to apex |
| `terminal.hosaka.xyz` | GitHub Pages | Field terminal SPA |

## Step-by-step

### 1. hosaka.xyz → Vercel

In GoDaddy DNS Management:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | `76.76.21.21` | 600 |
| CNAME | www | `cname.vercel-dns.com` | 3600 |

Then in Vercel project settings → Domains:
- Add `hosaka.xyz`
- Add `www.hosaka.xyz`

Vercel auto-provisions SSL.

### 2. terminal.hosaka.xyz → GitHub Pages

In GoDaddy DNS Management:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | terminal | `<your-github-username>.github.io` | 3600 |

Then in the GitHub repo (hosaka_field-terminal) → Settings → Pages:
- Set custom domain to `terminal.hosaka.xyz`
- Enable "Enforce HTTPS"

The `frontend/public/CNAME` file is already committed.

### 3. Verify

```bash
dig hosaka.xyz +short
# expect: 76.76.21.21

dig terminal.hosaka.xyz +short
# expect: <username>.github.io.

dig www.hosaka.xyz +short
# expect: cname.vercel-dns.com.
```

DNS propagation is usually instant but can take up to 48 hours.

## Environment Variables (Vercel)

Set these in Vercel project settings → Environment Variables:

```
NEXT_PUBLIC_SHOPIFY_DOMAIN=your-store.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN=your-storefront-access-token
NEXT_PUBLIC_SHOPIFY_PRODUCT_FIELD_DECK_LITE=<shopify-product-id>
NEXT_PUBLIC_SHOPIFY_PRODUCT_OPERATOR_DECK=<shopify-product-id>
NEXT_PUBLIC_SITE_URL=https://hosaka.xyz
```
