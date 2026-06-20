import { Leaf } from "lucide-react"

const disciplines = [
  "Agriculture",
  "Biotechnology",
  "Renewable Energy",
  "AI & Automation",
  "Sustainability",
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-md bg-primary-foreground/15">
                <Leaf className="size-4" />
              </span>
              <span className="font-heading text-lg font-semibold tracking-tight">
                SYLVEDHA LLP
              </span>
            </div>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-primary-foreground/70">
              Nature Powered. Technology Driven.
            </p>
            <p className="mt-4 leading-relaxed text-primary-foreground/75">
              Building intelligent solutions for a sustainable future.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {disciplines.map((item) => (
              <span
                key={item}
                className="text-sm text-primary-foreground/80"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 SYLVEDHA LLP. All Rights Reserved.</p>
          <a
            href="https://www.linkedin.com/company/sylvedhallp/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary-foreground"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
