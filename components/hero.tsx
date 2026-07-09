"use client"

import Image from "next/image"
import { ArrowUpRight, Sprout, Leaf, FlaskConical, Cpu } from "lucide-react"

export function Hero() {
  return (
    <section className="w-full bg-[#011a17] h-dvh flex flex-col pt-[92px] pb-2 px-4 md:px-8 overflow-hidden">
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bob { 0%, 100% { transform: translateY(0px) scale(1); } 50% { transform: translateY(-7px) scale(1.03); } }
        @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 20px rgba(199,255,0,0.5); } 50% { box-shadow: 0 0 40px rgba(199,255,0,0.9), 0 0 70px rgba(199,255,0,0.3); } }
        @keyframes ring-glow { 0%, 100% { filter: drop-shadow(0 0 8px rgba(212,175,55,0.5)); } 50% { filter: drop-shadow(0 0 18px rgba(212,175,55,0.9)); } }
        @keyframes hero-pan { 0%, 100% { object-position: 48% 50%; } 50% { object-position: 52% 50%; } }
        .animate-fade-up { animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .delay-100 { animation-delay: 150ms; }
        .delay-200 { animation-delay: 300ms; }
        .delay-300 { animation-delay: 450ms; }
        .animate-bob { animation: bob 4s ease-in-out infinite; }
        .animate-ring-glow { animation: ring-glow 3s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2.5s ease-in-out infinite; }
        .card-hover { transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.4s ease; }
        .card-hover:hover { transform: translateY(-4px) scale(1.01); filter: brightness(1.04); }
        .grevara-badge-ring {
          background: conic-gradient(
            from 135deg,
            #c8c8c8 0deg, #ffffff 45deg, #a0a0a0 90deg,
            #e8e8e8 135deg, #b0b0b0 180deg, #f5f5f5 225deg,
            #909090 270deg, #d8d8d8 315deg, #c8c8c8 360deg
          );
        }
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

      {/* Desktop View — fills remaining viewport height exactly */}
      <div className="hidden lg:flex flex-1 min-h-0 relative w-full max-w-[1400px] mx-auto font-sans">
        
        {/* SVG STENCILS — objectBoundingBox scales automatically with element size */}
        <svg width="0" height="0" className="absolute pointer-events-none">
          <defs>
            {/* Text card L-shape — element: 48%w × (415/560)h */}
            <clipPath id="text-clip" clipPathUnits="objectBoundingBox">
              <path d="M 0.0595,0 H 0.9405 A 0.0595,0.0964 0 0 1 1,0.0964 V 0.612 A 0.0595,0.0964 0 0 1 0.9405,0.708 H 0.6429 A 0.0595,0.0964 0 0 0 0.5833,0.805 V 0.9036 A 0.0595,0.0964 0 0 1 0.5238,1 H 0.0595 A 0.0595,0.0964 0 0 1 0,0.9036 V 0.0964 A 0.0595,0.0964 0 0 1 0.0595,0 Z" />
            </clipPath>
            
            {/* Hero card S-shape — element: 72%w × (415/560)h */}
            <clipPath id="hero-clip" clipPathUnits="objectBoundingBox">
              <path d="M 0.3219,0 H 0.9598 A 0.0402,0.0964 0 0 1 1,0.0964 V 0.612 A 0.0402,0.0964 0 0 1 0.9598,0.708 H 0.7022 A 0.0402,0.0964 0 0 0 0.662,0.805 V 0.9036 A 0.0402,0.0964 0 0 1 0.6218,1 H 0.0402 A 0.0402,0.0964 0 0 1 0,0.9036 V 0.805 A 0.0402,0.0964 0 0 1 0.0402,0.708 H 0.2415 A 0.0402,0.0964 0 0 0 0.2817,0.612 V 0.0964 A 0.0402,0.0964 0 0 1 0.3219,0 Z" />
            </clipPath>
            
            {/* Grevara card L-shape — element: 52%w × (254/560)h */}
            <clipPath id="grevara-clip" clipPathUnits="objectBoundingBox">
              <path d="M 0.605,0 H 0.944 A 0.056,0.1575 0 0 1 1,0.1575 V 0.8425 A 0.056,0.1575 0 0 1 0.944,1 H 0.056 A 0.056,0.1575 0 0 1 0,0.8425 V 0.6333 A 0.056,0.1575 0 0 1 0.056,0.5 H 0.493 A 0.056,0.1575 0 0 0 0.549,0.3667 V 0.1575 A 0.056,0.1575 0 0 1 0.605,0 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* ── 1. TEXT CARD ── */}
        <div 
          className="absolute top-0 left-0 w-[48%] h-[calc(415/560*100%)] bg-[#eee9df] z-20 animate-fade-up opacity-0 flex flex-col pointer-events-auto card-hover"
          style={{ clipPath: 'url(#text-clip)' }}
        >
          <div className="w-full h-[calc(290/415*100%)] px-[40px] xl:px-[50px] pt-[28px] xl:pt-[36px] pb-2 flex flex-col justify-start">
            <p className="text-[#5b7d10] font-black tracking-[0.25em] text-[10px] xl:text-[11px] mb-0.5">SYLVEDHA</p>
            <p className="text-[#06100d]/50 font-medium tracking-wide text-[9px] xl:text-[10px] mb-3">Innovating Technology in Harmony with Nature</p>
            <h1 className="font-heading text-[32px] xl:text-[42px] leading-[0.95] font-extrabold text-[#06100d]">
              Building the Future of{" "}<span className="text-[#5b7d10] italic font-normal">Sustainable<br/>Innovation</span>
            </h1>
            <p className="text-[11px] xl:text-[12px] leading-[1.55] mt-3 text-[#06100d]/75 font-medium max-w-[95%]">
              SYLVEDHA is a multidisciplinary technology company developing innovative solutions across <span className="font-bold text-[#06100d]/90">Agriculture, Biotechnology, Renewable Energy, Artificial Intelligence, Automation,</span> and Sustainable Infrastructure.
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
              ].map(tag => (
                <span key={tag.label} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#06100d]/5 text-[9px] font-bold uppercase tracking-widest text-[#06100d]/70 hover:bg-[#5b7d10]/10 transition-colors cursor-pointer">
                  <tag.icon className="size-2.5" /> {tag.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── 2. HERO IMAGE CARD ── */}
        <div 
          className="absolute top-0 left-[calc(28%+14px)] w-[calc(72%-14px)] h-[calc(415/560*100%)] bg-[#0a1f13] z-20 animate-fade-up opacity-0 delay-100 card-hover"
          style={{ clipPath: 'url(#hero-clip)' }}
        >
          <Image src="/background.webp" alt="Hero" fill className="object-cover opacity-70 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f13] via-[#011a17]/50 to-transparent" />
          <h2 className="absolute top-[40%] left-[calc(100%*280/994+40px)] font-heading text-4xl text-white font-bold leading-[1.1]">
            Ecological <br/><span className="text-[#c7ff00] italic font-normal">Innovation</span>
          </h2>
          <div className="absolute bottom-8 left-10 w-[calc(100%*658/994-64px)]">
             <p className="text-[#b9e8ca] font-medium text-[14px] tracking-wide">
                Controlled environment microgreen cultivation and bio-tech research.
             </p>
          </div>
        </div>

        {/* ── 3. GET IN TOUCH ── */}
        <a href="/#contact" className="absolute top-[calc(428/560*100%)] left-0 w-[48%] h-[calc(127/560*100%)] rounded-[2.5rem] p-7 flex flex-col justify-between group overflow-hidden bg-[#062118] z-30 opacity-0 animate-fade-up delay-200 card-hover">
          <div className="absolute inset-0 bg-gradient-to-br from-[#c7ff00] to-[#91ba00] transition-transform duration-[800ms] ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:-translate-y-full origin-top" />
          <div className="relative z-10 size-10 rounded-full border-2 border-[#06100d] flex items-center justify-center transition-colors duration-[800ms] delay-75 group-hover:border-[#c7ff00]">
            <ArrowUpRight className="size-5 text-[#06100d] transition-colors duration-[800ms] delay-75 group-hover:text-[#c7ff00]" />
          </div>
          <p className="relative z-10 font-heading font-bold text-[30px] text-[#06100d] leading-[1.1] transition-colors duration-[800ms] delay-75 group-hover:text-[#c7ff00]">
            Get in <span className="italic font-light">Touch</span>
          </p>
        </a>

        {/* ── 4. GREVARA CARD ── */}
        <div 
          className="absolute top-[calc(300/560*100%)] left-[calc(48%+14px)] w-[calc(52%-14px)] h-[calc(254/560*100%)] bg-[#2a1126] z-20 animate-fade-up opacity-0 delay-300 cursor-pointer group card-hover"
          style={{ clipPath: 'url(#grevara-clip)' }}
        >
          <Image src="/images/grevara/product-shelf.jpg" alt="Grevara" fill className="object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#120c12]/95 via-[#120c12]/65 to-[#120c12]/20" />
          
          {/* On Sale badge */}
          <div className="absolute top-4 right-6 px-3 py-1 bg-red-600 text-white text-[9px] font-black tracking-widest uppercase rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)] z-10">
            On Sale
          </div>

          {/* Bottom content row */}
          <div className="absolute bottom-5 left-6 right-6 flex items-center gap-5 z-10">
            
            {/* Premium Badge — actual logo image zoomed to fill ring */}
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
