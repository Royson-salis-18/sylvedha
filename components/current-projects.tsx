"use client"

import { NutriTechCarousel } from "./nutritech-carousel"
import { Check, Cpu, Cloud, BarChart3, Zap, Leaf, Database, ArrowRight } from "lucide-react"

const monitored = [
  "Soil Moisture", "Temperature", "Humidity", "pH Level",
  "EC / Nutrients", "Water Level", "Light Condition", "Irrigation Activity",
]

const techPillars = [
  { icon: Cpu,      title: "IoT & Sensors",    desc: "ESP32-based nodes monitoring soil, water, air, and light in real time." },
  { icon: Zap,      title: "Automation",        desc: "Rule-based control of pumps, valves, fans, and irrigation lines." },
  { icon: Cloud,    title: "Cloud Layer",        desc: "Structured storage of sensor readings, logs, and growth records." },
  { icon: BarChart3,title: "Dashboard",         desc: "Live graphs, alerts, device status, and crop-wise visualization." },
  { icon: Leaf,     title: "Controlled Env.",   desc: "Experimental plant setup for testing sensors, logic, and data methods." },
  { icon: Database, title: "AI Foundation",     desc: "Every data point builds a dataset for future crop-intelligence AI." },
]

export function CurrentProjects() {
  return (
    <section
      id="current-projects"
      className="relative overflow-hidden bg-[#01312D] text-white min-h-[100svh] flex flex-col justify-center"
    >
      {/* Background glows */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-[#BFF202]/4 blur-[200px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-[#3A7717]/10 blur-[160px] pointer-events-none" />

      {/* Geometric accents */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#BFF202]/30 via-white/10 to-transparent" />
        <div className="absolute top-0 right-0 w-20 h-[3px] bg-[#BFF202]/50" />
        <div className="absolute right-8 top-8 h-14 w-14 border-r-2 border-t-2 border-[#BFF202]/30" />
        <div className="absolute left-8 bottom-8 h-10 w-10 border-l-2 border-b-2 border-[#BFF202]/15" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BFF202]/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-10">
          <p className="animate-on-scroll inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#BFF202] backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            <img src="/images/logo-mark.webp" alt="Sylvedha" width={12} height={14} className="h-3.5 w-auto object-contain invert brightness-200" />
            Current Projects
          </p>
          <div className="flex-1 h-px bg-gradient-to-r from-[#BFF202]/20 to-transparent" />
        </div>

        {/* NutriTech header */}
        <div className="animate-on-scroll mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 rounded-xl bg-[#BFF202] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#01312D]">
              <span className="size-1.5 rounded-full bg-[#01312D] animate-pulse" />
              Active — Prototype Stage
            </span>
            <span className="rounded-xl border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-white/50">
              Agritech · AI · IoT
            </span>
          </div>
          <h2 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
            Project <span className="italic text-[#BFF202]">NutriTech</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
            Sylvedha's smart agriculture initiative — combining IoT sensing, controlled-environment plant
            growth experiments, automation, and cloud data storage to build the foundation for
            AI-powered farming intelligence.
          </p>
        </div>

        {/* Carousel + monitoring */}
        <div className="animate-on-scroll grid lg:grid-cols-2 gap-6 mb-6">
          {/* Carousel */}
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#BFF202]">
              Experimental Setup — Photos &amp; Video
            </p>
            <NutriTechCarousel />
          </div>

          {/* What it monitors */}
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 flex flex-col">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#BFF202]">
              What the Setup Monitors
            </p>
            <div className="grid grid-cols-2 gap-3 flex-1">
              {monitored.map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm text-white/80">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#BFF202]/15">
                    <Check className="size-3 text-[#BFF202]" />
                  </span>
                  {item}
                </span>
              ))}
            </div>

            {/* Current focus */}
            <div className="mt-6 rounded-2xl border border-[#BFF202]/15 bg-[#BFF202]/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#BFF202] mb-3">Current Focus</p>
              <ul className="space-y-1.5 text-sm text-white/70">
                <li>• Testing sensors and automation systems</li>
                <li>• Collecting real-time plant &amp; environmental data</li>
                <li>• Building cloud storage &amp; monitoring dashboards</li>
                <li>• Creating a dataset for future AI models</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tech pillars */}
        <div className="animate-on-scroll rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 mb-6">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#BFF202]">
            Technology Layers
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
            {techPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="animate-on-scroll group flex gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition-all duration-300 hover:border-[#BFF202]/20 hover:bg-white/[0.06]"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#BFF202]/10 group-hover:bg-[#BFF202]/20 transition-colors duration-300">
                  <pillar.icon className="size-4 text-[#BFF202]" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-white">{pillar.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/55">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row: spacer + CTA button */}
        <div className="flex justify-end">
          <a
            href="/projects"
            className="group inline-flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#BFF202]/40 hover:bg-white/10 hover:text-[#BFF202]"
          >
            View Upcoming Projects
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
