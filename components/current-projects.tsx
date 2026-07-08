"use client"

import { NutriTechCarousel } from "./nutritech-carousel"
import { Check, Cpu, Cloud, BarChart3, Zap, Leaf, Database, ArrowRight } from "lucide-react"
import Image from "next/image"

const monitored = [
  "Soil Moisture", "Temperature", "Humidity", "pH Level",
  "EC / Nutrients", "Water Level", "Light Condition", "Irrigation Activity",
]

const techPillars = [
  { icon: Cpu,      title: "Hardware Integration",    desc: "Deploying integrated sensor modules for field monitoring." },
  { icon: Zap,      title: "Control Systems",        desc: "Automated management of irrigation and climate parameters." },
  { icon: Cloud,    title: "Data Infrastructure",        desc: "Secure storage for environmental and growth metrics." },
  { icon: BarChart3,title: "Monitoring",         desc: "Real-time visibility into system performance and crop status." },
  { icon: Leaf,     title: "Controlled Environment",   desc: "Optimized growth chambers for consistent cultivation." },
  { icon: Database, title: "Data Analytics",     desc: "Compiling structured data to inform future agricultural solutions." },
]

export function CurrentProjects() {
  return (
    <section
      id="current-projects"
      className="relative overflow-hidden min-h-[100svh] flex flex-col justify-center text-white pb-0"
      style={{ background: "linear-gradient(135deg, #011A17 0%, #01312D 45%, #012820 100%)" }}
    >
      {/* Background glows — from logo palette: forest green + lime + cream */}
      <div className="absolute -top-32 left-1/4 h-[600px] w-[600px] rounded-full blur-[180px] pointer-events-none mix-blend-screen" style={{ background: "radial-gradient(circle, rgba(191,242,2,0.07) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full blur-[140px] pointer-events-none mix-blend-screen" style={{ background: "radial-gradient(circle, rgba(109,179,63,0.10) 0%, transparent 70%)" }} />
      <div className="absolute top-1/2 left-0 h-[300px] w-[300px] rounded-full blur-[120px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(245,240,232,0.04) 0%, transparent 70%)" }} />

      {/* Geometric corner accents */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#BFF202]/50 to-transparent" />
        <div className="absolute top-0 right-0 w-24 h-[3px] bg-[#BFF202]/60" />
        <div className="absolute right-8 top-8 h-16 w-16 border-r-2 border-t-2 border-[#BFF202]/25" />
        <div className="absolute left-8 bottom-8 h-10 w-10 border-l-2 border-b-2 border-[#6DB33F]/20" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#6DB33F]/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-10">
          <p className="animate-on-scroll inline-flex items-center gap-2 rounded-full border border-[#BFF202]/20 bg-[#BFF202]/8 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#BFF202] backdrop-blur-md shadow-[0_0_20px_rgba(191,242,2,0.10)]">
            <span className="relative h-3.5 w-3 block">
              <Image src="/images/logo-mark.webp" alt="Sylvedha" fill sizes="12px" className="object-contain invert brightness-200" />
            </span>
            Current Projects
          </p>
          <div className="flex-1 h-px bg-gradient-to-r from-[#BFF202]/25 to-transparent" />
        </div>
        
        {/* Nutritech Card Wrapper */}
          <div className="rounded-[2.5rem] overflow-hidden p-8 sm:p-12 mb-6 border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-2xl relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_-8px_rgba(191,242,2,0.18)] hover:border-[#BFF202]/25">

        {/* NutriTech header — with logo */}
        <div className="animate-on-scroll mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {/* Logo */}
            <div className="size-28 overflow-hidden rounded-full shadow-xl shadow-black/40 relative flex-shrink-0" style={{ border: "1.5px solid rgba(245,240,232,0.25)", background: "#F5F0E8" }}>
              <Image
                src="/images/nutritech/nutritech-logo.jpeg"
                alt="NutriTech"
                fill
                sizes="112px"
                className="object-cover object-[center_40%] scale-[1.6] transition-transform duration-700 hover:scale-[1.7]"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#BFF202]/15 border border-[#BFF202]/30 px-5 py-1.5 text-xs font-bold uppercase tracking-wide text-[#BFF202] shadow-[0_0_15px_rgba(191,242,2,0.15)]">
                  <span className="size-1.5 rounded-full bg-[#BFF202] animate-pulse" />
                  Active — Prototype Stage
                </span>
                <span className="rounded-full border border-[#F5F0E8]/20 bg-[#F5F0E8]/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-[#F5F0E8]/70 backdrop-blur-sm">
                  Agritech · IoT · Automation
                </span>
              </div>
              <h2 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl tracking-tight text-[#F5F0E8]">
                Project{" "}
                <span
                  className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#BFF202] to-[#9ED600]"
                >
                  NutriTech
                </span>
              </h2>
            </div>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-[#F5F0E8]/70 relative z-10">
            Sylvedha's smart agriculture initiative — combining environmental sensing, controlled plant
            growth experiments, automation, and digital infrastructure to build scalable solutions for
            future farming.
          </p>
        </div>

        {/* Carousel + monitoring */}
        <div className="animate-on-scroll grid lg:grid-cols-2 gap-5 mb-5">
          {/* Carousel panel */}
          <div
            className="rounded-[2rem] p-6 sm:p-8 backdrop-blur-sm relative z-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_-8px_rgba(191,242,2,0.15)] hover:border-[#BFF202]/30"
            style={{ border: "1px solid rgba(245,240,232,0.10)" }}
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
            <p className="relative mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#BFF202]">
              Experimental Setup — Photos &amp; Video
            </p>
            <NutriTechCarousel />
          </div>

          {/* What it monitors panel */}
          <div
            className="rounded-[2rem] p-6 sm:p-8 flex flex-col backdrop-blur-sm relative z-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_-8px_rgba(191,242,2,0.15)] hover:border-[#BFF202]/30"
            style={{ border: "1px solid rgba(245,240,232,0.10)" }}
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-bl from-white/[0.03] to-transparent pointer-events-none" />
            <p className="relative mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#BFF202]">
              What the Setup Monitors
            </p>
            <div className="grid grid-cols-2 gap-3 flex-1">
              {monitored.map((item) => (
                <span key={item} className="flex items-center gap-2.5 text-sm text-[#F5F0E8]/80">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#BFF202]/20 border border-[#BFF202]/30">
                    <Check className="size-3 text-[#BFF202]" />
                  </span>
                  {item}
                </span>
              ))}
            </div>
            {/* Current focus */}
            <div
              className="relative mt-6 rounded-2xl p-5 overflow-hidden group transition-all duration-500 hover:border-[#BFF202]/40 hover:shadow-[0_10px_30px_-10px_rgba(191,242,2,0.15)]"
              style={{ background: "linear-gradient(135deg, rgba(191,242,2,0.08) 0%, rgba(245,240,232,0.03) 100%)", border: "1px solid rgba(191,242,2,0.2)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#BFF202]/0 via-[#BFF202]/5 to-[#BFF202]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <p className="relative text-xs font-bold uppercase tracking-[0.15em] mb-3 text-[#BFF202]">Current Focus</p>
              <ul className="relative space-y-1.5 text-sm text-[#F5F0E8]/70">
                <li>• Testing controlled growth environments</li>
                <li>• Gathering environmental performance metrics</li>
                <li>• Validating integrated hardware systems</li>
                <li>• Enhancing monitoring capabilities</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tech pillars */}
        <div
          className="animate-on-scroll rounded-[2rem] p-6 sm:p-8 mb-6 backdrop-blur-sm relative z-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_-8px_rgba(191,242,2,0.15)] hover:border-[#BFF202]/30"
          style={{ background: "rgba(245,240,232,0.03)", border: "1px solid rgba(245,240,232,0.10)" }}
        >
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#BFF202]">
            Technology Layers
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
            {techPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="animate-on-scroll group flex gap-4 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#BFF202]/30 hover:bg-white/[0.06]"
                style={{ border: "1px solid rgba(245,240,232,0.07)", background: "rgba(255,255,255,0.02)" }}
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#BFF202]/20 bg-[#BFF202]/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#BFF202]/20">
                  <pillar.icon className="size-5 text-[#BFF202]" />
                </div>
                <div>
                  <p className="font-semibold text-sm tracking-wide text-[#F5F0E8]">{pillar.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#F5F0E8]/60">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div> {/* End of Nutritech Card */}

      </div>
    </section>
  )
}
