import { Sprout, FlaskConical, Sun, Cpu, Recycle } from "lucide-react"
import { FloatingCubes } from "./floating-cubes"
import Image from "next/image"

const areas = [
  {
    icon: Sprout,
    title: "Agriculture Technology",
    description:
      "Smart farming technologies that improve productivity, optimize resources, and make precision agriculture accessible.",
    items: [
      "Precision Agriculture",
      "AI-Based Crop Intelligence",
      "Smart Irrigation Systems",
      "Environmental Monitoring",
      "Indoor Farming",
      "Agricultural Automation",
    ],
    accent: "#BFF202",
  },
  {
    icon: FlaskConical,
    title: "Biotechnology",
    description:
      "Harnessing biological systems to create sustainable products, energy solutions, and future-focused applications.",
    items: [
      "Algae Biotechnology",
      "Biomass Processing",
      "Bioproduct Development",
      "Circular Bioeconomy",
      "Sustainable Raw Materials",
      "Biorefinery Technologies",
    ],
    accent: "#BFF202",
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
    accent: "#BFF202",
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
    accent: "#BFF202",
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
    accent: "#BFF202",
  },
]

export function FocusAreas() {
  return (
    <section id="focus" className="relative overflow-hidden bg-primary min-h-[100svh] flex flex-col justify-center">
      <FloatingCubes />
      {/* Decorative grid */}
      <div className="absolute inset-0 -z-[1] opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <div className="max-w-2xl">
          <p className="animate-on-scroll inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#BFF202] backdrop-blur-sm">
            <span className="relative h-3.5 w-3 block">
              <Image src="/images/logo-mark.webp" alt="Sylvedha" fill sizes="12px" className="object-contain invert brightness-200" />
            </span>
            Our Focus Areas
          </p>
          <h2 className="animate-on-scroll mt-6 font-heading text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Five disciplines,{" "}
            <span className="italic text-[#BFF202]">one integrated</span> platform
          </h2>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3 stagger-children">
          {areas.map((area, i) => (
            <div
              key={area.title}
              className={`animate-on-scroll group glass-noise relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#023a35]/90 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#BFF202]/40 hover:bg-[#03453f]/90 hover:shadow-[0_0_40px_-10px_rgba(191,242,2,0.15)] ${
                i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <div className="absolute -right-10 -top-10 size-40 rounded-full blur-[80px] transition-all duration-500 group-hover:opacity-100 opacity-0" style={{ background: area.accent }} />

              <span className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-500 group-hover:bg-[#BFF202]/15 group-hover:scale-110 group-hover:border-[#BFF202]/30" style={{ color: area.accent }}>
                <area.icon className="size-6" />
              </span>
              <h3 className="mt-6 font-heading text-2xl font-semibold text-white">
                {area.title}
              </h3>
              <p className="mt-3 leading-relaxed text-white/90 hidden sm:block">
                {area.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {area.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/90 transition-all duration-300 group-hover:border-[#BFF202]/30 group-hover:bg-white/10 group-hover:shadow-[0_0_10px_rgba(191,242,2,0.1)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
