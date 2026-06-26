"use client"

import { ArrowRight, ArrowDown } from "lucide-react"
import { useAnimate } from "./use-animate"

export function Hero() {
  const ref = useAnimate()

  return (
    <section id="top" ref={ref} className="relative isolate overflow-hidden min-h-[100svh] flex flex-col justify-center">

      {/* Background image */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src="/background.webp"
          alt="A beautiful, sprawling futuristic eco-industrial park blending smart agriculture, biotech domes, and green energy"
          fetchPriority="high"
          decoding="sync"
          className="size-full object-cover animate-slow-zoom"
        />
        {/* Lighter gradient to ensure image is clearly visible while keeping text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 sm:bg-gradient-to-r sm:from-black/60 sm:via-black/20 sm:to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute right-0 top-1/4 -z-[5] size-[500px] rounded-full bg-[#BFF202]/5 blur-[120px] animate-pulse-glow" />
      <div className="absolute -left-20 bottom-1/4 -z-[5] size-[400px] rounded-full bg-[#3A7717]/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Sharp geometric accents */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        {/* Top-left corner bracket */}
        <div className="absolute left-8 top-8 h-16 w-16 border-l-2 border-t-2 border-[#BFF202]" />
        <div className="absolute left-12 top-12 h-8 w-8 border-l border-t border-[#BFF202]/50" />
        {/* Top-right corner bracket */}
        <div className="absolute right-8 top-8 h-16 w-16 border-r-2 border-t-2 border-[#BFF202]" />
        {/* Bottom-left */}
        <div className="absolute bottom-8 left-8 h-12 w-12 border-b-2 border-l-2 border-[#BFF202]" />
        {/* Bottom-right */}
        <div className="absolute bottom-8 right-8 h-12 w-12 border-b-2 border-r-2 border-[#BFF202]/80" />
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#BFF202] via-[#BFF202]/30 to-transparent" />
        <div className="absolute top-0 left-0 w-24 h-[3px] bg-[#BFF202]" />
        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BFF202]/30 to-[#BFF202]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <div className="max-w-3xl">
          <span className="animate-scale-in-scroll inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] py-2 text-xs font-medium uppercase tracking-[0.25em] text-[#BFF202] backdrop-blur-md">
            <img src="/images/logo-icon-lime.webp" alt="Sylvedha" width={8} height={14} className="h-3.5 w-auto object-contain " />
            Innovating Technology in Harmony with Nature
          </span>

          <h1 className="animate-on-scroll mt-8 font-heading text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Building the Future of{" "}
            <span className="gradient-text italic pr-2">Sustainable</span>{" "}
            Innovation
          </h1>

          <p className="animate-on-scroll mt-8 max-w-2xl text-xl leading-relaxed text-white/75">
            <span className="font-sans font-bold text-white">SYLVEDHA LLP</span>{" "}is a multidisciplinary technology company developing
            innovative solutions across Agriculture, Biotechnology, Renewable
            Energy, Artificial Intelligence, Automation, and Sustainable
            Infrastructure.
          </p>

          <div className="animate-slide-left-scroll mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#focus"
              className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-b from-[#d4ff33] to-[#BFF202] border border-[#a1cc00] shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_4px_14px_rgba(191,242,2,0.15)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_6px_20px_rgba(191,242,2,0.3)] px-7 py-3.5 text-sm font-semibold text-[#01312D] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#BFF202]/25"
            >
              Explore Our Innovations
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-white/10 hover:border-white/20 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-[#BFF202]/40 hover:bg-white/10"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <a href="#about" className="flex flex-col items-center gap-2 text-white/50 transition-colors hover:text-white/80">
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <ArrowDown className="size-4" />
        </a>
      </div>
    </section>
  )
}
