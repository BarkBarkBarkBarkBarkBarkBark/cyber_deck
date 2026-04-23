import Image from "next/image"
import Link from "next/link"
import { ArrowRight, PlayCircle, ShoppingCart, Terminal } from "lucide-react"
import Button from "@/components/ui/Button"
import BuildShowcase from "@/components/sections/BuildShowcase"
import { builds } from "@/data/builds"
import { loreFragments } from "@/data/loreFragments"

const whyBuild = [
  {
    title: "Source it, don't spec it",
    copy: "Every part is pre-vetted and linked. No forum archaeology. No dead SKUs. Tap, buy, build.",
  },
  {
    title: "Three proven reference designs",
    copy: "Desktop, portable, wearable. Each one spec'd from silicon to screws and documented like a field manual.",
  },
  {
    title: "Open hardware, open choice",
    copy: "Build it yourself with our parts list. Or preorder a Hosaka unit assembled to the same spec. Your call.",
  },
]

const whoItsFor = [
  {
    title: "Makers & tinkerers",
    copy: "You like a Sunday project that leaves solder smoke in the air and a real tool on the bench.",
  },
  {
    title: "Devs & operators",
    copy: "You want a portable Linux machine with known-good hardware and room for your stack.",
  },
  {
    title: "Researchers & hobbyists",
    copy: "RF, radio, security, AI-at-the-edge — all three builds run Ollama + OpenClaw locally.",
  },
]

export default function Hero() {
  const loreCards = loreFragments.slice(0, 3)

  return (
    <div className="bg-slate-950">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-slate-800/60 pt-20 sm:pt-24">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(59,130,246,0.14),transparent)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center rounded-md border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.18em] text-slate-300">
              <Terminal className="mr-2 h-3 w-3 text-blue-400" />
              HOSAKA CONSOLE · cyberdeck builds
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
              Build the cyberdeck.
              <br />
              <span className="text-blue-400">Part by part.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Three reference cyberdecks — Desktop, Portable, Wearable. Each
              one a complete bill of materials you can order from Amazon in a
              single sitting. Or skip the soldering iron and have us ship it
              assembled.
            </p>
            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button href="#builds" size="lg">
                <ShoppingCart className="h-4 w-4" />
                Start a build
              </Button>
              <Button href="/demo" size="lg" variant="secondary">
                <PlayCircle className="h-4 w-4" />
                Try the Console
              </Button>
              <Button href="/products/parts" variant="ghost" size="lg">
                Parts matrix
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-3 text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500">
              Free · runs in your browser · no install
            </p>

            {/* Quick-pick tiles — tiny image buttons above the fold */}
            <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
              {builds.map((b) => (
                <a
                  key={b.slug}
                  href="#builds"
                  className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/40 transition-all hover:border-slate-600"
                >
                  <div className="relative aspect-square w-full bg-slate-950">
                    <Image
                      src={b.thumbnail}
                      alt={b.name}
                      fill
                      sizes="(max-width: 640px) 33vw, 240px"
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-slate-950/90 to-transparent" />
                    <p className="absolute bottom-1.5 left-2 right-2 text-left text-[11px] sm:text-xs font-semibold text-slate-100">
                      {b.name.replace("Hosaka ", "")}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Build showcase (the whole site revolves around this) ── */}
      <div id="builds">
        <BuildShowcase />
      </div>

      {/* ── Why build ── */}
      <section className="border-b border-slate-800/60">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
            Why build your own Hosaka?
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {whyBuild.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-slate-800/80 bg-slate-900/35 p-5"
              >
                <h3 className="text-base font-semibold text-slate-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button href="#builds" size="md">
              <ShoppingCart className="h-4 w-4" />
              Order your parts
            </Button>
            <Button href="/products/parts" variant="secondary" size="md">
              See everything side-by-side
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section className="border-b border-slate-800/60">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
            Who builds a Hosaka?
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {whoItsFor.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-slate-800/80 bg-slate-900/35 p-5"
              >
                <h3 className="text-base font-semibold text-slate-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lore (compact) ── */}
      <section className="border-b border-slate-800/60">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-blue-400">
                Lore
              </p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
                Signal steady. No wrong way.
              </h2>
            </div>
            <Link
              href="/lore"
              className="hidden sm:inline-flex text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
            >
              All fragments →
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {loreCards.map((lines, index) => (
              <article
                key={`lore-${index}`}
                className="rounded-lg border border-slate-800 bg-slate-950/70 p-4"
              >
                <p className="mb-2 text-[10px] font-mono uppercase tracking-[0.18em] text-slate-600">
                  fragment {index + 1}
                </p>
                <p className="text-sm leading-relaxed text-slate-300">
                  {lines.filter(Boolean).slice(0, 3).join(" ")}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 sm:p-12 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_60%)]" />
            <div className="relative">
              <p className="text-xs font-mono uppercase tracking-[0.22em] text-blue-400">
                Your deck, your call
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
                Ready to build?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
                The parts are listed, the Buy buttons are hot. Or try the
                Console first — it runs right in your browser.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="#builds" size="lg">
                  <ShoppingCart className="h-4 w-4" />
                  Order the parts
                </Button>
                <Button href="/demo" variant="secondary" size="lg">
                  <PlayCircle className="h-4 w-4" />
                  Try the Console
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
