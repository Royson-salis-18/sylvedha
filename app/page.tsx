import dynamic from "next/dynamic"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"

// Dynamically import below-the-fold components to reduce initial JS payload and TBT
const About = dynamic(() => import("@/components/about").then((mod) => mod.About), { ssr: true })
const FocusAreas = dynamic(() => import("@/components/focus-areas").then((mod) => mod.FocusAreas), { ssr: true })
const FlagshipProjects = dynamic(() => import("@/components/flagship-projects").then((mod) => mod.FlagshipProjects), { ssr: true })
const WhySylvedha = dynamic(() => import("@/components/why-sylvedha").then((mod) => mod.WhySylvedha), { ssr: true })
const Journey = dynamic(() => import("@/components/journey").then((mod) => mod.Journey), { ssr: true })
const Leadership = dynamic(() => import("@/components/leadership").then((mod) => mod.Leadership), { ssr: true })
const Roadmap = dynamic(() => import("@/components/roadmap").then((mod) => mod.Roadmap), { ssr: true })
const Contact = dynamic(() => import("@/components/contact").then((mod) => mod.Contact), { ssr: true })
const SiteFooter = dynamic(() => import("@/components/site-footer").then((mod) => mod.SiteFooter), { ssr: true })

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
