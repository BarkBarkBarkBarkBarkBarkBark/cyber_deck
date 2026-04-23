// Single source of truth for Hosaka DIY cyberdeck builds.
// Each build = poster model. Specs come from the woodblock posters;
// parts come from the curated Amazon affiliate list (componants.md).
// Edit HERE, then /products/parts and components/RotatingCards.tsx pick it up.

export interface Part {
  name: string
  url: string
  // Optional note (e.g. "7\" variant recommended")
  note?: string
}

export interface BuildSpec {
  label: string
  value: string
}

export interface Build {
  slug: "desktop" | "portable" | "wearable"
  name: string
  tagline: string
  jpTagline: string
  description: string
  /** Square, clean product render. Used in selector cards and quick-pick tiles. */
  thumbnail: string
  /** Wide woodblock poster. Used in the expanded detail panel and hero art. */
  image: string
  accent: string // tailwind color token for highlights
  /** Direct Shopify product page URL for the assembled unit. */
  shopUrl: string
  /** USD price of the assembled unit on Shopify. */
  price: number
  specs: BuildSpec[]
  parts: Part[]
}

// Parts shared across every build (tools + consumables + inspiration).
export const sharedParts: Part[] = [
  { name: "Museum Putty", url: "https://amzn.to/3OZaL8h", note: "Internal part mounting" },
  { name: "GeekPi 220PCS Screw Nut Assortment", url: "https://amzn.to/4emZc5l" },
  { name: "Exacto Knife Set with Mat", url: "https://amzn.to/4eEwPzn" },
  { name: "Balsa Wood Sheets", url: "https://amzn.to/4cI3vFC", note: "Mockup / chassis prototyping" },
  { name: "Cutter", url: "https://amzn.to/4cEgN63" },
  { name: "Digital Calipers", url: "https://amzn.to/4tshc2L" },
  { name: "Neuromancer (Gibson)", url: "https://amzn.to/4uoGhvJ", note: "Required reading" },
]

export const builds: Build[] = [
  {
    slug: "desktop",
    name: "Hosaka Desktop",
    tagline: "Unfold. Connect. Create.",
    jpTagline: "卓上型サイバーデッキ",
    description:
      "A tabletop cyberdeck with detachable keyboard. NPU-accelerated compute, 7\" IPS, full I/O. Built around the Orange Pi 4 Pro for Ollama + OpenClaw workloads.",
    thumbnail: "/images/desktop_console_thumbnail.png",
    image: "/images/cyberdeck1.png",
    accent: "blue",
    shopUrl: "https://shop.hosaka.xyz/products/desktop_console",
    price: 500,
    specs: [
      { label: "Compute", value: "Orange Pi 4 Pro (8GB RAM, NPU 3 TOPS)" },
      { label: "Display", value: "7\" IPS · 1024×600" },
      { label: "Storage", value: "128GB SATA SSD via NVMe bridge" },
      { label: "Input", value: "Detachable compact mechanical keyboard" },
      { label: "Power", value: "10,000mAh Li-Po + Adafruit PowerBoost 1000" },
      { label: "I/O", value: "USB-C, HDMI, USB 3.0 ×2, USB-C data, 1GbE, 3.5mm, microSD" },
      { label: "Extras", value: "RTL-SDR receiver, webcam + mic" },
      { label: "Software", value: "Ollama + OpenClaw optimized" },
    ],
    parts: [
      { name: "Orange Pi 4 Pro 8GB", url: "https://amzn.to/4cHNYpy" },
      { name: "NVMe Reader Writer", url: "https://amzn.to/4cXO3GK" },
      { name: "128GB SATA SSD", url: "https://amzn.to/3Qu0YHK" },
      { name: "5\" Touch Screen", url: "https://amzn.to/3QWkahm", note: "Swap in 7\" IPS for poster spec" },
      { name: "Compact Mechanical Keyboard", url: "https://amzn.to/3OU1gHu" },
      { name: "Adafruit PowerBoost 1000", url: "https://amzn.to/41OW1fe" },
      { name: "10,000mAh 3.7V Li-Po Battery", url: "https://amzn.to/4w3xHnN" },
      { name: "RTL-SDR Receiver (Radio)", url: "https://amzn.to/3QmUN8s" },
      { name: "Webcam with Speaker and Microphone", url: "https://amzn.to/48iNNj7" },
      { name: "USB-C to USB Micro", url: "https://amzn.to/4cHnQLg" },
      { name: "Camera Cable 15-Pin FFC Ribbon", url: "https://amzn.to/4cEJtvB" },
    ],
  },
  {
    slug: "portable",
    name: "Hosaka Portable",
    tagline: "Open, connect, create.",
    jpTagline: "ホサカ デスクトップ",
    description:
      "Clamshell portable. Pomera-silhouette chassis, agent-ready stack (PicoClaw, Sandbox, MCP). For mobile dev work and field writing.",
    thumbnail: "/images/field_terminal_thumbnail.png",
    image: "/images/cyberdeck2.png",
    accent: "amber",
    shopUrl: "https://shop.hosaka.xyz/products/field_terminal?variant=48071253065969",
    price: 500,
    specs: [
      { label: "Compute", value: "Orange Pi 4 Pro (8GB RAM) — Raspberry Pi 3B compatible" },
      { label: "Display", value: "7\" IPS · 1024×600" },
      { label: "Input", value: "Integrated mini keyboard + trackpad area" },
      { label: "Power", value: "10,000mAh Li-Po + PowerBoost 1000" },
      { label: "Agents", value: "PicoClaw · Sandbox · MCP Server" },
      { label: "I/O", value: "USB-C, Micro HDMI, USB 3.0, GPIO" },
      { label: "Software", value: "Ollama + OpenClaw optimized" },
    ],
    parts: [
      { name: "Orange Pi 4 Pro 8GB", url: "https://amzn.to/4cHNYpy" },
      { name: "Mini Keyboard", url: "https://amzn.to/3OBhR2I" },
      { name: "5\" Touch Screen", url: "https://amzn.to/3QWkahm", note: "Swap in 7\" IPS for poster spec" },
      { name: "Adafruit PowerBoost 1000", url: "https://amzn.to/41OW1fe" },
      { name: "10,000mAh 3.7V Li-Po Battery", url: "https://amzn.to/4w3xHnN" },
      { name: "USB-C to USB Micro", url: "https://amzn.to/3OyWjno" },
      { name: "Camera Cable 15-Pin FFC Ribbon", url: "https://amzn.to/4cEJtvB" },
      { name: "Webcam with Speaker and Microphone", url: "https://amzn.to/48iNNj7", note: "Mic + speaker donor" },
    ],
  },
  {
    slug: "wearable",
    name: "Hosaka Wearable",
    tagline: "Wear. Dock. Work.",
    jpTagline: "ウェアラブル・サイバーデッキ",
    description:
      "Wrist-mounted modular deck. Detach the core and dock it as a standalone terminal. White leather harness, 3.5\" display, dock + keyboard module.",
    thumbnail: "/images/wearable_thumbnail.png",
    image: "/images/cyberdeck3.png",
    accent: "rose",
    shopUrl: "https://shop.hosaka.xyz/products/wearable_cyber_deck?variant=48058999374065",
    price: 300,
    specs: [
      { label: "Compute", value: "Orange Pi Zero 3W (4GB) · Raspberry Pi 4 / Zero W compatible" },
      { label: "Display", value: "3.5\" IPS LCD · 640×480" },
      { label: "Form factor", value: "90×82mm detachable core + harness" },
      { label: "Input", value: "Mini keyboard dock module" },
      { label: "Power", value: "5,000mAh battery pack" },
      { label: "I/O", value: "USB-C, Micro HDMI, USB 3.0, GPIO" },
      { label: "Modes", value: "Wear · Dock · Standalone" },
    ],
    parts: [
      { name: "Orange Pi Zero 3W 4GB", url: "https://amzn.to/4cHNYpy" },
      { name: "Mini Keyboard", url: "https://amzn.to/3OBhR2I" },
      { name: "5\" Touch Screen", url: "https://amzn.to/3QWkahm", note: "Swap in 3.5\" 640×480 panel for poster spec" },
      { name: "Battery Pack", url: "https://amzn.to/48dUvH8" },
      { name: "USB-C to USB Micro", url: "https://amzn.to/3OyWjno" },
      { name: "Camera Cable 15-Pin FFC Ribbon", url: "https://amzn.to/4cEJtvB" },
    ],
  },
]

export function getBuildBySlug(slug: string): Build | undefined {
  return builds.find((b) => b.slug === slug)
}
