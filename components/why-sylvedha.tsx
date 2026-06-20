import { Layers, ShieldCheck, Wrench, FlaskRound, Rocket } from "lucide-react"

const reasons = [
  {
    icon: Layers,
    title: "Multidisciplinary Innovation",
    description:
      "We integrate expertise across agriculture, biotechnology, renewable energy, automation, and artificial intelligence.",
  },
  {
    icon: ShieldCheck,
    title: "Sustainability First",
    description:
      "Every innovation is designed with environmental responsibility and long-term sustainability in mind.",
  },
  {
    icon: Wrench,
    title: "Practical Solutions",
    description:
      "We focus on technologies that solve real-world problems and can be implemented at scale.",
  },
  {
    icon: FlaskRound,
    title: "Research Driven",
    description:
      "Continuous experimentation and data-driven development fuel our innovation pipeline.",
  },
  {
    icon: Rocket,
    title: "Future Focused",
    description:
      "We build technologies not only for today's challenges but for tomorrow's opportunities.",
  },
]

export function WhySylvedha() {
  return (
    <section className="border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
            Why SYLVEDHA
          </p>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
            Built differently, for lasting impact
          </h2>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title}>
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary-foreground/10">
                <reason.icon className="size-5" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-semibold">
                {reason.title}
              </h3>
              <p className="mt-3 leading-relaxed text-primary-foreground/75">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
