"use client"

import { useState, useEffect } from "react"
import { Leaf, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Focus Areas", href: "#focus" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
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
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/10 bg-[#01312D]/80 backdrop-blur-xl shadow-lg shadow-black/10"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="flex size-9 items-center justify-center rounded-xl bg-[#BFF202] text-[#01312D] transition-transform duration-300 group-hover:scale-110">
            <Leaf className="size-4" />
          </span>
          <span className="font-heading text-lg font-semibold tracking-tight text-white">
            SYLVEDHA
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-[#BFF202] px-6 py-2.5 text-sm font-semibold text-[#01312D] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#BFF202]/25 md:inline-flex"
        >
          Partner With Us
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-xl text-white/80 transition-colors hover:bg-white/10 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 md:hidden",
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="border-t border-white/10 bg-[#01312D]/95 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl py-3 px-4 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center rounded-full bg-[#BFF202] px-6 py-3 text-sm font-semibold text-[#01312D]"
            >
              Partner With Us
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
