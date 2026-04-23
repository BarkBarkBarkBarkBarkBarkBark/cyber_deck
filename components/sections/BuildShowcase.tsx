"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowRight, ChevronDown, ExternalLink, ShoppingCart } from "lucide-react"
import { builds, sharedParts, type Build } from "@/data/builds"

const accent = {
  blue: {
    ring: "ring-blue-500/40",
    text: "text-blue-400",
    bg: "bg-blue-500",
    bgSoft: "bg-blue-500/10",
    border: "border-blue-500/40",
    glow: "shadow-blue-500/20",
    button:
      "bg-blue-500 hover:bg-blue-400 text-white border-blue-400 shadow-lg shadow-blue-500/30",
  },
  amber: {
    ring: "ring-amber-500/40",
    text: "text-amber-400",
    bg: "bg-amber-500",
    bgSoft: "bg-amber-500/10",
    border: "border-amber-500/40",
    glow: "shadow-amber-500/20",
    button:
      "bg-amber-500 hover:bg-amber-400 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/30",
  },
  rose: {
    ring: "ring-rose-500/40",
    text: "text-rose-400",
    bg: "bg-rose-500",
    bgSoft: "bg-rose-500/10",
    border: "border-rose-500/40",
    glow: "shadow-rose-500/20",
    button:
      "bg-rose-500 hover:bg-rose-400 text-white border-rose-400 shadow-lg shadow-rose-500/30",
  },
} as const

type AccentKey = keyof typeof accent

function BuildPanel({
  build,
  onPreorder,
}: {
  build: Build
  onPreorder: string
}) {
  const a = accent[build.accent as AccentKey]
  const partsCount = build.parts.length + sharedParts.length

  return (
    <div
      className={`overflow-hidden rounded-2xl border ${a.border} bg-slate-950/60 backdrop-blur`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        {/* Image column */}
        <div className="relative bg-slate-950">
          <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:h-full lg:min-h-[420px]">
            <Image
              src={build.image}
              alt={build.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-4 sm:p-6"
              priority
            />
          </div>
          <div
            className={`pointer-events-none absolute inset-0 ${a.bgSoft} mix-blend-screen opacity-40`}
          />
        </div>

        {/* Detail column */}
        <div className="p-6 sm:p-8 lg:p-10">
          <p
            className={`text-[11px] font-mono uppercase tracking-[0.22em] ${a.text}`}
          >
            {build.jpTagline}
          </p>
          <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-100">
            {build.name}
          </h3>
          <p className="mt-1 text-sm text-slate-400">{build.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            {build.description}
          </p>

          {/* Big conversion CTA — parts first */}
          <div className={`mt-6 rounded-xl border ${a.border} ${a.bgSoft} p-4`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
                  Start building · {partsCount} parts
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-100">
                  Order the bill of materials.
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Every part, affiliate-linked on Amazon. Scroll down, tap Buy, assemble.
                </p>
              </div>
              <a
                href="#parts"
                className={`shrink-0 inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-all ${a.button}`}
              >
                <ShoppingCart className="h-4 w-4" />
                Parts list
              </a>
            </div>
          </div>

          {/* Specs grid */}
          <div className="mt-6">
            <p className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
              Specs
            </p>
            <dl className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {build.specs.map((s) => (
                <div
                  key={s.label}
                  className="border-b border-slate-800/70 py-1.5"
                >
                  <dt className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    {s.label}
                  </dt>
                  <dd className="text-sm text-slate-200">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Parts list — inline, affiliate first */}
          <div id="parts" className="mt-8 scroll-mt-24">
            <div className="flex items-end justify-between">
              <div>
                <p
                  className={`text-[11px] font-mono uppercase tracking-widest ${a.text}`}
                >
                  Affiliate parts · core build
                </p>
                <h4 className="mt-1 text-lg font-semibold text-slate-100">
                  {build.parts.length} components
                </h4>
              </div>
            </div>
            <ul className="mt-3 divide-y divide-slate-800/80 rounded-lg border border-slate-800 bg-slate-900/40">
              {build.parts.map((p) => (
                <li
                  key={p.name}
                  className="flex items-center justify-between gap-3 px-3 py-2.5"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm text-slate-100">{p.name}</p>
                    {p.note ? (
                      <p className="truncate text-[11px] text-slate-500">
                        {p.note}
                      </p>
                    ) : null}
                  </div>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className={`inline-flex shrink-0 items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-semibold transition-all ${a.button}`}
                  >
                    Buy on Amazon
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 rounded-lg border border-slate-800 bg-slate-900/30 p-3">
              <p className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
                Shared tools & consumables · all builds
              </p>
              <ul className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {sharedParts.map((p) => (
                  <li
                    key={p.name}
                    className="flex items-center justify-between gap-2 rounded border border-slate-800 bg-slate-950/60 px-2.5 py-1.5"
                  >
                    <span className="truncate text-xs text-slate-300">
                      {p.name}
                    </span>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="shrink-0 text-[11px] font-semibold text-slate-300 underline decoration-slate-600 underline-offset-2 hover:text-white hover:decoration-slate-300"
                    >
                      Buy
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Assembled option — quieter, deliberately secondary */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-800 bg-slate-900/30 px-4 py-3">
            <p className="text-xs text-slate-400">
              Prefer it assembled? We also build these to order.
            </p>
            <Link
              href={onPreorder}
              className="inline-flex items-center gap-1 text-xs font-medium text-slate-300 transition-colors hover:text-white"
            >
              Preorder whole unit
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BuildShowcase() {
  const [active, setActive] = useState<number>(0)
  const current = builds[active]

  return (
    <section className="relative border-b border-slate-800/60">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(59,130,246,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-blue-400">
            Three builds · one afternoon
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100">
            Pick a deck. Order the parts. Build it.
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-400">
            Each Hosaka reference build is spec&apos;d down to the screw. Tap a
            model — every component is an affiliate link, so you can order the
            whole bill of materials in a single sitting.
          </p>
        </div>

        {/* Build selector cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {builds.map((b, idx) => {
            const isActive = idx === active
            const a = accent[b.accent as AccentKey]
            return (
              <button
                key={b.slug}
                onClick={() => setActive(idx)}
                aria-pressed={isActive}
                className={`group relative overflow-hidden rounded-2xl border bg-slate-900/30 text-left transition-all duration-300 ${
                  isActive
                    ? `${a.border} ring-1 ${a.ring} shadow-xl ${a.glow} scale-[1.01]`
                    : "border-slate-800 hover:border-slate-700"
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={b.image}
                    alt={b.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className={`object-cover transition-transform duration-500 ${
                      isActive ? "scale-105" : "group-hover:scale-105"
                    }`}
                  />
                  <div
                    className={`absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950 to-transparent`}
                  />
                  {isActive ? (
                    <span
                      className={`absolute top-3 left-3 rounded-full border ${a.border} ${a.bgSoft} px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest ${a.text}`}
                    >
                      Selected
                    </span>
                  ) : null}
                </div>
                <div className="flex items-start justify-between gap-2 p-4">
                  <div>
                    <p
                      className={`text-[10px] font-mono uppercase tracking-[0.22em] ${a.text}`}
                    >
                      {b.jpTagline}
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-slate-100">
                      {b.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-slate-400">{b.tagline}</p>
                  </div>
                  <ChevronDown
                    className={`mt-1 h-4 w-4 shrink-0 transition-transform duration-300 ${
                      isActive ? `rotate-180 ${a.text}` : "text-slate-500"
                    }`}
                  />
                </div>
              </button>
            )
          })}
        </div>

        {/* Expanded detail panel */}
        <div className="mt-8">
          <BuildPanel build={current} onPreorder="/preorder" />
        </div>

        {/* Compare everything */}
        <div className="mt-10 flex flex-col items-center gap-2">
          <Link
            href="/products/parts"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-sm font-medium text-slate-100 transition-colors hover:border-slate-500 hover:bg-slate-900"
          >
            Compare all builds in the parts matrix
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="text-xs text-slate-500">
            Links are Amazon affiliate — every order helps fund Hosaka.
          </p>
        </div>
      </div>
    </section>
  )
}
