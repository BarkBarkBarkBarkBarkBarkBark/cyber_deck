import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShoppingCart } from "lucide-react"
import { builds } from "@/data/builds"

export const metadata: Metadata = {
  title: "Specs",
  description:
    "Full technical specifications for the three Hosaka reference cyberdecks — Desktop, Portable, and Wearable.",
}

const accentText: Record<string, string> = {
  blue: "text-blue-400",
  amber: "text-amber-400",
  rose: "text-rose-400",
}

const accentDot: Record<string, string> = {
  blue: "bg-blue-500",
  amber: "bg-amber-500",
  rose: "bg-rose-500",
}

export default function SpecsPage() {
  return (
    <div className="bg-slate-950 min-h-screen pt-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-3">
          Specifications
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 mb-4">
          Three builds, fully spec&apos;d.
        </h1>
        <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-slate-400 mb-12">
          The hardware list behind every Hosaka reference deck. Clean technical
          summary — for the full affiliate parts list and comparison matrix,
          see{" "}
          <Link
            href="/products/parts"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            /products/parts
          </Link>
          .
        </p>

        <div className="space-y-12">
          {builds.map((b) => (
            <section
              key={b.slug}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/30"
            >
              <div className="px-6 py-5 border-b border-slate-800 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                <div>
                  <p
                    className={`text-[11px] font-mono uppercase tracking-[0.22em] ${accentText[b.accent]}`}
                  >
                    {b.jpTagline}
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-slate-100">
                    {b.name}
                  </h2>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    {b.tagline}
                  </p>
                </div>
                <Link
                  href={`/products/parts#${b.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  <ShoppingCart className="h-3.5 w-3.5" />
                  Parts list
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
              <div className="px-6 py-6 grid lg:grid-cols-[minmax(0,320px)_1fr] gap-8 items-start">
                <figure className="lg:sticky lg:top-28 space-y-3">
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                    <Image
                      src={b.thumbnail}
                      alt={b.name}
                      fill
                      className="object-contain p-3"
                      sizes="(max-width: 1024px) 100vw, 320px"
                      priority={b.slug === "desktop"}
                    />
                  </div>
                  <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden border border-slate-800/60 bg-slate-950 opacity-80">
                    <Image
                      src={b.image}
                      alt={`${b.name} poster`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 320px"
                    />
                  </div>
                </figure>
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">
                    Specs
                  </h3>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {b.specs.map((s) => (
                      <div
                        key={s.label}
                        className="border-b border-slate-800/60 py-1.5"
                      >
                        <dt className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                          {s.label}
                        </dt>
                        <dd className="text-sm text-slate-200">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
                    <span
                      className={`inline-block h-2 w-2 rounded-full ${accentDot[b.accent]}`}
                    />
                    <span>
                      {b.parts.length} core parts · see parts list for affiliate
                      links
                    </span>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/products/parts"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-medium text-slate-100 transition-colors hover:border-slate-500"
          >
            <ShoppingCart className="h-4 w-4" />
            Full parts matrix
          </Link>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
          >
            Try the Console
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
