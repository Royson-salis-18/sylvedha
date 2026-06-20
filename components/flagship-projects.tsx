import { Check } from "lucide-react"

const projects = [
  {
    title: "AI-Powered Agricultural Intelligence Platform",
    description:
      "An integrated system combining environmental sensing, AI analytics, and automation to provide actionable insights for smarter farming decisions.",
    label: "Features",
    items: [
      "Soil Analysis",
      "Environmental Monitoring",
      "Crop Recommendation Engine",
      "AI Data Processing",
      "Predictive Farming Insights",
    ],
    image: "/images/smart-agriculture.png",
    imageAlt: "Smart agriculture sensor planted in soil among green crops",
  },
  {
    title: "Smart Automated Irrigation System",
    description:
      "A retrofit-friendly irrigation automation platform that helps farms, gardens, and nurseries reduce water consumption while improving crop health.",
    label: "Benefits",
    items: [
      "Reduced Water Usage",
      "Automated Scheduling",
      "Sensor-Based Control",
      "Affordable Deployment",
      "Easy Integration",
    ],
  },
  {
    title: "Indoor Farming & Controlled Environment Agriculture",
    description:
      "Advanced growing systems capable of producing high-quality crops regardless of season or location.",
    label: "Applications",
    items: [
      "Microgreens Production",
      "Urban Farming",
      "Vertical Farming",
      "Controlled Environment Cultivation",
      "Commercial Indoor Farming",
    ],
    image: "/images/indoor-farming.png",
    imageAlt: "Rows of microgreens growing under LED lights in a vertical farm",
  },
  {
    title: "Next Generation Solar Innovation Program",
    description:
      "Research and development focused on improving solar energy accessibility and deployment for urban and rural environments.",
    label: "Current Research",
    items: [
      "Window-Mounted Solar Systems",
      "Modular Solar Technologies",
      "Smart Energy Integration",
      "Urban Renewable Energy Solutions",
    ],
  },
]

export function FlagshipProjects() {
  return (
    <section id="projects" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Flagship Projects
          </p>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-tight text-balance text-foreground sm:text-4xl">
            Practical innovations, in development today
          </h2>
        </div>

        {/* Featured: Algae Biorefinery */}
        <div className="mt-14 grid overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-2">
          <div className="relative min-h-64 lg:min-h-full">
            <img
              src="/images/algae-biorefinery.png"
              alt="Green algae bioreactor tubes glowing in a modern laboratory"
              className="absolute size-full object-cover"
            />
          </div>
          <div className="p-8 sm:p-10">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary">
              Most Ambitious Project
            </span>
            <h3 className="mt-4 font-heading text-2xl font-semibold text-card-foreground sm:text-3xl">
              Algae Biorefinery Initiative
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Transforming algae into multiple high-value products through an
              integrated biorefinery approach — establishing a scalable
              ecosystem that generates economic value while contributing to
              climate resilience and sustainable industrial development.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {[
                "Algae Cultivation",
                "High-Value Bioproducts",
                "Nutraceutical Production",
                "Biofertilizers",
                "Carbon Capture Utilization",
                "Bioenergy Generation",
                "Circular Waste Conversion",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-sm text-foreground/80"
                >
                  <Check className="size-4 shrink-0 text-primary" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Other projects */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
            >
              {project.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.imageAlt ?? ""}
                    className="size-full object-cover"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-heading text-lg font-semibold text-card-foreground">
                  {project.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <p className="mt-5 text-xs font-medium uppercase tracking-[0.15em] text-primary">
                  {project.label}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
