"use client"

import Link from "next/link"
import { ArrowRight, ShoppingBag } from "lucide-react"
import { cn } from "@/lib/utils"

const storeBase =
  typeof process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL === "string"
    ? process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL.replace(/\/$/, "")
    : ""

const flagshipHandle =
  process.env.NEXT_PUBLIC_SHOPIFY_HANDLE_FIELD_DECK_LITE?.trim() ||
  "field-deck-lite"

export default function HeroBuy() {
  const shopProductUrl = storeBase
    ? `${storeBase}/products/${flagshipHandle}`
    : null

  const className = cn(
    "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200",
    "bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white",
    "border border-blue-600 hover:border-blue-500",
    "shadow-xl shadow-blue-950/30",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
    "w-full sm:w-auto text-base py-4 px-8 font-semibold"
  )

  if (shopProductUrl) {
    return (
      <a href={shopProductUrl} className={className}>
        <ShoppingBag className="w-5 h-5 shrink-0" />
        Buy
        <ArrowRight className="w-5 h-5 shrink-0" />
      </a>
    )
  }

  return (
    <Link href="/specs" className={className}>
      <ShoppingBag className="w-5 h-5 shrink-0" />
      Specs & availability
      <ArrowRight className="w-5 h-5 shrink-0" />
    </Link>
  )
}
