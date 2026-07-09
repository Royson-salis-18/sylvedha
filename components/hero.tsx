"use client"

import Image from "next/image"
import { useRef, useCallback } from "react"
import { ArrowUpRight, Sprout, Leaf, FlaskConical, Cpu } from "lucide-react"

// Hook: 3D tilt effect driven by mouse position
function useTilt() {
  const ref = useRef<HTMLDivElement>(null)
  const raf = useRef(0)

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    cancelAnimationFrame(raf.current)
    raf.current = requestAnimationFrame(() => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width  - 0.5   // -0.5 → 0.5
      const y = (e.clientY - r.top)  / r.height - 0.5
      el.style.transform = `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.02)`
      el.style.transition = "transform 0.05s linear"
    })
  }, [])

  const onLeave = useCallback(() => {
    cancelAnimationFrame(raf.current)
    const el = ref.current
    if (!el) return
    el.style.transition = "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"
    el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)"
  }, [])

  return { ref, onMove, onLeave }
}

export function Hero() {
  const tilt1 = useTilt()
  const tilt2 = useTilt()
  const tilt3 = useTilt()
  const tilt4 = useTilt()

  return (
    <section className="w-full bg-[#011a17] h-dvh flex flex-col pt-[92px] pb-2 px-4 md:px-8 overflow-hidden">
      <style>{`
        @keyframes fadeInUp   { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeInLeft { from { opacity:0; transform:translateX(-28px); } to { opacity:1; transform:translateX(0); } }
        @keyframes fadeInRight{ from { opacity:0; transform:translateX(28px);  } to { opacity:1; transform:translateX(0); } }
        @keyframes bob        { 0%,100%{ transform:translateY(0) scale(1); } 50%{ transform:translateY(-8px) scale(1.04); } }
        @keyframes pulse-glow { 0%,100%{ box-shadow:0 0 18px rgba(199,255,0,0.45); } 50%{ box-shadow:0 0 38px rgba(199,255,0,0.9),0 0 65px rgba(199,255,0,0.25); } }
        @keyframes ring-glow  { 0%,100%{ filter:drop-shadow(0 0 6px rgba(212,175,55,0.5)); } 50%{ filter:drop-shadow(0 0 18px rgba(212,175,55,1)); } }
        @keyframes hero-pan   { 0%,100%{ object-position:48% 50%; } 50%{ object-position:52% 50%; } }
        @keyframes text-float { 0%,100%{ transform:translateY(0px); } 50%{ transform:translateY(-5px); } }
        @keyframes shimmer    { 0%{ background-position:-200% center; } 100%{ background-position:200% center; } }

        .afu  { animation: fadeInUp    0.85s cubic-bezier(0.16,1,0.3,1) forwards; }
        .afl  { animation: fadeInLeft  0.85s cubic-bezier(0.16,1,0.3,1) forwards; }
        .afr  { animation: fadeInRight 0.85s cubic-bezier(0.16,1,0.3,1) forwards; }
        .d1   { animation-delay:0ms;   }
        .d2   { animation-delay:150ms; }
        .d3   { animation-delay:300ms; }
        .d4   { animation-delay:450ms; }

        .animate-bob        { animation: bob       4s   ease-in-out infinite; }
        .animate-ring-glow  { animation: ring-glow 3s   ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2.5s ease-in-out infinite; }
        .animate-hero-pan   { animation: hero-pan  12s  ease-in-out infinite; }
        .animate-text-float { animation: text-float 5s  ease-in-out infinite; }

        .grevara-badge-ring {
          background: conic-gradient(
            from 135deg,
            #c8c8c8 0deg,#ffffff 45deg,#a0a0a0 90deg,
            #e8e8e8 135deg,#b0b0b0 180deg,#f5f5f5 225deg,
            #909090 270deg,#d8d8d8 315deg,#c8c8c8 360deg
          );
        }

        /* Shimmer overlay on hover for dark cards */
        .shimmer-hover::after {
          content:'';
          position:absolute;
          inset:0;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%);
          background-size: 200% 100%;
          opacity:0;
          pointer-events:none;
          transition: opacity 0.3s;
        }
        .shimmer-hover:hover::after { opacity:1; animation: shimmer 0.8s ease forwards; }
      `}</style>

      {/* Mobile View */}
      <div className="lg:hidden flex flex-col gap-4">
        <div className="bg-[#eee9df] rounded-[2rem] p-8">
          <p className="text-[#5b7d10] font-extrabold tracking-[0.25em] text-[12px] mb-1">SYLVEDHA</p>
          <p className="text-[#06100d]/60 text-[11px] tracking-wide mb-4">Innovating Technology in Harmony with Nature</p>
          <h1 className="font-heading text-4xl font-extrabold text-[#06100d] leading-tight">Building the Future of <span className="text-[#5b7d10] italic font-normal">Sustainable Innovation</span></h1>
          <p className="text-[14px] leading-[1.6] mt-4 text-[#06100d]/70">SYLVEDHA is a multidisciplinary technology company developing innovative solutions across Agriculture, Biotechnology, Renewable Energy, AI, Automation, and Sustainable Infrastructure.</p>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex flex-1 min-h-0 relative w-full max-w-[1400px] mx-auto font-sans">

        {/* SVG Stencil Definitions */}
        <svg width="0" height="0" className="absolute pointer-events-none">
          <defs>
            <clipPath id="text-clip" clipPathUnits="objectBoundingBox">
              <path d="M 0.0595,0 H 0.9405 A 0.0595,0.0964 0 0 1 1,0.0964 V 0.612 A 0.0595,0.0964 0 0 1 0.9405,0.708 H 0.6429 A 0.0595,0.0964 0 0 0 0.5833,0.805 V 0.9036 A 0.0595,0.0964 0 0 1 0.5238,1 H 0.0595 A 0.0595,0.0964 0 0 1 0,0.9036 V 0.0964 A 0.0595,0.0964 0 0 1 0.0595,0 Z" />
            </clipPath>
            <clipPath id="hero-clip" clipPathUnits="objectBoundingBox">
              <path d="M 0.3219,0 H 0.9598 A 0.0402,0.0964 0 0 1 1,0.0964 V 0.612 A 0.0402,0.0964 0 0 1 0.9598,0.708 H 0.7022 A 0.0402,0.0964 0 0 0 0.662,0.805 V 0.9036 A 0.0402,0.0964 0 0 1 0.6218,1 H 0.0402 A 0.0402,0.0964 0 0 1 0,0.9036 V 0.805 A 0.0402,0.0964 0 0 1 0.0402,0.708 H 0.2415 A 0.0402,0.0964 0 0 0 0.2817,0.612 V 0.0964 A 0.0402,0.0964 0 0 1 0.3219,0 Z" />
            </clipPath>
            <clipPath id="grevara-clip" clipPathUnits="objectBoundingBox">
              <path d="M 0.605,0 H 0.944 A 0.056,0.1575 0 0 1 1,0.1575 V 0.8425 A 0.056,0.1575 0 0 1 0.944,1 H 0.056 A 0.056,0.1575 0 0 1 0,0.8425 V 0.6333 A 0.056,0.1575 0 0 1 0.056,0.5 H 0.493 A 0.056,0.1575 0 0 0 0.549,0.3667 V 0.1575 A 0.056,0.1575 0 0 1 0.605,0 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* ── 1. TEXT CARD ── */}
        <div
          ref={tilt1.ref}
          onMouseMove={tilt1.onMove}
          onMouseLeave={tilt1.onLeave}
          className="absolute top-0 left-0 w-[48%] h-[calc(415/560*100%)] bg-[#eee9df] z-20 opacity-0 afl d1 flex flex-col pointer-events-auto will-change-transform"
          style={{ clipPath: 'url(#text-clip)', transformStyle: 'preserve-3d' }}
        >
          <div className="w-full h-[calc(290/415*100%)] px-[40px] xl:px-[50px] pt-[28px] xl:pt-[36px] pb-2 flex flex-col justify-start">
            <p className="text-[#5b7d10] font-black tracking-[0.25em] text-[10px] xl:text-[11px] mb-0.5 animate-text-float" style={{animationDelay:'0s'}}>SYLVEDHA</p>
            <p className="text-[#06100d]/50 font-medium tracking-wide text-[9px] xl:text-[10px] mb-3">Innovating Technology in Harmony with Nature</p>
            <h1 className="font-heading text-[32px] xl:text-[42px] leading-[0.95] font-extrabold text-[#06100d]">
              Building the Future of{" "}<span className="text-[#5b7d10] italic font-normal animate-text-float inline-block" style={{animationDelay:'1s'}}>Sustainable<br/>Innovation</span>
            </h1>
            <p className="text-[11px] xl:text-[12px] leading-[1.55] mt-3 text-[#06100d]/75 font-medium max-w-[95%]">
              SYLVEDHA is a multidisciplinary technology company developing innovative solutions across{" "}
              <span className="font-bold text-[#06100d]/90">Agriculture, Biotechnology, Renewable Energy, Artificial Intelligence, Automation,</span> and Sustainable Infrastructure.
            </p>
            <button className="mt-4 w-fit px-6 py-2 bg-[#c7ff00] text-[#06100d] rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-[#a6d900] transition-colors animate-pulse-glow">
              Explore Innovations
            </button>
          </div>
          <div className="w-[calc(100%*28/48)] h-[calc(125/415*100%)] px-[40px] xl:px-[50px] pt-0 flex flex-col justify-end pb-5">
            <div className="flex flex-wrap gap-1.5">
              {[
                { icon: Sprout, label: 'Agritech' },
                { icon: FlaskConical, label: 'Biotech' },
                { icon: Leaf, label: 'Ecology' },
                { icon: Cpu, label: 'AI' }
              ].map((tag, i) => (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#06100d]/5 text-[9px] font-bold uppercase tracking-widest text-[#06100d]/70 hover:bg-[#5b7d10]/15 hover:text-[#5b7d10] hover:scale-105 transition-all cursor-pointer"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <tag.icon className="size-2.5" /> {tag.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── 2. HERO IMAGE CARD ── */}
        <div
          ref={tilt2.ref}
          onMouseMove={tilt2.onMove}
          onMouseLeave={tilt2.onLeave}
          className="absolute top-0 left-[calc(28%+14px)] w-[calc(72%-14px)] h-[calc(415/560*100%)] bg-[#0a1f13] z-20 opacity-0 afr d2 will-change-transform shimmer-hover overflow-hidden"
          style={{ clipPath: 'url(#hero-clip)', transformStyle: 'preserve-3d' }}
        >
          <Image
            src="/images/hero-bg.png"
            alt="Hero"
            fill
            className="object-cover opacity-90 animate-hero-pan"
            priority
          />
          {/* Lighter gradient — just enough for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f13]/60 via-[#011a17]/10 to-transparent" />
        </div>

        {/* ── 3. GET IN TOUCH ── */}
        <div
          ref={tilt3.ref}
          onMouseMove={tilt3.onMove}
          onMouseLeave={tilt3.onLeave}
          className="absolute top-[calc(428/560*100%)] left-0 w-[48%] h-[calc(127/560*100%)] z-30 opacity-0 afu d3 will-change-transform"
        >
          <a
            href="/#contact"
            className="block w-full h-full rounded-[2.5rem] px-8 flex items-center justify-between group overflow-hidden bg-[#062118] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#c7ff00] to-[#91ba00] transition-transform duration-[750ms] ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:-translate-y-full origin-top" />
            {/* Left: text block */}
            <div className="relative z-10 flex flex-col">
              <p className="text-[#06100d]/60 text-[10px] font-bold uppercase tracking-[0.25em] mb-0.5 transition-colors duration-700 group-hover:text-[#06100d]/40">Let&apos;s Collaborate</p>
              <p className="font-heading font-bold text-[28px] xl:text-[32px] text-[#06100d] leading-[1.05] transition-colors duration-700 group-hover:text-[#06100d]">
                Get in <span className="italic font-light">Touch</span>
              </p>
            </div>
            {/* Right: arrow circle */}
            <div className="relative z-10 size-14 rounded-full border-2 border-[#06100d]/30 bg-[#06100d]/5 flex items-center justify-center transition-all duration-700 group-hover:border-[#06100d] group-hover:bg-[#06100d]/10 group-hover:rotate-45 shrink-0">
              <ArrowUpRight className="size-6 text-[#06100d]" />
            </div>
          </a>
        </div>

        {/* ── 4. GREVARA CARD ── */}
        <div
          ref={tilt4.ref}
          onMouseMove={tilt4.onMove}
          onMouseLeave={tilt4.onLeave}
          className="absolute top-[calc(300/560*100%)] left-[calc(48%+14px)] w-[calc(52%-14px)] h-[calc(254/560*100%)] bg-[#2a1126] z-20 opacity-0 afr d4 will-change-transform cursor-pointer group shimmer-hover"
          style={{ clipPath: 'url(#grevara-clip)', transformStyle: 'preserve-3d' }}
        >
          <Image
            src="/images/grevara/product-shelf.jpg"
            alt="Grevara Products"
            fill
            className="object-cover opacity-55 group-hover:opacity-75 transition-opacity duration-700 scale-105 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#120c12]/90 via-[#120c12]/60 to-[#120c12]/15" />

          {/* On Sale badge */}
          <div className="absolute top-4 right-6 px-3 py-1 bg-red-600 text-white text-[9px] font-black tracking-widest uppercase rounded-full shadow-[0_0_15px_rgba(220,38,38,0.6)] z-10 animate-pulse">
            On Sale
          </div>

          {/* Bottom content */}
          <div className="absolute bottom-5 left-6 right-6 flex items-center gap-5 z-10">
            <div className="shrink-0 size-[90px] rounded-full grevara-badge-ring p-[3px] animate-ring-glow animate-bob">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/images/grevara/grevara-badge.png"
                  alt="Grevara"
                  width={90}
                  height={90}
                  className="w-full h-full object-cover scale-[1.35] object-center"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#d4af37] font-bold tracking-[0.2em] text-[10px] uppercase">Grevara Premium</p>
              <p className="text-white font-heading font-bold text-xl leading-tight mt-1 opacity-90 transition-opacity group-hover:opacity-100">
                Buy Fresh Kits<br/><span className="italic font-light">Shop Now</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
