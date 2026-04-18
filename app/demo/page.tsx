import type { Metadata } from "next"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Terminal Demo",
  description:
    "Try the Hosaka Field Terminal — a simulated web desktop with a command-line interface, reading library, and task management.",
}

const TERMINAL_URL = "https://terminal.hosaka.xyz"

export default function DemoPage() {
  return (
    <div className="bg-slate-950 min-h-screen pt-16 flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 w-full">
        <p className="text-xs font-mono uppercase tracking-widest text-blue-400 mb-3">
          Live Demo
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight mb-2">
              Hosaka Field Terminal
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
              Every deck ships with the Hosaka shell environment. Try it here —
              type <code className="text-blue-400 font-mono">/help</code> to get
              started, <code className="text-blue-400 font-mono">/lore</code> for
              recovered fragments,{" "}
              <code className="text-blue-400 font-mono">/signal</code> when you
              want to hear the line is clean.
            </p>
          </div>
          <Link
            href={TERMINAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors whitespace-nowrap shrink-0"
          >
            Open in new tab
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      <div className="flex-1 px-4 sm:px-6 lg:px-8 pb-6 max-w-7xl mx-auto w-full min-h-0">
        <div className="w-full h-full min-h-[60vh] lg:min-h-[70vh] rounded-xl border border-slate-800 overflow-hidden bg-slate-900/40">
          <iframe
            src={TERMINAL_URL}
            title="Hosaka Field Terminal Demo"
            className="w-full h-full min-h-[60vh] lg:min-h-[70vh]"
            allow="clipboard-write"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          />
        </div>
      </div>
    </div>
  )
}
