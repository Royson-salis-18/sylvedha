"use client"

import { useAnimate } from "./use-animate"
import { FloatingCubes } from "./floating-cubes"

const team = [
  {
    name: "Royson Salis",
    role: "Founder & Chief Executive Officer",
    bio: "Leading innovation strategy, research initiatives, business development, and technology vision.",
    initials: "RS",
  },
  {
    name: "Sharath",
    role: "Chief Operating Officer",
    bio: "Driving operational excellence, partnerships, implementation, and organizational growth.",
    initials: "SH",
  },
  {
    name: "Prakash Nayak",
    role: "Chief Technology Officer",
    bio: "Leading technology architecture, product development, automation systems, and engineering initiatives.",
    initials: "PN",
  },
]

export function Leadership() {
  const ref = useAnimate()

  return (
    <section id="team" ref={ref} className="relative overflow-hidden bg-[#01312D] text-white min-h-[100svh] flex flex-col justify-center">
      <FloatingCubes />
      {/* Decorative elements */}
      <div className="absolute right-0 bottom-0 -z-[1] h-[500px] w-[500px] rounded-full bg-[#3A7717]/10 blur-[200px]" />
      <div className="absolute -left-20 top-1/4 -z-[1] h-[300px] w-[300px] rounded-full bg-[#BFF202]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="animate-on-scroll inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#BFF202] backdrop-blur-sm">
            Leadership Team
          </p>
          <h2 className="animate-on-scroll mt-6 font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            The people behind{" "}
            <span className="italic text-[#BFF202]">the platform</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3 stagger-children">
          {team.map((member) => (
            <div
              key={member.name}
              className="animate-on-scroll group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center transition-all duration-500 hover:-translate-y-1 hover:border-[#BFF202]/30 hover:bg-white/[0.08]"
            >
              <div className="absolute -right-10 -top-10 size-40 rounded-full bg-[#BFF202]/0 blur-[80px] transition-all duration-500 group-hover:bg-[#BFF202]/10" />

              <span className="mx-auto flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-[#BFF202] to-[#3A7717] font-heading text-2xl font-bold text-[#01312D] transition-transform duration-500 group-hover:scale-110">
                {member.initials}
              </span>
              <h3 className="mt-6 font-heading text-2xl font-semibold text-white">
                {member.name}
              </h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#BFF202]">
                {member.role}
              </p>
              <p className="mt-4 leading-relaxed text-white/60">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
