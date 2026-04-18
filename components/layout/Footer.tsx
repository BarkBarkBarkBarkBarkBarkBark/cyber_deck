import Link from "next/link"
import { Terminal, ExternalLink } from "lucide-react"
import {
  getShopifyProductPageUrl,
  getShopifyProductsIndexUrl,
} from "@/lib/shopify"

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
]

const legalLinks = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
]

const socialLinks = [
  { href: "#", label: "GitHub" },
  { href: "#", label: "Twitter / X" },
  { href: "#", label: "LinkedIn" },
]

export default function Footer() {
  const shopField = getShopifyProductPageUrl("field-deck-lite")
  const shopOp = getShopifyProductPageUrl("operator-deck")
  const shopCatalog = getShopifyProductsIndexUrl()

  const productLinks: { href: string; label: string; external: boolean }[] = [
    ...(shopField
      ? [{ href: shopField, label: "Field Deck Lite", external: true }]
      : [{ href: "/products/field-deck-lite", label: "Field Deck Lite", external: false }]),
    ...(shopOp
      ? [{ href: shopOp, label: "Operator Deck", external: true }]
      : [{ href: "/products/operator-deck", label: "Operator Deck", external: false }]),
    {
      href: "/products/custom-build",
      label: "Custom Build Program",
      external: false,
    },
    ...(shopCatalog
      ? [{ href: shopCatalog, label: "Shop — all products", external: true }]
      : []),
    { href: "/preorder", label: "Preorder", external: false },
  ]

  return (
    <footer className="bg-slate-950 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Terminal className="w-4 h-4 text-blue-500" />
              <span className="font-mono font-bold text-slate-100 tracking-tight group-hover:text-blue-400 transition-colors text-sm uppercase">
                Hosaka
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-3">
              Portable computing systems built for technical professionals.
              Preconfigured, field-ready, and open by design.
            </p>
            <p className="text-slate-600 text-xs font-mono leading-relaxed mb-6">
              Signal steady, not signal loud.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg border border-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-300 hover:border-slate-700 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-5">
              Products
            </h3>
            <ul className="space-y-3">
              {productLinks.map(({ href, label, external }) => (
                <li key={`${label}-${href}`}>
                  {external ? (
                    <a
                      href={href}
                      className="text-sm text-slate-400 hover:text-slate-200 transition-colors"
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      className="text-sm text-slate-400 hover:text-slate-200 transition-colors"
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-5">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 font-mono">
            © {new Date().getFullYear()} Hosaka. All rights reserved.
          </p>
          <p className="text-xs text-slate-700 font-mono">
            After the long quiet—hardware you can actually ship.
          </p>
        </div>
      </div>
    </footer>
  )
}
