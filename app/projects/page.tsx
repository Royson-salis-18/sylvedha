import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GlobalObserver } from "@/components/global-observer"
import { NutriTechCarousel } from "@/components/nutritech-carousel"
import { Grevara } from "@/components/grevara"
import { Check, Cpu, Cloud, BarChart3, Zap, Leaf, Database } from "lucide-react"

export const metadata: Metadata = {
  title: "Projects — SYLVEDHA",
  description:
    "Explore Sylvedha's current and upcoming projects — from Project NutriTech, our AI-ready smart agriculture initiative, to innovations in biotechnology, renewable energy, and sustainable infrastructure.",
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
              <img
                src="/images/logo-mark.webp"
                alt="Sylvedha"
                width={12}
                height={14}
                className="h-3.5 w-auto object-contain invert brightness-200"
              />
              Our Projects
            </p>
            <h1 className="animate-on-scroll mt-6 font-heading text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Building the{" "}
              <span className="italic text-[#BFF202]">future of farming</span>
            </h1>
            <p className="animate-on-scroll mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              From active prototypes and experimental setups to long-term
              research pipelines — here's what Sylvedha is working on.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 1 — CURRENT PROJECTS
        ══════════════════════════════════════════════════════════════════════ */}
        <section className="mx-auto max-w-7xl px-5 sm:px-8 pb-6">
          {/* Section label */}
          <div className="flex items-center gap-4 mb-10">
            <span className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Current Projects
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-emerald-400/20 to-transparent" />
          </div>

          {/* ── NutriTech Card ──────────────────────────────────────────────── */}
            <div className="animate-on-scroll rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-2xl relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_-8px_rgba(191,242,2,0.18)] hover:border-[#BFF202]/25">


            {/* Card header */}
            <div className="relative overflow-hidden px-10 py-10 sm:px-14 sm:py-12 border-b border-white/10 bg-white/[0.02]">
              <div className="relative flex flex-wrap items-start justify-between gap-6">
                <div className="flex flex-wrap items-start gap-5">
                  {/* Logo */}
                  <div className="size-28 overflow-hidden rounded-full shadow-xl shadow-black/40 relative flex-shrink-0" style={{ border: "1.5px solid rgba(245,240,232,0.25)", background: "#F5F0E8" }}>
                    <img
                      src="/images/nutritech/nutritech-logo.jpeg"
                      alt="NutriTech"
                      className="absolute inset-0 size-full object-cover object-[center_40%] scale-[1.6] transition-transform duration-700 hover:scale-[1.7]"
                    />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#BFF202]/15 border border-[#BFF202]/30 px-5 py-1.5 text-xs font-bold uppercase tracking-wide text-[#BFF202] shadow-[0_0_15px_rgba(191,242,2,0.15)]">
                        <span className="size-1.5 rounded-full bg-[#BFF202] animate-pulse" />
                        Active — Prototype Stage
                      </span>
                      <span className="rounded-full border border-[#F5F0E8]/20 bg-[#F5F0E8]/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-[#F5F0E8]/70 backdrop-blur-sm">
                        Agritech · IoT · Automation
                      </span>
                    </div>
                    <h2 className="font-heading text-4xl font-bold sm:text-5xl tracking-tight text-[#F5F0E8]">
                      Project{" "}
                      <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#BFF202] to-[#9ED600]">NutriTech</span>
                    </h2>
                    <p className="mt-3 text-sm font-medium uppercase tracking-[0.15em] text-[#F5F0E8]/40">
                      Sylvedha's Smart Agriculture Initiative
                    </p>
                  </div>
                </div>
              </div>
              <p className="relative mt-6 max-w-3xl text-lg leading-relaxed text-[#F5F0E8]/70">
                NutriTech is Sylvedha's long-term smart agriculture
                initiative — combining environmental sensing, controlled
                growth experiments, automation, and digital infrastructure
                to build a practical foundation for advanced farming solutions.
              </p>
            </div>

            {/* Carousel + overview */}
            <div className="grid lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x border-b border-white/10" style={{ borderColor: "rgba(255,255,255,0.1)" }}>

              {/* Carousel */}
              <div className="p-8 sm:p-10">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#BFF202]">
                  Experimental Setup — Photos &amp; Video
                </p>
                <NutriTechCarousel />
                <p className="mt-4 text-xs italic text-center text-[#F5F0E8]/30">
                  Real photos and video of the NutriTech prototype setup — add your media to{" "}
                  <code className="font-mono text-[#F5F0E8]/40">components/nutritech-carousel.tsx</code>
                </p>
              </div>

              {/* What it monitors */}
              <div className="p-8 sm:p-10 flex flex-col">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#BFF202]">
                  What the Setup Monitors
                </p>
                <div className="grid grid-cols-2 gap-2.5 flex-1">
                  {[
                    "Soil Moisture",
                    "Temperature",
                    "Humidity",
                    "pH Level",
                    "EC / Nutrients",
                    "Water Level",
                    "Light Condition",
                    "Crop Growth Stage",
                    "Irrigation Activity",
                    "Sensor Status",
                    "Field / Section Data",
                    "Device Activity",
                  ].map((item) => (
                    <span
                      key={item}
                      className="flex items-center gap-2 text-sm text-[#F5F0E8]/80"
                    >
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#BFF202]/15 border border-[#BFF202]/30">
                        <Check className="size-3 text-[#BFF202]" />
                      </span>
                      {item}
                    </span>
                  ))}
                </div>

                {/* Current focus */}
                <div className="relative mt-8 rounded-2xl p-5 overflow-hidden group/focus transition-all duration-500 hover:border-[#BFF202]/40 hover:shadow-[0_10px_30px_-10px_rgba(191,242,2,0.15)]" style={{ background: "linear-gradient(135deg, rgba(191,242,2,0.08) 0%, rgba(245,240,232,0.03) 100%)", border: "1px solid rgba(191,242,2,0.2)" }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#BFF202]/0 via-[#BFF202]/5 to-[#BFF202]/0 opacity-0 group-hover/focus:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <p className="relative text-xs font-bold uppercase tracking-[0.15em] mb-3 text-[#BFF202]">
                    Current Focus
                  </p>
                  <ul className="relative space-y-2 text-sm text-[#F5F0E8]/70">
                    <li>• Testing controlled growth environments</li>
                    <li>• Gathering environmental performance metrics</li>
                    <li>• Validating integrated hardware systems</li>
                    <li>• Enhancing monitoring capabilities</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tech pillars */}
            <div className="px-8 py-10 sm:px-10 border-b border-white/10">
              <p className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-[#BFF202]">
                Technology Layers
              </p>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
                {techPillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="animate-on-scroll group flex gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#BFF202]/30 hover:bg-white/[0.06]"
                    style={{ border: "1px solid rgba(245,240,232,0.07)", background: "rgba(255,255,255,0.02)" }}
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#BFF202]/10 border border-[#BFF202]/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#BFF202]/20">
                      <pillar.icon className="size-5 text-[#BFF202]" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm tracking-wide text-[#F5F0E8]">{pillar.title}</p>
                      <p className="mt-1.5 text-xs leading-relaxed text-[#F5F0E8]/60">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Future Capabilities */}
            <div className="px-8 py-10 sm:px-10">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#BFF202]">
                Future Capabilities
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "Predictive Analytics",
                  "Resource Optimization",
                  "Automated Advisory",
                  "Environmental Resilience",
                  "Scalable Integration",
                  "Yield Improvement",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full px-4 py-1.5 text-xs font-medium transition-colors hover:border-[#BFF202]/35 border border-[#F5F0E8]/15 text-[#F5F0E8]/70 bg-[#F5F0E8]/5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════
            SECTION 2 — UPCOMING PROJECTS
        ══════════════════════════════════════════════════════════════════════ */}
        <section className="mx-auto max-w-7xl px-5 sm:px-8 py-16 pb-10">
          {/* Grevara — live brand */}
          <div className="animate-on-scroll mb-16">
            <Grevara />
          </div>

          {/* Section label for Upcoming Projects */}
          <div className="flex items-center gap-4 mb-10">
            <span className="rounded-xl border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Upcoming Projects
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          {/* Algae Biorefinery */}
          <div className="animate-on-scroll group grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 lg:grid-cols-2 transition-all duration-500 hover:shadow-2xl hover:shadow-[#BFF202]/5 hover:border-[#BFF202]/20 mb-6">
            <div className="relative min-h-72 lg:min-h-full overflow-hidden">
              <img
                src="/images/algae-biorefinery.webp"
                alt="Green algae bioreactor tubes glowing in a modern laboratory"
                loading="lazy"
                width={800}
                height={600}
                className="absolute size-full object-cover transition-transform duration-700 group-hover:scale-105"
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
                className="animate-on-scroll group flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#BFF202]/5 hover:border-[#BFF202]/20"
              >
                {project.image && (
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.imageAlt ?? ""}
                      loading="lazy"
                      width={600}
                      height={400}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
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
