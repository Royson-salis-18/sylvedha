"use client"

import Image from "next/image"
import { useRef, useCallback } from "react"
import { ArrowUpRight, Sprout, Leaf, FlaskConical, Cpu } from "lucide-react"

function useTilt() {
  const ref = useRef<HTMLDivElement>(null)
  const raf = useRef(0)

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    cancelAnimationFrame(raf.current)
    raf.current = requestAnimationFrame(() => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      el.style.transform = `perspective(1400px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.015)`
      el.style.transition = "none"
    })
  }, [])

  const onLeave = useCallback(() => {
    cancelAnimationFrame(raf.current)
    const el = ref.current
    if (el) {
      el.style.transition = "transform 0.6s cubic-bezier(0.34,1.56,0.64,1)"
      el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)"
    }
  }, [])

  return { ref, onMove, onLeave }
}

export function Hero() {
  const tilt = useTilt()

  return (
    <section className="w-full bg-[#011a17] min-h-svh lg:h-dvh flex flex-col pt-[88px] sm:pt-[92px] lg:pt-[100px] pb-5 px-3 sm:px-4 md:px-8 overflow-hidden">
      <style>{`
        @keyframes fadeInUp    { from { opacity:0; transform:translateY(28px); }  to { opacity:1; transform:translateY(0); } }
        @keyframes fadeInLeft  { from { opacity:0; transform:translateX(-28px); } to { opacity:1; transform:translateX(0); } }
        @keyframes fadeInRight { from { opacity:0; transform:translateX(28px);  } to { opacity:1; transform:translateX(0); } }
        @keyframes bob         { 0%,100%{ transform:translateY(0) scale(1); } 50%{ transform:translateY(-8px) scale(1.04); } }
        @keyframes pulse-glow  { 0%,100%{ box-shadow:0 0 18px rgba(199,255,0,0.45); } 50%{ box-shadow:0 0 38px rgba(199,255,0,0.9),0 0 65px rgba(199,255,0,0.25); } }
        @keyframes ring-glow   { 0%,100%{ filter:drop-shadow(0 0 6px rgba(212,175,55,0.5)); } 50%{ filter:drop-shadow(0 0 18px rgba(212,175,55,1)); } }
        @keyframes text-float  { 0%,100%{ transform:translateY(0px); } 50%{ transform:translateY(-5px); } }

        .afu { animation: fadeInUp    0.85s cubic-bezier(0.16,1,0.3,1) forwards; }
        .afl { animation: fadeInLeft  0.85s cubic-bezier(0.16,1,0.3,1) forwards; }
        .afr { animation: fadeInRight 0.85s cubic-bezier(0.16,1,0.3,1) forwards; }
        .d1  { animation-delay:0ms;   }
        .d2  { animation-delay:150ms; }
        .d3  { animation-delay:300ms; }
        .d4  { animation-delay:450ms; }

        .animate-bob        { animation: bob       4s   ease-in-out infinite; }
        .animate-ring-glow  { animation: ring-glow 3s   ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2.5s ease-in-out infinite; }
        .animate-text-float { animation: text-float 5s  ease-in-out infinite; }

        .grevara-badge-ring {
          background: conic-gradient(
            from 135deg,
            #c8c8c8 0deg,#ffffff 45deg,#a0a0a0 90deg,
            #e8e8e8 135deg,#b0b0b0 180deg,#f5f5f5 225deg,
            #909090 270deg,#d8d8d8 315deg,#c8c8c8 360deg
          );
        }
      `}</style>

      {/* ── MOBILE ── */}
      <div className="lg:hidden flex flex-col gap-3.5 pb-2">
        <div className="bg-[#eee9df] rounded-[1.75rem] p-5 sm:p-8 flex flex-col justify-between shrink-0 animate-fade-up shadow-[0_18px_45px_rgba(0,0,0,0.18)]" style={{animationDelay:'0ms'}}>
          <div>
            <p className="text-[#123b00] font-black tracking-[0.22em] text-[11px] mb-1">SYLVEDHA</p>
            <p className="text-[#06100d]/70 font-semibold tracking-wide text-[11px] mb-3.5">Innovating Technology in Harmony with Nature</p>
            <h1 className="font-heading text-[clamp(2rem,9vw,2.45rem)] sm:text-[38px] leading-[0.98] font-extrabold text-[#06100d]">
              Building the Future of <span className="text-[#123b00] italic font-normal">Sustainable Innovation</span>
            </h1>
            <p className="text-[13px] sm:text-sm leading-[1.55] mt-3.5 text-[#06100d]/80 font-medium">
              SYLVEDHA is a multidisciplinary technology company developing innovative solutions across{" "}
              <span className="font-bold text-[#06100d]">Agriculture, Biotechnology, Renewable Energy, Artificial Intelligence, Automation,</span> and Sustainable Infrastructure.
            </p>
          </div>
          <a href="#focus" className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#c7ff00] px-6 py-3 text-center text-[11px] font-bold uppercase tracking-widest text-[#06100d] transition-colors hover:bg-[#a6d900] sm:w-fit">
            Explore Innovations
          </a>
        </div>
        <div className="relative h-[210px] sm:h-[280px] rounded-[1.75rem] bg-[#0a1f13] overflow-hidden shrink-0 shadow-[0_18px_45px_rgba(0,0,0,0.22)] animate-fade-up" style={{animationDelay:'100ms'}}>
          <Image src="/images/hero-bg.png" alt="Hero" fill className="object-cover opacity-90" priority quality={65} sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f13]/60 via-[#011a17]/10 to-transparent" />
        </div>
        <a href="/#contact" className="relative min-h-[104px] rounded-[1.75rem] px-5 py-5 flex items-center justify-between group overflow-hidden bg-[#BFF202] text-[#01312D] shrink-0 shadow-[0_18px_45px_rgba(0,0,0,0.18)] animate-fade-up" style={{animationDelay:'200ms'}}>
          <div className="absolute inset-0 z-0 rounded-[1.75rem] bg-[#01312D] transform translate-y-full group-hover:translate-y-0 transition-transform duration-[420ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]" />
          <div className="relative z-10 flex flex-col">
            <p className="text-[#01312D] text-[9px] font-bold uppercase tracking-[0.25em] mb-1 transition-colors group-hover:text-white">Let&apos;s Collaborate</p>
            <p className="font-heading font-bold text-[24px] text-[#01312D] leading-[1.05] transition-colors group-hover:text-white">Get in <span className="italic font-light">Touch</span></p>
          </div>
          <div className="relative z-10 size-12 rounded-full bg-[#01312D] flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors duration-300">
            <ArrowUpRight className="size-5 text-white" />
          </div>
        </a>
        <a href="/#grevara" className="relative h-[178px] rounded-[1.75rem] bg-[#2a1126] overflow-hidden shrink-0 animate-fade-up cursor-pointer group border border-amber-400/20 hover:border-amber-400/60 transition-all duration-500 shadow-[0_18px_45px_rgba(0,0,0,0.2)]" style={{animationDelay:'300ms'}}>
          <Image src="/images/grevara/product-shelf.jpg" alt="Grevara Products" fill quality={60} sizes="100vw" className="object-cover opacity-55 group-hover:opacity-70 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#120c12]/90 via-[#120c12]/60 to-[#120c12]/15" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 z-10">
            <div className="shrink-0 size-16 rounded-full grevara-badge-ring p-[2px]">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image src="/images/grevara/grevara-badge.png" alt="Grevara" width={70} height={70} className="w-full h-full object-cover scale-[1.35] object-center" />
              </div>
            </div>
            <div>
              <p className="text-[#d4af37] font-bold tracking-[0.18em] text-[9px] uppercase">Grevara Microgreens</p>
              <p className="text-white font-heading font-bold text-base sm:text-lg leading-tight mt-0.5">Small greens. Serious flavour.<br/><span className="italic font-light text-amber-200">Try it fresh →</span></p>
            </div>
          </div>
        </a>
      </div>

      {/* ── DESKTOP: precise interlocking bento with perfect 1% gaps ── */}
      <div
        ref={tilt.ref}
        onMouseMove={tilt.onMove}
        onMouseLeave={tilt.onLeave}
        className="hidden lg:block flex-1 min-h-0 relative w-full max-w-[1400px] mx-auto will-change-transform"
      >
        {/* SVG clip definitions for custom L-shapes */}
        <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden>
          <defs>
            <clipPath id="text-clip" clipPathUnits="objectBoundingBox">
              <path d="M 0.04,0 
                       H 0.96 A 0.04,0.06 0 0 1 1,0.06 
                       V 0.54 A 0.04,0.06 0 0 1 0.96,0.60 
                       H 0.7038 A 0.04,0.06 0 0 0 0.6638,0.66 
                       V 0.94 A 0.04,0.06 0 0 1 0.6238,1 
                       H 0.04 A 0.04,0.06 0 0 1 0,0.94 
                       V 0.06 A 0.04,0.06 0 0 1 0.04,0 Z" />
            </clipPath>

            <clipPath id="hero-clip" clipPathUnits="objectBoundingBox">
              <path d="M 0.3761,0 
                       H 0.96 A 0.04,0.06 0 0 1 1,0.06 
                       V 0.94 A 0.04,0.06 0 0 1 0.96,1 
                       H 0.04 A 0.04,0.06 0 0 1 0,0.94 
                       V 0.6808 A 0.04,0.06 0 0 1 0.04,0.6208 
                       H 0.2961 A 0.04,0.06 0 0 0 0.3361,0.5608 
                       V 0.06 A 0.04,0.06 0 0 1 0.3761,0 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* ── 1. TEXT CARD (Top-Left, L-shape) ── */}
        <div
          className="absolute top-0 left-0 w-[59.5%] h-[72%] bg-[#eee9df] z-20 opacity-0 afl d1 flex flex-col pointer-events-auto overflow-hidden"
          style={{ clipPath: 'url(#text-clip)' }}
        >
          <div className="w-full flex-1 px-10 xl:px-12 pt-8 xl:pt-10 pb-2 flex flex-col justify-start relative z-10">
            <p className="text-[#123b00] font-black tracking-[0.25em] text-[12px] xl:text-[14px] mb-0.5 animate-text-float" style={{animationDelay:'0s'}}>SYLVEDHA</p>
            <p className="text-[#06100d]/70 font-semibold tracking-wide text-[11px] xl:text-[12px] mb-3">Innovating Technology in Harmony with Nature</p>
            <h1 className="font-heading text-[clamp(1.9rem,2.7vw,2.9rem)] leading-[0.95] font-extrabold text-[#06100d]">
              Building the Future of{" "}
              <span className="text-[#123b00] italic font-normal animate-text-float inline-block" style={{animationDelay:'1s'}}>
                Sustainable<br/>Innovation
              </span>
            </h1>
            <p className="text-[13px] xl:text-[14px] leading-[1.55] mt-3 text-[#06100d]/80 font-medium max-w-[85%]">
              SYLVEDHA is a multidisciplinary technology company developing innovative solutions across{" "}
              <span className="font-bold text-[#06100d]">Agriculture, Biotechnology, Renewable Energy, Artificial Intelligence, Automation,</span> and Sustainable Infrastructure.
            </p>
            <button className="mt-4 w-fit px-7 py-2.5 bg-[#c7ff00] text-[#06100d] rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-[#a6d900] transition-colors animate-pulse-glow">
              Explore Innovations
            </button>
          </div>
          {/* Tag row sits in the lower-left quadrant */}
          <div className="w-[66%] px-10 xl:px-12 pb-8 flex flex-col justify-end relative z-10">
            <div className="flex flex-wrap gap-2">
              {[
                { icon: Sprout, label: 'Agritech' },
                { icon: FlaskConical, label: 'Biotech' },
                { icon: Leaf, label: 'Ecology' },
                { icon: Cpu, label: 'AI' },
              ].map((tag, i) => (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#06100d]/10 text-[10px] font-bold uppercase tracking-widest text-[#06100d]/90 hover:bg-[#123b00]/20 hover:text-[#123b00] hover:scale-105 transition-all cursor-pointer"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <tag.icon className="size-3" /> {tag.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── 2. HERO IMAGE CARD (Top-Right, L-shape) ── */}
        <div
          className="absolute top-0 left-[40.5%] w-[59.5%] h-[72%] bg-[#0a1f13] z-10 opacity-0 afr d2 overflow-hidden"
          style={{ clipPath: 'url(#hero-clip)' }}
        >
          <Image
            src="/images/hero-bg.png"
            alt="Sylvedha sustainable innovation"
            fill
            className="object-cover opacity-90"
            priority
            quality={70}
            sizes="(max-width: 1024px) 80vw, 1000px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f13]/50 via-transparent to-transparent" />
        </div>

        {/* ── 3. GET IN TOUCH (Bottom-Left) ── */}
        <a
          href="/#contact"
          className="absolute left-0 top-[73.5%] w-[39.5%] h-[26.5%] rounded-[2.5rem] px-8 flex items-center justify-between group overflow-hidden bg-[#BFF202] text-[#01312D] z-30 opacity-0 afu d3 relative transition-colors duration-300 shadow-[0_18px_45px_rgba(0,0,0,0.15)]"
        >
          <div
            className="absolute inset-0 z-0 rounded-[2.5rem] bg-[#01312D] transform translate-y-full group-hover:translate-y-0 transition-transform duration-[420ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
            style={{ willChange: 'transform' }}
          />
          <div className="relative z-10 flex flex-col">
            <p className="text-[#01312D]/90 text-[10px] font-bold uppercase tracking-[0.25em] mb-0.5 transition-colors duration-300 group-hover:text-white">Let&apos;s Collaborate</p>
            <p className="font-heading font-bold text-[clamp(1.5rem,2.2vw,2.1rem)] text-[#01312D] leading-[1.05] transition-colors duration-300 group-hover:text-white">
              Get in <span className="italic font-light">Touch</span>
            </p>
          </div>
          <div className="relative z-10 size-14 rounded-full bg-[#01312D] flex items-center justify-center transition-all duration-300 shrink-0 group-hover:bg-white/10">
            <ArrowUpRight className="size-6 text-white transition-colors duration-300" />
          </div>
        </a>

        {/* ── 4. GREVARA CARD (Bottom-Right) ── */}
        <a
          href="/#grevara"
          className="absolute left-[40.5%] top-[73.5%] w-[59.5%] h-[26.5%] rounded-[2.5rem] bg-[#2a1126] z-20 opacity-0 afr d4 cursor-pointer group overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.2)] border border-amber-400/20 hover:border-amber-400/50 transition-all duration-500"
        >
          <Image
            src="/images/grevara/product-shelf.jpg"
            alt="Grevara Products"
            fill
            className="object-cover opacity-55 group-hover:opacity-75 transition-opacity duration-700"
            fetchPriority="low"
            sizes="(max-width: 1024px) 60vw, 700px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#120c12]/90 via-[#120c12]/60 to-[#120c12]/15" />
          <div className="absolute bottom-5 left-6 right-6 flex items-center gap-5 z-10">
            <div className="shrink-0 size-[80px] xl:size-[90px] rounded-full grevara-badge-ring p-[3px] animate-ring-glow animate-bob">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image src="/images/grevara/grevara-badge.png" alt="Grevara" width={90} height={90} className="w-full h-full object-cover scale-[1.35] object-center" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#d4af37] font-bold tracking-[0.2em] text-[10px] uppercase">Grevara Microgreens</p>
              <p className="text-white font-heading font-bold text-xl leading-tight mt-1 opacity-90 transition-opacity group-hover:opacity-100">
                Small greens. Serious flavour.<br/><span className="italic font-light text-amber-200">Try it fresh →</span>
              </p>
            </div>
          </div>
        </a>

      </div>
    </section>
  )
}
