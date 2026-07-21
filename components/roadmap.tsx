import { ArrowRight } from "lucide-react"
import { SubtractedCard } from "./subtracted-card"

const phases = [
  {
    phase: "Phase 1",
    title: "Technology Validation & Market Entry",
    items: [
      "Product Refinement",
      "Pilot Deployments",
      "Revenue Generation",
      "Data Collection",
    ],
    status: "Active",
  },
  {
    phase: "Phase 2",
    title: "Scaling Up",
    items: [
      "Industry-Scale Deployments",
      "Strategic Alliances",
      "Multi-Market Presence",
      "Vertical Integration",
    ],
    status: "Upcoming",
  },
  {
    phase: "Phase 3",
    title: "The Full Ecosystem",
    items: [
      "Something big in AgriTech",
      "Something green in Biotech",
      "Something clean in Energy",
      "You'll see.",
    ],
    status: "Future",
  },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="relative overflow-hidden bg-[#EAFDE7] text-[#01312D] min-h-[100svh] flex flex-col justify-center">
      

      <div className="mx-auto w-full max-w-none px-5 py-24 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="animate-on-scroll inline-flex items-center gap-2 rounded-full border border-[#01312D]/20 bg-[#01312D]/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#01312D]">
              Milestones
            </p>
            <h2 className="animate-on-scroll mt-6 font-heading text-4xl font-semibold leading-tight tracking-tight text-[#01312D] sm:text-5xl">
              Future Roadmap
            </h2>
          </div>
          <a
            href="#contact"
            className="animate-on-scroll inline-flex items-center gap-2 text-sm font-semibold text-[#01312D] transition-colors hover:opacity-80 group"
          >
            Join our journey
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3 stagger-children">
          {phases.map((phase, i) => (
            <div key={phase.phase} className="animate-on-scroll h-full">
              <SubtractedCard
                corner="top-left"
                cutoutSize={64}
                color={i === 0 ? "dark-green" : "white"}
                floatingElement={
                  <span 
                    className={`flex size-full items-center justify-center font-heading text-3xl font-bold leading-none ${i === 0 ? "text-[#BFF202]" : "text-[#7b9896]"}`}
                    style={i === 0 ? { WebkitTextStroke: "0.5px rgba(1, 37, 34, 0.7)" } : undefined}
                  >
                    {`0${i + 1}`}
                  </span>
                }
                className="flex h-full flex-col p-8"
              >
                <div className="flex items-center justify-end">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                    i === 0
                      ? "bg-[#BFF202] text-[#01312D]"
                      : "bg-[#012522]/10 text-[#012522]"
                  }`}>
                    {phase.status}
                  </span>
                </div>
                <div className="mt-8">
                  <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${i === 0 ? "text-[#BFF202]" : "text-[#012522]"}`}>
                    {phase.phase}
                  </p>
                  <h3 className={`mt-2 font-heading text-2xl font-semibold ${i === 0 ? "text-white" : "text-[#012522]"}`}>
                    {phase.title}
                  </h3>
                </div>
                <ul className={`mt-auto flex flex-col gap-3 border-t pt-6 pb-2 ${i === 0 ? "border-white/15" : "border-black/10"}`}>
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-center gap-3 text-sm font-medium ${i === 0 ? "text-white/90" : "text-[#012522]/80"}`}
                    >
                      <span className={`size-1.5 shrink-0 rounded-full ${i === 0 ? "bg-[#BFF202]" : "bg-[#012522]"}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </SubtractedCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
