"use client"

import { useEffect, useRef } from "react"
import Lenis from "lenis"

// Sections to snap through, in page order
const SECTION_IDS = [
  "about",
  "focus",
  "current-projects",
  "journey",
  "why-sylvedha",
  "team",
  "roadmap",
  "contact",
]

export function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null)
  const isScrollingRef = useRef(false)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.8,
    })
    lenisRef.current = lenis

    // RAF loop
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // ── Helper: get all sections sorted by their Y position ──
    const getSections = () =>
      SECTION_IDS
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[]

    // ── Scroll to a specific element ──
    const scrollToEl = (el: HTMLElement, duration = 1.6) => {
      if (isScrollingRef.current) return
      isScrollingRef.current = true
      lenis.scrollTo(el, {
        offset: -80,
        duration,
        onComplete: () => { isScrollingRef.current = false },
      })
    }

    // ── Section snap: find next/prev section relative to viewport center ──
    const snapToSection = (direction: "down" | "up") => {
      const sections = getSections()
      const viewportMid = window.scrollY + window.innerHeight / 2

      if (direction === "down") {
        // First section whose top is below the viewport midpoint
        const next = sections.find((s) => s.getBoundingClientRect().top > 60)
        if (next) scrollToEl(next)
      } else {
        // Last section whose top is above current scroll - some threshold
        const prev = [...sections]
          .reverse()
          .find((s) => s.getBoundingClientRect().top < -60)
        if (prev) scrollToEl(prev)
      }
    }

    // ── Keyboard handler: arrow keys / PageDown / PageUp snap sections ──
    const onKeyDown = (e: KeyboardEvent) => {
      // Don't intercept when user is typing
      const tag = (e.target as HTMLElement)?.tagName
      if (tag === "INPUT" || tag === "TEXTAREA" || (e.target as HTMLElement)?.isContentEditable) return

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault()
        snapToSection("down")
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault()
        snapToSection("up")
      }
    }

    // ── Custom event: fired by the hero arrow button ──
    const onLenisScrollTo = (e: Event) => {
      const { target, offset = -80 } = (e as CustomEvent).detail
      if (target) lenis.scrollTo(target, { offset, duration: 1.6 })
    }

    // ── Anchor click handler ──
    const onAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a[href^='#'], a[href*='/#']")
      if (!anchor) return
      const href = anchor.getAttribute("href")
      if (!href) return
      const hash = href.includes("#") ? "#" + href.split("#")[1] : null
      if (!hash) return
      const el = document.querySelector(hash)
      if (!el) return
      e.preventDefault()
      lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.6 })
    }

    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("click", onAnchorClick)
    window.addEventListener("lenis:scrollto", onLenisScrollTo)

    return () => {
      lenis.destroy()
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("click", onAnchorClick)
      window.removeEventListener("lenis:scrollto", onLenisScrollTo)
    }
  }, [])

  return null
}
