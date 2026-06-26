import dynamic from "next/dynamic"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"

// Dynamically import below-the-fold components to reduce initial JS payload and hydration time
const About = dynamic(() => import("@/components/about").then((mod) => mod.About))
const FocusAreas = dynamic(() => import("@/components/focus-areas").then((mod) => mod.FocusAreas))
const FlagshipProjects = dynamic(() => import("@/components/flagship-projects").then((mod) => mod.FlagshipProjects))
const WhySylvedha = dynamic(() => import("@/components/why-sylvedha").then((mod) => mod.WhySylvedha))
const Journey = dynamic(() => import("@/components/journey").then((mod) => mod.Journey))
const Leadership = dynamic(() => import("@/components/leadership").then((mod) => mod.Leadership))
const Roadmap = dynamic(() => import("@/components/roadmap").then((mod) => mod.Roadmap))
const Contact = dynamic(() => import("@/components/contact").then((mod) => mod.Contact))
const SiteFooter = dynamic(() => import("@/components/site-footer").then((mod) => mod.SiteFooter))

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
