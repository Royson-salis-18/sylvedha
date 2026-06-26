import { ArrowUpRight } from "lucide-react"

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

      {/* Sharp geometric accent lines */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Top-left diagonal line block */}
        <div className="absolute -left-10 top-0 h-px w-[40%] bg-gradient-to-r from-transparent via-[#BFF202]/30 to-transparent" />
        <div className="absolute left-0 top-0 h-[40%] w-px bg-gradient-to-b from-[#BFF202]/30 to-transparent" />
        {/* Corner accent box top-left */}
        <div className="absolute left-10 top-10 h-12 w-12 border-l border-t border-[#BFF202]/20" />
        <div className="absolute left-14 top-14 h-6 w-6 border-l border-t border-[#BFF202]/10" />

        {/* Top-right diagonal line block */}
        <div className="absolute -right-10 top-0 h-px w-[40%] bg-gradient-to-l from-transparent via-white/10 to-transparent" />
        <div className="absolute right-0 top-0 h-[30%] w-px bg-gradient-to-b from-white/10 to-transparent" />
        {/* Corner accent box top-right */}
        <div className="absolute right-10 top-10 h-12 w-12 border-r border-t border-white/10" />

        {/* Center horizontal accent */}
        <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#BFF202]/5 to-transparent" />

        {/* Bottom-left accent */}
        <div className="absolute bottom-0 left-0 h-[25%] w-px bg-gradient-to-t from-[#BFF202]/20 to-transparent" />
        <div className="absolute bottom-10 left-10 h-8 w-8 border-b border-l border-[#BFF202]/20" />

        {/* Bottom-right accent */}
        <div className="absolute bottom-0 right-0 h-[25%] w-px bg-gradient-to-t from-white/10 to-transparent" />
        <div className="absolute bottom-10 right-10 h-8 w-8 border-b border-r border-white/10" />

        {/* Vertical center line */}
        <div className="absolute left-1/2 top-0 h-[20%] w-px -translate-x-1/2 bg-gradient-to-b from-[#BFF202]/15 to-transparent" />

        {/* Subtle lime glow bottom center */}
        <div className="absolute bottom-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-[#BFF202]/5 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        {/* Top separator with accent */}
        <div className="relative mb-16">
          <div className="h-px w-full bg-gradient-to-r from-[#BFF202]/40 via-white/10 to-transparent" />
          <div className="absolute -top-0.5 left-0 h-[3px] w-16 bg-[#BFF202]" />
        </div>

        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand column */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo-horizontal-dark-green.webp"
                alt="Sylvedha Logo"
                width={182}
                height={64}
                className="h-[64px] w-auto object-contain origin-left"
              />
            </div>
            <p className="mt-3 text-sm uppercase tracking-[0.25em] text-[#BFF202]/80">
              Innovating Technology in Harmony with Nature
            </p>
            <p className="mt-5 leading-relaxed text-white/55">
              Building intelligent solutions for a sustainable future — across agriculture, biotechnology, renewable energy, AI, and automation.
            </p>

            {/* Inline accent bar */}
            <div className="mt-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-[#BFF202]/30 to-transparent" />
              <div className="h-1.5 w-1.5 rotate-45 bg-[#BFF202]/60" />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="h-3 w-[2px] bg-[#BFF202]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                Quick Links
              </p>
            </div>
            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-[#BFF202]"
                >
                  <span className="h-px w-3 bg-white/20 transition-all duration-300 group-hover:w-5 group-hover:bg-[#BFF202]" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Disciplines */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="h-3 w-[2px] bg-[#BFF202]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                Disciplines
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {disciplines.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-white/70 transition-colors hover:border-[#BFF202]/30 hover:text-[#BFF202]"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href="https://www.linkedin.com/company/sylvedhallp/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/80 transition-all duration-300 hover:border-[#BFF202]/50 hover:bg-[#BFF202]/5 hover:text-[#BFF202]"
            >
              LinkedIn
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative mt-16 pt-8">
          {/* Bottom separator with accent */}
          <div className="absolute top-0 left-0 right-0">
            <div className="h-px w-full bg-gradient-to-r from-[#BFF202]/30 via-white/10 to-transparent" />
            <div className="absolute -top-0.5 right-0 h-[3px] w-16 bg-white/10" />
          </div>

          <div className="flex flex-col gap-4 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {new Date().getFullYear()} <span className="font-sans font-bold text-white/90">SYLVEDHA LLP</span>. All Rights Reserved.</p>
            
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <a href="mailto:info@sylvedha.com" className="hover:text-[#BFF202] transition-colors text-white/90">info@sylvedha.com</a>
              <span className="text-white/80">|</span>
              <a href="#privacy" className="hover:text-white transition-colors text-white/90">Privacy Policy</a>
              <span className="text-white/80">|</span>
              <a href="#terms" className="hover:text-white transition-colors text-white/90">Terms of Service</a>
            </div>

            <div className="flex items-center gap-3 hidden md:flex">
              <div className="h-1 w-1 rotate-45 bg-[#BFF202]/40" />
              <p className="text-xs">Mangaluru, Karnataka, India</p>
              <div className="h-1 w-1 rotate-45 bg-[#BFF202]/40" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
