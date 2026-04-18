import { notFound, redirect } from "next/navigation"
import { products } from "@/data/products"
import { getShopifyProductPageUrl } from "@/lib/shopify"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export default async function LegacyProductRoute({ params }: Props) {
  const { slug } = await params
  if (!products.some((p) => p.slug === slug)) notFound()

  const shop = getShopifyProductPageUrl(slug)
  if (shop) redirect(shop)

  redirect(slug === "custom-build" ? "/specs#custom" : "/specs")
}
