import { Sprout, FlaskConical, Sun, Cpu, Recycle } from "lucide-react"

const areas = [
  {
    icon: Sprout,
    title: "Agriculture Technology",
    description:
      "Smart farming technologies that improve productivity, optimize resources, and make precision agriculture accessible to farms of all sizes.",
    items: [
      "Precision Agriculture",
      "AI-Based Crop Intelligence",
      "Smart Irrigation Systems",
      "Environmental Monitoring",
      "Indoor Farming",
      "Agricultural Automation",
    ],
  },
  {
    icon: FlaskConical,
    title: "Biotechnology",
    description:
      "Harnessing biological systems to create sustainable products, energy solutions, and future-focused industrial applications.",
    items: [
      "Algae Biotechnology",
      "Biomass Processing",
      "Bioproduct Development",
      "Circular Bioeconomy",
      "Sustainable Raw Materials",
      "Biorefinery Technologies",
    ],
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    description:
      "Technologies that accelerate the transition toward clean and decentralized energy systems.",
    items: [
      "Solar Innovation",
      "Algae-Based Bioenergy",
      "Renewable Energy Integration",
      "Sustainable Power Systems",
      "Energy Storage Research",
      "Green Technology Solutions",
    ],
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description:
      "Intelligent systems that transform data into actionable insights across every domain.",
    items: [
      "Artificial Intelligence",
      "Machine Learning",
      "IoT Systems",
      "Smart Sensors",
      "Predictive Analytics",
      "Automation Platforms",
    ],
  },
  {
    icon: Recycle,
    title: "Sustainability Solutions",
    description:
      "Technologies that reduce waste, increase efficiency, and contribute to long-term environmental resilience.",
    items: [
      "Circular Economy Systems",
      "Resource Optimization",
      "Carbon Reduction Technologies",
      "Water Efficiency Solutions",
      "Sustainable Infrastructure",
    ],
  },
]

export function FocusAreas() {
  return (
    <section id="focus" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Our Focus Areas
          </p>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-tight text-balance text-foreground sm:text-4xl">
            Five disciplines, one integrated platform
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <div
              key={area.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-lg"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <area.icon className="size-5" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-semibold text-card-foreground">
                {area.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {area.description}
              </p>
              <ul className="mt-5 flex flex-col gap-2 border-t border-border pt-5">
                {area.items.map((item) => (
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
