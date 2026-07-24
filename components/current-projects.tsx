"use client"

import { NutriTechCarousel } from "./nutritech-carousel"
import { Check, Cpu, Cloud, BarChart3, Zap, Leaf, Database, ArrowRight } from "lucide-react"
import Image from "next/image"
import { SubtractedCard } from "./subtracted-card"
import { cn } from "@/lib/utils"

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
      className="relative overflow-hidden flex flex-col justify-center text-white pb-0"
      style={{ background: "transparent" }}
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

      <div className="relative z-10 mx-auto w-full max-w-none landscape:max-w-[90%] 2xl:max-w-[90%] px-5 pt-12 pb-6 sm:px-8">

        {/* Desktop View */}
        <div className="hidden lg:block mb-6">
          <SubtractedCard
            color="white"
            ringSurface="light"
            corner="top-left"
            cutoutSize={140}
            filletSize={36}
            scoopGap={16}
            borderRadius={40}
            disableAnimation={false}
            animationIntensity={0.15}
            hoverRingScale="small"
            disableTilt={true}
            floatingElement={
              <div className="relative size-full overflow-hidden rounded-full bg-[#F5F0E8] border-[5px] border-[#99b961] shadow-lg">
                <Image
                  src="/images/nutritech/nutritech-logo.jpeg"
                  alt="NutriTech"
                  fill
                  sizes="140px"
                  className="object-cover object-[center_40%] scale-[1.5] transition-transform duration-700 hover:scale-[1.6]"
                />
              </div>
            }
          >
            {/* Header Row: Left Text, Right Tech Pillar 1 */}
            <div className="flex flex-col lg:flex-row gap-8 mb-8 pt-4">
              <div className="flex-[1.5] pl-20 lg:pl-[120px]">
                <div className="animate-on-scroll">
                  <div className="flex flex-col gap-3 mb-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#99b961]/20 border border-[#99b961]/40 px-5 py-1.5 text-xs font-bold uppercase tracking-wide text-[#123b00] shadow-[0_0_10px_rgba(153,185,97,0.2)]">
                        <span className="size-1.5 rounded-full bg-[#7a964a] animate-pulse" />
                        Active — Prototype Stage
                      </span>
                      <span className="rounded-full border border-[#06100d]/10 bg-[#06100d]/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-[#06100d]/70 backdrop-blur-sm">
                        Agritech · IoT · Automation
                      </span>
                    </div>
                    <h2 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl tracking-tight text-[#06100d]">
                      Project{" "}
                      <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#7a964a] to-[#5a7333] pr-2">
                        NutriTech
                      </span>
                    </h2>
                    {/* ARIS & ECES hardware highlights */}
                    <div className="flex flex-wrap gap-2.5 mt-1">
                      <span className="inline-flex items-center gap-2 rounded-xl border border-[#7a964a]/30 bg-[#7a964a]/10 px-4 py-2 text-xs font-bold tracking-wide text-[#3a5c1f]">
                        <span className="size-2 rounded-full bg-[#7a964a]" />
                        A-RIS
                        <span className="font-normal opacity-70">· Agriculture Real-Time Intelligence Sensor</span>
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-xl border border-[#5a7333]/30 bg-[#5a7333]/10 px-4 py-2 text-xs font-bold tracking-wide text-[#3a5c1f]">
                        <span className="size-2 rounded-full bg-[#5a7333]" />
                        ECES
                        <span className="font-normal opacity-70">· Environmental Controlled Experiment Setup</span>
                      </span>
                    </div>
                  </div>
                  <p className="max-w-2xl text-lg leading-relaxed text-[#06100d]/75 relative z-10 font-medium">
                    Sylvedha's smart agriculture initiative — combining environmental sensing, controlled plant
                    growth experiments, automation, and digital infrastructure to build scalable solutions for
                    future farming.
                  </p>
                </div>
              </div>

              {/* Tech Pillar 1 moved to empty right space */}
              <div className="hidden lg:flex flex-col flex-1 justify-center animate-on-scroll pr-8">
                <SubtractedCard
                  color="dark-green"
                  ringSurface="none"
                  corner="top-right"
                  cutoutSize={56}
                  borderRadius={24}
                  disableAnimation={false}
                  floatingElement={
                    <div className="flex size-full items-center justify-center rounded-full bg-[#BFF202] shadow-lg border-2 border-white ring-2 ring-[#023a35]">
                      {(() => {
                        const Icon = techPillars[0].icon;
                        return <Icon className="size-6 text-[#023a35]" />;
                      })()}
                    </div>
                  }
                >
                  <div className="p-6 pt-8 pr-12 text-[#F5F0E8]">
                    <p className="font-bold text-base tracking-wide mb-2">{techPillars[0].title}</p>
                    <p className="text-sm leading-relaxed opacity-80 font-medium">{techPillars[0].desc}</p>
                  </div>
                </SubtractedCard>
              </div>
            </div>

              {/* Carousel + monitoring */}
              <div className="animate-on-scroll grid lg:grid-cols-5 gap-6 mb-8 px-4 lg:px-8">
                {/* Carousel panel (Organic Shape) */}
                <div className="lg:col-span-3 rounded-[3rem] rounded-tl-2xl rounded-br-2xl p-8 lg:p-10 relative z-10 transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(153,185,97,0.25)] hover:rounded-[2rem] bg-white/70 backdrop-blur-md shadow-xl shadow-[#06100d]/5 border border-[#99b961]/20">
                  <p className="relative mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#123b00]">
                    Experimental Setup
                  </p>
                  <NutriTechCarousel />
                </div>

                {/* What it monitors panel (Organic Shape) */}
                <div className="lg:col-span-2 rounded-[3rem] rounded-tr-2xl rounded-bl-2xl p-8 lg:p-10 flex flex-col relative z-10 transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(153,185,97,0.25)] hover:rounded-[2rem] bg-white/70 backdrop-blur-md shadow-xl shadow-[#06100d]/5 border border-[#99b961]/20">
                  <p className="relative mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#123b00]">
                    System Monitors
                  </p>
                  <div className="flex flex-wrap gap-2.5 flex-1 content-start">
                    {monitored.map((item) => (
                      <span key={item} className="group flex items-center gap-2 text-sm text-[#06100d]/90 font-semibold px-4 py-2 rounded-full bg-white shadow-sm border border-[#99b961]/20 transition-all duration-300 hover:border-[#99b961]/50 hover:shadow-md hover:-translate-y-0.5">
                        <Check className="size-4 text-[#7a964a] group-hover:scale-110 transition-transform" strokeWidth={3} />
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Core Purpose */}
                  <div className="mt-8 flex-1 flex flex-col justify-end">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/90 to-white/40 p-6 shadow-sm border border-[#99b961]/20 group hover:shadow-md hover:border-[#99b961]/40 transition-all duration-300">
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#7a964a] to-[#BFF202]"></div>
                      <Cloud className="absolute -right-4 -bottom-4 size-24 text-[#99b961]/10 group-hover:text-[#99b961]/20 transition-colors duration-500" />
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7a964a] mb-3">Core Purpose</p>
                      <p className="text-sm font-semibold leading-relaxed text-[#123b00] relative z-10">
                        Training AI for agriculture requires clean, structured, abundant data — and that data simply doesn't exist at scale. So we built our own pipeline: ECES creates a controlled environment, A-RIS captures every variable, and the result is a proprietary dataset that no one else has.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Current Focus & Remaining Tech Pillars */}
              <div className="animate-on-scroll grid gap-6 lg:grid-cols-3 mx-4 lg:mx-8 mb-6">
                
                {/* Current Focus (SubtractedCard) */}
                <SubtractedCard
                  color="black"
                  ringSurface="none"
                  corner="bottom-left"
                  cutoutSize={56}
                  borderRadius={28}
                  disableAnimation={false}
                  floatingElement={
                    <div className="flex size-full items-center justify-center rounded-full bg-[#F5F0E8] shadow-lg border-2 border-[#011A17] ring-2 ring-[#BFF202]">
                      <Check className="size-6 text-[#011A17]" />
                    </div>
                  }
                >
                  <div className="p-6 pb-8 pl-12 text-[#F5F0E8]">
                    <p className="relative text-sm font-bold uppercase tracking-[0.15em] mb-4 text-[#BFF202]">Current Focus</p>
                    <ul className="relative space-y-3 text-sm opacity-90 font-medium">
                      <li className="flex items-start gap-2"><div className="size-1.5 rounded-full bg-[#BFF202] mt-1.5 shrink-0" /> Controlled growth</li>
                      <li className="flex items-start gap-2"><div className="size-1.5 rounded-full bg-[#BFF202] mt-1.5 shrink-0" /> Performance metrics</li>
                      <li className="flex items-start gap-2"><div className="size-1.5 rounded-full bg-[#BFF202] mt-1.5 shrink-0" /> Hardware validation</li>
                    </ul>
                  </div>
                </SubtractedCard>

                {/* Tech Pillar 2 (SubtractedCard) */}
                <SubtractedCard
                  color="neon"
                  ringSurface="none"
                  corner="top-left"
                  cutoutSize={56}
                  borderRadius={28}
                  disableAnimation={false}
                  floatingElement={
                    <div className="flex size-full items-center justify-center rounded-full bg-[#023a35] shadow-lg border-2 border-white ring-2 ring-[#BFF202]">
                      {(() => {
                        const Icon = techPillars[1].icon;
                        return <Icon className="size-6 text-[#BFF202]" />;
                      })()}
                    </div>
                  }
                >
                  <div className="p-6 pt-8 pl-12 text-[#011A17]">
                    <p className="font-bold text-base tracking-wide mb-2">{techPillars[1].title}</p>
                    <p className="text-sm leading-relaxed opacity-80 font-medium">{techPillars[1].desc}</p>
                  </div>
                </SubtractedCard>

                {/* Tech Pillar 3 (SubtractedCard) */}
                <SubtractedCard
                  color="dark-green"
                  ringSurface="none"
                  corner="bottom-right"
                  cutoutSize={56}
                  borderRadius={28}
                  disableAnimation={false}
                  floatingElement={
                    <div className="flex size-full items-center justify-center rounded-full bg-[#BFF202] shadow-lg border-2 border-white ring-2 ring-[#023a35]">
                      {(() => {
                        const Icon = techPillars[2].icon;
                        return <Icon className="size-6 text-[#023a35]" />;
                      })()}
                    </div>
                  }
                >
                  <div className="p-6 pb-8 pr-12 text-[#F5F0E8]">
                    <p className="font-bold text-base tracking-wide mb-2">{techPillars[2].title}</p>
                    <p className="text-sm leading-relaxed opacity-80 font-medium">{techPillars[2].desc}</p>
                  </div>
                </SubtractedCard>

              </div>
          </SubtractedCard>
        </div>

        {/* Mobile View */}
        <div className="block lg:hidden mb-6">
          <SubtractedCard
            color="white"
            ringSurface="light"
            corner="top-left"
            cutoutSize={72}
            filletSize={20}
            scoopGap={8}
            borderRadius={32}
            disableAnimation={true}
            floatingElement={
              <div className="relative size-full overflow-hidden rounded-full bg-[#F5F0E8] border-[3px] border-[#99b961] shadow-lg">
                <Image
                  src="/images/nutritech/nutritech-logo.jpeg"
                  alt="NutriTech"
                  fill
                  sizes="72px"
                  className="object-cover object-[center_40%] scale-[1.5]"
                />
              </div>
            }
          >
            {/* Header */}
            <div className="mb-6 flex flex-col pt-6 px-6 sm:px-8">
              <div className="ml-[72px] mb-6">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#99b961]/20 border border-[#99b961]/40 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-[#123b00]">
                  <span className="size-1.5 rounded-full bg-[#7a964a] animate-pulse" />
                  Active Prototype
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight text-[#06100d]">
                Project{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#7a964a] to-[#5a7333] pr-1">
                  NutriTech
                </span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#06100d]/75 font-medium">
                Sylvedha's smart agriculture initiative for scalable future farming.
              </p>
              {/* ARIS & ECES mobile highlights */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#7a964a]/30 bg-[#7a964a]/10 px-3 py-1.5 text-[10px] font-bold tracking-wide text-[#3a5c1f]">
                  <span className="size-1.5 rounded-full bg-[#7a964a]" />
                  A-RIS
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#5a7333]/30 bg-[#5a7333]/10 px-3 py-1.5 text-[10px] font-bold tracking-wide text-[#3a5c1f]">
                  <span className="size-1.5 rounded-full bg-[#5a7333]" />
                  ECES
                </span>
              </div>
            </div>

            {/* Carousel */}
            <div className="mb-6">
              <NutriTechCarousel />
            </div>

            {/* Monitoring List (Organic) */}
            <div className="rounded-[2.5rem] rounded-tl-xl p-6 mb-8 bg-white/70 backdrop-blur-md shadow-lg shadow-[#06100d]/5 border border-[#99b961]/20">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#123b00]">
                Monitors
              </p>
              <div className="flex flex-wrap gap-2.5">
                {monitored.slice(0, 6).map((item) => (
                  <span key={item} className="group flex items-center gap-2 text-xs text-[#06100d]/90 font-semibold px-3 py-2 rounded-full bg-white shadow-sm border border-[#99b961]/20">
                    <Check className="size-3.5 text-[#7a964a]" strokeWidth={3} />
                    {item}
                  </span>
                ))}
              </div>

            </div>

            {/* Mobile SubtractedCards Grid */}
            <div className="grid gap-6 mb-6">
              {/* Current Focus */}
              <SubtractedCard
                  color="black"
                  ringSurface="none"
                  corner="bottom-left"
                  cutoutSize={48}
                  borderRadius={24}
                  disableAnimation={false}
                  floatingElement={
                    <div className="flex size-full items-center justify-center rounded-full bg-[#F5F0E8] shadow-lg border-2 border-[#011A17] ring-2 ring-[#BFF202]">
                      <Check className="size-5 text-[#011A17]" />
                    </div>
                  }
                >
                  <div className="p-5 pb-6 pl-10 text-[#F5F0E8]">
                    <p className="relative text-xs font-bold uppercase tracking-[0.15em] mb-3 text-[#BFF202]">Current Focus</p>
                    <ul className="relative space-y-3 text-sm opacity-90 font-medium">
                      <li className="flex items-start gap-2"><div className="size-1.5 rounded-full bg-[#BFF202] mt-1.5 shrink-0" /> Controlled growth</li>
                      <li className="flex items-start gap-2"><div className="size-1.5 rounded-full bg-[#BFF202] mt-1.5 shrink-0" /> Hardware validation</li>
                    </ul>
                  </div>
              </SubtractedCard>
            </div>
          </SubtractedCard>
        </div>

        {/* Action Button */}
        <div className="mt-10 flex justify-end">
          <a
            href="/projects"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-[#BFF202]/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#BFF202] hover:bg-[#BFF202] hover:text-[#011A17] hover:shadow-[0_0_30px_rgba(191,242,2,0.6)] hover:-translate-y-1"
          >
            View Upcoming Projects
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  )
}
