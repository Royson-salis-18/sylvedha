import { FloatingCubes } from "./floating-cubes"
import { Mail, Phone } from "lucide-react"
import Image from "next/image"

const team = [
  {
    name: "Royson Salis",
    role: "Co-Founder & CEO",
    fullRole: "Chief Executive Officer",
    bio: "Innovation strategy, research & business development.",
    image: "/images/team-royson.jpg",
    email: "royson.ceo@sylvedha.com",
    phone: "+91 77950 70676",
  },
  {
    name: "Sharath",
    role: "Co-Founder & COO",
    fullRole: "Chief Operating Officer",
    bio: "Operational excellence, partnerships & organisational growth.",
    image: "/images/team-sharath.jpg",
    email: "sharath.coo@sylvedha.com",
    phone: "+91 96323 97595",
  },
  {
    name: "Prakash Nayak",
    role: "Co-Founder & CTO",
    fullRole: "Chief Technology Officer",
    bio: "Technology architecture, product development & automation.",
    image: "/images/team-prakash.jpg",
    email: "prakash.cto@sylvedha.com",
    phone: "+91 82771 51149",
  },
]

export function Leadership() {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-[#01312D] text-white min-h-[100svh] flex flex-col justify-center"
    >
      <FloatingCubes />

      {/* Ambient glow */}
      <div className="absolute right-0 bottom-0 -z-[1] h-[600px] w-[600px] rounded-full bg-[#3A7717]/10 blur-[200px]" />
      <div className="absolute -left-32 top-1/3 -z-[1] h-[400px] w-[400px] rounded-full bg-[#BFF202]/5 blur-[140px]" />
      <div className="absolute left-1/2 top-0 -z-[1] h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#BFF202]/4 blur-[130px]" />

      {/* Section chrome */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#BFF202]/40 via-white/10 to-transparent" />
        <div className="absolute top-0 right-0 w-24 h-[3px] bg-[#BFF202]/60" />
        <div className="absolute right-8 top-8 h-16 w-16 border-r-2 border-t-2 border-[#BFF202]/25" />
        <div className="absolute left-8 top-8 h-10 w-10 border-l-2 border-t-2 border-white/10" />
        <div className="absolute left-8 bottom-8 h-10 w-10 border-l-2 border-b-2 border-[#BFF202]/15" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BFF202]/15 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="animate-on-scroll inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#BFF202] backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            <span className="relative h-3.5 w-3 block">
              <Image
                src="/images/logo-mark.webp"
                alt="Sylvedha"
                fill
                sizes="12px"
                className="object-contain invert brightness-200"
              />
            </span>
            Leadership Team
          </p>
          <h2 className="animate-on-scroll mt-6 font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            The people behind{" "}
            <span className="italic text-[#BFF202]">the platform</span>
          </h2>
          <p className="animate-on-scroll mt-4 text-white/45 text-base leading-relaxed">
            A founding trio united by a shared commitment to sustainable
            agri-tech and high-impact innovation.
          </p>
        </div>

        {/* ── Cards grid ── */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {team.map((member, i) => (
            <div
              key={member.name}
              className="animate-on-scroll group relative flex flex-col rounded-[1.75rem] overflow-hidden border border-white/[0.07] bg-[#011e1b] transition-all duration-500 hover:border-[#BFF202]/35 hover:shadow-[0_24px_80px_-16px_rgba(191,242,2,0.18)] hover:-translate-y-1.5" style={{transitionDelay: `${i*150}ms`}}
            >
              {/* ── Portrait ── */}
              <div className="relative h-[340px] sm:h-[360px] overflow-hidden flex-shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover object-[50%_12%] transition-all duration-700 ease-out group-hover:scale-[1.06]"
                />

                {/* Deep gradient fade into card body */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#011e1b] via-[#011e1b]/30 to-transparent" />

                {/* Role badge — top left */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 border border-[#BFF202]/25 backdrop-blur-md px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#BFF202]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#BFF202] animate-pulse" />
                    {member.role}
                  </span>
                </div>
              </div>

              {/* ── Info block ── */}
              <div className="relative flex flex-col flex-1 px-6 pt-5 pb-6 bg-[#011e1b]">
                {/* Accent line */}
                <div className="h-px w-10 bg-gradient-to-r from-[#BFF202]/70 to-transparent mb-4 transition-all duration-500 group-hover:w-20" />

                <h3 className="font-heading text-2xl font-semibold text-white leading-tight">
                  {member.name}
                </h3>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-[0.14em] text-white/35">
                  {member.fullRole}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {member.bio}
                </p>

                {/* Contact links — slide up on hover */}
                <div className="mt-5 pt-5 border-t border-white/[0.06] flex flex-col gap-2.5 overflow-hidden">
                  <a
                    href={`mailto:${member.email}`}
                    className="group/link inline-flex items-center gap-2.5 text-sm text-white/40 transition-all duration-300 hover:text-[#BFF202]"
                  >
                    <span className="grid place-items-center size-7 rounded-lg bg-[#BFF202]/8 border border-[#BFF202]/15 flex-shrink-0 transition-all duration-300 group-hover/link:bg-[#BFF202]/18 group-hover/link:border-[#BFF202]/40">
                      <Mail className="size-3.5 text-[#BFF202]/70 group-hover/link:text-[#BFF202] transition-colors duration-300" />
                    </span>
                    <span className="truncate">{member.email}</span>
                  </a>
                  <a
                    href={`tel:${member.phone.replace(/\s+/g, "")}`}
                    className="group/link inline-flex items-center gap-2.5 text-sm text-white/40 transition-all duration-300 hover:text-[#BFF202]"
                  >
                    <span className="grid place-items-center size-7 rounded-lg bg-[#BFF202]/8 border border-[#BFF202]/15 flex-shrink-0 transition-all duration-300 group-hover/link:bg-[#BFF202]/18 group-hover/link:border-[#BFF202]/40">
                      <Phone className="size-3.5 text-[#BFF202]/70 group-hover/link:text-[#BFF202] transition-colors duration-300" />
                    </span>
                    <span>{member.phone}</span>
                  </a>
                </div>
              </div>

              {/* Shimmer border sweep on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#BFF202]/0 to-transparent transition-all duration-700 group-hover:via-[#BFF202]/80 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
