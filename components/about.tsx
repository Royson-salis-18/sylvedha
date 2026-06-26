import { Eye, Target, ArrowUpRight } from "lucide-react"

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-background min-h-[100svh] flex flex-col justify-center">
      {/* Subtle background decoration */}
      <div className="absolute right-0 top-0 -z-[1] h-[600px] w-[600px] rounded-full bg-[#BFF202]/5 blur-[150px]" />
      <div className="absolute -left-20 bottom-0 -z-[1] h-[400px] w-[400px] rounded-full bg-[#3A7717]/5 blur-[120px]" />

      <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <p className="animate-on-scroll inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <img src="/images/logo-icon-black.webp" alt="Sylvedha" width={8} height={14} className="h-3.5 w-auto object-contain" />
              Who We Are
            </p>
            <h2 className="animate-on-scroll mt-6 font-heading text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
              Where <span className="italic text-secondary">nature</span> meets engineering
            </h2>
            <p className="animate-on-scroll mt-6 text-lg leading-relaxed text-muted-foreground">
              Unlike traditional companies focused on a single sector, <span className="font-sans font-bold text-primary">SYLVEDHA</span>{" "}
              operates as a multidisciplinary innovation platform.
            </p>
            <a
              href="#focus"
              className="animate-on-scroll mt-8 inline-flex items-center gap-2 rounded-xl bg-primary/5 border border-primary/15 px-5 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary/10 hover:border-primary/30 hover:shadow-md group"
            >
              See Our Focus Areas
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="animate-on-scroll space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              <span className="font-sans font-bold text-primary">SYLVEDHA LLP</span>{" "}is an innovation-driven company focused on creating
              technologies that bridge the gap between nature and engineering.
              Our mission is to build sustainable solutions that address some of
              the world&apos;s most pressing challenges — food security, resource
              efficiency, renewable energy, climate resilience, and intelligent
              automation.
            </p>
            <p>
              We believe the future belongs to integrated solutions
              that create economic value while generating positive environmental
              and social impact.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-2 stagger-children">
          {/* Vision Card */}
          <div className="animate-on-scroll group relative overflow-hidden rounded-[2rem] border border-border bg-card p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-[#BFF202]/20">
            <div className="absolute -right-16 -top-16 size-48 rounded-full bg-[#BFF202]/8 blur-[80px] transition-all duration-500 group-hover:bg-[#BFF202]/20" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BFF202]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="flex size-14 items-center justify-center rounded-2xl bg-[#BFF202] text-[#01312D] shadow-lg shadow-[#BFF202]/20 transition-transform duration-300 group-hover:scale-110">
              <Eye className="size-6" />
            </span>
            <h3 className="mt-6 font-heading text-2xl font-semibold text-card-foreground">
              Our Vision
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              To become a global leader in sustainable innovation by developing
              technologies that empower communities, enhance productivity,
              accelerate renewable energy adoption, and create a more resilient
              future for generations to come.
            </p>
          </div>

          {/* Mission Card */}
          <div className="animate-on-scroll group relative overflow-hidden rounded-[2rem] border border-white/10 bg-primary p-10 text-primary-foreground transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20">
            <div className="absolute -right-16 -top-16 size-48 rounded-full bg-[#BFF202]/10 blur-[80px] transition-all duration-500 group-hover:bg-[#BFF202]/25" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BFF202]/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-[#BFF202] shadow-lg shadow-black/10 transition-transform duration-300 group-hover:scale-110">
              <Target className="size-6" />
            </span>
            <h3 className="mt-6 font-heading text-2xl font-semibold text-white">
              Our Mission
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-white/90">
              To design, develop, and deploy affordable, intelligent, and
              scalable technologies that transform agriculture, energy,
              biotechnology, and sustainability through innovation, research, and
              practical implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
