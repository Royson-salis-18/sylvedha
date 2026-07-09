"use client"

import { useRef, useCallback } from "react"
import Image from "next/image"
import { Sprout, FlaskConical, Sun, Cpu, Recycle, ArrowUpRight, Leaf } from "lucide-react"

const disciplines = [
  { icon: Sprout,       label: "AgriTech",    color: "#BFF202" },
  { icon: FlaskConical, label: "Biotech",     color: "#BFF202" },
  { icon: Sun,          label: "Energy",      color: "#BFF202" },
  { icon: Cpu,          label: "AI & IoT",    color: "#BFF202" },
  { icon: Recycle,      label: "Sustain.",    color: "#BFF202" },
]

function BentoCard({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const rafRef  = useRef<number>(0)

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      const el = cardRef.current
      const g  = glowRef.current
      if (!el) return
      const r  = el.getBoundingClientRect()
      const nx = (e.clientX - r.left) / r.width
      const ny = (e.clientY - r.top)  / r.height
      el.style.transform  = `perspective(700px) rotateX(${(ny - 0.5) * -14}deg) rotateY(${(nx - 0.5) * 14}deg) scale(1.04) translateZ(4px)`
      el.style.transition = "none"
      if (g) {
        g.style.opacity    = "1"
        g.style.background = `radial-gradient(circle at ${nx * 100}% ${ny * 100}%, rgba(191,242,2,0.15) 0%, transparent 65%)`
      }
    })
  }, [])

  const onLeave = useCallback(() => {
    cancelAnimationFrame(rafRef.current)
    const el = cardRef.current; const g = glowRef.current
    if (el) { el.style.transition = "transform 0.55s cubic-bezier(0.22,1,0.36,1)"; el.style.transform = "" }
    if (g)  { g.style.opacity = "0" }
  }, [])

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`relative overflow-hidden will-change-transform cursor-pointer ${className}`}
      style={style}
    >
      <div ref={glowRef} className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10" style={{ opacity: 0 }} />
      {children}
    </div>
  )
}

export function HeroBento() {
  return (
    <div className="relative w-full" style={{ maxWidth: 480 }}>
      {/* === FLUID GRID === */}
      <div className="grid gap-3" style={{ gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "160px 110px 90px" }}>

        {/* ── Cell 1: Grevara showcase — tall, spans col 1-2 row 1-2 ── */}
        <BentoCard
          className="border-t border-r border-b border-white/5 border-l-4 border-l-[#d4af37] bg-[#1a0b2e] relative"
          style={{
            gridColumn: "1 / 3",
            gridRow: "1 / 3",
            borderRadius: "2rem 2rem 1rem 2rem",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a1148] to-[#120818] opacity-80" />
          
          <div className="relative h-full flex flex-col justify-between p-6 z-20">
            {/* Grevara logo circle — the PNG already has a white-ring circle baked in,
                so we just crop away its grey background by zooming in */}
            <div className="relative size-[88px] rounded-full overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
              <Image 
                src="/images/grevara/grevara-logo.png" 
                alt="Grevara Logo" 
                fill 
                sizes="88px" 
                className="object-cover scale-[1.35]" 
              />
            </div>
            
            {/* Bottom text */}
            <div className="mt-auto pt-8">
              <p className="font-heading font-bold italic text-[#d4af37] text-3xl leading-none drop-shadow-md">
                Grevara
              </p>
              <p className="font-heading font-bold text-white text-4xl leading-tight mt-1">
                Microgreens
              </p>
            </div>
          </div>
          
          {/* Subtle overlay image to keep the texture if needed, but the screenshot is mostly solid/gradient */}
          <div className="absolute inset-0 bg-[url('/images/grevara/growing-pink.jpg')] bg-cover bg-center opacity-10 mix-blend-screen pointer-events-none" />
        </BentoCard>

        {/* ── Cell 2: Founded stat — col 3 row 1 ── */}
        <BentoCard
          className="border border-white/10 bg-[#011a17] flex flex-col items-center justify-center text-center p-4"
          style={{ borderRadius: "2rem 2rem 2rem 1rem" }}
        >
          <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Est.</p>
          <p className="text-4xl font-heading font-bold text-white leading-none">24</p>
          <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">2024</p>
        </BentoCard>

        {/* ── Cell 3: Focus areas count — col 3 row 2 ── */}
        <BentoCard
          className="border border-[#BFF202]/20 bg-[#023a35] flex flex-col items-center justify-center text-center p-3"
          style={{ borderRadius: "1rem 2rem 2rem 2rem" }}
        >
          <Leaf className="size-4 text-[#BFF202] mb-1" />
          <p className="text-3xl font-heading font-bold text-[#BFF202] leading-none">5</p>
          <p className="text-[10px] uppercase tracking-widest text-white/40 mt-1">Sectors</p>
        </BentoCard>

        {/* ── Cell 4: Disciplines tags — col 1-2 row 3 ── */}
        <BentoCard
          className="border border-white/10 bg-[#023a35]/60 backdrop-blur-md p-3"
          style={{ gridColumn: "1 / 3", borderRadius: "1rem 1rem 2rem 2rem" }}
        >
          <div className="flex flex-wrap gap-1.5 h-full items-center">
            {disciplines.map((d) => (
              <span
                key={d.label}
                className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-white/75 hover:border-[#BFF202]/40 hover:text-[#BFF202] transition-all duration-200"
              >
                <d.icon className="size-2.5" />{d.label}
              </span>
            ))}
          </div>
        </BentoCard>

        {/* ── Cell 5: CTA — col 3 row 3 ── */}
        <BentoCard
          className="border border-[#BFF202]/25 bg-gradient-to-br from-[#BFF202]/15 to-transparent flex flex-col items-center justify-center p-3 group/cta"
          style={{ borderRadius: "2rem 1rem 2rem 2rem" }}
        >
          <div className="size-9 rounded-full bg-[#BFF202] flex items-center justify-center group-hover/cta:scale-110 group-hover/cta:rotate-12 transition-all duration-300 mb-1">
            <ArrowUpRight className="size-4 text-[#012522]" />
          </div>
          <p className="text-[10px] text-white/50 uppercase tracking-wider">Explore</p>
        </BentoCard>

      </div>

      {/* Floating glow behind bento */}
      <div className="absolute -inset-8 -z-10 rounded-full bg-[#BFF202]/5 blur-[60px] pointer-events-none" />
    </div>
  )
}
