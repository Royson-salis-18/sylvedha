import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GlobalObserver } from "@/components/global-observer"
import Image from "next/image"
import { Check, Cpu, Cloud, BarChart3, Zap, Leaf, Database, ArrowUpRight } from "lucide-react"
import { SubtractedCard } from "@/components/subtracted-card"
import GradientText from "@/components/gradient-text"

export const metadata: Metadata = {
  title: "Upcoming Projects — SYLVEDHA",
  description:
    "Explore Sylvedha's upcoming projects — innovations in biotechnology, renewable energy, and sustainable infrastructure.",
}

// ── Upcoming projects ─────────────────────────────────────────────────────────
const upcomingProjects = [
  {
    title: "AI-Powered Agricultural Intelligence Platform",
    description:
      "An integrated system combining environmental sensing, AI analytics, and automation to provide actionable insights for smarter farming decisions.",
    label: "Planned Features",
    items: [
      "Soil Analysis",
      "Environmental Monitoring",
      "Crop Recommendation Engine",
      "AI Data Processing",
      "Predictive Farming Insights",
    ],
    image: "/images/smart-agriculture.webp",
    imageAlt: "Smart agriculture sensor planted in soil among green crops",
    status: "Prototype Phase",
    icon: Cpu,
  },
  {
    title: "Smart Automated Irrigation System",
    description:
      "A retrofit-friendly irrigation automation platform that helps farms, gardens, and nurseries reduce water consumption while improving crop health.",
    label: "Planned Benefits",
    items: [
      "Reduced Water Usage",
      "Automated Scheduling",
      "Sensor-Based Control",
      "Affordable Deployment",
      "Easy Integration",
    ],
    image: "/images/irrigation-system.webp",
    imageAlt:
      "Smart automated irrigation hardware with plants, water tank, and mobile app interface",
    status: "Prototype Phase",
    icon: Cloud,
  },
  {
    title: "Indoor Farming & Controlled Environment Agriculture",
    description:
      "Advanced growing systems capable of producing high-quality crops regardless of season or location.",
    label: "Planned Applications",
    items: [
      "Microgreens Production",
      "Urban Farming",
      "Vertical Farming",
      "Controlled Environment Cultivation",
      "Commercial Indoor Farming",
    ],
    image: "/images/indoor-farming.webp",
    imageAlt: "Rows of microgreens growing under LED lights in a vertical farm",
    status: "Planning Phase",
    icon: Leaf,
  },
  {
    title: "Next Generation Solar Innovation Program",
    description:
      "Research and development focused on improving solar energy accessibility and deployment for urban and rural environments.",
    label: "Research Areas",
    items: [
      "Window-Mounted Solar Systems",
      "Modular Solar Technologies",
      "Smart Energy Integration",
      "Urban Renewable Energy Solutions",
    ],
    image: "/images/solar-innovation.webp",
    imageAlt:
      "Futuristic skyscraper with building-integrated photovoltaic solar window panels",
    status: "Planning Phase",
    icon: BarChart3,
  },
]

const statusColors: Record<string, string> = {
  "Prototype Phase": "bg-[#BFF202]/10 text-[#BFF202] border border-[#BFF202]/30",
  "Planning Phase":  "bg-white/5 text-white/50 border border-white/10",
}

export default function ProjectsPage() {
  return (
    <>
      <GlobalObserver />
      <SiteHeader />
      <main className="bg-transparent text-white min-h-screen overflow-x-hidden">

        {/* ── Page hero ─────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-40 pb-16">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-[#BFF202]/5 blur-[180px] pointer-events-none" />
          <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-[#3A7717]/10 blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BFF202]/20 to-transparent" />
            <div className="absolute top-24 right-12 h-14 w-14 border-r-2 border-t-2 border-[#BFF202]/30" />
            <div className="absolute top-24 left-12 h-10 w-10 border-l-2 border-t-2 border-white/10" />
          </div>
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 text-center">
            <p className="animate-on-scroll inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#BFF202] backdrop-blur-sm">
              <span className="relative h-3.5 w-3 block">
                <Image
                  src="/images/logo-mark.webp"
                  alt="Sylvedha"
                  fill
                  sizes="12px"
                  className="object-contain invert brightness-200"
                />
              </span>
              Upcoming Projects
            </p>
            <h1 className="animate-on-scroll mt-6 font-heading text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Building the{" "}
              <span className="italic text-[#BFF202]"><GradientText colors={["#BFF202", "#66ff66", "#BFF202", "#66ff66", "#BFF202"]} animationSpeed={4}>future of farming</GradientText></span>
            </h1>
            <p className="animate-on-scroll mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              From long-term research pipelines to next-generation innovations — here&apos;s what Sylvedha is working on for the future.
            </p>
          </div>
        </section>

        {/* ── Upcoming Projects ─────────────────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-16 pb-20">

          {/* Section label */}
          <div className="flex items-center gap-4 mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#BFF202]/20 bg-[#BFF202]/8 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#BFF202] backdrop-blur-md shadow-[0_0_20px_rgba(191,242,2,0.10)]">
              <GradientText colors={["#BFF202", "#66ff66", "#BFF202", "#66ff66", "#BFF202"]} animationSpeed={4}>Upcoming Projects</GradientText>
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-[#BFF202]/25 to-transparent" />
          </div>

                    {/* ── Algae Biorefinery — featured wide card ── */}
          <SubtractedCard
            corner="top-right"
            cutoutSize={72}
            color="#eee9df"
            ringSurface="light"
            floatingElement={
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#011a17] text-[#BFF202]">
                <ArrowUpRight className="size-6" />
              </div>
            }
            className="animate-on-scroll mb-8 group"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Image */}
              <div className="relative min-h-72 lg:min-h-[360px] overflow-hidden rounded-3xl">
                <Image
                  src="/images/algae-biorefinery.webp"
                  alt="Green algae bioreactor tubes glowing in a modern laboratory"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center py-4 pr-4">
                <span className="inline-flex w-fit items-center gap-2 rounded-xl border border-[#011a17]/10 bg-[#011a17]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#011a17]/60 mb-6">
                  Planning Phase
                </span>
                <h2 className="font-heading text-3xl font-semibold sm:text-4xl text-[#06100d]">
                  Algae Biorefinery Initiative
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-[#06100d]/70">
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
                      className="flex items-center gap-2.5 text-sm font-medium text-[#06100d]/80"
                    >
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#011a17]">
                        <Check className="size-3 text-[#BFF202]" />
                      </span>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </SubtractedCard>

          {/* ── Other upcoming projects grid ── */}
          <div className="grid gap-6 md:grid-cols-2 stagger-children pb-4">
            {upcomingProjects.map((project, index) => {
              const Icon = project.icon
              const themes = [
                {
                  color: "#eee9df",
                  ringSurface: "light" as const,
                  iconContainer: "bg-[#011a17] text-[#BFF202]",
                  textColor: "text-[#06100d]",
                  descColor: "text-[#06100d]/70",
                  labelColor: "text-[#123b00]",
                  pillClass: "border-[#011a17]/15 bg-[#011a17]/5 text-[#011a17] group-hover:border-[#011a17]/30 group-hover:bg-[#011a17]/10"
                },
                {
                  color: "#023a35",
                  ringSurface: "dark" as const,
                  iconContainer: "bg-[#BFF202] text-[#023a35]",
                  textColor: "text-white",
                  descColor: "text-white/70",
                  labelColor: "text-[#BFF202]",
                  pillClass: "border-[#BFF202]/15 bg-[#BFF202]/5 text-[#BFF202] group-hover:border-[#BFF202]/30 group-hover:bg-[#BFF202]/10"
                },
                {
                  color: "#BFF202",
                  ringSurface: "light" as const,
                  iconContainer: "bg-[#011a17] text-[#BFF202]",
                  textColor: "text-[#01312D]",
                  descColor: "text-[#01312D]/80",
                  labelColor: "text-[#011a17]",
                  pillClass: "border-[#011a17]/15 bg-[#011a17]/5 text-[#011a17] group-hover:border-[#011a17]/30 group-hover:bg-[#011a17]/10"
                }
              ]
              const theme = themes[index % themes.length]

              return (
                <SubtractedCard
                  key={project.title}
                  corner="bottom-right"
                  cutoutSize={64}
                  color={theme.color}
                  ringSurface={theme.ringSurface}
                  floatingElement={
                    <div className={`flex h-full w-full items-center justify-center rounded-full ${theme.iconContainer}`}>
                      <Icon className="size-5" />
                    </div>
                  }
                  className="animate-on-scroll group"
                >
                  <div className={`flex flex-col h-full ${theme.textColor}`}>
                    {/* Image */}
                    {project.image && (
                      <div className="relative h-52 overflow-hidden rounded-[1.5rem] mb-6 shrink-0">
                        <Image
                          src={project.image}
                          alt={project.imageAlt ?? ""}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        <span
                          className={`absolute top-3 left-3 rounded-xl px-3 py-1 text-xs font-semibold uppercase tracking-wide ${statusColors[project.status] ?? ""}`}
                        >
                          {project.status}
                        </span>
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex flex-1 flex-col">
                      <h3 className="font-heading text-xl font-semibold">{project.title}</h3>
                      <p className={`mt-3 text-sm leading-relaxed ${theme.descColor}`}>{project.description}</p>
                      <p className={`mt-6 text-xs font-bold uppercase tracking-[0.2em] ${theme.labelColor}`}>
                        {project.label}
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {project.items.map((item) => (
                          <li
                            key={item}
                            className={`rounded-xl border px-3.5 py-1.5 text-xs font-bold transition-colors ${theme.pillClass}`}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SubtractedCard>
              )
            })}
          </div>

        </section>
      </main>
      <SiteFooter />
    </>
  )
}
