"use client"

import { Eye, Target, ArrowUpRight } from "lucide-react"
import { useAnimate } from "./use-animate"

export function About() {
  const ref = useAnimate()

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-background min-h-[100svh] flex flex-col justify-center">
      {/* Subtle background decoration */}
      <div className="absolute right-0 top-0 -z-[1] h-[600px] w-[600px] rounded-2xl bg-gradient-to-b from-[#d4ff33] to-[#BFF202] border border-[#a1cc00] shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_4px_14px_rgba(191,242,2,0.15)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_6px_20px_rgba(191,242,2,0.3)]/5 blur-[150px]" />

      <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <p className="animate-on-scroll inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              <img src="/images/logo-icon-black.png" alt="Sylvedha" className="h-3.5 w-auto object-contain " />
              Who We Are
            </p>
            <h2 className="animate-on-scroll mt-6 font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
              Where <span className="italic text-secondary">nature</span> meets engineering
            </h2>
            <p className="animate-on-scroll mt-6 text-lg leading-relaxed text-muted-foreground">
              Unlike traditional companies focused on a single sector, <span className="font-sans font-bold text-primary">SYLVEDHA</span>{" "}
              operates as a multidisciplinary innovation platform.
            </p>
            <a
              href="#focus"
              className="animate-on-scroll mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary group"
            >
              See Our Focus Areas
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="animate-on-scroll space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              <span className="font-sans font-bold text-primary">SYLVEDHA LLP</span>{" "}is an innovation-driven company focused on creating
              technologies that bridge the gap between nature and engineering.
              Our mission is to build sustainable solutions that address some of
              the world&apos;s most pressing challenges — food security, resource
              efficiency, renewable energy, climate resilience, and intelligent
              automation.
            </p>
            <p>
              We believe the future belongs to integrated solutions
              that create economic value while generating positive environmental
              and social impact.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-2 stagger-children">
          <div className="animate-on-scroll group relative overflow-hidden rounded-[2rem] border border-border bg-card p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
            <div className="absolute -right-16 -top-16 size-48 rounded-2xl bg-gradient-to-b from-[#d4ff33] to-[#BFF202] border border-[#a1cc00] shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_4px_14px_rgba(191,242,2,0.15)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_6px_20px_rgba(191,242,2,0.3)]/8 blur-[80px] transition-all duration-500 group-hover:bg-[#BFF202]/20" />
            <span className="flex size-14 items-center justify-center rounded-2xl bg-[#BFF202] text-[#01312D]">
              <Eye className="size-6" />
            </span>
            <h3 className="mt-6 font-heading text-2xl font-semibold text-card-foreground">
              Our Vision
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              To become a global leader in sustainable innovation by developing
              technologies that empower communities, enhance productivity,
              accelerate renewable energy adoption, and create a more resilient
              future for generations to come.
            </p>
          </div>

          <div className="animate-on-scroll group relative overflow-hidden rounded-[2rem] border border-border bg-primary p-10 text-primary-foreground transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20">
            <div className="absolute -right-16 -top-16 size-48 rounded-2xl bg-gradient-to-b from-[#d4ff33] to-[#BFF202] border border-[#a1cc00] shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_4px_14px_rgba(191,242,2,0.15)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_6px_20px_rgba(191,242,2,0.3)]/10 blur-[80px] transition-all duration-500 group-hover:bg-[#BFF202]/25" />
            <span className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-[#BFF202]">
              <Target className="size-6" />
            </span>
            <h3 className="mt-6 font-heading text-2xl font-semibold text-white">
              Our Mission
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-white/75">
              To design, develop, and deploy affordable, intelligent, and
              scalable technologies that transform agriculture, energy,
              biotechnology, and sustainability through innovation, research, and
              practical implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
