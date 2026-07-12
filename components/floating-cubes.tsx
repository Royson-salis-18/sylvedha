"use client"

import { useEffect, useRef } from "react"

interface InterlockingCubeGroup {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  rotationX1: number
  rotationY1: number
  rotationZ1: number
  rotationX2: number
  rotationY2: number
  rotationZ2: number
  speedX1: number
  speedY1: number
  speedZ1: number
  speedX2: number
  speedY2: number
  speedZ2: number
  opacity: number
}

const VERTICES = [
  [-1, -1, -1],
  [1, -1, -1],
  [1, 1, -1],
  [-1, 1, -1],
  [-1, -1, 1],
  [1, -1, 1],
  [1, 1, 1],
  [-1, 1, 1],
]

const EDGES = [
  [0, 1], [1, 2], [2, 3], [3, 0],
  [4, 5], [5, 6], [6, 7], [7, 4],
  [0, 4], [1, 5], [2, 6], [3, 7],
]

export function FloatingCubes() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const groupsRef = useRef<InterlockingCubeGroup[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.clientWidth
        canvas.height = parent.clientHeight
      }
    }
    resize()

    // Generate groups — fewer on mobile to save CPU/GPU
    const isMobile = window.innerWidth < 768
    const numGroups = isMobile ? 8 : 20
    const groups: InterlockingCubeGroup[] = []
    for (let i = 0; i < numGroups; i++) {
      // Random direction vectors for multi-directional movement
      const angle = Math.random() * Math.PI * 2
      const speed = 10 + Math.random() * 20

      groups.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 20 + Math.random() * 30, // Varied sizes
        rotationX1: Math.random() * Math.PI,
        rotationY1: Math.random() * Math.PI,
        rotationZ1: Math.random() * Math.PI,
        rotationX2: Math.random() * Math.PI,
        rotationY2: Math.random() * Math.PI,
        rotationZ2: Math.random() * Math.PI,
        speedX1: (Math.random() - 0.5) * 0.4,
        speedY1: (Math.random() - 0.5) * 0.4,
        speedZ1: (Math.random() - 0.5) * 0.4,
        speedX2: (Math.random() - 0.5) * 0.6,
        speedY2: (Math.random() - 0.5) * 0.6,
        speedZ2: (Math.random() - 0.5) * 0.6,
        opacity: 0.05 + Math.random() * 0.1, // Slightly brighter opacities
      })
    }
    groupsRef.current = groups

    let animId: number = 0
    let lastTime = 0

    const rotate3D = (
      x: number,
      y: number,
      z: number,
      ax: number,
      ay: number,
      az: number
    ): [number, number, number] => {
      let sin = Math.sin(ax), cos = Math.cos(ax)
      let y1 = y * cos - z * sin
      let z1 = y * sin + z * cos

      sin = Math.sin(ay)
      cos = Math.cos(ay)
      let x2 = x * cos + z1 * sin
      let z2 = -x * sin + z1 * cos

      sin = Math.sin(az)
      cos = Math.cos(az)
      let x3 = x2 * cos - y1 * sin
      let y3 = x2 * sin + y1 * cos

      return [x3, y3, z2]
    }

    const drawCube = (
      cx: number,
      cy: number,
      scale: number,
      ax: number,
      ay: number,
      az: number,
      opacity: number
    ) => {
      const projected: [number, number][] = []

      for (const vertex of VERTICES) {
        const [rx, ry] = rotate3D(
          vertex[0] * scale,
          vertex[1] * scale,
          vertex[2] * scale,
          ax,
          ay,
          az
        )
        projected.push([cx + rx, cy + ry])
      }

      ctx.strokeStyle = `rgba(191, 242, 2, ${opacity})`
      ctx.lineWidth = 1
      ctx.beginPath()

      for (const edge of EDGES) {
        const p1 = projected[edge[0]]
        const p2 = projected[edge[1]]
        ctx.moveTo(p1[0], p1[1])
        ctx.lineTo(p2[0], p2[1])
      }
      ctx.stroke()
    }

    // Throttle to ~30fps on mobile to reduce CPU usage
    const frameInterval = isMobile ? 33 : 0
    let lastFrame = 0

    const draw = (time: number) => {
      const dt = (time - lastTime) / 1000
      lastTime = time

      // Skip frames on mobile
      if (frameInterval && time - lastFrame < frameInterval) {
        animId = requestAnimationFrame(draw)
        return
      }
      lastFrame = time

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const group of groups) {
        // Multi-directional floating
        group.x += group.vx * dt
        group.y += group.vy * dt

        // Wrap around edges so they emerge from all sides
        if (group.x < -group.size * 2) group.x = canvas.width + group.size * 2
        if (group.x > canvas.width + group.size * 2) group.x = -group.size * 2
        if (group.y < -group.size * 2) group.y = canvas.height + group.size * 2
        if (group.y > canvas.height + group.size * 2) group.y = -group.size * 2

        // Update rotations
        group.rotationX1 += group.speedX1 * dt
        group.rotationY1 += group.speedY1 * dt
        group.rotationZ1 += group.speedZ1 * dt
        group.rotationX2 += group.speedX2 * dt
        group.rotationY2 += group.speedY2 * dt
        group.rotationZ2 += group.speedZ2 * dt

        // Draw Outer
        drawCube(
          group.x,
          group.y,
          group.size,
          group.rotationX1,
          group.rotationY1,
          group.rotationZ1,
          group.opacity
        )

        // Draw Inner
        drawCube(
          group.x,
          group.y,
          group.size * 0.6,
          group.rotationX2,
          group.rotationY2,
          group.rotationZ2,
          group.opacity * 1.5
        )
      }

      animId = requestAnimationFrame(draw)
    }

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (!animId) {
            lastTime = performance.now()
            animId = requestAnimationFrame(draw)
          }
        } else {
          if (animId) {
            cancelAnimationFrame(animId)
            animId = 0
          }
        }
      },
      { rootMargin: "200px" }
    )
    intersectionObserver.observe(canvas)

    const resizeObserver = new ResizeObserver(resize)
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement)
    }

    return () => {
      if (animId) cancelAnimationFrame(animId)
      intersectionObserver.disconnect()
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
    />
  )
}
