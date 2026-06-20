import { Leaf, ArrowUpRight } from "lucide-react"

const disciplines = [
  "Agriculture",
  "Biotechnology",
  "Renewable Energy",
  "AI & Automation",
  "Sustainability",
]

const links = [
  { label: "About", href: "#about" },
  { label: "Focus Areas", href: "#focus" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Large brand watermark */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <span className="font-heading text-[15vw] font-bold uppercase tracking-tight text-white/[0.02] leading-none">
          SYLVEDHA
        </span>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand column */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-[#BFF202] text-[#01312D]">
                <Leaf className="size-5" />
              </span>
              <span className="font-heading text-xl font-semibold tracking-tight">
                SYLVEDHA LLP
              </span>
            </div>
            <p className="mt-3 text-sm uppercase tracking-[0.25em] text-[#BFF202]/80">
              Nature Powered. Technology Driven.
            </p>
            <p className="mt-5 leading-relaxed text-white/55">
              Building intelligent solutions for a sustainable future — across agriculture, biotechnology, renewable energy, AI, and automation.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Quick Links
            </p>
            <nav className="mt-5 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/65 transition-colors hover:text-[#BFF202]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Disciplines */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Disciplines
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {disciplines.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href="https://www.linkedin.com/company/sylvedhallp/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/80 transition-all duration-300 hover:border-[#BFF202]/30 hover:text-[#BFF202]"
            >
              LinkedIn
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 SYLVEDHA LLP. All Rights Reserved.</p>
          <p className="text-xs">
            Mangaluru, Karnataka, India
          </p>
        </div>
      </div>
    </footer>
  )
}
