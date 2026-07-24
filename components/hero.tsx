"use client"

import Image from "next/image"
import { useRef, useCallback, useState, useEffect } from "react"
import { ArrowUpRight, Sprout, Leaf, FlaskConical, Cpu, Zap, Settings, ChevronDown } from "lucide-react"

function useTilt() {
  const ref = useRef<HTMLDivElement>(null)
  const raf = useRef(0)
  
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    cancelAnimationFrame(raf.current)
    raf.current = requestAnimationFrame(() => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      
      // Normalized between -1 and 1
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
      
      el.style.transform = `perspective(1000px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) scale(1.015)`
      el.style.transition = "none"
      el.style.setProperty('--mouse-x', String(x))
      el.style.setProperty('--mouse-y', String(y))
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    cancelAnimationFrame(raf.current)
    raf.current = requestAnimationFrame(() => {
      const el = ref.current
      if (el) {
        el.style.transition = "transform 0.6s cubic-bezier(0.34,1.56,0.64,1)"
        el.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)`
        el.style.setProperty('--mouse-x', '0')
        el.style.setProperty('--mouse-y', '0')
      }
    })
  }, [])

  return { tiltRef: ref, handleMouseMove, handleMouseLeave }
}

function CustomHeroImageCard({ children, floatingElement }: { children: React.ReactNode, floatingElement: React.ReactNode }) {
  const [size, setSize] = useState({ w: 0, h: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setSize({ w: entry.contentRect.width, h: entry.contentRect.height })
      }
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const { w, h } = size
  
  const b = 44
  const F = 14
  const offset = b * 0.75
  const cx = w - offset
  const cy = offset
  const ratio = F / (b + F)

  const dx = Math.sqrt(Math.max(0, Math.pow(b + F, 2) - Math.pow(cy - F, 2)));
  const dy = Math.sqrt(Math.max(0, Math.pow(b + F, 2) - Math.pow(w - cx - F, 2)));
  const fx = cx - dx;
  const fy = cy + dy;
  
  const t1x = fx + ratio * (cx - fx);
  const t1y = F + ratio * (cy - F);
  const t2x = w - F + ratio * (cx - (w - F));
  const t2y = fy + ratio * (cy - fy);

  return (
    <div ref={containerRef} className="relative w-full h-full pointer-events-none group">
      {w > 0 && h > 0 && (
        <svg className="absolute inset-0 pointer-events-none z-10" width="0" height="0">
          <defs>
            <mask id="hero-cutout-mask">
              <rect x="0" y="0" width={w} height={h} fill="white" />
              <path 
                d={`M ${w} 0 L ${fx} 0 A ${F} ${F} 0 0 1 ${t1x} ${t1y} A ${b} ${b} 0 0 0 ${t2x} ${t2y} A ${F} ${F} 0 0 1 ${w} ${fy} Z`} 
                fill="black" 
              />
            </mask>
          </defs>
        </svg>
      )}
      
      {/* C-Shape clipped container */}
      <div 
        className="absolute inset-0 z-0 bg-[#0a1f13] pointer-events-auto overflow-hidden" 
        style={{ 
          clipPath: 'url(#hero-clip)',
          mask: w > 0 ? 'url(#hero-cutout-mask)' : 'none',
          WebkitMask: w > 0 ? 'url(#hero-cutout-mask)' : 'none'
        }}
      >
        {children}
      </div>

      {/* Floating element nested exactly in the circular cutout corner */}
      {w > 0 && (
        <div 
          className="absolute z-20 pointer-events-auto group cursor-pointer"
          style={{
            top: cy,
            left: cx,
            width: b * 2.2,
            height: b * 2.2,
            transform: `translate(-50%, -50%) translate(calc(var(--mouse-x, 0) * -8px), calc(var(--mouse-y, 0) * -8px))`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          {/* Outer white ring */}
          <div 
            className="absolute inset-0 rounded-full border-[2.5px] border-white opacity-0 group-hover:opacity-100 group-hover:scale-[1.7] transition-all duration-700 ease-out"
            style={{ boxShadow: '0 0 15px rgba(255,255,255,0.3)' }}
          />
          {/* Inner neon ring */}
          <div 
            className="absolute inset-0 rounded-full border-[2.5px] border-[#BFF202] opacity-0 group-hover:opacity-100 group-hover:scale-[1.3] transition-all duration-500 ease-out"
            style={{ boxShadow: '0 0 15px rgba(191,242,2,0.3)' }}
          />
          <div className="relative w-full h-full transition-all duration-500 animate-bob group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
            {floatingElement}
          </div>
        </div>
      )}
    </div>
  )
}

export function Hero() {
  const { tiltRef, handleMouseMove, handleMouseLeave } = useTilt()

  return (
    <section 
      className="w-full min-h-svh lg:h-dvh flex flex-col pt-[88px] sm:pt-[92px] lg:pt-[90px] xl:pt-[100px] pb-5 px-3 sm:px-4 md:px-8 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
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
        <div className="bg-[#eee9df] rounded-[1.75rem] p-5 sm:p-8 flex flex-col justify-between shrink-0 shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
          <div>
            <p className="text-[#123b00] font-black tracking-[0.22em] text-[11px] mb-1">SYLVEDHA</p>
            <p className="text-[#06100d]/70 font-semibold tracking-wide text-[11px] mb-3.5">Innovating Technology in Harmony with Nature</p>
            <h1 className="font-heading text-[clamp(2rem,9vw,2.45rem)] sm:text-[38px] leading-[0.98] font-extrabold text-[#06100d]">
              Building the Future of <span className="text-[#123b00] italic font-normal pr-1">Sustainable Innovation</span>
            </h1>
            <p className="text-[13px] sm:text-sm leading-[1.55] mt-3.5 text-[#06100d]/80 font-medium">
              SYLVEDHA is a multidisciplinary technology company developing innovative solutions across{" "}
              <span className="font-bold text-[#06100d]">Agriculture, Biotechnology, Renewable Energy, Artificial Intelligence, Automation,</span> and Sustainable Infrastructure.
            </p>
          </div>
          <a href="/#current-projects" className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#c7ff00] px-6 py-3 text-center text-[11px] font-bold uppercase tracking-widest text-[#06100d] transition-colors hover:bg-[#a6d900] sm:w-fit">
            Explore Innovations
          </a>
        </div>
        <div className="relative h-[210px] sm:h-[280px] rounded-[1.75rem] bg-[#0a1f13] overflow-hidden shrink-0 shadow-[0_18px_45px_rgba(0,0,0,0.22)]">
          <Image src="/images/hero-bg.png" alt="Hero" fill className="object-cover opacity-90" priority fetchPriority="high" quality={65} sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f13]/60 via-[#011a17]/10 to-transparent" />
        </div>
        <a href="/#contact" className="relative min-h-[104px] rounded-[1.75rem] px-5 py-5 flex items-center justify-between group overflow-hidden bg-[#BFF202] text-black shrink-0 shadow-[0_18px_45px_rgba(0,0,0,0.18)]" style={{backgroundColor:'#BFF202', color:'#000000'}}>
          <div className="absolute inset-0 z-0 rounded-[1.75rem] bg-[#a6d900] transform translate-y-full group-hover:translate-y-0 transition-transform duration-[420ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]" />
          <div className="relative z-10 flex flex-col">
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] mb-1" style={{color:'#000000', backgroundColor:'#BFF202'}}>Let&apos;s Collaborate</p>
            <p className="font-heading font-bold text-[24px] leading-[1.05]" style={{color:'#000000', backgroundColor:'#BFF202'}}>Get in <span className="italic font-light">Touch</span></p>
          </div>
          <div className="relative z-10 size-12 rounded-full bg-black flex items-center justify-center shrink-0 group-hover:bg-[#011a17] transition-colors duration-300">
            <ArrowUpRight className="size-5 text-[#BFF202]" />
          </div>
        </a>
        <a href="/#grevara" className="relative h-[178px] rounded-[1.75rem] bg-[#2a1126] overflow-hidden shrink-0 cursor-pointer group border border-amber-400/20 hover:border-amber-400/60 transition-all duration-500 shadow-[0_18px_45px_rgba(0,0,0,0.2)]">
          <Image src="/images/grevara/product-shelf.jpg" alt="Grevara Products" fill quality={60} sizes="100vw" className="object-cover opacity-55 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#120c12]/90 via-[#120c12]/60 to-[#120c12]/15 group-hover:opacity-0 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 z-10">
            <div className="shrink-0 size-16 rounded-full grevara-badge-ring p-[2px]">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image src="/images/grevara/grevara-badge.png" alt="Grevara" width={70} height={70} className="w-full h-full object-cover scale-[1.35] object-center" />
              </div>
            </div>
            <div>
              <p className="text-[#d4af37] font-bold tracking-[0.18em] text-[9px] uppercase">Grevara Microgreens</p>
              <p className="text-white font-heading font-bold text-base sm:text-lg leading-tight mt-0.5">Small greens. Serious flavour and great nutrition.<br/><span className="italic font-light text-amber-200">Try it fresh. Try it now.</span></p>
            </div>
          </div>
        </a>
      </div>

      {/* ── DESKTOP: precise interlocking bento with perfect 1% gaps ── */}
      <div
        ref={tiltRef}
        className="hidden lg:block flex-1 min-h-0 relative w-full max-w-none landscape:max-w-[95%] 2xl:max-w-[95%] mx-auto will-change-transform"
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
                       V 0.68 A 0.04,0.06 0 0 1 0.96,0.74 
                       H 0.715 A 0.055,0.077 0 0 0 0.66,0.817 
                       V 0.94 A 0.04,0.06 0 0 1 0.62,1 
                       H 0.04 A 0.04,0.06 0 0 1 0,0.94 
                       V 0.6808 A 0.04,0.06 0 0 1 0.04,0.6208 
                       H 0.2961 A 0.04,0.06 0 0 0 0.3361,0.5608 
                       V 0.06 A 0.04,0.06 0 0 1 0.3761,0 Z" />
            </clipPath>

            <clipPath id="grevara-clip" clipPathUnits="objectBoundingBox">
              <path d="M 0.04,0.414 
                       H 0.62 A 0.055,0.129 0 0 0 0.675,0.285 
                       V 0.09 A 0.04,0.09 0 0 1 0.715,0 
                       H 0.96 A 0.04,0.09 0 0 1 1,0.09 
                       V 0.91 A 0.04,0.09 0 0 1 0.96,1 
                       H 0.04 A 0.04,0.09 0 0 1 0,0.91 
                       V 0.504 A 0.04,0.09 0 0 1 0.04,0.414 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* ── 1. TEXT CARD (Top-Left, L-shape) ── */}
        <div
          className="absolute top-0 left-0 w-[59.5%] h-[72%] bg-[#eee9df] z-20 opacity-0 afl d1 flex flex-col pointer-events-auto overflow-hidden"
          style={{ clipPath: 'url(#text-clip)' }}
        >
          <div className="w-full h-full px-8 xl:px-12 pt-6 xl:pt-8 pb-6 flex flex-col justify-between relative z-10">
            
            {/* TOP SECTION: Full Width Titles */}
            <div className="w-full flex flex-col">
              <p className="text-[#123b00] font-black tracking-[0.3em] text-[11px] xl:text-[13px] mb-1 animate-text-float" style={{animationDelay:'0s'}}>
                SYLVEDHA
              </p>
              <h2 className="text-[#06100d]/90 font-bold tracking-wide text-[16px] md:text-[18px] xl:text-[20px] mb-1 xl:mb-2">
                Innovating Technology in Harmony with Nature
              </h2>
              <h1 className="font-heading text-[clamp(2rem,2.8vw,3rem)] xl:text-[clamp(2.4rem,3.4vw,3.8rem)] leading-[1.05] font-extrabold text-[#06100d]">
                Engineering Sustainable Technologies for <span className="text-[#123b00] italic font-normal pr-2">Tomorrow</span>
              </h1>
            </div>

            {/* MIDDLE SECTION: Description & Button (Constrained to left side to avoid cutout) */}
            <div className="lg:w-[62%] flex flex-col items-start mt-4 xl:mt-5">
              <p className="text-[13px] xl:text-[14px] leading-[1.5] text-[#06100d]/75 font-medium">
                Sylvedha is a research, engineering, and manufacturing company developing intelligent technologies and products across <span className="font-bold text-[#06100d]/90">agriculture, biotechnology, renewable energy, artificial intelligence, and automation.</span>
              </p>
              <a href="/#current-projects" className="mt-4 xl:mt-5 w-fit px-8 xl:px-10 py-3 xl:py-3.5 bg-[#c7ff00] text-[#06100d] rounded-full font-bold uppercase tracking-[0.15em] text-[11px] xl:text-[12px] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(199,255,0,0.4)] transition-all duration-300 inline-flex items-center justify-center">
                Explore Our Work
              </a>
            </div>
            
            {/* BOTTOM SECTION: Tags (Safe in bottom-left corner) */}
            <div className="w-full lg:w-[85%] mt-auto flex flex-wrap gap-2.5">
              {[
                { icon: Sprout, label: 'Agritech' },
                { icon: FlaskConical, label: 'Biotech' },
                { icon: Zap, label: 'Energy' },
                { icon: Cpu, label: 'AI' },
                { icon: Settings, label: 'Automation' },
              ].map((tag, i) => (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#06100d]/10 text-[10px] font-bold uppercase tracking-widest text-[#06100d]/90 hover:bg-[#123b00]/20 hover:text-[#123b00] hover:scale-105 transition-all cursor-pointer"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <tag.icon className="w-3 h-3" />
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── 2. HERO IMAGE CARD (Top-Right, C-shape) with custom dynamic Cutout ── */}
        <div className="absolute top-0 left-[40.5%] w-[59.5%] h-[72%] z-10 opacity-0 afr d2">
          <CustomHeroImageCard
            floatingElement={
              <div 
                className="relative flex items-center justify-center rounded-full bg-[#011a17] shadow-[0_0_24px_rgba(191,242,2,0.4)] border border-[#BFF202]/30 overflow-hidden pointer-events-auto w-full h-full"
              >
                <Image
                  src="/images/logo-icon-neon.png"
                  alt="Sylvedha"
                  fill
                  sizes="96px"
                  className="object-contain p-3"
                />
              </div>
            }
          >
            <Image
              src="/images/hero-bg.png"
              alt="Sylvedha sustainable innovation"
              fill
              className="object-cover opacity-90"
              priority
              quality={60}
              sizes="(max-width: 1024px) 80vw, 1000px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f13]/50 via-transparent to-transparent pointer-events-none" />
          </CustomHeroImageCard>
        </div>

        {/* ── 3. GET IN TOUCH (Bottom-Left) ── */}
        <a
          href="/#contact"
          className="absolute left-0 top-[73.5%] w-[39.5%] h-[26.5%] rounded-[2.5rem] px-8 flex items-center justify-between group overflow-hidden bg-[#BFF202] text-black z-30 relative transition-colors duration-300 shadow-[0_18px_45px_rgba(0,0,0,0.15)]"
          style={{backgroundColor:'#BFF202', color:'#000000'}}
        >
          <div
            className="absolute inset-0 z-0 rounded-[2.5rem] bg-[#01312D] transform translate-y-full group-hover:translate-y-0 transition-transform duration-[420ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]"
            style={{ willChange: 'transform' }}
          />
          <div className="relative z-10 flex flex-col">
            <p className="text-black group-hover:text-[#BFF202]/90 text-[10px] font-bold uppercase tracking-[0.25em] mb-0.5 transition-colors duration-300">Let&apos;s Collaborate</p>
            <p className="font-heading font-bold text-[clamp(1.5rem,2.2vw,2.1rem)] text-black group-hover:text-white leading-[1.05] transition-colors duration-300">
              Get in <span className="italic font-light">Touch</span>
            </p>
          </div>
          <div className="relative z-10 size-14 rounded-full bg-black group-hover:bg-[#BFF202] flex items-center justify-center transition-colors duration-300 shrink-0">
            <ArrowUpRight className="size-6 text-[#BFF202] group-hover:text-black transition-colors duration-300" />
          </div>
        </a>

        {/* ── 4. GREVARA CARD (Bottom-Right, L-shape with hump) ── */}
        <a
          href="/#grevara"
          className="absolute left-[40.5%] top-[54.78%] w-[59.5%] h-[45.22%] bg-[#2a1126] z-20 opacity-0 afr d4 cursor-pointer group overflow-hidden"
          style={{ clipPath: 'url(#grevara-clip)' }}
        >
          <Image
            src="/images/grevara/product-shelf.jpg"
            alt="Grevara Products"
            fill
            className="object-cover opacity-55 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            fetchPriority="low"
            sizes="(max-width: 1024px) 60vw, 700px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#120c12]/90 via-[#120c12]/60 to-[#120c12]/15 group-hover:opacity-0 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-5 left-6 right-6 flex items-center gap-5 z-10">
            <div className="shrink-0 size-[80px] xl:size-[90px] rounded-full grevara-badge-ring p-[3px] animate-bob">
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image src="/images/grevara/grevara-badge.png" alt="Grevara" width={90} height={90} className="w-full h-full object-cover scale-[1.35] object-center" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#d4af37] font-bold tracking-[0.2em] text-[10px] uppercase">Grevara Microgreens</p>
              <p className="text-white font-heading font-bold text-xl leading-tight mt-1 opacity-90 transition-opacity group-hover:opacity-100">
                Small greens. Serious flavour and great nutrition.<br/><span className="italic font-light text-amber-200">Try it fresh. Try it now.</span>
              </p>
            </div>
          </div>
        </a>

      </div>{/* end desktop bento */}



    </section>
  )
}
