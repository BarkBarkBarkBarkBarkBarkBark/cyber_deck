import type { GalleryItem } from "@/data/galleryItems"
import GalleryCard from "@/components/gallery/GalleryCard"

export default function GalleryGrid({
  items,
  limit,
}: {
  items: GalleryItem[]
  limit?: number
}) {
  const visible = typeof limit === "number" ? items.slice(0, limit) : items

  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3">
      {visible.map((item) => (
        <GalleryCard key={item.id} item={item} />
      ))}
    </div>
  )
}
