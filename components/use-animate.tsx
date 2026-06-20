"use client"

import { useEffect, useRef } from "react"

export function useAnimate() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = el.querySelectorAll(
      ".animate-on-scroll, .animate-slide-left-scroll, .animate-slide-right-scroll, .animate-scale-in-scroll"
    )
    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      { threshold: 0, rootMargin: "100px 0px 100px 0px" }
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return ref
}
