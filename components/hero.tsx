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
          src="/images/hero-nature-tech.png"
          alt="Aerial view of green agricultural fields meeting solar panel arrays"
          className="size-full object-cover animate-slow-zoom"
        />
        {/* Lighter gradient to ensure image is clearly visible while keeping text readable */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#01312D]/70 via-[#01312D]/40 to-[#01312D]/20" />
      </div>

      {/* Decorative elements */}
      <div className="absolute right-0 top-1/4 -z-[5] size-[500px] rounded-full bg-[#BFF202]/5 blur-[120px] animate-pulse-glow" />
      <div className="absolute -left-20 bottom-1/4 -z-[5] size-[400px] rounded-full bg-[#3A7717]/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <div className="max-w-3xl">
          <span className="animate-scale-in-scroll inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-medium uppercase tracking-[0.25em] text-[#BFF202] backdrop-blur-md">
            <span className="size-2 rounded-full bg-[#BFF202] animate-pulse-glow" />
            Nature Powered. Technology Driven.
          </span>

          <h1 className="animate-on-scroll mt-8 font-heading text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Building the Future of{" "}
            <span className="gradient-text italic">Sustainable</span>{" "}
            Innovation
          </h1>

          <p className="animate-on-scroll mt-8 max-w-2xl text-xl leading-relaxed text-white/75">
            SYLVEDHA LLP is a multidisciplinary technology company developing
            innovative solutions across Agriculture, Biotechnology, Renewable
            Energy, Artificial Intelligence, Automation, and Sustainable
            Infrastructure.
          </p>

          <div className="animate-slide-left-scroll mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#focus"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#BFF202] px-7 py-3.5 text-sm font-semibold text-[#01312D] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#BFF202]/25"
            >
              Explore Our Innovations
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-[#BFF202]/40 hover:bg-white/10"
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
