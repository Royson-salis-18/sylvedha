"use client"

import { useAnimate } from "./use-animate"

const milestones = [
  {
    title: "Completed K-Tech NAIN Incubation Program",
    description:
      "Successfully incubated and received support for early-stage technology development and innovation.",
    note: "The NAIN funding was given to one of the partners before the founding of the firm.",
  },
  {
    title: "Prototype Development",
    description:
      "Developed multiple working prototypes including the Agriculture Real-Time Intelligence Sensor (ARIS), Environmental Controlled Experiment Setup (ECES), and Smart Irrigation Automation System.",
  },
  {
    title: "Industry Showcases",
    description:
      "Presented innovations at major technology and academic platforms, receiving validation and feedback from industry experts and stakeholders.",
  },
  {
    title: "Ongoing Development",
    description:
      "Currently advancing projects in algae biorefinery technology, smart agriculture systems, indoor farming infrastructure, renewable energy, and AI-based agricultural intelligence.",
  },
]

export function Journey() {
  const ref = useAnimate()

  return (
    <section id="journey" ref={ref} className="relative overflow-hidden bg-background min-h-[100svh] flex flex-col justify-center">
      <div className="absolute right-0 top-1/3 -z-[1] h-[400px] w-[400px] rounded-full bg-[#BFF202]/5 blur-[150px]" />

      <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <div className="max-w-2xl">
          <p className="animate-on-scroll inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Company Journey
          </p>
          <h2 className="animate-on-scroll mt-6 font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            From incubation to{" "}
            <span className="italic text-secondary">working prototypes</span>
          </h2>
        </div>

        <div className="mt-16 relative stagger-children">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-[#BFF202]/40 to-primary/10" />

          <div className="flex flex-col gap-10">
            {milestones.map((milestone, i) => (
              <div key={milestone.title} className="animate-on-scroll relative flex gap-8 pl-2">
                {/* Dot */}
                <div className="relative flex-shrink-0 mt-1.5">
                  <span className="relative z-10 flex size-9 items-center justify-center rounded-full border-2 border-primary bg-background">
                    <span className="font-heading text-xs font-bold text-primary">
                      {`0${i + 1}`}
                    </span>
                  </span>
                </div>

                {/* Content */}
                <div className="group flex-1 rounded-[2rem] border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5">
                  <h3 className="font-heading text-xl font-semibold text-card-foreground">
                    {milestone.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {milestone.description}
                  </p>
                  {milestone.note && (
                    <p className="mt-4 flex items-start gap-2 rounded-xl border border-[#BFF202]/20 bg-[#BFF202]/5 px-4 py-3 text-sm font-medium text-primary">
                      <span className="mt-0.5 text-[#BFF202]">*</span>
                      {milestone.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
