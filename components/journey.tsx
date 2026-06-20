const milestones = [
  {
    title: "Completed K-Tech NAIN Incubation Program",
    description:
      "Successfully incubated and received support for early-stage technology development and innovation.",
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
    <section id="journey" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Company Journey
          </p>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-tight text-balance text-foreground sm:text-4xl">
            From incubation to working prototypes
          </h2>
        </div>

        <ol className="mt-14 border-l border-border">
          {milestones.map((milestone, i) => (
            <li key={milestone.title} className="relative pb-10 pl-8 last:pb-0">
              <span className="absolute -left-[7px] top-1 flex size-3.5 items-center justify-center rounded-full border-2 border-primary bg-background" />
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-primary">
                {`Step 0${i + 1}`}
              </span>
              <h3 className="mt-1.5 font-heading text-xl font-semibold text-foreground">
                {milestone.title}
              </h3>
              <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">
                {milestone.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
