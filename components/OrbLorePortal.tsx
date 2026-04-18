"use client"

import { useCallback, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Sparkles, X } from "lucide-react"
import { pickRandomLore } from "@/data/loreFragments"
import { cn } from "@/lib/utils"

export default function OrbLorePortal({
  className,
  buttonClassName,
}: {
  className?: string
  buttonClassName?: string
}) {
  const [open, setOpen] = useState(false)
  const [lines, setLines] = useState<string[]>([])

  const draw = useCallback(() => {
    setLines(pickRandomLore())
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <div className={cn(className)}>
      <button
        type="button"
        onClick={() => {
          draw()
          setOpen(true)
        }}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200",
          "border border-violet-500/40 bg-violet-950/40 text-violet-200 hover:bg-violet-900/50 hover:border-violet-400/50",
          "shadow-lg shadow-violet-950/30",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
          "w-full sm:w-auto text-sm py-3 px-5 font-mono uppercase tracking-wider",
          buttonClassName
        )}
      >
        <Sparkles className="w-4 h-4 shrink-0 text-amber-400/90" />
        Random lore
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label="Lore fragment"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              className="relative max-w-lg w-full rounded-2xl border border-slate-700/80 bg-slate-900/95 shadow-2xl shadow-violet-950/40 p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 p-2 rounded-lg text-slate-500 hover:text-slate-200 hover:bg-slate-800/80 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex flex-col items-center mb-6">
                <motion.div
                  className="relative w-20 h-20 sm:w-24 sm:h-24"
                  animate={{
                    scale: [1, 1.06, 1],
                    opacity: [0.85, 1, 0.85],
                  }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/50 via-fuchsia-500/30 to-amber-400/40 blur-md" />
                  <div className="absolute inset-2 rounded-full border border-violet-400/30 bg-slate-950/60 shadow-[inset_0_0_24px_rgba(139,92,246,0.25)]" />
                  <div className="absolute inset-0 rounded-full ring-1 ring-amber-500/20" />
                </motion.div>
                <p className="mt-3 text-[10px] font-mono uppercase tracking-[0.25em] text-slate-500">
                  the orb attends
                </p>
              </div>

              <div className="space-y-1 text-sm text-slate-400 font-mono leading-relaxed max-h-[45vh] overflow-y-auto pr-1">
                {lines.map((line, i) => (
                  <p key={i} className={line === "" ? "h-2" : ""}>
                    {line || "\u00a0"}
                  </p>
                ))}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-2 sm:justify-between sm:items-center">
                <button
                  type="button"
                  onClick={draw}
                  className="text-xs font-mono text-violet-400 hover:text-violet-300 transition-colors uppercase tracking-wider"
                >
                  Another fragment
                </button>
                <Link
                  href="/lore"
                  className="text-xs font-mono text-slate-500 hover:text-blue-400 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  All fragments →
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
