"use client"

import { useEffect } from "react"

export function GlobalObserver() {
  useEffect(() => {
    const selector =
      ".animate-on-scroll, .animate-slide-left-scroll, .animate-slide-right-scroll, .animate-scale-in-scroll, .animate-tilt-in"

    function observeTargets() {
      const targets = document.querySelectorAll<HTMLElement>(selector)
      if (targets.length === 0) return

      // Assign stagger delays to elements within a common parent grid
      const grids = document.querySelectorAll<HTMLElement>(".stagger-children")
      grids.forEach((grid) => {
        const children = grid.querySelectorAll<HTMLElement>(selector)
        children.forEach((child, i) => {
          child.style.transitionDelay = `${i * 80}ms`
        })
      })

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible")
            }
          })
        },
        { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
      )

      targets.forEach((t) => observer.observe(t))
      return observer
    }

    const obs = observeTargets()
    return () => obs?.disconnect()
  }, [])

  return null
}
