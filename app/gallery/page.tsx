import type { Metadata } from "next"
import Link from "next/link"
import GalleryGrid from "@/components/gallery/GalleryGrid"
import { galleryItems } from "@/data/galleryItems"

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Hosaka Console in the wild: product photography, field use stories, desk setups, and community builds.",
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-24">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-mono uppercase tracking-[0.2em] text-blue-400">
          In the wild
        </p>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
          Hosaka Console Gallery
        </h1>
        <p className="mb-10 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">
          A curated stream for product shots, field deployments, desk setups,
          and community builds. This scaffold is ready for editorial uploads,
          launch photography, and future social highlights.
        </p>

        <GalleryGrid items={galleryItems} />

        <p className="mt-12">
          <Link
            href="/"
            className="text-sm font-mono text-slate-500 transition-colors hover:text-slate-300"
          >
            ← Back to homepage
          </Link>
        </p>
      </div>
    </div>
  )
}
