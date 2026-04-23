"use client"

import Image from "next/image"
import { useState } from "react"
import { ExternalLink } from "lucide-react"
import { builds, sharedParts } from "@/data/builds"

const accentRing: Record<string, string> = {
  blue: "ring-blue-500/40 hover:ring-blue-400/70",
  amber: "ring-amber-500/40 hover:ring-amber-400/70",
  rose: "ring-rose-500/40 hover:ring-rose-400/70",
}

const accentText: Record<string, string> = {
  blue: "text-blue-400",
  amber: "text-amber-400",
  rose: "text-rose-400",
}

export default function RotatingCards() {
  const [active, setActive] = useState<number>(0)
  const build = builds[active]

  return (
    <div className="w-full flex flex-col items-center">
      <div className="grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-3">
        {builds.map((b, idx) => {
          const isActive = idx === active
          return (
            <button
              key={b.slug}
              onClick={() => setActive(idx)}
              className={`group relative overflow-hidden rounded-2xl border bg-slate-900/40 text-left transition-all duration-300 ring-1 ${
                isActive
                  ? `border-slate-600 scale-[1.01] ${accentRing[b.accent]}`
                  : "border-slate-800 ring-transparent hover:border-slate-700"
              }`}
            >
              <div className="relative aspect-square w-full overflow-hidden bg-slate-950">
                <Image
                  src={b.thumbnail}
                  alt={b.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className={`text-[10px] font-mono uppercase tracking-[0.2em] ${accentText[b.accent]}`}>
                  {b.jpTagline}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-slate-100">{b.name}</h3>
                <p className="mt-1 text-xs text-slate-400">{b.tagline}</p>
              </div>
            </button>
          )
        })}
      </div>

      {/* Active build detail */}
      <div className="mt-10 w-full max-w-6xl rounded-2xl border border-slate-800 bg-slate-900/30 p-6 sm:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,360px)_1fr]">
          <div>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
              <Image
                src={build.image}
                alt={`${build.name} — woodblock poster`}
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="object-cover"
                priority
              />
            </div>
            <div className="relative mt-3 aspect-square w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
              <Image
                src={build.thumbnail}
                alt={build.name}
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="object-contain p-3"
              />
            </div>
            <p className={`mt-4 text-[10px] font-mono uppercase tracking-[0.2em] ${accentText[build.accent]}`}>
              {build.jpTagline}
            </p>
            <h2 className="mt-1 text-2xl font-bold text-slate-100">{build.name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{build.description}</p>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500">Specs</h3>
            <dl className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              {build.specs.map((s) => (
                <div key={s.label} className="flex flex-col border-b border-slate-800/60 py-1.5">
                  <dt className="text-[10px] font-mono uppercase tracking-wider text-slate-500">{s.label}</dt>
                  <dd className="text-sm text-slate-200">{s.value}</dd>
                </div>
              ))}
            </dl>

            <h3 className="mt-8 text-xs font-mono uppercase tracking-widest text-slate-500">
              Parts list · {build.parts.length} items
            </h3>
            <ul className="mt-3 divide-y divide-slate-800/60 rounded-lg border border-slate-800 bg-slate-950/40">
              {build.parts.map((p) => (
                <li key={p.name} className="flex items-center justify-between gap-3 px-3 py-2.5">
                  <div className="min-w-0">
                    <p className="truncate text-sm text-slate-200">{p.name}</p>
                    {p.note ? <p className="text-[11px] text-slate-500">{p.note}</p> : null}
                  </div>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className={`inline-flex shrink-0 items-center gap-1 rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white`}
                  >
                    Buy <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500">
            Shared tools & consumables · {sharedParts.length} items
          </h3>
          <p className="mt-1 text-xs text-slate-500">Needed for all three builds.</p>
          <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {sharedParts.map((p) => (
              <li
                key={p.name}
                className="flex items-center justify-between gap-3 rounded-md border border-slate-800 bg-slate-950/40 px-3 py-2"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm text-slate-200">{p.name}</p>
                  {p.note ? <p className="text-[11px] text-slate-500">{p.note}</p> : null}
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex shrink-0 items-center gap-1 rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white"
                >
                  Buy <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-slate-500">
        Links are Amazon affiliate — thanks for supporting Hosaka.
      </p>
    </div>
  )
}
