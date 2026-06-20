import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero-nature-tech.png"
          alt="Aerial view of green agricultural fields meeting solar panel arrays"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.24_0.03_150_/_0.78)] via-[oklch(0.24_0.03_150_/_0.6)] to-[oklch(0.24_0.03_150_/_0.85)]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-44 lg:pb-36 lg:pt-52">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
            Nature Powered. Technology Driven.
          </span>

          <h1 className="mt-6 font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-balance text-white sm:text-5xl lg:text-6xl">
            Building the Future of Sustainable Innovation
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            SYLVEDHA LLP is a multidisciplinary technology company developing
            innovative solutions across Agriculture, Biotechnology, Renewable
            Energy, Artificial Intelligence, Automation, and Sustainable
            Infrastructure.
          </p>

          <p className="mt-4 max-w-2xl leading-relaxed text-white/70">
            From AI-powered agriculture and automated growing systems to algae
            biorefineries and next-generation renewable energy, we create
            practical innovations that improve lives while protecting the planet.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#focus"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explore Our Innovations
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              Partner With Us
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-3 py-3 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
