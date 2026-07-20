import { Sprout, FlaskConical, Sun, Cpu, Recycle } from "lucide-react"
import { FloatingCubes } from "./floating-cubes"
import Image from "next/image"
import { SubtractedCard } from "./subtracted-card"
import GradientText from "./gradient-text"

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
    <section id="focus" className="relative overflow-hidden min-h-[100svh] flex flex-col justify-center">
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
            <span className="italic text-[#BFF202]"><GradientText colors={["#BFF202", "#66ff66", "#BFF202", "#66ff66", "#BFF202"]} animationSpeed={4}>one integrated</GradientText></span> platform
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 stagger-children overflow-visible">
          {areas.map((area, i) => {
            const isNeon = i === 1; // Make Biotechnology neon for variety
            const isWhite = i === 3; // Make AI white for variety
            const color = isNeon ? "neon" : isWhite ? "white" : "dark-green";
            const corner = i % 2 === 0 ? "top-right" : "bottom-left";
            
            return (
            <SubtractedCard
              key={area.title}
              color={color}
              ringSurface="dark"
              corner={corner}
              cutoutSize={56}
              className={`animate-on-scroll ${
                i === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
              floatingElement={
                <div className={`flex size-full items-center justify-center rounded-full shadow-md ${
                  isNeon ? "bg-[#012522] text-[#BFF202]" : "bg-[#BFF202] text-[#012522]"
                }`}>
                  <area.icon className="size-5" />
                </div>
              }
            >

              <h3 className={`mt-2 font-heading text-2xl font-semibold ${
                isNeon || isWhite ? "text-[#012522]" : "text-white"
              }`}>
                {area.title}
              </h3>
              <p className={`mt-3 leading-relaxed hidden sm:block ${
                isNeon || isWhite ? "text-[#012522]/80" : "text-white/90"
              }`}>
                {area.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2 relative z-10">
                {area.items.map((item) => (
                  <span
                    key={item}
                    className={`rounded-full border px-3 py-1.5 text-xs transition-all duration-300 ${
                      isNeon || isWhite 
                        ? "border-[#012522]/20 bg-[#012522]/5 text-[#012522]" 
                        : "border-white/10 bg-white/5 text-white/90"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </SubtractedCard>
          )})}
        </div>
      </div>
    </section>
  )
}
