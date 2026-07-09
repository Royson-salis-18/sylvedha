"use client"

import { useState, useEffect } from "react"
import { Leaf, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Focus Areas", href: "/#focus" },
  { label: "Projects", href: "/#current-projects" },
  { label: "Grevara Store", href: "/#grevara", highlight: "purple" },
  { label: "Why Sylvedha", href: "/#why-sylvedha" },
  { label: "Team", href: "/#team" },
  { label: "Roadmap", href: "/#roadmap" },
  { label: "Connect", href: "/#contact" },
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
      className="fixed inset-x-0 top-3 z-50 transition-all duration-500 flex justify-center px-4"
    >
      <div className={cn(
        "flex h-[72px] w-full max-w-[1400px] items-center justify-between px-2 transition-all duration-500 rounded-[2rem]",
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.15)] border border-black/5"
          : "bg-white/90 backdrop-blur-md shadow-2xl border border-white/20"
      )}>
        {/* Logo with dark background card */}
        <a href="/" className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105 bg-[#011a17] rounded-full shadow-inner ml-2 pr-6 pl-1.5 py-1.5">
          <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white/5">
            <Image 
              src="/images/logo-icon-lime.webp" 
              alt="Sylvedha Icon" 
              width={22}
              height={22}
              priority
              className="object-contain transition-transform group-hover:scale-110" 
            />
          </div>
          <span className="font-heading text-[22px] font-bold tracking-wide text-white mt-[2px]">Sylvedha</span>
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
          className="inline-flex size-10 items-center justify-center rounded-xl text-black/80 transition-colors hover:bg-black/5 xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 xl:hidden",
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
                className={cn(
                  "rounded-xl py-3 px-4 text-sm font-semibold transition-colors mb-1",
                  link.highlight === "purple"
                    ? "bg-[#2a1126] text-[#d4af37] border border-[#d4af37]/30 mt-2 text-center"
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
