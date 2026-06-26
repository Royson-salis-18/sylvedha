import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { FocusAreas } from "@/components/focus-areas"
import { FlagshipProjects } from "@/components/flagship-projects"
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
        <FlagshipProjects />
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
