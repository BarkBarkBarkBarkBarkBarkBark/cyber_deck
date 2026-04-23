"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Terminal } from "lucide-react"
import { cn } from "@/lib/utils"

function NavItem({
  href,
  label,
  active,
}: {
  href: string
  label: string
  active: boolean
}) {
  const external = href.startsWith("http")
  const className = cn(
    "text-sm font-medium transition-colors hover:text-slate-100",
    active ? "text-slate-100" : "text-slate-400"
  )
  if (external) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    )
  }
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const navLinks = useMemo(() => {
    const storeRaw = process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL?.trim() ?? ""
    const storeBase = storeRaw.replace(/\/$/, "")
    const shopHref = storeBase ? `${storeBase}/collections/all` : null

    return [
      { href: "/products/parts", label: "Builds" },
      { href: "/specs", label: "Specs" },
      { href: "/demo", label: "Try Console" },
      { href: "/lore", label: "Lore" },
      ...(shopHref ? [{ href: shopHref, label: "Shop" }] : []),
    ]
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  function linkActive(href: string): boolean {
    if (href.startsWith("http")) return false
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800/60 shadow-xl shadow-slate-950/50"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 group shrink-0"
            onClick={() => setIsOpen(false)}
          >
            <Terminal className="w-4 h-4 text-blue-500" />
            <span className="font-mono font-bold text-slate-100 tracking-tight group-hover:text-blue-400 transition-colors text-sm uppercase">
              Hosaka
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <NavItem
                key={`${link.href}-${link.label}`}
                href={link.href}
                label={link.label}
                active={linkActive(link.href)}
              />
            ))}
          </nav>

          <button
            className="md:hidden p-2 -mr-2 text-slate-400 hover:text-slate-100 transition-colors rounded-lg hover:bg-slate-800/50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden border-t border-slate-800/60 bg-slate-950/95 backdrop-blur-md overflow-hidden transition-all duration-300",
          isOpen ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col gap-1">
          {navLinks.map((link) =>
            link.href.startsWith("http") ? (
              <a
                key={`${link.href}-${link.label}`}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium py-2.5 px-3 rounded-lg text-slate-400 hover:bg-slate-800/60 hover:text-slate-100 transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={`${link.href}-${link.label}`}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-sm font-medium py-2.5 px-3 rounded-lg transition-colors hover:bg-slate-800/60 hover:text-slate-100",
                  linkActive(link.href)
                    ? "text-slate-100 bg-slate-800/40"
                    : "text-slate-400"
                )}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    </header>
  )
}
