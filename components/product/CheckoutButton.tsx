"use client"

import { useState } from "react"
import { ShoppingCart, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface CheckoutButtonProps {
  slug: string
  label?: string
  className?: string
  size?: "md" | "lg"
}

export default function CheckoutButton({
  slug,
  label = "Order Now",
  className,
  size = "lg",
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleCheckout() {
    setLoading(true)
    setError(null)

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      })

      const data = await res.json()

      if (!res.ok || !data.url) {
        setError(data.error ?? "Something went wrong. Please try again.")
        return
      }

      window.location.href = data.url
    } catch {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  const sizeClasses = size === "lg" ? "px-7 py-3.5 text-base" : "px-5 py-2.5 text-sm"

  return (
    <div className="w-full">
      <button
        onClick={handleCheckout}
        disabled={loading}
        className={cn(
          "w-full inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200",
          "bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white",
          "border border-blue-600 hover:border-blue-500",
          "shadow-lg shadow-blue-900/20",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
          "disabled:opacity-60 disabled:pointer-events-none cursor-pointer",
          sizeClasses,
          className
        )}
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <ShoppingCart className="w-4 h-4" />
        )}
        {loading ? "Redirecting to checkout…" : label}
      </button>

      {error && (
        <p className="mt-2 text-xs text-red-400 text-center">{error}</p>
      )}
    </div>
  )
}
