"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ExternalLink, ShoppingBag, Terminal } from "lucide-react"
import Button from "@/components/ui/Button"
import { cn } from "@/lib/utils"

const TERMINAL_URL = "https://terminal.hosaka.xyz"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
}

const stats = [
  { value: "3", label: "SKUs" },
  { value: "6–12h", label: "Runtime" },
  { value: "90d", label: "Warranty" },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(59,130,246,0.1),transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item} className="mb-6">
              <span className="inline-flex items-center gap-2 bg-slate-900/90 border border-slate-700/80 text-slate-300 text-[11px] font-mono uppercase tracking-[0.2em] rounded-md px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/90" />
                Field terminal · reference interface
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold tracking-tight text-slate-100 leading-[1.08] mb-5"
            >
              Portable compute.
              <br />
              <span className="text-blue-400">Documented.</span> Deployed.
            </motion.h1>

            <motion.p
              variants={item}
              className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed mb-3"
            >
              Preconfigured hardware and software stacks for field technical
              work. Same shell in the lab and at the edge—no assembly, no
              mystery configuration.
            </motion.p>

            <motion.p
              variants={item}
              className="text-sm text-slate-500 max-w-xl leading-relaxed mb-8 font-mono"
            >
              // Internal designation: Hosaka field kit. Public specs only.
              Everything else ships with the box.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10"
            >
              <Button
                href="#field-terminal"
                size="lg"
                variant="secondary"
                className={cn(
                  "w-full sm:w-auto justify-center text-base py-4 px-8",
                  "border-2 border-slate-500 hover:border-slate-400",
                  "bg-slate-900/50 hover:bg-slate-800/80 text-slate-100",
                  "shadow-lg shadow-slate-950/40"
                )}
              >
                <Terminal className="w-5 h-5 shrink-0" />
                Try the terminal
              </Button>
              <Button
                href="/products"
                size="lg"
                className={cn(
                  "w-full sm:w-auto justify-center text-base py-4 px-8",
                  "font-semibold shadow-xl shadow-blue-950/30"
                )}
              >
                <ShoppingBag className="w-5 h-5 shrink-0" />
                Buy
                <ArrowRight className="w-5 h-5 shrink-0" />
              </Button>
            </motion.div>

            <motion.div
              variants={item}
              className="grid grid-cols-3 gap-4 max-w-md pt-8 border-t border-slate-800/80"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-lg sm:text-xl font-bold text-slate-100 font-mono tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-600 mt-1 font-mono uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
            className="w-full"
            id="field-terminal"
          >
            <div className="rounded-xl border border-slate-700/80 bg-slate-900/40 shadow-2xl shadow-slate-950/80 overflow-hidden ring-1 ring-white/5">
              <div className="flex items-center gap-2 px-3 py-2.5 bg-slate-900/90 border-b border-slate-800">
                <div className="flex gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex-1 min-w-0 flex items-center justify-center px-2">
                  <span className="text-[11px] font-mono text-slate-500 truncate">
                    terminal.hosaka.xyz — live
                  </span>
                </div>
                <Link
                  href={TERMINAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 p-1.5 rounded-md text-slate-500 hover:text-slate-300 hover:bg-slate-800/80 transition-colors"
                  aria-label="Open field terminal in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
              <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] bg-slate-950">
                <iframe
                  src={TERMINAL_URL}
                  title="Hosaka field terminal"
                  className="absolute inset-0 w-full h-full border-0"
                  allow="clipboard-write"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                />
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-slate-600 font-mono">
              Embedded interface ·{" "}
              <Link
                href="/demo"
                className="text-slate-500 hover:text-blue-400 transition-colors"
              >
                fullscreen
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
