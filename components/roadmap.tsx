"use client"

import { ArrowRight } from "lucide-react"
import { useAnimate } from "./use-animate"

const phases = [
  {
    phase: "Phase 1",
    title: "Technology Validation & Market Entry",
    items: [
      "Product Refinement",
      "Pilot Deployments",
      "Revenue Generation",
      "Data Collection",
    ],
    status: "Active",
  },
  {
    phase: "Phase 2",
    title: "Commercial Expansion",
    items: [
      "Large Scale Deployments",
      "Strategic Partnerships",
      "Regional Growth",
      "Platform Development",
    ],
    status: "Upcoming",
  },
  {
    phase: "Phase 3",
    title: "Integrated Sustainability Ecosystem",
    items: [
      "AI Agriculture Network",
      "Algae Biorefinery Commercialization",
      "Renewable Energy Solutions",
      "Global Expansion",
    ],
    status: "Future",
  },
]

export function Roadmap() {
  const ref = useAnimate()

  return (
    <section ref={ref} className="relative overflow-hidden bg-background min-h-[100svh] flex flex-col justify-center">
      <div className="absolute left-1/2 top-0 -z-[1] h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#3A7717]/5 blur-[200px]" />

      <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="animate-on-scroll inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Future Roadmap
            </p>
            <h2 className="animate-on-scroll mt-6 font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
              Our path to <span className="italic text-secondary">scale</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="animate-on-scroll inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary group"
          >
            Join our journey
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3 stagger-children">
          {phases.map((phase, i) => (
            <div
              key={phase.phase}
              className={`animate-on-scroll group relative flex flex-col overflow-hidden rounded-[2rem] border p-10 transition-all duration-500 hover:-translate-y-1 ${
                i === 0
                  ? "border-[#BFF202]/30 bg-primary text-white hover:shadow-2xl hover:shadow-primary/20"
                  : "border-border bg-card hover:shadow-xl hover:shadow-primary/5"
              }`}
            >
              {i === 0 && (
                <div className="absolute -right-10 -top-10 size-40 rounded-full bg-[#BFF202]/10 blur-[80px]" />
              )}

              <div className="flex items-center justify-between">
                <span className={`font-heading text-6xl font-bold ${i === 0 ? "text-white/10" : "text-primary/10"}`}>
                  {`0${i + 1}`}
                </span>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                  i === 0
                    ? "bg-[#BFF202] text-[#01312D]"
                    : "bg-primary/5 text-primary"
                }`}>
                  {phase.status}
                </span>
              </div>
              <p className={`mt-2 text-xs font-semibold uppercase tracking-[0.2em] ${i === 0 ? "text-[#BFF202]" : "text-primary"}`}>
                {phase.phase}
              </p>
              <h3 className={`mt-2 font-heading text-2xl font-semibold ${i === 0 ? "text-white" : "text-card-foreground"}`}>
                {phase.title}
              </h3>
              <ul className={`mt-6 flex flex-col gap-3 border-t pt-6 ${i === 0 ? "border-white/15" : "border-border"}`}>
                {phase.items.map((item) => (
                  <li
                    key={item}
                    className={`flex items-center gap-3 text-sm ${i === 0 ? "text-white/90" : "text-foreground/75"}`}
                  >
                    <span className={`size-2 shrink-0 rounded-full ${i === 0 ? "bg-[#BFF202]" : "bg-primary"}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
