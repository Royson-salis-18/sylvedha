import { Layers, ShieldCheck, Wrench, FlaskRound, Rocket } from "lucide-react"
import { FloatingCubes } from "./floating-cubes"
import Image from "next/image"
import { SubtractedCard } from "./subtracted-card"

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
      "No whitepapers gathering dust. Our tech ships, deploys, and works in the field.",
  },
  {
    icon: FlaskRound,
    title: "Research Driven",
    description:
      "Every hypothesis tested. Every result kept. Our pipeline runs on curiosity and data in equal measure.",
  },
  {
    icon: Rocket,
    title: "Future Focused",
    description:
      "We're already working on the problems that don't officially exist yet.",
  },
]

export function WhySylvedha() {
  return (
    <section id="why-sylvedha" className="relative overflow-hidden bg-[#01312D] text-white min-h-[100svh] flex flex-col justify-center">
      <FloatingCubes />
      {/* Background glow */}
      <div className="absolute left-1/2 top-0 -z-[1] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#BFF202]/5 blur-[200px]" />
      <div className="absolute right-0 bottom-1/4 -z-[1] h-[400px] w-[400px] rounded-full bg-[#3A7717]/15 blur-[150px]" />

      {/* Sharp geometric accents */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#BFF202]/40 via-white/10 to-transparent" />
        <div className="absolute top-0 left-0 w-20 h-[3px] bg-[#BFF202]" />
        <div className="absolute left-8 top-8 h-14 w-14 border-l-2 border-t-2 border-[#BFF202]/35" />
        <div className="absolute right-8 bottom-8 h-14 w-14 border-r-2 border-b-2 border-[#BFF202]/20" />
        <div className="absolute right-0 top-0 h-[30%] w-px bg-gradient-to-b from-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BFF202]/15 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <div className="max-w-2xl">
          <p className="animate-on-scroll inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#BFF202] backdrop-blur-sm">
            <span className="relative h-3.5 w-3 block">
              <Image src="/images/logo-mark.webp" alt="Sylvedha" fill sizes="12px" className="object-contain invert brightness-200" />
            </span>
            Why <span className="font-sans font-bold">SYLVEDHA</span>
          </p>
          <h2 className="animate-on-scroll mt-6 font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Built differently, for{" "}
            <span className="italic text-[#BFF202]">lasting impact</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
          {reasons.map((reason, i) => {
            const isDark = i === 2 || i === 3;
            const color = isDark ? "dark-green" : "white";
            const corner = i % 2 === 0 ? "top-right" : "bottom-left";
            return (
            <SubtractedCard
              key={reason.title}
              color={color}
              ringSurface="dark"
              corner={corner}
              cutoutSize={56}
              className={`animate-on-scroll ${
                i === 0 || i === 3 ? "lg:col-span-2" : "col-span-1"
              }`}
              floatingElement={
                <div className={`flex size-full items-center justify-center rounded-full shadow-md ${
                  isDark ? "bg-[#BFF202] text-[#012522]" : "bg-[#012522] text-[#BFF202]"
                }`}>
                  <reason.icon className="size-5" />
                </div>
              }
            >
              <h3 className={`mt-2 font-heading text-2xl font-semibold ${isDark ? "text-white" : "text-[#012522]"}`}>
                {reason.title}
              </h3>
              <p className={`mt-2 sm:mt-3 text-base sm:text-lg leading-relaxed hidden sm:block ${isDark ? "text-white/90" : "text-[#012522]/80"}`}>
                {reason.description}
              </p>
            </SubtractedCard>
          )})}
        </div>
      </div>
    </section>
  )
}
