import { Eye, Target } from "lucide-react"

export function About() {
  return (
    <section id="about" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Who We Are
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-tight text-balance text-foreground sm:text-4xl">
              Where nature meets engineering
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              SYLVEDHA LLP is an innovation-driven company focused on creating
              technologies that bridge the gap between nature and engineering.
              Our mission is to build sustainable solutions that address some of
              the world&apos;s most pressing challenges — food security, resource
              efficiency, renewable energy, climate resilience, and intelligent
              automation.
            </p>
            <p>
              Unlike traditional companies focused on a single sector, SYLVEDHA
              operates as a multidisciplinary innovation platform where
              agriculture, biotechnology, energy systems, artificial
              intelligence, automation, and environmental sustainability
              converge. We believe the future belongs to integrated solutions
              that create economic value while generating positive environmental
              and social impact.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Eye className="size-5" />
            </span>
            <h3 className="mt-5 font-heading text-xl font-semibold text-card-foreground">
              Our Vision
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To become a global leader in sustainable innovation by developing
              technologies that empower communities, enhance productivity,
              accelerate renewable energy adoption, and create a more resilient
              future for generations to come.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Target className="size-5" />
            </span>
            <h3 className="mt-5 font-heading text-xl font-semibold text-card-foreground">
              Our Mission
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To design, develop, and deploy affordable, intelligent, and
              scalable technologies that transform agriculture, energy,
              biotechnology, and sustainability through innovation, research, and
              practical implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
