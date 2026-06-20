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
  },
]

export function Roadmap() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Future Roadmap
          </p>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-tight text-balance text-foreground sm:text-4xl">
            Our path to scale
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {phases.map((phase, i) => (
            <div
              key={phase.phase}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              <span className="font-heading text-5xl font-semibold text-primary/15">
                {`0${i + 1}`}
              </span>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
                {phase.phase}
              </p>
              <h3 className="mt-2 font-heading text-xl font-semibold text-card-foreground">
                {phase.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-2.5 border-t border-border pt-5">
                {phase.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-primary" />
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
