"use client"

import { useState } from "react"
import {
  ChevronLeft, ChevronRight, Sparkles, Leaf, ShoppingBag,
  ArrowRight, FileText, X, Package, MessageSquare, HelpCircle, Download,
} from "lucide-react"
import Image from "next/image"

// ── Data ──────────────────────────────────────────────────────────────────────

const grevaraImages = [
  { src: "/images/grevara/product-shelf.jpg",              caption: "Radish Purple Sango — packaged & ready for sale" },
  { src: "/images/grevara/growing-mature.jpg",             caption: "Mature Sango Radish inside NutriTech growth chamber" },
  { src: "/images/grevara/growing-dense.jpg",              caption: "Dense crop of Sango Radish microgreens" },
  { src: "/images/grevara/plant-multiple-microgreens.jpg", caption: "Multiple microgreens varieties growing" },
  { src: "/images/grevara/growing-pink.jpg",               caption: "Sango Radish microgreens at early growth stage" },
]

const highlights = [
  { icon: Sparkles,    label: "Available & Upcoming",  desc: "Products actively sold and upcoming varieties" },
  { icon: Leaf,        label: "Variety",           desc: "Radish Purple Sango, and more" },
  { icon: ShoppingBag, label: "Request Availability",   desc: "Fresh microgreens grown in controlled environment" },
]

// Helper: dispatch a custom event that FloatingForms listens to
function openForm(type: "preorder" | "feedback" | "query") {
  window.dispatchEvent(new CustomEvent("open-grevara-form", { detail: { type } }))
}

// ── Action buttons ────────────────────────────────────────────────────────────

const ACTION_BTNS = [
  {
    type: "preorder"  as const,
    label: "Request Availability",
    sub: "Check stock & order details",
    icon: Package,
    gradient: "from-amber-300 to-amber-600",
    glow: "hover:shadow-[0_10px_40px_-10px_rgba(251,191,36,0.6)]",
    border: "border-amber-500/20 hover:border-amber-400/60",
    textColor: "text-amber-950",
  },
  {
    type: "feedback"  as const,
    label: "Give Feedback",
    sub: "Share your tasting experience with us",
    icon: MessageSquare,
    gradient: "from-purple-300 to-purple-600",
    glow: "hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.6)]",
    border: "border-purple-500/20 hover:border-purple-400/60",
    textColor: "text-purple-950",
  },
  {
    type: "query"     as const,
    label: "Ask a Question",
    sub: "Queries about pricing, delivery & more",
    icon: HelpCircle,
    gradient: "from-fuchsia-300 to-pink-600",
    glow: "hover:shadow-[0_10px_40px_-10px_rgba(232,121,249,0.6)]",
    border: "border-fuchsia-500/20 hover:border-fuchsia-400/60",
    textColor: "text-fuchsia-950",
  },
]

// ── Main section ──────────────────────────────────────────────────────────────

export function Grevara() {
  const [current, setCurrent] = useState(0)
  const total = grevaraImages.length
  const prev  = () => setCurrent((c) => (c - 1 + total) % total)
  const next  = () => setCurrent((c) => (c + 1) % total)
  const slide = grevaraImages[current]
  const [showCatalog, setShowCatalog] = useState(false)

  return (
    <section
      id="grevara"
      className="group/gv relative rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(120,53,15,0.25)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_80px_-15px_rgba(251,191,36,0.25),0_0_80px_-15px_rgba(147,51,234,0.2)] p-[1px] bg-gradient-to-br from-amber-400/60 via-purple-500/30 to-amber-600/60 overflow-hidden"
    >
      <div className="relative h-full w-full bg-gradient-to-br from-[#1a0a22] to-[#0a0212] rounded-[calc(2.5rem-1px)] overflow-hidden">
      
        {/* Background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-purple-500/15 blur-[120px] pointer-events-none mix-blend-screen transition-all duration-700 group-hover/gv:bg-purple-500/35 group-hover/gv:scale-110" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-amber-400/10 blur-[100px] pointer-events-none mix-blend-screen transition-all duration-700 group-hover/gv:bg-amber-400/25 group-hover/gv:scale-125" />

      <div className="relative mx-auto w-full max-w-none px-5 py-12 lg:py-14 sm:px-8">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.15)] backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
            Live — Launched Sub-Brand
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-amber-400/30 to-transparent" />
        </div>

        {/* Two-column grid */}
        <div className="animate-on-scroll grid lg:grid-cols-2 gap-10 items-stretch">

          {/* LEFT — brand info + action buttons */}
          <div className="flex flex-col h-full">
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

              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 drop-shadow-[0_0_15px_rgba(251,191,36,0.4)] block sm:inline">Grevara</span>{" "}
                <span className="text-white block sm:inline">Microgreens</span>
              </h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.15em] text-white/40">
                A Sylvedha LLP Sub-Brand
              </p>
              <p className="mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed text-white/70">
                Grevara is Sylvedha's microgreens brand — growing and delivering fresh,
                nutrient-dense microgreens in controlled environments.
                <span className="hidden sm:inline"> Products are already being sold locally in Mangaluru, with more
                varieties and wider distribution on the way.</span>
              </p>

              {/* Highlights */}
              <div className="mt-10 hidden sm:grid gap-4 sm:grid-cols-3">
                {highlights.map((h, i) => (
                  <div
                    key={h.label}
                    className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-amber-400/30 via-purple-500/10 to-amber-600/30 transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_30px_rgba(0,0,0,0.12)] animate-on-scroll" style={{transitionDelay: `${i*100}ms`}}
                  >
                    <div className="relative h-full w-full rounded-[calc(1rem-1px)] bg-[#0d0415]/95 backdrop-blur-xl border border-white/[0.08] p-5 overflow-hidden shadow-[inset_0_1px_5px_rgba(255,255,255,0.05)]">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-amber-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="relative flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 mb-4 shadow-[0_0_15px_rgba(251,191,36,0.3)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/30" />
                        <h.icon className="size-6 text-amber-950" />
                      </div>
                      <p className="relative text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-white tracking-wide">{h.label}</p>
                      <p className="relative mt-2 text-xs text-white/60 leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Catalog button & Storage Box */}
              <div className="mt-10 flex flex-col gap-10">
                <div>
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

                {/* Storage & Disclaimer */}
                <div className="animate-on-scroll flex flex-col gap-3" style={{transitionDelay: '300ms'}}>
                  <div className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-300 mb-2">Storage & Freshness</p>
                    <p className="text-xs text-white/70 leading-relaxed">
                      Keep refrigerated. Best quality is generally expected within seven days when properly refrigerated. Consume within the period stated on the product label and no later than the applicable use-by date.
                    </p>
                  </div>
                  <p className="text-[10px] text-white/40 leading-relaxed px-2">
                    Product photographs are representative. As a naturally grown agricultural product, colour, size, density and appearance may vary between batches.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — carousel + benefits */}
          <div className="flex flex-col gap-6 h-full pt-4 lg:pt-0">
            {/* Carousel */}
            <div className="group relative aspect-[4/3] w-full rounded-3xl p-[1px] shadow-[0_0_40px_-10px_rgba(251,191,36,0.3)] bg-gradient-to-br from-amber-400/40 via-purple-500/20 to-amber-600/40 animate-on-scroll" style={{transitionDelay: '100ms'}}>
              <div className="relative size-full overflow-hidden rounded-[calc(1.5rem-1px)] bg-[#120818]">
                <Image
                  src={slide.src}
                  alt={slide.caption}
                  fill
                  quality={60}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 720px"
                  className="object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 p-5 pointer-events-none">
                  <p className="text-sm font-medium text-white/90 drop-shadow-md">{slide.caption}</p>
                </div>
                <div className="absolute bottom-4 right-4 rounded-full border border-amber-400/30 bg-black/50 px-4 py-1.5 text-xs font-bold text-amber-200 backdrop-blur-md shadow-[0_0_15px_rgba(251,191,36,0.2)] pointer-events-none">
                  {current + 1} / {total}
                </div>
                <button onClick={prev} aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full border border-amber-400/30 bg-black/50 text-white backdrop-blur-md hover:bg-gradient-to-br hover:from-amber-400 hover:to-amber-600 hover:text-black hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-xl">
                  <ChevronLeft className="size-5" />
                </button>
                <button onClick={next} aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full border border-amber-400/30 bg-black/50 text-white backdrop-blur-md hover:bg-gradient-to-br hover:from-amber-400 hover:to-amber-600 hover:text-black hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-xl">
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2">
              {grevaraImages.map((_, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`rounded-full transition-all duration-300 flex items-center justify-center w-[48px] h-[48px] min-w-[48px] min-h-[48px] p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-300`}
                >
                  <span
                    className={
                      i === current
                        ? "block w-8 h-2 rounded-full bg-amber-400"
                        : "block w-4 h-4 rounded-full bg-white/20 hover:bg-white/40"
                    }
                  />
                </button>
              ))}
            </div>

            {/* Benefits */}
            <div className="relative flex-1 rounded-3xl p-[1px] bg-gradient-to-br from-purple-500/50 via-amber-500/30 to-purple-700/50 transition-all duration-500 hover:-translate-y-1 shadow-[0_8px_30px_rgba(0,0,0,0.3)] group/ben animate-on-scroll" style={{transitionDelay: '200ms'}}>
              <div className="relative h-full w-full rounded-[calc(1.5rem-1px)] bg-[#0d0415]/95 backdrop-blur-xl border border-white/[0.08] p-6 sm:p-8 overflow-hidden shadow-[inset_0_1px_5px_rgba(255,255,255,0.05)]">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover/ben:opacity-100 pointer-events-none" />
                
                <div className="relative z-10">
                  <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-amber-300 flex items-center gap-2">
                    <Leaf className="size-4 text-purple-400" />
                    Benefits of Microgreens
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { title: "Harvested at an Early Stage",  desc: "Young edible greens grown for fresh flavour, colour and texture." },
                      { title: "Vibrant Colour & Flavour", desc: "Fresh microgreens developed to add colour, texture and flavour to everyday meals." },
                      { title: "Harvest close to dispatch", desc: "Subject to crop readiness and availability." },
                      { title: "Controlled Cultivation",      desc: "Grown in a monitored indoor environment without the routine application of synthetic pesticides during cultivation." },
                      { title: "Culinary Versatility",        desc: "Perfect for garnishing, salads, sandwiches, and elevating home-cooked meals." },
                      { title: "Carefully Tended",            desc: "Monitored locally to ensure quality from seed to harvest." },
                    ].map((b) => (
                      <div key={b.title} className="flex gap-3">
                        <div className="mt-1 flex size-2 shrink-0 rounded-full bg-gradient-to-r from-purple-400 to-amber-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                        <div>
                          <p className="text-sm font-bold text-white/95">{b.title}</p>
                          <p className="mt-1 text-xs text-white/60 leading-relaxed hidden sm:block">{b.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 3 Action buttons (Get Involved) ── */}
        <div className="mt-12 animate-on-scroll">
          <div className="flex items-center gap-4 mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300/80">
              Get involved
            </p>
            <div className="flex-1 h-px bg-gradient-to-r from-amber-400/20 to-transparent" />
          </div>
          <div className="grid sm:grid-cols-3 gap-4 lg:gap-6">
            {ACTION_BTNS.map((btn, i) => (
              <button
                key={btn.type}
                onClick={() => openForm(btn.type)}
                className={`group relative rounded-3xl p-[1px] bg-gradient-to-br from-white/10 to-transparent transition-all duration-500 hover:-translate-y-1.5 shadow-lg animate-on-scroll text-left`} style={{transitionDelay: `${i*100}ms`}}
              >
                <div className="relative flex h-full w-full items-center gap-4 rounded-[calc(1.5rem-1px)] bg-[#0d0415]/95 backdrop-blur-xl border border-white/[0.08] p-5 sm:p-6 overflow-hidden shadow-[inset_0_1px_5px_rgba(255,255,255,0.05)]">
                  {/* Background Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${btn.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500`} />
                  
                  {/* Icon bubble */}
                  <div className={`relative flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${btn.gradient} shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
                    <btn.icon className={`size-6 ${btn.textColor}`} />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" />
                  </div>
                  
                  <div className="relative flex-1">
                    <p className="text-base font-bold text-white transition-colors duration-300 group-hover:text-amber-100">{btn.label}</p>
                    <p className="text-sm text-white/50 mt-1 leading-snug">{btn.sub}</p>
                  </div>
                  
                  <div className="relative flex size-8 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors duration-300">
                    <ArrowRight className={`size-4 text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300`} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Catalog modal */}
      {showCatalog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md bg-black/70">
          <div className="relative w-full max-w-none h-full max-h-[96vh] rounded-3xl shadow-[0_0_80px_-15px_rgba(251,191,36,0.3)] flex flex-col animate-in fade-in zoom-in duration-300 p-[1px] bg-gradient-to-br from-amber-400/50 via-purple-500/20 to-purple-600/50">
            <div className="relative flex flex-col size-full bg-[#110517] rounded-[calc(1.5rem-1px)] overflow-hidden">
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-gradient-to-r from-amber-400/5 to-purple-500/5">
                <h3 className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-purple-300 tracking-wide">Grevara Product Catalog</h3>
                <div className="flex items-center gap-3">
                  <a
                    href="/documents/grevara-catalog.pdf"
                    download="Grevara-Catalog.pdf"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-black bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-400 hover:to-amber-600 rounded-full transition-all shadow-[0_0_15px_rgba(251,191,36,0.3)] hover:scale-105"
                  >
                    <Download className="size-4" />
                    Download PDF
                  </a>
                  <button
                    onClick={() => setShowCatalog(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/90 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10"
                  >
                    <X className="size-4" />
                    Close
                  </button>
                </div>
              </div>
              <div className="flex-1 w-full bg-white/5 relative">
                <iframe src="/grevara-catalog.html" className="absolute inset-0 size-full border-none" title="Grevara Product Catalog" />
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </section>
  )
}

