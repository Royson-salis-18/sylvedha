import { Eye, Target, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { SubtractedCard } from "./subtracted-card"

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#EAFDE7] text-[#01312D] min-h-[100svh] flex flex-col justify-center">
      {/* Subtle background decoration */}
      <div className="absolute right-0 top-0 -z-[1] h-[600px] w-[600px] rounded-full bg-[#BFF202]/5 blur-[150px]" />
      <div className="absolute -left-20 bottom-0 -z-[1] h-[400px] w-[400px] rounded-full bg-[#3A7717]/5 blur-[120px]" />

      <div className="mx-auto w-full max-w-none landscape:max-w-[90%] 2xl:max-w-[90%] px-5 pt-24 pb-12 lg:pb-16 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <p className="animate-on-scroll inline-flex items-center gap-2 rounded-xl border border-[#01312D]/20 bg-[#01312D]/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#01312D] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            <span className="relative h-3.5 w-3 block">
              <Image src="/images/logo-mark.webp" alt="Sylvedha" fill sizes="12px" className="object-contain" />
            </span>
              Who We Are
            </p>
            <h2 className="animate-on-scroll mt-6 font-heading text-4xl font-semibold leading-tight tracking-tight text-[#01312D] sm:text-5xl">
              Where <span className="italic text-[#3A7717] pr-1">nature</span> meets engineering
            </h2>
            <p className="animate-on-scroll mt-6 text-lg leading-relaxed text-[#01312D]/80">
              Unlike traditional companies focused on a single sector, <span className="font-sans font-bold text-[#01312D]">SYLVEDHA</span>{" "}
              operates as a multidisciplinary innovation platform.
            </p>
            <a
              href="#focus"
              className="animate-on-scroll mt-4 inline-flex items-center gap-2 rounded-xl bg-[#01312D]/5 border border-[#01312D]/15 px-5 py-2.5 text-sm font-semibold text-[#01312D] transition-all duration-300 hover:bg-[#01312D]/10 hover:border-[#01312D]/30 hover:shadow-md group"
            >
              See Our Focus Areas
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="animate-on-scroll space-y-6 text-lg leading-relaxed text-[#01312D]/80">
            <p>
              <span className="font-sans font-bold text-[#01312D]">SYLVEDHA</span>{" "}is an innovation-driven company focused on creating
              technologies that bridge the gap between nature and engineering.
              Our mission is to build sustainable solutions that address some of
              the world&apos;s most pressing challenges — food security, resource
              efficiency, renewable energy, climate resilience, and intelligent
              automation.
            </p>
            <p className="hidden sm:block">
              We believe the future belongs to those who build it.
              And we intend to build a lot of it.
            </p>
          </div>
        </div>

        <div className="mt-2 lg:mt-4 grid gap-6 md:grid-cols-2 stagger-children">
          {/* Vision Card */}
          <SubtractedCard
            color="white"
            corner="top-right"
            cutoutSize={56}
            className="animate-on-scroll"
            floatingElement={
              <div className="flex size-full items-center justify-center rounded-full bg-[#BFF202] text-[#012522] shadow-md">
                <Eye className="size-5" />
              </div>
            }
          >
            <h3 className="mt-2 font-heading text-2xl font-semibold text-[#012522]">
              Our Vision
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-[#012522]/80">
              We're not building for this decade — we're building for the one that follows.
              Where technology and nature don't trade off. They compound.
            </p>
          </SubtractedCard>

          {/* Mission Card */}
          <SubtractedCard
            color="neon"
            corner="bottom-left"
            cutoutSize={56}
            className="animate-on-scroll"
            floatingElement={
              <div className="flex size-full items-center justify-center rounded-full bg-[#012522] text-[#BFF202] shadow-md">
                <Target className="size-5" />
              </div>
            }
          >
            <h3 className="mt-2 font-heading text-2xl font-semibold text-[#012522]">
              Our Mission
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-[#012522]/90">
              To design, develop, and deploy affordable, intelligent, and
              scalable technologies that transform agriculture, energy,
              biotechnology, and sustainability through innovation, research, and
              practical implementation.
            </p>
          </SubtractedCard>
        </div>
      </div>
    </section>
  )
}
