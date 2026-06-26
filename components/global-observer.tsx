"use client"

import { useEffect } from "react"

export function GlobalObserver() {
  useEffect(() => {
    const targets = document.querySelectorAll(
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

  return null
}
