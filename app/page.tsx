import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { FocusAreas } from "@/components/focus-areas"
import { CurrentProjects } from "@/components/current-projects"
import { Grevara } from "@/components/grevara"
import { WhySylvedha } from "@/components/why-sylvedha"
import { Leadership } from "@/components/leadership"
import { Roadmap } from "@/components/roadmap"
import { Contact } from "@/components/contact"
import { Journey } from "@/components/journey"
import { SiteFooter } from "@/components/site-footer"
import { FloatingForms } from "@/components/floating-forms"
import { ArrowRight } from "lucide-react"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <FocusAreas />
        {/* ── Current Projects: Grevara → NutriTech → View Upcoming ── */}
        <section className="bg-gradient-to-b from-[#01312D] to-[#011A17] px-5 sm:px-8 pt-24 pb-12 transition-colors duration-500">
          <div className="mx-auto max-w-7xl animate-on-scroll">
            <div className="flex items-center gap-4 mb-12">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#BFF202]/20 bg-[#BFF202]/8 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#BFF202] backdrop-blur-md shadow-[0_0_20px_rgba(191,242,2,0.10)]">
                Current Projects
              </p>
              <div className="flex-1 h-px bg-gradient-to-r from-[#BFF202]/25 to-transparent" />
            </div>
            <Grevara />
          </div>
        </section>
        <CurrentProjects />
        <Journey />

        <WhySylvedha />
        <Leadership />
        <Roadmap />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingForms />
    </>
  )
}
