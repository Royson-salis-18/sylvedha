import dynamic from "next/dynamic"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"

// Dynamically import all components below the fold to massively reduce initial payload
const About = dynamic(() => import("@/components/about").then(mod => mod.About))
const FocusAreas = dynamic(() => import("@/components/focus-areas").then(mod => mod.FocusAreas))
const CurrentProjects = dynamic(() => import("@/components/current-projects").then(mod => mod.CurrentProjects))
const Grevara = dynamic(() => import("@/components/grevara").then(mod => mod.Grevara))
const WhySylvedha = dynamic(() => import("@/components/why-sylvedha").then(mod => mod.WhySylvedha))
const Leadership = dynamic(() => import("@/components/leadership").then(mod => mod.Leadership))
const Roadmap = dynamic(() => import("@/components/roadmap").then(mod => mod.Roadmap))
const Contact = dynamic(() => import("@/components/contact").then(mod => mod.Contact))
const Journey = dynamic(() => import("@/components/journey").then(mod => mod.Journey))
const SiteFooter = dynamic(() => import("@/components/site-footer").then(mod => mod.SiteFooter))
const FloatingForms = dynamic(() => import("@/components/floating-forms").then(mod => mod.FloatingForms))

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
