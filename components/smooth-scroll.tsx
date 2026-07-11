"use client"

import { useEffect, useRef } from "react"
import Lenis from "lenis"

export function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null)
  const isSnappingRef = useRef(false)

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

    // ── Dynamically get ALL sections on the page, sorted by DOM order ──
    const getSections = (): HTMLElement[] =>
      Array.from(document.querySelectorAll("section")).sort(
        (a, b) => a.getBoundingClientRect().top + window.scrollY - (b.getBoundingClientRect().top + window.scrollY)
      )

    // ── Find index of the section currently most visible ──
    const getCurrentIndex = (sections: HTMLElement[]): number => {
      const scrollMid = window.scrollY + window.innerHeight * 0.4
      let closest = 0
      let minDist = Infinity
      sections.forEach((s, i) => {
        const top = s.getBoundingClientRect().top + window.scrollY
        const dist = Math.abs(top - scrollMid)
        if (dist < minDist) { minDist = dist; closest = i }
      })
      return closest
    }

    // ── Scroll to element ──
    const scrollToEl = (el: HTMLElement) => {
      if (isSnappingRef.current) return
      isSnappingRef.current = true
      lenis.scrollTo(el, {
        offset: -80,
        duration: 1.5,
        onComplete: () => {
          setTimeout(() => { isSnappingRef.current = false }, 200)
        },
      })
    }

    // ── Keyboard handler ──
    const onKeyDown = (e: KeyboardEvent) => {
      // Don't intercept when typing
      const tag = (e.target as HTMLElement)?.tagName
      if (tag === "INPUT" || tag === "TEXTAREA" || (e.target as HTMLElement)?.isContentEditable) return
      if (!["ArrowDown", "ArrowUp", "PageDown", "PageUp"].includes(e.key)) return

      e.preventDefault()

      const sections = getSections()
      if (!sections.length) return
      const idx = getCurrentIndex(sections)

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        const next = sections[Math.min(idx + 1, sections.length - 1)]
        scrollToEl(next)
      } else {
        const prev = sections[Math.max(idx - 1, 0)]
        scrollToEl(prev)
      }
    }

    // ── Custom event from hero scroll button ──
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
      const hash = "#" + href.split("#")[1]
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
