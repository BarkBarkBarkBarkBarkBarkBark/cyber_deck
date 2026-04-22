import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Button from "@/components/ui/Button"
import GalleryGrid from "@/components/gallery/GalleryGrid"
import { galleryItems } from "@/data/galleryItems"
import { loreFragments } from "@/data/loreFragments"
import { getShopifyProductsIndexUrl } from "@/lib/shopify"

const cyberdeckExplainer = [
  {
    title: "Portable personal compute",
    description:
      "A cyberdeck is a compact computer you can carry and run anywhere without losing your normal workflow.",
  },
  {
    title: "Purpose-built stack",
    description:
      "Hardware and software are selected together so boot, networking, shell tooling, and power management work out of the box.",
  },
  {
    title: "Made for field conditions",
    description:
      "Use it on-site, in labs, at events, or in off-grid workflows where a full desk setup is not practical.",
  },
  {
    title: "Terminal + communications + experimentation",
    description:
      "It blends command-line workflows, communications tooling, deployment tasks, and practical experimentation in one device.",
  },
]

const hosakaHighlights = [
  "Preconfigured portable compute platform with documentation and setup guides.",
  "Terminal-first interface with local tooling and remote operations in the same workflow.",
  "Built for technical users, labs, edge environments, and field operators.",
  "Modular path for custom builds, accessories, and deployment-specific configurations.",
]

const benefits = [
  {
    title: "Portable command center",
    copy: "Bring a known-good Linux environment to site visits, deployments, and troubleshooting sessions.",
  },
  {
    title: "Works in the field",
    copy: "Battery-powered and purpose-built so you can keep working when desk infrastructure is not available.",
  },
  {
    title: "Tactile, focused computing",
    copy: "Keyboard-forward operation helps you stay in command workflows without fighting mobile UI constraints.",
  },
  {
    title: "Preconfigured and documented",
    copy: "Skip setup drift with imaged systems, repeatable defaults, and practical docs from day one.",
  },
  {
    title: "Local-first with remote reach",
    copy: "Run local tasks confidently while still reaching cloud, edge, and remote infrastructure when needed.",
  },
  {
    title: "5G-ready mobility",
    copy: "Pair with mobile uplinks to keep shipping, debugging, and collaborating from almost anywhere.",
  },
]

const integrations = [
  { name: "amazon", accent: "from-amber-500/25 to-orange-500/10" },
  { name: "reddit", accent: "from-orange-500/25 to-rose-500/10" },
  { name: "discord", accent: "from-indigo-500/25 to-blue-500/10" },
  { name: "TikTok", accent: "from-cyan-500/25 to-fuchsia-500/10" },
]

const audienceValue = [
  {
    title: "For the dev community",
    points: [
      "Run local Node.js services and tooling without cloud dependency.",
      "Spin up whichever MCP server your workflow needs for AI-assisted operations.",
      "Ship from one portable environment that mirrors your real terminal stack.",
    ],
  },
  {
    title: "For the cyber girlies",
    points: [
      "A cinematic, hacker-forward setup that still works for real projects.",
      "Write, ship, and stay connected from cafés, events, and travel days.",
      "Learn command-line confidence with a system built to be both stylish and practical.",
    ],
  },
]

const productGallery = [
  {
    src: "/images/decks/woodblock-dog.png",
    alt: "Hosaka Cyberdeck — woodblock illustration, boot screen",
  },
  {
    src: "/images/decks/internals_exploded.png",
    alt: "Hosaka Cyberdeck — internals and battery pack",
  },
  {
    src: "/images/decks/retrowave-photo.png",
    alt: "Hosaka Cyberdeck — real hardware, retrowave aesthetic",
  },
]

export default function Hero() {
  const shopUrl = getShopifyProductsIndexUrl()
  const primaryHref = shopUrl ?? "/specs"
  const primaryText = shopUrl ? "Shop Hosaka Console" : "Explore models"
  const loreCards = loreFragments.slice(0, 3)

  return (
    <div className="bg-slate-950">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-slate-800/60 pt-20 sm:pt-24">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(59,130,246,0.14),transparent)]" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 pb-12 pt-6 sm:px-6 sm:pb-16 md:gap-10 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8">
          <div>
            <p className="mb-4 inline-flex items-center rounded-md border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.15em] text-slate-300">
              HOSAKA Console · portable cyberdeck systems
            </p>
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
              Portable cyberdeck systems for field computing.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Hosaka Console is a preconfigured, Linux-first portable computer
              built for developers, operators, and researchers who need a
              dependable terminal workflow in labs, edge environments, and
              field deployments.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
              Know what it is, pick the model, and start working without
              spending a week on assembly and configuration.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={primaryHref} size="lg" className="w-full sm:w-auto">
                {primaryText}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/demo" size="lg" className="w-full sm:w-auto">
                Try Console
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="/specs"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                See specs
              </Button>
            </div>
          </div>

          {/* Woodblock poster — hero image */}
          <div className="overflow-hidden rounded-2xl border border-slate-800 shadow-2xl shadow-slate-950/80 ring-1 ring-white/10">
            <Image
              src="/images/decks/poster-woodblock.png"
              alt="Hosaka Cyberdeck — Japanese woodblock art poster"
              width={800}
              height={1000}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Product image strip ── */}
      <section className="border-b border-slate-800/60">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <p className="mb-6 text-center text-[11px] font-mono uppercase tracking-[0.2em] text-slate-600">
            Hardware · in the field
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {productGallery.map(({ src, alt }) => (
              <div
                key={src}
                className="overflow-hidden rounded-xl border border-slate-800/70 bg-slate-900/30 shadow-lg shadow-slate-950/50 ring-1 ring-white/5"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What is a cyberdeck? ── */}
      <section className="border-b border-slate-800/60">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
            What is a cyberdeck?
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">
            A cyberdeck is a portable, purpose-built computer for technical work
            outside a fixed desk. It prioritizes real workflows over novelty.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2">
            {cyberdeckExplainer.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-slate-800/80 bg-slate-900/35 p-4 sm:p-5"
              >
                <h3 className="text-base font-semibold text-slate-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── What is Hosaka / Lore ── */}
      <section className="border-b border-slate-800/60">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/35 p-5 sm:p-6">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
                What is Hosaka Console?
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                {hosakaHighlights.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="mt-1 text-blue-400">•</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-slate-800/80 bg-slate-900/35 p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-slate-100">
                Signal notes
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Brand voice, now readable: lore is presented as content cards so
                it does not collapse into clipped terminal panes on mobile.
              </p>
              <div className="mt-4 grid grid-cols-1 gap-3">
                {loreCards.map((lines, index) => (
                  <article
                    key={`lore-${index}`}
                    className="rounded-lg border border-slate-800 bg-slate-950/70 px-3 py-3"
                  >
                    <p className="mb-2 text-[10px] font-mono uppercase tracking-[0.18em] text-slate-600">
                      fragment {index + 1}
                    </p>
                    <p className="text-sm leading-relaxed text-slate-300">
                      {lines.filter(Boolean).slice(0, 2).join(" ")}
                    </p>
                  </article>
                ))}
              </div>
              <Link
                href="/lore"
                className="mt-4 inline-flex text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
              >
                Read all lore fragments →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why people choose it ── */}
      <section className="border-b border-slate-800/60">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
            Why people choose it
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-xl border border-slate-800/80 bg-slate-900/35 p-4 sm:p-5"
              >
                <h3 className="text-base font-semibold text-slate-100">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {benefit.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Integrations ── */}
      <section className="border-b border-slate-800/60">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-blue-400">
            Integrations
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
            Big-stack compatibility, right out of the deck
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Connect to the platforms your community already uses and keep your
            workflow moving.
          </p>
          <div className="mt-6 overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/35 p-4 sm:p-5">
            <div className="flex w-max items-center gap-4 pr-4">
              {[...integrations, ...integrations].map((integration, cardIndex) => (
                <div
                  key={cardIndex}
                  className={`flex h-24 min-w-[15rem] items-center justify-center rounded-xl border border-slate-700/80 bg-gradient-to-br ${integration.accent} px-6`}
                >
                  <p className="text-3xl font-semibold uppercase tracking-[0.1em] text-slate-100 sm:text-4xl">
                    {integration.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Audience value ── */}
      <section className="border-b border-slate-800/60">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
            Who it&apos;s for
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {audienceValue.map((audience) => (
              <div
                key={audience.title}
                className="rounded-xl border border-slate-800/80 bg-slate-900/35 p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold text-slate-100">
                  {audience.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {audience.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm leading-relaxed text-slate-400">
                      <span className="mt-1 text-blue-400 shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
            In the wild
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Community builds, field deployments, and desk setups.
          </p>
          <div className="mt-6">
            <GalleryGrid items={galleryItems} limit={3} />
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/gallery"
              className="inline-flex text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
            >
              View full gallery →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
