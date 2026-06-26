import dynamic from "next/dynamic"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { FocusAreas } from "@/components/focus-areas"
import { FlagshipProjects } from "@/components/flagship-projects"
import { WhySylvedha } from "@/components/why-sylvedha"
import { Journey } from "@/components/journey"

// Dynamically import only the heavy, below-the-fold sections
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
