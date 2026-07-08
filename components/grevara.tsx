"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Sparkles, Leaf, ShoppingBag, ArrowRight, FileText, X } from "lucide-react"
import Image from "next/image"

const grevaraImages = [
  { src: "/images/grevara/product-shelf.jpg", caption: "Radish Purple Sango — packaged & ready for sale" },
  { src: "/images/grevara/growing-mature.jpg", caption: "Mature Sango Radish inside NutriTech growth chamber" },
  { src: "/images/grevara/growing-dense.jpg", caption: "Dense crop of Sango Radish microgreens" },
  { src: "/images/grevara/plant-multiple-microgreens.jpg", caption: "Multiple microgreens varieties growing" },
  { src: "/images/grevara/growing-pink.jpg", caption: "Sango Radish microgreens at early growth stage" },
]

const highlights = [
  { icon: Sparkles, label: "Already Selling", desc: "Products actively sold to customers in Mangaluru" },
  { icon: Leaf, label: "Variety", desc: "Radish Purple Sango, and more" },
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
      className="group/gv relative overflow-hidden rounded-[2.5rem] border border-amber-400/40 bg-gradient-to-br from-[#1a0a22] to-[#0a0212] text-white shadow-[0_25px_50px_-12px_rgba(120,53,15,0.25)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_60px_-10px_rgba(251,191,36,0.35),0_0_100px_-20px_rgba(147,51,234,0.2)] hover:border-amber-400/60"
    >
        {/* Background glows — purple/gold theme for Grevara */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none mix-blend-screen transition-all duration-700 group-hover/gv:bg-purple-600/35 group-hover/gv:scale-110" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-amber-500/15 blur-[100px] pointer-events-none mix-blend-screen transition-all duration-700 group-hover/gv:bg-amber-500/30 group-hover/gv:scale-125" />

        {/* Top border accent */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-12 lg:py-14 sm:px-8">

          {/* Section label */}
          <div className="flex items-center gap-4 mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.15)] backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
              Live — Launched Sub-Brand
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-amber-400/30 to-transparent" />
          </div>

          {/* Header */}
          <div className="animate-on-scroll grid lg:grid-cols-2 gap-10 items-stretch mb-4">
            <div>
              {/* Logo */}
              <div className="size-28 mb-6 overflow-hidden rounded-full border border-amber-400/20 bg-gradient-to-br from-white/10 to-white/5 relative shadow-lg shadow-amber-900/10 backdrop-blur-md">
                <Image
                  src="/images/grevara/grevara-logo.png"
                  alt="Grevara Microgreens"
                  fill
                  sizes="112px"
                  className="object-cover scale-[1.3] transform-gpu transition-transform duration-700 hover:scale-[1.4]"
                />
              </div>
              <h2 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl tracking-tight">
                <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent italic drop-shadow-sm">Grevara</span>{" "}
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
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:bg-white/10 hover:border-amber-400/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-900/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 mb-4 shadow-inner border border-amber-400/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <h.icon className="size-5 text-amber-300" />
                    </div>
                    <p className="relative text-sm font-semibold text-white tracking-wide">{h.label}</p>
                    <p className="relative mt-2 text-xs text-white/60 leading-relaxed">{h.desc}</p>
                  </div>
                ))}
              </div>

              {/* Catalog Button */}
              <div className="mt-10">
                <button
                  onClick={() => setShowCatalog(true)}
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 px-8 py-4 text-sm font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(251,191,36,0.4)]"
                >
                  <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <FileText className="relative size-5" />
                  <span className="relative">View Product Catalog</span>
                  <ArrowRight className="relative size-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Column: Carousel + Benefits */}
            <div className="flex flex-col gap-6 h-full pt-4 lg:pt-0">
              {/* Image carousel */}
              <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-amber-500/20 bg-[#120818] shadow-2xl shadow-black/50">
                <Image
                  src={slide.src}
                  alt={slide.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transform transition-transform duration-300">
                  <p className="text-sm font-medium text-white/90 drop-shadow-md">{slide.caption}</p>
                </div>
                {/* Counter */}
                <div className="absolute top-4 right-4 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-md shadow-lg">
                  {current + 1} / {total}
                </div>
                {/* Prev / Next */}
                <button onClick={prev} aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md hover:bg-amber-400 hover:text-black hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-xl">
                  <ChevronLeft className="size-5" />
                </button>
                <button onClick={next} aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md hover:bg-amber-400 hover:text-black hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-xl">
                  <ChevronRight className="size-5" />
                </button>
              </div>
              {/* Dots */}
              <div className="flex justify-center gap-2">
                {grevaraImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2 bg-amber-400" : "size-2 bg-white/20 hover:bg-white/40"}`}
                  />
                ))}
              </div>


              {/* Key Benefits */}
              <div className="flex-1 rounded-3xl border border-amber-400/20 bg-gradient-to-br from-white/[0.03] to-transparent p-6 sm:p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/30 hover:shadow-xl hover:bg-white/[0.05]">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-amber-300 flex items-center gap-2">
                  <Leaf className="size-4" />
                  Benefits of Microgreens
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "40x More Nutrients", desc: "Up to 40 times more vitamins and minerals than their mature counterparts." },
                    { title: "Rich in Antioxidants", desc: "Packed with polyphenols and carotenoids that support cellular health." },
                    { title: "Harvest in 7–14 Days", desc: "From seed to plate in under two weeks — ultra-fresh, always." },
                    { title: "Zero Pesticides", desc: "Grown in controlled indoor environments with no chemicals needed." }
                  ].map((benefit) => (
                    <div key={benefit.title} className="flex gap-3">
                      <div className="mt-1 flex size-1.5 shrink-0 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                      <div>
                        <p className="text-sm font-semibold text-white/90">{benefit.title}</p>
                        <p className="mt-1 text-xs text-white/60 leading-relaxed">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom border accent */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />

        {/* Catalog Modal */}
        {showCatalog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm bg-black/60">
            <div className="relative w-full max-w-5xl h-[85vh] bg-[#110517] rounded-3xl border border-white/20 shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="size-10 overflow-hidden rounded-full border border-amber-400/30">
                    <Image src="/images/grevara/grevara-logo.png" alt="Grevara" fill sizes="40px" className="object-cover scale-[1.2]" />
                  </div>
                  <h3 className="font-semibold text-lg text-white">Grevara Product Catalog</h3>
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
