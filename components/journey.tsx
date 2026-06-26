
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
  return (
    <section id="journey" className="relative overflow-hidden bg-background min-h-[100svh] flex flex-col justify-center">
      <div className="absolute right-0 top-1/3 -z-[1] h-[400px] w-[400px] rounded-full bg-[#BFF202]/5 blur-[150px]" />
      <div className="absolute -left-20 bottom-0 -z-[1] h-[300px] w-[300px] rounded-full bg-[#3A7717]/5 blur-[120px]" />

      <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <div className="max-w-2xl">
          <p className="animate-on-scroll inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            Company Journey
          </p>
          <h2 className="animate-on-scroll mt-6 font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            From incubation to{" "}
            <span className="italic text-secondary">working prototypes</span>
          </h2>
        </div>

        <div className="mt-16 relative stagger-children">
          {/* Vertical line with glow */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-[#BFF202]/40 to-primary/10" />
          <div className="absolute left-[18px] top-2 bottom-2 w-[3px] bg-gradient-to-b from-[#BFF202]/10 via-[#BFF202]/5 to-transparent blur-sm" />

          <div className="flex flex-col gap-10">
            {milestones.map((milestone, i) => (
              <div key={milestone.title} className="animate-on-scroll relative flex gap-8 pl-2">
                {/* Dot with pulse animation */}
                <div className="relative flex-shrink-0 mt-1.5">
                  <span className="absolute inset-0 rounded-full bg-[#BFF202]/20 animate-ping" style={{ animationDuration: "3s" }} />
                  <span className="relative z-10 flex size-9 items-center justify-center rounded-full border-2 border-primary bg-background shadow-md shadow-primary/10">
                    <span className="font-heading text-xs font-bold text-primary">
                      {`0${i + 1}`}
                    </span>
                  </span>
                </div>

                {/* Content card */}
                <div className="group flex-1 rounded-[2rem] border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5 hover:border-[#BFF202]/20">
                  <div className="flex items-start justify-between">
                    <h3 className="font-heading text-xl font-semibold text-card-foreground">
                      {milestone.title}
                    </h3>
                    <span className="flex-shrink-0 ml-4 rounded-lg bg-primary/5 px-2.5 py-1 text-xs font-bold text-primary/60">
                      {`0${i + 1}`}
                    </span>
                  </div>
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
