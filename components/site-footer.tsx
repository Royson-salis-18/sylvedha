import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const disciplines = [
  "Agriculture",
  "Biotechnology",
  "Renewable Energy",
  "AI & Automation",
  "Sustainability",
]

const links = [
  { label: "About", href: "/#about" },
  { label: "Focus Areas", href: "/#focus" },
  { label: "Grevara Store", href: "/#grevara" },
  { label: "Projects", href: "/#current-projects" },
  { label: "Why Sylvedha", href: "/#why-sylvedha" },
  { label: "Team", href: "/#team" },
  { label: "Roadmap", href: "/#roadmap" },
  { label: "Contact", href: "/#contact" },
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
            <div className="flex items-center gap-3 relative h-[64px] w-[182px]">
              <Image
                src="/images/logo-horizontal-dark-green.webp"
                alt="Sylvedha Logo"
                fill
                sizes="182px"
                className="object-contain origin-left"
              />
            </div>
            <p className="mt-3 text-sm uppercase tracking-[0.25em] text-[#BFF202]/80">
              Innovating Technology in Harmony with Nature
            </p>
            <p className="mt-5 leading-relaxed text-white/90">
              Roots in nature. Code in the machine. Whatever comes next — we're already building it.
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
                  className="group flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-[#BFF202]"
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
                  className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-white/90 transition-colors hover:border-[#BFF202]/30 hover:text-[#BFF202]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/company/sylvedha"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/90 transition-all duration-300 hover:border-[#BFF202]/50 hover:bg-[#BFF202]/5 hover:text-[#BFF202]"
              >
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/share/1BTJmzLA89/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/90 transition-all duration-300 hover:border-[#BFF202]/50 hover:bg-[#BFF202]/5 hover:text-[#BFF202]"
              >
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </a>
              <a
                href="https://www.instagram.com/sylvedha/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/90 transition-all duration-300 hover:border-[#BFF202]/50 hover:bg-[#BFF202]/5 hover:text-[#BFF202]"
              >
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                Instagram
              </a>
              <a
                href="https://x.com/Sylvedha"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/90 transition-all duration-300 hover:border-[#BFF202]/50 hover:bg-[#BFF202]/5 hover:text-[#BFF202]"
              >
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                X / Twitter
              </a>
              <a
                href="https://wa.me/919187598775"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/90 transition-all duration-300 hover:border-[#BFF202]/50 hover:bg-[#BFF202]/5 hover:text-[#BFF202]"
              >
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative mt-16 pt-8">
          {/* Bottom separator with accent */}
          <div className="absolute top-0 left-0 right-0">
            <div className="h-px w-full bg-gradient-to-r from-[#BFF202]/30 via-white/10 to-transparent" />
            <div className="absolute -top-0.5 right-0 h-[3px] w-16 bg-white/10" />
          </div>

          <div className="flex flex-col gap-4 text-sm text-white/90 sm:flex-row sm:items-center sm:justify-between mb-6">
            <p>&copy; {new Date().getFullYear()} <span className="font-sans font-bold text-white/90">SYLVEDHA LLP</span>. All rights reserved.</p>
            
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <a href="mailto:info@sylvedha.com" className="hover:text-[#BFF202] transition-colors text-white/90">info@sylvedha.com</a>
              <span className="text-white/90">|</span>
              <Link href="/privacy-policy" className="hover:text-[#BFF202] transition-colors text-white/90">Privacy Policy</Link>
              <span className="text-white/90">|</span>
              <Link href="/terms" className="hover:text-[#BFF202] transition-colors text-white/90">Terms of Use &amp; Order Requests</Link>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-xs text-white/50 border-t border-white/5 pt-6">
            <p>Grevara is a brand owned and operated by SYLVEDHA LLP. <span className="text-[#BFF202]/80">LLPIN: ACX-4015</span></p>
            <p>Registered Office: Incubation Centre, Third Floor, PG Block, MITE, Moodabidri, Mangaluru, Karnataka - 574225</p>
            <p>Registered with limited liability under the Limited Liability Partnership Act, 2008.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
