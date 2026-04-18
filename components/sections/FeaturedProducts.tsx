import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getFeaturedProducts } from "@/data/products"
import ProductCard from "@/components/product/ProductCard"
import { getShopifyProductsIndexUrl } from "@/lib/shopify"

export default function FeaturedProducts() {
  const products = getFeaturedProducts()
  const shopCatalog = getShopifyProductsIndexUrl()

  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-4">
            Product Lineup
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight mb-4">
            Purpose-built for your workflow
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Three configurations covering entry-level portability through
            full-capability field workstation — plus a custom program for
            specialized requirements.
          </p>
          <p className="text-slate-600 text-sm font-mono mt-4 leading-relaxed">
            The ghost notation lives in the reading library—not on a price tag.
            Try the live shell if you want breadcrumbs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="flex justify-start">
          {shopCatalog ? (
            <a
              href={shopCatalog}
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group"
            >
              Open full catalog on Shopify
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          ) : (
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group"
            >
              View lineup on site
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
