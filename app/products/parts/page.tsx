import type { Metadata } from "next"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import RotatingCards from "@/components/RotatingCards"
import { builds, sharedParts, type Part } from "@/data/builds"

export const metadata: Metadata = {
  title: "Parts & Builds",
  description:
    "Single source of truth for every Hosaka cyberdeck build — Desktop, Portable, and Wearable. Full specs, parts lists, and purchase links.",
}

// Union all parts across all builds + shared, deduped by name.
function buildMatrix() {
  const byName = new Map<string, { part: Part; in: Record<string, boolean>; shared: boolean }>()
  for (const b of builds) {
    for (const p of b.parts) {
      const entry = byName.get(p.name) ?? { part: p, in: {}, shared: false }
      entry.in[b.slug] = true
      byName.set(p.name, entry)
    }
  }
  for (const p of sharedParts) {
    const entry = byName.get(p.name) ?? { part: p, in: {}, shared: true }
    entry.shared = true
    for (const b of builds) entry.in[b.slug] = true
    byName.set(p.name, entry)
  }
  return Array.from(byName.values()).sort((a, b) => a.part.name.localeCompare(b.part.name))
}

export default function PartsPage() {
  const matrix = buildMatrix()

  return (
    <div className="bg-slate-950 min-h-screen pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <p className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-3">
          Builds · Parts · Purchase
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 mb-4">
          Build it yourself.
        </h1>
        <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-slate-400">
          Three Hosaka reference builds — Desktop, Portable, Wearable. Every
          build below is the single source of truth: specs from the poster,
          parts from our curated Amazon list, and every link affiliate-tagged.
          Pick a build, order the parts, bring the deck to life.
        </p>

        {/* Interactive cards + detail */}
        <div className="mt-10">
          <RotatingCards />
        </div>

        {/* Comparison matrix */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-100">
            Parts matrix
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            Every component, every build, one table. A dot means the part is on
            the bill of materials for that build.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full min-w-[640px] text-sm">
              <thead className="bg-slate-900/60 text-left">
                <tr>
                  <th className="px-4 py-3 font-mono text-[11px] uppercase tracking-widest text-slate-400">
                    Component
                  </th>
                  {builds.map((b) => (
                    <th
                      key={b.slug}
                      className="px-4 py-3 font-mono text-[11px] uppercase tracking-widest text-slate-400 text-center"
                    >
                      {b.name.replace("Hosaka ", "")}
                    </th>
                  ))}
                  <th className="px-4 py-3 font-mono text-[11px] uppercase tracking-widest text-slate-400 text-center">
                    Buy
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {matrix.map(({ part, in: inBuilds, shared }) => (
                  <tr key={part.name} className="hover:bg-slate-900/30">
                    <td className="px-4 py-3 text-slate-200">
                      <div className="flex items-center gap-2">
                        <span>{part.name}</span>
                        {shared ? (
                          <span className="rounded border border-slate-700 bg-slate-900 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-slate-400">
                            shared
                          </span>
                        ) : null}
                      </div>
                      {part.note ? (
                        <p className="mt-0.5 text-[11px] text-slate-500">{part.note}</p>
                      ) : null}
                    </td>
                    {builds.map((b) => (
                      <td key={b.slug} className="px-4 py-3 text-center">
                        {inBuilds[b.slug] ? (
                          <span
                            className={`inline-block h-2.5 w-2.5 rounded-full ${
                              b.accent === "blue"
                                ? "bg-blue-400"
                                : b.accent === "amber"
                                  ? "bg-amber-400"
                                  : "bg-rose-400"
                            }`}
                            aria-label={`Included in ${b.name}`}
                          />
                        ) : (
                          <span className="text-slate-700">·</span>
                        )}
                      </td>
                    ))}
                    <td className="px-4 py-3 text-center">
                      <a
                        href={part.url}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="inline-flex items-center gap-1 rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white"
                      >
                        Amazon <ExternalLink className="h-3 w-3" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Total unique components: {matrix.length}. Links are Amazon affiliate.
          </p>
        </section>

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
