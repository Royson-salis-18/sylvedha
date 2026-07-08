import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GlobalObserver } from "@/components/global-observer"
import Image from "next/image"
import { NutriTechCarousel } from "@/components/nutritech-carousel"
import { Grevara } from "@/components/grevara"
import { Check, Cpu, Cloud, BarChart3, Zap, Leaf, Database } from "lucide-react"

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
  },
]

const statusColors: Record<string, string> = {
  "Prototype Phase": "bg-[#BFF202]/10 text-[#BFF202] border border-[#BFF202]/30",
  "Planning Phase":  "bg-white/5 text-white/50 border border-white/10",
}

// ── NutriTech tech pillars ────────────────────────────────────────────────────
const techPillars = [
  {
    icon: Cpu,
    title: "Hardware Integration",
    desc: "Deploying integrated sensor modules for field monitoring.",
  },
  {
    icon: Zap,
    title: "Control Systems",
    desc: "Automated management of irrigation and climate parameters.",
  },
  {
    icon: Cloud,
    title: "Data Infrastructure",
    desc: "Secure storage for environmental and growth metrics.",
  },
  {
    icon: BarChart3,
    title: "Monitoring",
    desc: "Real-time visibility into system performance and crop status.",
  },
  {
    icon: Leaf,
    title: "Controlled Environment",
    desc: "Optimized growth chambers for consistent cultivation.",
  },
  {
    icon: Database,
    title: "Data Analytics",
    desc: "Compiling structured data to inform future agricultural solutions.",
  },
]

export default function ProjectsPage() {
  return (
    <>
      <GlobalObserver />
      <SiteHeader />
      <main className="bg-[#01312D] text-white min-h-screen">

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
              <span className="italic text-[#BFF202]">future of farming</span>
            </h1>
            <p className="animate-on-scroll mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              From long-term research pipelines to next-generation innovations — here's what Sylvedha is working on for the future.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 2 — UPCOMING PROJECTS
        ══════════════════════════════════════════════════════════════════════ */}
        <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-10">

          {/* Section label for Upcoming Projects */}
          <div className="flex items-center gap-4 mb-10">
            <span className="rounded-xl border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Upcoming Projects
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          {/* Algae Biorefinery */}
          <div className="animate-on-scroll group glass-noise grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#023a35]/90 lg:grid-cols-2 transition-all duration-500 hover:bg-[#03453f]/90 hover:shadow-2xl hover:shadow-[#BFF202]/5 hover:border-[#BFF202]/20 mb-6">
            <div className="relative min-h-72 lg:min-h-full overflow-hidden">
              <Image
                src="/images/algae-biorefinery.webp"
                alt="Green algae bioreactor tubes glowing in a modern laboratory"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="p-10 sm:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/50">
                  Planning Phase
                </span>
              </div>
              <h2 className="mt-6 font-heading text-3xl font-semibold sm:text-4xl">
                Algae Biorefinery Initiative
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/70">
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
                    className="flex items-center gap-2.5 text-sm text-white/80"
                  >
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#BFF202]/20">
                      <Check className="size-3 text-[#BFF202]" />
                    </span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Other upcoming projects grid */}
          <div className="grid gap-5 md:grid-cols-2 stagger-children pb-20">
            {upcomingProjects.map((project) => (
              <article
                key={project.title}
                className="animate-on-scroll group glass-noise flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#023a35]/90 transition-all duration-500 hover:-translate-y-1 hover:bg-[#03453f]/90 hover:shadow-xl hover:shadow-[#BFF202]/5 hover:border-[#BFF202]/20"
              >
                {project.image && (
                  <div className="relative h-52 overflow-hidden">
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
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-heading text-xl font-semibold">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{project.description}</p>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#BFF202]">
                    {project.label}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-xl border border-[#BFF202]/15 bg-[#BFF202]/5 px-3.5 py-1.5 text-xs font-medium text-[#BFF202] transition-colors group-hover:border-[#BFF202]/30 group-hover:bg-[#BFF202]/10"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
