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
