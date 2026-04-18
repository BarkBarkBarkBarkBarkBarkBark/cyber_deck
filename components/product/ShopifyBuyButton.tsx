"use client"

import { useEffect, useRef } from "react"
import { ShoppingCart } from "lucide-react"
import { cn } from "@/lib/utils"

declare global {
  interface Window {
    ShopifyBuy?: {
      buildClient: (config: {
        domain: string
        storefrontAccessToken: string
      }) => unknown
      UI: {
        onReady: (client: unknown) => Promise<{
          createComponent: (
            type: string,
            config: Record<string, unknown>
          ) => void
        }>
      }
    }
  }
}

interface ShopifyBuyButtonProps {
  productId: string
  label?: string
  className?: string
  size?: "md" | "lg"
}

export default function ShopifyBuyButton({
  productId,
  label = "Order Now",
  className,
  size = "lg",
}: ShopifyBuyButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const initializedRef = useRef(false)

  useEffect(() => {
    if (initializedRef.current || !containerRef.current) return

    const domain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN ?? ""
    const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN ?? ""

    if (!domain || !token) return

    function init() {
      if (!window.ShopifyBuy || !containerRef.current) return

      const client = window.ShopifyBuy.buildClient({
        domain,
        storefrontAccessToken: token,
      })

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        ui.createComponent("product", {
          id: productId,
          node: containerRef.current,
          moneyFormat: "%24%7B%7Bamount%7D%7D",
          options: {
            product: {
              buttonDestination: "checkout",
              contents: { img: false, title: false, price: false },
              text: { button: label },
            },
            cart: { popup: false },
          },
        })
      })

      initializedRef.current = true
    }

    if (window.ShopifyBuy) {
      init()
      return
    }

    const interval = setInterval(() => {
      if (window.ShopifyBuy) {
        clearInterval(interval)
        init()
      }
    }, 200)

    return () => clearInterval(interval)
  }, [productId, label])

  const domain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN
  const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN

  if (!domain || !token) {
    const sizeClasses =
      size === "lg" ? "px-7 py-3.5 text-base" : "px-5 py-2.5 text-sm"
    return (
      <div className="w-full">
        <span
          className={cn(
            "w-full inline-flex items-center justify-center gap-2 font-medium rounded-lg",
            "bg-blue-600/50 text-white/60 border border-blue-600/30 cursor-not-allowed",
            sizeClasses,
            className
          )}
        >
          <ShoppingCart className="w-4 h-4" />
          Shop coming soon
        </span>
      </div>
    )
  }

  return <div ref={containerRef} className={cn("w-full", className)} />
}
