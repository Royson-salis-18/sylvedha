"use client"

import { useEffect } from "react"

export function GlobalObserver() {
  useEffect(() => {
    const selector =
      ".animate-on-scroll, .animate-slide-left-scroll, .animate-slide-right-scroll, .animate-scale-in-scroll, .animate-tilt-in"

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      { threshold: 0.05, rootMargin: "100px 0px -20px 0px" }
    )

    const observed = new Set<Element>()

    function observeTargets() {
      const targets = document.querySelectorAll<HTMLElement>(selector)

      // Assign stagger delays to elements within a common parent grid
      const grids = document.querySelectorAll<HTMLElement>(".stagger-children")
      grids.forEach((grid) => {
        const children = grid.querySelectorAll<HTMLElement>(selector)
        children.forEach((child, i) => {
          if (!child.style.transitionDelay) {
            child.style.transitionDelay = `${i * 80}ms`
          }
        })
      })

      targets.forEach((t) => {
        if (!observed.has(t)) {
          observer.observe(t)
          observed.add(t)
        }
      })
    }

    observeTargets()

    let debounceTimer: ReturnType<typeof setTimeout> | null = null
    const mutationObserver = new MutationObserver(() => {
      if (debounceTimer) clearTimeout(debounceTimer)
      debounceTimer = setTimeout(() => {
        observeTargets()
      }, 100)
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  return null
}
