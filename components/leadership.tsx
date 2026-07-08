import { FloatingCubes } from "./floating-cubes"
import { Mail, Phone } from "lucide-react"

const team = [
  {
    name: "Royson Salis",
    role: "Co-Founder & Chief Executive Officer",
    bio: "Leading innovation strategy, research initiatives, business development, and technology vision.",
    image: "/images/team-royson.jpg",
    email: "royson.ceo@sylvedha.com",
    phone: "+91 77950 70676",
  },
  {
    name: "Sharath",
    role: "Co-Founder & Chief Operating Officer",
    bio: "Driving operational excellence, partnerships, implementation, and organizational growth.",
    image: "/images/team-sharath.jpg",
    email: "sharath.coo@sylvedha.com",
    phone: "+91 96323 97595",
  },
  {
    name: "Prakash Nayak",
    role: "Co-Founder & Chief Technology Officer",
    bio: "Leading technology architecture, product development, automation systems, and engineering initiatives.",
    image: "/images/team-prakash.jpg",
    email: "prakash.cto@sylvedha.com",
    phone: "+91 82771 51149",
  },
]

export function Leadership() {
  return (
    <section id="team" className="relative overflow-hidden bg-[#01312D] text-white min-h-[100svh] flex flex-col justify-center">
      <FloatingCubes />
      {/* Decorative elements */}
      <div className="absolute right-0 bottom-0 -z-[1] h-[500px] w-[500px] rounded-full bg-[#3A7717]/10 blur-[200px]" />
      <div className="absolute -left-20 top-1/4 -z-[1] h-[300px] w-[300px] rounded-full bg-[#BFF202]/5 blur-[120px]" />

      {/* Sharp geometric accents */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#BFF202]/40 via-white/10 to-transparent" />
        <div className="absolute top-0 right-0 w-20 h-[3px] bg-[#BFF202]/60" />
        <div className="absolute right-8 top-8 h-14 w-14 border-r-2 border-t-2 border-[#BFF202]/35" />
        <div className="absolute left-8 top-8 h-10 w-10 border-l-2 border-t-2 border-white/10" />
        <div className="absolute left-8 bottom-8 h-10 w-10 border-l-2 border-b-2 border-[#BFF202]/20" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BFF202]/15 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="animate-on-scroll inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#BFF202] backdrop-blur-sm">
            <img src="/images/logo-mark.webp" alt="Sylvedha" width={12} height={14} className="h-3.5 w-auto object-contain invert brightness-200" />
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
              className="animate-on-scroll group glass-noise bg-[#01201D]/80 border border-white/10 overflow-hidden rounded-[2rem] p-10 text-center transition-all duration-500 hover:-translate-y-1 hover:border-[#BFF202]/40 hover:bg-[#011A17]/90 hover:shadow-[0_0_40px_-10px_rgba(191,242,2,0.15)]"
            >
              <div className="absolute -right-10 -top-10 size-40 rounded-full bg-[#BFF202]/0 blur-[80px] transition-all duration-500 group-hover:bg-[#BFF202]/10" />

              <div className="mx-auto size-24 overflow-hidden rounded-full ring-2 ring-white/10 transition-all duration-500 group-hover:ring-[#BFF202]/40 group-hover:scale-105">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  width={96}
                  height={96}
                  className="size-full object-cover object-[50%_20%]"
                />
              </div>
              <h3 className="mt-6 font-heading text-2xl font-semibold text-white">
                {member.name}
              </h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#BFF202]">
                {member.role}
              </p>
              <p className="mt-4 leading-relaxed text-white/90">
                {member.bio}
              </p>
              <div className="mt-6 pt-6 border-t border-white/10 flex flex-col items-center gap-2.5 text-sm text-white/80">
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-2 hover:text-[#BFF202] transition-colors duration-300 group/link"
                >
                  <Mail className="size-4 text-[#BFF202]/70 group-hover/link:text-[#BFF202] transition-colors duration-300" />
                  <span>{member.email}</span>
                </a>
                <a
                  href={`tel:${member.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 hover:text-[#BFF202] transition-colors duration-300 group/link"
                >
                  <Phone className="size-4 text-[#BFF202]/70 group-hover/link:text-[#BFF202] transition-colors duration-300" />
                  <span>{member.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
