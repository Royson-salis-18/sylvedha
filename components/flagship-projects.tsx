import { Check, ArrowUpRight } from "lucide-react"

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
    image: "/images/smart-agriculture.webp",
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
    image: "/images/irrigation-system.webp",
    imageAlt: "Smart automated irrigation hardware with plants, water tank, and mobile app interface",
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
    image: "/images/indoor-farming.webp",
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
    image: "/images/solar-innovation.webp",
    imageAlt: "Futuristic skyscraper with building-integrated photovoltaic solar window panels",
  },
]

export function FlagshipProjects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-background min-h-[100svh] flex flex-col justify-center">
      <div className="absolute left-0 bottom-0 -z-[1] h-[500px] w-[500px] rounded-full bg-[#3A7717]/5 blur-[150px]" />

      <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <div className="max-w-2xl">
          <p className="animate-on-scroll inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            <img src="/images/logo-icon-black.webp" alt="Sylvedha" width={8} height={14} className="h-3.5 w-auto object-contain" />
            Flagship Projects
          </p>
          <h2 className="animate-on-scroll mt-6 font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Practical innovations,{" "}
            <span className="italic text-secondary">in development</span> today
          </h2>
        </div>

        {/* Featured: Algae Biorefinery */}
        <div className="animate-on-scroll mt-16 group grid overflow-hidden rounded-[2rem] border border-border bg-card lg:grid-cols-2 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:border-[#BFF202]/20">
          <div className="relative min-h-72 lg:min-h-full overflow-hidden">
            <img
              src="/images/algae-biorefinery.webp"
              alt="Green algae bioreactor tubes glowing in a modern laboratory"
              loading="lazy"
              className="absolute size-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          <div className="p-10 sm:p-12 flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#BFF202] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#01312D] shadow-md shadow-[#BFF202]/20">
              <span className="size-1.5 rounded-full bg-[#01312D] animate-pulse" />
              Most Ambitious Project
            </span>
            <h3 className="mt-6 font-heading text-3xl font-semibold text-card-foreground sm:text-4xl">
              Algae Biorefinery Initiative
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Transforming algae into multiple high-value products through an
              integrated biorefinery approach — establishing a scalable
              ecosystem that generates economic value while contributing to
              climate resilience.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
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
                  className="flex items-center gap-2.5 text-sm text-foreground/80"
                >
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#BFF202]/20">
                    <Check className="size-3 text-[#3A7717]" />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Other projects grid */}
        <div className="mt-6 grid gap-5 md:grid-cols-2 stagger-children">
          {projects.map((project) => (
            <article
              key={project.title}
              className="animate-on-scroll group flex flex-col overflow-hidden rounded-[2rem] border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-[#BFF202]/20"
            >
              {project.image && (
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt ?? ""}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              )}
              <div className="flex flex-1 flex-col p-8">
                <h3 className="font-heading text-xl font-semibold text-card-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {project.label}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-xl border border-primary/15 bg-primary/5 px-3.5 py-1.5 text-xs font-medium text-primary transition-colors group-hover:border-primary/25 group-hover:bg-primary/10"
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
