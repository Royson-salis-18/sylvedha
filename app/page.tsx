import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { FocusAreas } from "@/components/focus-areas"
import { CurrentProjects } from "@/components/current-projects"
import { Grevara } from "@/components/grevara"
import { WhySylvedha } from "@/components/why-sylvedha"
import { Journey } from "@/components/journey"
import { Leadership } from "@/components/leadership"
import { Roadmap } from "@/components/roadmap"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight } from "lucide-react"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <FocusAreas />
        <CurrentProjects />
        <section className="bg-[#01312D] px-5 sm:px-8 pb-16">
          <div className="mx-auto max-w-7xl animate-on-scroll">
            <Grevara />
            {/* Bottom CTA for Projects */}
            <div className="flex justify-end mt-12">
              <a
                href="/projects"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-[#BFF202]/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#BFF202] hover:bg-[#BFF202] hover:text-[#011A17] hover:shadow-[0_0_30px_rgba(191,242,2,0.6)] hover:-translate-y-1"
              >
                View Upcoming Projects
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>
        <WhySylvedha />
        <Journey />
        <Leadership />
        <Roadmap />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
