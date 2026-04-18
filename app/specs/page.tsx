import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { products } from "@/data/products"
import { formatPrice } from "@/lib/utils"
import {
  getShopifyProductPageUrl,
  getShopifyProductsIndexUrl,
  getShopifyStoreBaseUrl,
} from "@/lib/shopify"

export const metadata: Metadata = {
  title: "Specs",
  description:
    "Field Deck Lite and Operator Deck specifications. Custom builds by inquiry.",
}

export default function SpecsPage() {
  const shop = getShopifyStoreBaseUrl()
  const catalog = getShopifyProductsIndexUrl()
  const decks = products.filter((p) => p.slug !== "custom-build")
  const custom = products.find((p) => p.slug === "custom-build")!

  return (
    <div className="bg-slate-950 min-h-screen pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-3">
          Specifications
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight mb-4">
          Hardware on file
        </h1>
        {shop ? (
          <p className="text-slate-400 text-sm mb-10 leading-relaxed">
            Shop is live on{" "}
            <a
              href={catalog ?? shop}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Shopify
            </a>
            . Pricing, photos, and checkout live there — this page is the
            technical summary only.
          </p>
        ) : (
          <p className="text-amber-400/90 text-sm font-mono mb-10 leading-relaxed">
            Storefront URL not configured — add{" "}
            <code className="text-slate-300">NEXT_PUBLIC_SHOPIFY_STORE_URL</code>{" "}
            when the shop opens. Specs below stay accurate.
          </p>
        )}

        <div className="space-y-16">
          {decks.map((p) => {
            const buy = getShopifyProductPageUrl(p.slug)
            const hero = p.images[0]
            const variantLabel =
              p.slug === "operator-deck"
                ? "AI edition"
                : p.slug === "field-deck-lite"
                  ? "Standard"
                  : null
            return (
              <section
                key={p.slug}
                className="border border-slate-800 rounded-2xl bg-slate-900/30 overflow-hidden"
              >
                <div className="px-6 py-5 border-b border-slate-800 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-semibold text-slate-100">
                      {p.name}
                    </h2>
                    <p className="text-xs font-mono text-blue-400/80 mt-1">
                      {p.tagline}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <p className="text-sm font-mono text-slate-300">
                      From {formatPrice(p.startingPrice)}
                    </p>
                    {buy ? (
                      <a
                        href={buy}
                        className="text-sm font-medium text-blue-400 hover:text-blue-300"
                      >
                        View on shop →
                      </a>
                    ) : null}
                  </div>
                </div>
                <div className="px-6 py-6 grid lg:grid-cols-[minmax(0,320px)_1fr] gap-8 items-start">
                  {hero ? (
                    <figure className="space-y-2 lg:sticky lg:top-28">
                      <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                        <Image
                          src={hero}
                          alt={`${p.name} — ${variantLabel ?? "product"} photo`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 1024px) 100vw, 320px"
                          priority={p.slug === "field-deck-lite"}
                        />
                      </div>
                      {variantLabel ? (
                        <figcaption className="text-xs font-mono text-slate-500">
                          {variantLabel}
                        </figcaption>
                      ) : null}
                    </figure>
                  ) : null}
                  <div
                    className={`grid sm:grid-cols-2 gap-8 ${hero ? "" : "sm:col-span-full"}`}
                  >
                    <div>
                      <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">
                        Specs
                      </h3>
                      <ul className="space-y-2 text-sm text-slate-400">
                        {p.specs.map((s) => (
                          <li key={s} className="flex gap-2">
                            <span className="text-blue-500/50 shrink-0">·</span>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">
                        Included
                      </h3>
                      <ul className="space-y-2 text-sm text-slate-400">
                        {p.features.map((f) => (
                          <li key={f} className="flex gap-2">
                            <span className="text-blue-500/50 shrink-0">·</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            )
          })}

          <section
            id="custom"
            className="border border-slate-800 rounded-2xl bg-slate-900/30 px-6 py-8"
          >
            <h2 className="text-xl font-semibold text-slate-100 mb-2">
              {custom.name}
            </h2>
            <p className="text-xs font-mono text-blue-400/80 mb-4">
              {custom.tagline}
            </p>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              {custom.shortDescription}
            </p>
            <ul className="space-y-2 text-sm text-slate-400 mb-8">
              {custom.specs.map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="text-blue-500/50 shrink-0">·</span>
                  {s}
                </li>
              ))}
            </ul>
            <a
              href="mailto:hello@hosaka.xyz?subject=Custom%20build%20inquiry"
              className="inline-flex text-sm font-medium text-blue-400 hover:text-blue-300"
            >
              hello@hosaka.xyz — custom inquiry →
            </a>
          </section>
        </div>

        <p className="mt-14 text-center">
          <Link
            href="/"
            className="text-sm text-slate-500 hover:text-slate-300 font-mono"
          >
            ← Back
          </Link>
        </p>
      </div>
    </div>
  )
}
