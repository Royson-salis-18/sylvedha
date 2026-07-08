"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Sparkles, Leaf, ShoppingBag, ArrowRight, FileText, X } from "lucide-react"

const grevaraImages = [
  { src: "/images/grevara/product-shelf.jpg",    caption: "Radish Purple Sango — packaged & ready for sale" },
  { src: "/images/grevara/growing-mature.jpg",   caption: "Mature microgreens inside NutriTech growth chamber" },
  { src: "/images/grevara/growing-dense.jpg",    caption: "Dense crop of red cabbage microgreens" },
  { src: "/images/grevara/growing-red-trays.jpg",caption: "Multiple trays at different growth stages" },
  { src: "/images/grevara/growing-pink.jpg",     caption: "Pink radish microgreens at early growth stage" },
]

const highlights = [
  { icon: Sparkles, label: "Already Selling", desc: "Products actively sold to customers in Mangaluru" },
  { icon: Leaf,     label: "Varieties",        desc: "Radish Purple Sango, Red Cabbage, and more" },
  { icon: ShoppingBag, label: "Ready to Order", desc: "Fresh microgreens grown in controlled environment" },
]

export function Grevara() {
  const [current, setCurrent] = useState(0)
  const total = grevaraImages.length
  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)
  const slide = grevaraImages[current]
  const [showCatalog, setShowCatalog] = useState(false)

  return (
    <section
      id="grevara"
      className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#1a0a22] text-white shadow-xl shadow-purple-900/5"
    >
      {/* Background glows — purple/gold theme for Grevara */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-purple-900/20 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-amber-900/10 blur-[120px] pointer-events-none" />

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-10">
          <span className="inline-flex items-center gap-2 rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
            <span className="size-1.5 rounded-full bg-amber-400 animate-pulse" />
            Live — Launched Sub-Brand
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-amber-400/20 to-transparent" />
        </div>

        {/* Header */}
        <div className="animate-on-scroll grid lg:grid-cols-2 gap-10 items-center mb-12">
          <div>
            {/* Logo */}
            <div className="size-28 mb-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 relative">
              <img
                src="/images/grevara/grevara-logo.png"
                alt="Grevara Microgreens"
                className="absolute inset-0 size-full object-cover scale-[1.3] transform-gpu"
              />
            </div>
            <h2 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
              <span className="text-amber-400 italic">Grevara</span>{" "}
              Microgreens
            </h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.15em] text-white/40">
              A Sylvedha LLP Sub-Brand
            </p>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Grevara is Sylvedha's microgreens brand — growing and delivering
              fresh, nutrient-dense microgreens in controlled environments.
              Products are already being sold locally in Mangaluru, with more
              varieties and wider distribution on the way.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-2xl border border-white/8 bg-white/[0.04] p-4"
                >
                  <div className="flex size-8 items-center justify-center rounded-xl bg-amber-400/15 mb-3">
                    <h.icon className="size-4 text-amber-400" />
                  </div>
                  <p className="text-sm font-semibold text-white">{h.label}</p>
                  <p className="mt-1 text-xs text-white/55 leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>

            {/* Catalog Button */}
            <div className="mt-8">
              <button
                onClick={() => setShowCatalog(true)}
                className="group inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-6 py-3.5 text-sm font-bold text-[#1a0a22] transition-colors hover:bg-amber-300"
              >
                <FileText className="size-4" />
                View Product Catalog
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Image carousel */}
          <div className="flex flex-col gap-3">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-purple-500/20 bg-[#120818]">
              <img
                src={slide.src}
                alt={slide.caption}
                className="size-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
                <p className="text-xs text-white/75">{slide.caption}</p>
              </div>
              {/* Counter */}
              <div className="absolute top-3 right-3 rounded-lg bg-black/50 px-2.5 py-1 text-xs font-medium text-white/60 backdrop-blur-sm">
                {current + 1} / {total}
              </div>
              {/* Prev / Next */}
              <button onClick={prev} aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 flex size-9 items-center justify-center rounded-xl bg-black/40 text-white backdrop-blur-sm hover:bg-amber-400/20 hover:text-amber-400 transition-all duration-200">
                <ChevronLeft className="size-5" />
              </button>
              <button onClick={next} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 flex size-9 items-center justify-center rounded-xl bg-black/40 text-white backdrop-blur-sm hover:bg-amber-400/20 hover:text-amber-400 transition-all duration-200">
                <ChevronRight className="size-5" />
              </button>
            </div>
            {/* Dots */}
            <div className="flex justify-center gap-2">
              {grevaraImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2 bg-amber-400" : "size-2 bg-white/20 hover:bg-white/40"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      {/* Catalog Modal */}
      {showCatalog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm bg-black/60">
          <div className="relative w-full max-w-5xl h-[85vh] bg-[#1a0a22] rounded-3xl border border-white/20 shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <img src="/images/grevara/grevara-logo.png" alt="Grevara" className="size-8 object-cover rounded-full" />
                <h3 className="font-semibold text-white">Grevara Product Catalog</h3>
              </div>
              <button
                onClick={() => setShowCatalog(false)}
                className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="flex-1 w-full bg-white/5 relative">
              <iframe 
                src="/documents/grevara-catalog.pdf" 
                className="absolute inset-0 size-full border-none"
                title="Grevara Product Catalog"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
