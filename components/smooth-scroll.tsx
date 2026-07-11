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

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // ── All sections + footer, sorted by page position ──
    const getSections = (): HTMLElement[] => {
      const sections = Array.from(document.querySelectorAll("section")) as HTMLElement[]
      const footer = document.querySelector("footer") as HTMLElement | null
      const all = footer ? [...sections, footer] : sections
      return all.sort(
        (a, b) =>
          (a.getBoundingClientRect().top + window.scrollY) -
          (b.getBoundingClientRect().top + window.scrollY)
      )
    }

    // ── Which section index is currently in view ──
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

    // ── Snap to a specific element ──
    const snapToEl = (el: HTMLElement) => {
      if (isSnappingRef.current) return
      isSnappingRef.current = true
      lenis.scrollTo(el, {
        offset: -80,
        duration: 1.5,
        onComplete: () => { setTimeout(() => { isSnappingRef.current = false }, 200) },
      })
    }

    // ── Long-press state ──
    const heldKeys = new Set<string>()
    const longPressTimers = new Map<string, ReturnType<typeof setTimeout>>()
    const continuousKeys = new Set<string>()

    const SNAP_KEYS = ["ArrowDown", "ArrowUp", "PageDown", "PageUp"]

    const getDirection = (key: string) =>
      key === "ArrowDown" || key === "PageDown" ? "down" : "up"

    const onKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName
      if (tag === "INPUT" || tag === "TEXTAREA" || (e.target as HTMLElement)?.isContentEditable) return
      if (!SNAP_KEYS.includes(e.key)) return

      e.preventDefault()

      // Already held — don't restart
      if (heldKeys.has(e.key)) return
      heldKeys.add(e.key)

      const dir = getDirection(e.key)

      // Start long-press timer
      const timer = setTimeout(() => {
        // Long press — switch to continuous smooth scroll
        continuousKeys.add(e.key)
        isSnappingRef.current = false
        if (dir === "down") {
          lenis.scrollTo(document.body.scrollHeight, {
            duration: 20,
            easing: (t) => t, // linear — constant speed
          })
        } else {
          lenis.scrollTo(0, {
            duration: 20,
            easing: (t) => t,
          })
        }
      }, 380)

      longPressTimers.set(e.key, timer)
    }

    const onKeyUp = (e: KeyboardEvent) => {
      if (!SNAP_KEYS.includes(e.key)) return

      const timer = longPressTimers.get(e.key)
      if (timer) { clearTimeout(timer); longPressTimers.delete(e.key) }

      const wasContinuous = continuousKeys.has(e.key)
      continuousKeys.delete(e.key)
      heldKeys.delete(e.key)

      if (wasContinuous) {
        // Stop at current scroll position
        lenis.scrollTo(window.scrollY, { immediate: true })
      } else {
        // Short tap — section snap
        const sections = getSections()
        if (!sections.length) return
        const idx = getCurrentIndex(sections)
        const dir = getDirection(e.key)
        const target = dir === "down"
          ? sections[Math.min(idx + 1, sections.length - 1)]
          : sections[Math.max(idx - 1, 0)]
        snapToEl(target)
      }
    }

    // ── Custom event from hero scroll button ──
    const onLenisScrollTo = (e: Event) => {
      const { target, offset = -80 } = (e as CustomEvent).detail
      if (target) lenis.scrollTo(target, { offset, duration: 1.6 })
    }

    // ── Anchor click smooth scroll ──
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
    document.addEventListener("keyup", onKeyUp)
    document.addEventListener("click", onAnchorClick)
    window.addEventListener("lenis:scrollto", onLenisScrollTo)

    return () => {
      lenis.destroy()
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("keyup", onKeyUp)
      document.removeEventListener("click", onAnchorClick)
      window.removeEventListener("lenis:scrollto", onLenisScrollTo)
    }
  }, [])

  return null
}
