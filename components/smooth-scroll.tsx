"use client"

import { useEffect, useRef } from "react"
import Lenis from "lenis"

const SCROLL_SPEED = 700   // px/sec during continuous scroll
const LONG_PRESS_MS = 350  // ms before continuous mode kicks in

export function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null)
  const isSnappingRef = useRef(false)

  useEffect(() => {
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0)
    if (isTouch) return // Disable custom smooth scroll on mobile to avoid scroll sticking and lag

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.8,
    })
    lenisRef.current = lenis

    // ── Main Lenis RAF loop ──
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // ── Helpers ──
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

    const getCurrentIndex = (sections: HTMLElement[]): number => {
      const scrollMid = window.scrollY + window.innerHeight * 0.4
      let closest = 0; let minDist = Infinity
      sections.forEach((s, i) => {
        const dist = Math.abs((s.getBoundingClientRect().top + window.scrollY) - scrollMid)
        if (dist < minDist) { minDist = dist; closest = i }
      })
      return closest
    }

    const snapToEl = (el: HTMLElement) => {
      if (isSnappingRef.current) return
      isSnappingRef.current = true
      lenis.scrollTo(el, {
        offset: 0,
        duration: 1.5,
        onComplete: () => { setTimeout(() => { isSnappingRef.current = false }, 300) },
      })
    }

    // ── Continuous velocity scroll state ──
    const held = new Map<string, {
      timer: ReturnType<typeof setTimeout> | null
      rafId: number
      isContinuous: boolean
      lastTime: number
    }>()

    const KEYS = ["ArrowDown", "ArrowUp", "PageDown", "PageUp"]
    const isDown = (k: string) => k === "ArrowDown" || k === "PageDown"

    const startContinuous = (key: string) => {
      const state = held.get(key)
      if (!state) return
      state.isContinuous = true
      state.lastTime = performance.now()
      isSnappingRef.current = false

      const dir = isDown(key) ? 1 : -1
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight

      const tick = (now: number) => {
        const s = held.get(key)
        if (!s || !s.isContinuous) return
        const dt = (now - s.lastTime) / 1000
        s.lastTime = now
        const delta = SCROLL_SPEED * dt * dir
        const next = Math.max(0, Math.min(window.scrollY + delta, maxScroll))
        // Direct position update through Lenis — immediate so there's no re-easing lag
        lenis.scrollTo(next, { immediate: true })
        s.rafId = requestAnimationFrame(tick)
      }
      state.rafId = requestAnimationFrame(tick)
    }

    const onKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName
      if (tag === "INPUT" || tag === "TEXTAREA" || (e.target as HTMLElement)?.isContentEditable) return
      if (!KEYS.includes(e.key)) return
      e.preventDefault()
      if (held.has(e.key)) return // already held

      const state = { timer: null as ReturnType<typeof setTimeout> | null, rafId: 0, isContinuous: false, lastTime: 0 }
      held.set(e.key, state)

      state.timer = setTimeout(() => startContinuous(e.key), LONG_PRESS_MS)
    }

    const onKeyUp = (e: KeyboardEvent) => {
      if (!KEYS.includes(e.key)) return
      const state = held.get(e.key)
      if (!state) return

      if (state.timer) clearTimeout(state.timer)
      cancelAnimationFrame(state.rafId)
      const wasContinuous = state.isContinuous
      held.delete(e.key)

      if (wasContinuous) {
        // Stop — just leave at current scroll position (lenis is already there)
        return
      }

      // Quick tap → section snap
      const sections = getSections()
      if (!sections.length) return
      const idx = getCurrentIndex(sections)
      const target = isDown(e.key)
        ? sections[Math.min(idx + 1, sections.length - 1)]
        : sections[Math.max(idx - 1, 0)]
      snapToEl(target)
    }

    // ── Hero button custom event ──
    const onLenisScrollTo = (e: Event) => {
      const { target, offset = 0 } = (e as CustomEvent).detail
      if (target) lenis.scrollTo(target, { offset, duration: 1.6 })
    }

    // ── Anchor click ──
    const onAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a[href^='#'], a[href*='/#']")
      if (!anchor) return
      const href = anchor.getAttribute("href")
      if (!href) return
      const hash = "#" + href.split("#")[1]
      const el = document.querySelector(hash)
      if (!el) return
      e.preventDefault()
      lenis.scrollTo(el as HTMLElement, { offset: 0, duration: 1.6 })
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
      held.forEach((s) => { if (s.timer) clearTimeout(s.timer); cancelAnimationFrame(s.rafId) })
    }
  }, [])

  return null
}
