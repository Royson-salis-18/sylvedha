"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Focus Areas", href: "/#focus" },
  { label: "Grevara Store", href: "/#grevara", highlight: "purple" },
  { label: "Projects", href: "/#current-projects" },
  { label: "Why Sylvedha", href: "/#why-sylvedha" },
  { label: "Team", href: "/#team" },
  { label: "Roadmap", href: "/#roadmap" },
  { label: "Connect", href: "/#contact", highlight: "neon" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 transition-all duration-500 sm:px-4">
      <div className={cn(
        "mx-auto flex h-[64px] w-full max-w-[1400px] items-center justify-between rounded-[1.75rem] px-2 transition-all duration-500 sm:h-[72px] sm:rounded-[2rem]",
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.15)] border border-black/5"
          : "bg-white/90 backdrop-blur-md shadow-2xl border border-white/20"
      )}>
        {/* Logo */}
        <a href="/" className="group ml-0 flex min-w-0 items-center transition-transform duration-300 hover:scale-105 sm:ml-2">
          <div className="flex h-[46px] w-[160px] items-center justify-center rounded-full bg-[#063126] shadow-md border border-white/10 px-2 py-1 sm:h-[54px] sm:w-[190px] sm:px-3 sm:py-1.5">
            <div className="relative h-full w-full">
              <Image
                src="/images/logo-horizontal-neon.png"
                alt="Sylvedha Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-1 xl:flex pr-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-xl px-3.5 py-2 text-[13px] font-bold tracking-wide transition-all duration-300 whitespace-nowrap",
                link.highlight === "purple"
                  ? "bg-gradient-to-r from-[#2a1126] to-[#461a3f] text-[#d4af37] shadow-md border border-[#d4af37]/20 hover:shadow-lg hover:-translate-y-0.5 hover:text-white"
                  : link.highlight === "neon"
                  ? "bg-[#BFF202] text-[#011a17] font-black shadow-[0_0_16px_rgba(191,242,2,0.35)] hover:shadow-[0_0_28px_rgba(191,242,2,0.6)] hover:-translate-y-0.5"
                  : "text-[#011a17] hover:bg-black/5 hover:text-[#8db300]"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl text-black/80 transition-colors hover:bg-black/5 xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open ? "true" : "false"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "absolute left-3 right-3 top-[76px] overflow-hidden rounded-[1.75rem] border border-white/10 shadow-2xl transition-all duration-300 sm:left-4 sm:right-4 sm:top-[86px] xl:hidden",
          open ? "max-h-[calc(100svh-96px)] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        )}
      >
        <nav className="bg-[#01312D]/97 backdrop-blur-xl">
          <div className="mx-auto flex max-h-[calc(100svh-96px)] max-w-7xl flex-col overflow-y-auto px-3 py-3 sm:px-5 sm:py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "mb-1 rounded-2xl px-4 py-3.5 text-sm font-semibold transition-colors",
                  link.highlight === "purple"
                    ? "bg-[#2a1126] text-[#d4af37] border border-[#d4af37]/30 mt-2 text-center"
                    : link.highlight === "neon"
                    ? "bg-[#BFF202] text-[#011a17] font-black mt-2 text-center"
                    : "text-white/90 hover:bg-white/5 hover:text-white"
                )}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center rounded-2xl bg-gradient-to-b from-[#d4ff33] to-[#BFF202] border border-[#a1cc00] shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_4px_14px_rgba(191,242,2,0.15)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_6px_20px_rgba(191,242,2,0.3)] px-6 py-3 text-sm font-semibold text-[#01312D]"
            >
              Connect With Us
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
