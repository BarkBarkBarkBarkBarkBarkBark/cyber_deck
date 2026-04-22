export type GalleryCategory =
  | "product"
  | "field use"
  | "desk setup"
  | "community builds"
  | "inspiration"

export type GallerySourceType = "editorial" | "product" | "community" | "social"

export interface GalleryItem {
  id: string
  title: string
  caption: string
  image: string
  category: GalleryCategory
  sourceType: GallerySourceType
}

export const galleryItems: GalleryItem[] = [
  {
    id: "field-deck-briefcase",
    title: "Field deck deployment",
    caption:
      "Hosaka Console staged for diagnostics and remote shell work during on-site operations.",
    image: "/images/decks/cyber-deck.png",
    category: "field use",
    sourceType: "editorial",
  },
  {
    id: "operator-desk",
    title: "Operator desk setup",
    caption:
      "Docked workspace profile for sustained development, monitoring, and test workflows.",
    image: "/images/decks/ai-cyber-deck.png",
    category: "desk setup",
    sourceType: "product",
  },
  {
    id: "community-build-slot",
    title: "Community build spotlight",
    caption:
      "Reserved slot for customer and lab submissions featuring custom hardware and shell configs.",
    image: "/images/decks/cyber-deck.png",
    category: "community builds",
    sourceType: "community",
  },
  {
    id: "carry-profile",
    title: "Portable carry profile",
    caption:
      "Editorial framing for mobile workflows, battery runtime, and rapid setup in the field.",
    image: "/images/decks/ai-cyber-deck.png",
    category: "product",
    sourceType: "editorial",
  },
  {
    id: "signal-reference",
    title: "Inspiration board",
    caption:
      "Reserved visual references for future social campaigns and product storytelling.",
    image: "/images/decks/cyber-deck.png",
    category: "inspiration",
    sourceType: "social",
  },
]
