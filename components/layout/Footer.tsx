import Link from "next/link"
import { Terminal } from "lucide-react"
import {
  getShopifyProductPageUrl,
  getShopifyProductsIndexUrl,
  getShopifyStoreBaseUrl,
} from "@/lib/shopify"

export default function Footer() {
  const shop = getShopifyStoreBaseUrl()
  const catalog = getShopifyProductsIndexUrl()
  const lite = getShopifyProductPageUrl("field-deck-lite")
  const op = getShopifyProductPageUrl("operator-deck")

  return (
    <footer className="bg-slate-950 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <Link href="/" className="flex items-center gap-2 group w-fit">
            <Terminal className="w-4 h-4 text-blue-500" />
            <span className="font-mono font-bold text-slate-100 text-sm uppercase group-hover:text-blue-400 transition-colors">
              Hosaka
            </span>
          </Link>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-slate-500">
            <Link href="/demo" className="hover:text-slate-300 transition-colors">
              Terminal
            </Link>
            <Link
              href="/gallery"
              className="hover:text-slate-300 transition-colors"
            >
              Gallery
            </Link>
            <Link href="/specs" className="hover:text-slate-300 transition-colors">
              Specs
            </Link>
            <Link href="/lore" className="hover:text-slate-300 transition-colors">
              Lore
            </Link>
            {catalog ? (
              <a
                href={catalog}
                className="hover:text-slate-300 transition-colors"
              >
                Shop
              </a>
            ) : null}
            {lite ? (
              <a href={lite} className="hover:text-slate-300 transition-colors">
                Field Deck
              </a>
            ) : null}
            {op ? (
              <a href={op} className="hover:text-slate-300 transition-colors">
                Operator
              </a>
            ) : null}
            <a
              href="mailto:hello@hosaka.xyz"
              className="hover:text-slate-300 transition-colors"
            >
              hello@hosaka.xyz
            </a>
          </nav>
        </div>

        <p className="mt-8 text-[11px] text-slate-600 font-mono">
          {shop ? (
            <>
              Storefront:{" "}
              <a
                href={shop}
                className="text-slate-500 hover:text-blue-400 transition-colors"
              >
                {shop.replace(/^https?:\/\//, "")}
              </a>
              {" · "}
            </>
          ) : (
            <>Shop URL not set · </>
          )}
          © {new Date().getFullYear()} Hosaka · signal steady
        </p>
      </div>
    </footer>
  )
}
