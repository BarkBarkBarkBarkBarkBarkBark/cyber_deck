import Image from "next/image"
import type { GalleryItem } from "@/data/galleryItems"

export default function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/40">
      <div className="relative aspect-[4/3] w-full bg-slate-950">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>
      <div className="space-y-3 px-4 py-4 sm:px-5">
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-[0.16em]">
          <span className="rounded-md border border-slate-700/80 bg-slate-950/80 px-2 py-1 text-slate-300">
            {item.category}
          </span>
          <span className="text-slate-500">{item.sourceType}</span>
        </div>
        <h3 className="text-base font-semibold text-slate-100">{item.title}</h3>
        <p className="text-sm leading-relaxed text-slate-400">{item.caption}</p>
      </div>
    </article>
  )
}
