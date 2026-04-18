import { redirect } from "next/navigation"
import { getShopifyProductsIndexUrl } from "@/lib/shopify"

export default function ProductsPage() {
  const catalog = getShopifyProductsIndexUrl()
  redirect(catalog ?? "/specs")
}
