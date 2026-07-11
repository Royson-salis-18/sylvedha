"use client"

import { useState, useCallback, useEffect } from "react"
import { ChevronLeft, ChevronRight, ImageIcon, VideoIcon } from "lucide-react"
import Image from "next/image"

// ─────────────────────────────────────────────────────────────────────────────
// EDIT THIS ARRAY to add your real photos and video.
// For images: { type: "image", src: "/images/nutritech/your-photo.webp", caption: "..." }
// For video:  { type: "video", src: "/images/nutritech/your-video.mp4",  caption: "..." }
// ─────────────────────────────────────────────────────────────────────────────
export const nutriTechMedia: Array<
  | { type: "image"; src: string; caption: string }
  | { type: "video"; src: string; caption: string }
> = [
  // ── Slide 1: Hero — full growth chamber open ──────────────────────────────
  { type: "image", src: "/images/nutritech/setup-main.jpg",        caption: "NutriTech Experimentation Setup — controlled environment growth chamber" },
  // ── Slide 2: Video walkthrough ────────────────────────────────────────────
  { type: "video", src: "/images/nutritech/nutritech_setup_video.mp4", caption: "NutriTech experimental setup — video walkthrough" },
  // ── Slide 3: Growth chamber at night ────────────────────────────────────
  { type: "image", src: "/images/nutritech/setup-night-inside.jpg",caption: "Inside the chamber — multi-crop trays under LED lighting" },
  // ── Slide 5–6: Plant growth ───────────────────────────────────────────────
  { type: "image", src: "/images/nutritech/plant-inside-trays.jpg",caption: "Multiple crop trays growing inside the controlled environment" },
  { type: "image", src: "/images/nutritech/plant-microgreens.jpg", caption: "Dense microgreens — grown under automated light & irrigation" },
  { type: "image", src: "/images/nutritech/plant-tomatoes.jpg",    caption: "Tomatoes grown inside NutriTech's drip-irrigated controlled setup" },
  // ── Slide 7–10: A-RIS sensor module ──────────────────────────────────────
  { type: "image", src: "/images/nutritech/aris-topdown.jpg",      caption: "A-RIS sensor module — IoT board with multi-sensor array (top view)" },
  { type: "image", src: "/images/nutritech/aris-exhibit-setup.jpg",caption: "A-RIS prototype at exhibition — complete sensor and control setup" },
  { type: "image", src: "/images/nutritech/aris-exhibit-demo.jpg", caption: "NutriTech demo at tech exhibition — A-RIS system in action" },
  { type: "image", src: "/images/nutritech/aris-solar.jpg",        caption: "A-RIS with solar panel integration — renewable-powered sensing" },
]

function Placeholder({ icon, caption }: { icon: "image" | "video"; caption: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-white/[0.03] text-white/30">
      {icon === "video" ? (
        <VideoIcon className="size-12 text-[#BFF202]/30" strokeWidth={1.2} />
      ) : (
        <ImageIcon className="size-12 text-[#BFF202]/30" strokeWidth={1.2} />
      )}
      <p className="text-sm text-white/40 italic">{caption}</p>
      <p className="text-xs text-white/20">
        {icon === "video" ? "Video coming soon" : "Photo coming soon"}
      </p>
    </div>
  )
}

export function NutriTechCarousel() {
  const [current, setCurrent] = useState(0)
  const total = nutriTechMedia.length

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + total) % total),
    [total]
  )
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total])

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [prev, next])

  const slide = nutriTechMedia[current]

  return (
    <div className="flex flex-col gap-4">
      {/* Main slide */}
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-[#01201D]">
        {slide.src ? (
          slide.type === "video" ? (
            <video
              key={slide.src}
              src={slide.src}
              autoPlay
              loop
              playsInline
              controls
              className="size-full object-cover"
            />
          ) : (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.caption}
              fill
              quality={60}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 900px"
              className="object-cover transition-opacity duration-300"
            />
          )
        ) : (
          <Placeholder icon={slide.type} caption={slide.caption} />
        )}

        {/* Caption overlay */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent px-5 py-4 pointer-events-none">
          <p className="text-sm font-medium text-white drop-shadow-md">{slide.caption}</p>
        </div>

        {/* Counter */}
        <div className="absolute bottom-3 right-3 rounded-lg bg-black/40 px-2.5 py-1 text-xs font-medium text-white/70 backdrop-blur-sm pointer-events-none">
          {current + 1} / {total}
        </div>

        {/* Prev / Next */}
        {total > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 flex size-9 items-center justify-center rounded-xl bg-black/40 text-white backdrop-blur-sm transition-all duration-200 hover:bg-[#BFF202]/20 hover:text-[#BFF202]"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 flex size-9 items-center justify-center rounded-xl bg-black/40 text-white backdrop-blur-sm transition-all duration-200 hover:bg-[#BFF202]/20 hover:text-[#BFF202]"
            >
              <ChevronRight className="size-5" />
            </button>
          </>
        )}
      </div>

      {/* Dot indicators removed for cleaner look, thumbnail strip handles navigation */}

      {/* Thumbnail strip */}
      {total > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {nutriTechMedia.map((item, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}: ${item.caption}`}
              className={`relative flex-shrink-0 h-16 w-24 overflow-hidden rounded-xl border-2 transition-all duration-200 ${
                i === current
                  ? "border-[#BFF202] opacity-100"
                  : "border-white/10 opacity-50 hover:opacity-80"
              }`}
            >
              {item.src ? (
                item.type === "video" ? (
                  <div className="flex size-full items-center justify-center bg-[#01201D]">
                    <VideoIcon className="size-6 text-[#BFF202]/60" />
                  </div>
                ) : (
                  <Image src={item.src} alt={item.caption} fill quality={45} sizes="96px" className="object-cover" />
                )
              ) : (
                <div className="flex size-full items-center justify-center bg-white/[0.04]">
                  {item.type === "video" ? (
                    <VideoIcon className="size-5 text-white/20" />
                  ) : (
                    <ImageIcon className="size-5 text-white/20" />
                  )}
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
