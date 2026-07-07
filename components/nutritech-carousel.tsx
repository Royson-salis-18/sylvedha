"use client"

import { useState, useCallback, useEffect } from "react"
import { ChevronLeft, ChevronRight, ImageIcon, VideoIcon } from "lucide-react"

// ─────────────────────────────────────────────────────────────────────────────
// EDIT THIS ARRAY to add your real photos and video.
// For images: { type: "image", src: "/images/nutritech/your-photo.webp", caption: "..." }
// For video:  { type: "video", src: "/images/nutritech/your-video.mp4",  caption: "..." }
// ─────────────────────────────────────────────────────────────────────────────
export const nutriTechMedia: Array<
  | { type: "image"; src: string; caption: string }
  | { type: "video"; src: string; caption: string }
> = [
  // ── Replace / add your real files below ──────────────────────────────────
  { type: "image", src: "", caption: "Sensor node — close-up view" },
  { type: "image", src: "", caption: "Experimental plant growth setup" },
  { type: "image", src: "", caption: "IoT board and wiring" },
  { type: "video", src: "", caption: "Live demo — experimental setup walkthrough" },
  // ─────────────────────────────────────────────────────────────────────────
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
              controls
              className="size-full object-cover"
            />
          ) : (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.caption}
              className="size-full object-cover transition-opacity duration-300"
            />
          )
        ) : (
          <Placeholder icon={slide.type} caption={slide.caption} />
        )}

        {/* Caption overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-5 py-4">
          <p className="text-sm text-white/80">{slide.caption}</p>
        </div>

        {/* Counter */}
        <div className="absolute top-3 right-3 rounded-lg bg-black/40 px-2.5 py-1 text-xs font-medium text-white/70 backdrop-blur-sm">
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

      {/* Dot indicators */}
      {total > 1 && (
        <div className="flex items-center justify-center gap-2">
          {nutriTechMedia.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2 bg-[#BFF202]"
                  : "size-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      )}

      {/* Thumbnail strip */}
      {total > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
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
                  <img src={item.src} alt={item.caption} className="size-full object-cover" />
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
