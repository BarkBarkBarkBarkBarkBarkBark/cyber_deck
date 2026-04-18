import type { Metadata } from "next"
import Link from "next/link"
import { loreFragments } from "@/data/loreFragments"

export const metadata: Metadata = {
  title: "Lore",
  description:
    "Recovered fragments from the Hosaka field terminal — breadcrumbs, not spoilers.",
}

export default function LorePage() {
  return (
    <div className="bg-slate-950 min-h-screen pt-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-xs font-mono uppercase tracking-widest text-violet-400/90 mb-3">
          Recovered fragments
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight mb-4">
          Lore
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed mb-12">
          Same voice as the{" "}
          <Link href="/demo" className="text-blue-400 hover:text-blue-300">
            live terminal
          </Link>{" "}
          <code className="text-slate-500 font-mono text-xs">/lore</code>{" "}
          command — collected here so you can read without booting the deck.
        </p>

        <div className="space-y-12">
          {loreFragments.map((lines, idx) => (
            <article
              key={idx}
              className="rounded-xl border border-slate-800/80 bg-slate-900/25 px-5 py-6"
            >
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-600 mb-4">
                fragment {idx + 1} / {loreFragments.length}
              </p>
              <div className="space-y-1 text-sm text-slate-400 font-mono leading-relaxed">
                {lines.map((line, i) => (
                  <p key={i}>{line || "\u00a0"}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-14 text-center">
          <Link
            href="/"
            className="text-sm text-slate-500 hover:text-slate-300 font-mono"
          >
            ← Back
          </Link>
        </p>
      </div>
    </div>
  )
}
