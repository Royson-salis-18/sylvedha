"use client"

import { ReactNode, useRef, useCallback, useState, useEffect, useMemo } from "react"
import { cn } from "@/lib/utils"

// ── Shimmer sweep keyframe injected once ──────────────────────────────────────
const SHIMMER_STYLE = `
  @keyframes sc-shimmer {
    0%   { transform: translateX(-120%) skewX(-15deg); }
    100% { transform: translateX(250%)  skewX(-15deg); }
  }
  .sc-shimmer-run { animation: sc-shimmer 0.65s cubic-bezier(0.4,0,0.2,1) forwards; }
  @keyframes sc-border-spin {
    from { stroke-dashoffset: 0; }
    to   { stroke-dashoffset: -800; }
  }
  /* Only run heavy stroke-dashoffset animation when parent group is hovered to reduce continuous non-composited animations */
  .group:hover .sc-border-anim { animation: sc-border-spin 12s linear infinite; }
`

type SizeValue = number | string

interface CutoutConfig {
  corner: "top-right" | "bottom-right" | "top-left" | "bottom-left"
  sizeX: SizeValue
  sizeY: SizeValue
  fillet: SizeValue
}

interface SubtractedCardProps {
  children: ReactNode
  className?: string
  corner?: "top-right" | "bottom-right" | "top-left" | "bottom-left" | "none"
  cutoutSize?: SizeValue
  filletSize?: number
  color?: "dark-green" | "neon" | "black" | "white" | "purple-gold" | string
  ringSurface?: "light" | "dark"
  floatingElement?: ReactNode
  disableAnimation?: boolean
  cutouts?: CutoutConfig[]
  borderRadius?: number
  scoopGap?: number
}

const DEFAULT_GAP = 16
const MIN_H = 200

const FILL: Record<string, string> = {
  "dark-green": "#023a35",
  neon: "#BFF202",
  black: "#011A17",
  white: "#F5F0E8",
  "purple-gold": "#1a0b2e",
}

const BG: Record<string, string> = {
  "dark-green": "bg-[#023a35] text-white",
  neon: "bg-[#BFF202] text-[#012522]",
  black: "bg-[#011A17] text-[#F5F0E8]",
  white: "bg-[#F5F0E8] text-[#012522]",
  "purple-gold": "bg-[#1a0b2e] text-[#d4af37]",
}

const RING_PALETTES = {
  light: {
    "dark-green": {
      outer: "#01312D",
      inner: "#6B8E23",
      outerGlow: "0 0 14px rgba(1,49,45,0.22)",
      innerGlow: "0 0 14px rgba(74,110,35,0.24)",
    },
    black: {
      outer: "#01312D",
      inner: "#6B8E23",
      outerGlow: "0 0 14px rgba(1,49,45,0.22)",
      innerGlow: "0 0 14px rgba(74,110,35,0.24)",
    },
    "purple-gold": {
      outer: "#1A0B2E",
      inner: "#8A6A16",
      outerGlow: "0 0 14px rgba(26,11,46,0.20)",
      innerGlow: "0 0 14px rgba(138,106,22,0.24)",
    },
    neon: {
      outer: "#BFF202",
      inner: "#6A716D",
      outerGlow: "0 0 18px rgba(191,242,2,0.34)",
      innerGlow: "0 0 14px rgba(70,78,74,0.22)",
    },
    white: {
      outer: "#01312D",
      inner: "#BFF202",
      outerGlow: "0 0 14px rgba(1,49,45,0.22)",
      innerGlow: "0 0 18px rgba(191,242,2,0.34)",
    },
  },
  dark: {
    "dark-green": {
      outer: "#EAFDE7",
      inner: "#BFF202",
      outerGlow: "0 0 22px rgba(234,253,231,0.38)",
      innerGlow: "0 0 24px rgba(191,242,2,0.42)",
    },
    black: {
      outer: "#EAFDE7",
      inner: "#BFF202",
      outerGlow: "0 0 22px rgba(234,253,231,0.38)",
      innerGlow: "0 0 24px rgba(191,242,2,0.42)",
    },
    "purple-gold": {
      outer: "#F5F0E8",
      inner: "#D4AF37",
      outerGlow: "0 0 22px rgba(245,240,232,0.36)",
      innerGlow: "0 0 22px rgba(212,175,55,0.36)",
    },
    neon: {
      outer: "#F5F0E8",
      inner: "#BFF202",
      outerGlow: "0 0 22px rgba(245,240,232,0.38)",
      innerGlow: "0 0 24px rgba(191,242,2,0.42)",
    },
    white: {
      outer: "#BFF202",
      inner: "#F5F0E8",
      outerGlow: "0 0 24px rgba(191,242,2,0.42)",
      innerGlow: "0 0 22px rgba(245,240,232,0.36)",
    },
  },
} as const

type RingColorKey = keyof typeof RING_PALETTES.light

function resolveRingColorKey(color: string): RingColorKey {
  return color in RING_PALETTES.light ? (color as RingColorKey) : "dark-green"
}

function resolveSize(value: SizeValue, reference: number): number {
  if (typeof value === "string") {
    const trimmed = value.trim()
    if (trimmed.endsWith("%")) return (parseFloat(trimmed) / 100) * reference
    return parseFloat(trimmed) || 0
  }
  return value
}

/**
 * Builds a card path with a true concave quarter-circle cutout at the given corner.
 * The cutout is an arc of radius `biteR` whose centre sits exactly on the corner,
 * so the icon placed at that centre appears "nested" inside the circular hollow.
 *
 *  top-left:     arc centre = (0, 0),    arc from (biteR, 0) → (0, biteR)  [sweep CCW = 0]
 *  top-right:    arc centre = (w, 0),    arc from (w, biteR) → (w-biteR, 0)[sweep CCW = 0]
 *  bottom-left:  arc centre = (0, h),    arc from (0, h-biteR) → (biteR, h) [sweep CCW = 0]
 *  bottom-right: arc centre = (w, h),    arc from (w-biteR, h) → (w, h-biteR)[sweep CCW = 0]
 *
 * All other corners keep their standard rounded-rectangle arcs of radius R.
 */
function buildCircularArcCutoutPath(
  w: number,
  h: number,
  R: number,
  corner: CutoutConfig["corner"],
  biteR: number,
  fillet: number,
  offset: number
): string {
  // Clamp bite and fillet to prevent geometry breaking
  const b = Math.min(biteR, Math.min(w, h) * 0.45)
  const F = Math.min(fillet, b * 0.8)
  
  const ratio = F / (b + F)

  switch (corner) {
    case "top-left": {
      const cx = offset, cy = offset;
      const dx = Math.sqrt(Math.max(0, Math.pow(b + F, 2) - Math.pow(cy - F, 2)));
      const dy = Math.sqrt(Math.max(0, Math.pow(b + F, 2) - Math.pow(cx - F, 2)));
      const fx = cx + dx;
      const fy = cy + dy;
      
      const t1x = fx + ratio * (cx - fx);
      const t1y = F + ratio * (cy - F);
      const t2x = F + ratio * (cx - F);
      const t2y = fy + ratio * (cy - fy);
      
      return [
        `M ${fx} 0`,
        `H ${w - R} A ${R} ${R} 0 0 1 ${w} ${R}`,
        `V ${h - R} A ${R} ${R} 0 0 1 ${w - R} ${h}`,
        `H ${R} A ${R} ${R} 0 0 1 0 ${h - R}`,
        `V ${fy}`,
        `A ${F} ${F} 0 0 1 ${t2x} ${t2y}`,
        `A ${b} ${b} 0 0 0 ${t1x} ${t1y}`,
        `A ${F} ${F} 0 0 1 ${fx} 0`,
        "Z",
      ].join(" ")
    }

    case "top-right": {
      const cx = w - offset, cy = offset;
      const dx = Math.sqrt(Math.max(0, Math.pow(b + F, 2) - Math.pow(cy - F, 2)));
      const dy = Math.sqrt(Math.max(0, Math.pow(b + F, 2) - Math.pow(w - cx - F, 2)));
      const fx = cx - dx;
      const fy = cy + dy;
      
      const t1x = fx + ratio * (cx - fx);
      const t1y = F + ratio * (cy - F);
      const t2x = w - F + ratio * (cx - (w - F));
      const t2y = fy + ratio * (cy - fy);
      
      return [
        `M ${R} 0`,
        `H ${fx}`,
        `A ${F} ${F} 0 0 1 ${t1x} ${t1y}`,
        `A ${b} ${b} 0 0 0 ${t2x} ${t2y}`,
        `A ${F} ${F} 0 0 1 ${w} ${fy}`,
        `V ${h - R} A ${R} ${R} 0 0 1 ${w - R} ${h}`,
        `H ${R} A ${R} ${R} 0 0 1 0 ${h - R}`,
        `V ${R} A ${R} ${R} 0 0 1 ${R} 0`,
        "Z",
      ].join(" ")
    }

    case "bottom-left": {
      const cx = offset, cy = h - offset;
      const dx = Math.sqrt(Math.max(0, Math.pow(b + F, 2) - Math.pow(h - cy - F, 2)));
      const dy = Math.sqrt(Math.max(0, Math.pow(b + F, 2) - Math.pow(cx - F, 2)));
      const fx = cx + dx;
      const fy = cy - dy;
      
      const t1x = F + ratio * (cx - F);
      const t1y = fy + ratio * (cy - fy);
      const t2x = fx + ratio * (cx - fx);
      const t2y = h - F + ratio * (cy - (h - F));
      
      return [
        `M ${R} 0`,
        `H ${w - R} A ${R} ${R} 0 0 1 ${w} ${R}`,
        `V ${h - R} A ${R} ${R} 0 0 1 ${w - R} ${h}`,
        `H ${fx}`,
        `A ${F} ${F} 0 0 1 ${t2x} ${t2y}`,
        `A ${b} ${b} 0 0 0 ${t1x} ${t1y}`,
        `A ${F} ${F} 0 0 1 0 ${fy}`,
        `V ${R} A ${R} ${R} 0 0 1 ${R} 0`,
        "Z",
      ].join(" ")
    }

    case "bottom-right": {
      const cx = w - offset, cy = h - offset;
      const dx = Math.sqrt(Math.max(0, Math.pow(b + F, 2) - Math.pow(h - cy - F, 2)));
      const dy = Math.sqrt(Math.max(0, Math.pow(b + F, 2) - Math.pow(w - cx - F, 2)));
      const fx = cx - dx;
      const fy = cy - dy;
      
      const t1x = w - F + ratio * (cx - (w - F));
      const t1y = fy + ratio * (cy - fy);
      const t2x = fx + ratio * (cx - fx);
      const t2y = h - F + ratio * (cy - (h - F));
      
      return [
        `M ${R} 0`,
        `H ${w - R} A ${R} ${R} 0 0 1 ${w} ${R}`,
        `V ${fy}`,
        `A ${F} ${F} 0 0 1 ${t1x} ${t1y}`,
        `A ${b} ${b} 0 0 0 ${t2x} ${t2y}`,
        `A ${F} ${F} 0 0 1 ${fx} ${h}`,
        `H ${R} A ${R} ${R} 0 0 1 0 ${h - R}`,
        `V ${R} A ${R} ${R} 0 0 1 ${R} 0`,
        "Z",
      ].join(" ")
    }

    default:
      return `M ${R} 0 H ${w - R} A ${R} ${R} 0 0 1 ${w} ${R} V ${h - R} A ${R} ${R} 0 0 1 ${w - R} ${h} H ${R} A ${R} ${R} 0 0 1 0 ${h - R} V ${R} A ${R} ${R} 0 0 1 ${R} 0 Z`
  }
}

function buildCardOutlinePath(
  w: number,
  h: number,
  borderRadius: number,
  cutouts: CutoutConfig[],
  singleCorner?: CutoutConfig["corner"],
  gap = DEFAULT_GAP
): string {
  const R = borderRadius

  // Always use the circular arc cutout for single-corner mode
  if (singleCorner && cutouts.length === 1) {
    const iconR = resolveSize(cutouts[0].sizeX, Math.min(w, h)) / 2
    const biteR = iconR + gap
    const fillet = resolveSize(cutouts[0].fillet, Math.min(w, h))
    const offset = iconR * 0.75 // Bring icon closer to the card center
    return buildCircularArcCutoutPath(w, h, R, singleCorner, biteR, fillet, offset)
  }

  return `M ${R} 0 H ${w - R} A ${R} ${R} 0 0 1 ${w} ${R} V ${h - R} A ${R} ${R} 0 0 1 ${w - R} ${h} H ${R} A ${R} ${R} 0 0 1 0 ${h - R} V ${R} A ${R} ${R} 0 0 1 ${R} 0 Z`
}

/**
 * Returns the bounding box for the floating icon element.
 * The icon is centred at the corner vertex of the card (0,0 / w,0 / etc.),
 * which is exactly the centre of the concave circular arc cutout.
 * This makes the icon appear "nested" in the circular hollow.
 */
function getFloatingCircleBox(
  corner: string,
  iconDiameter: number,
  cardW: number,
  cardH: number,
  _biteR: number
) {
  const r = iconDiameter / 2
  const offset = r * 0.75 // Match the offset used in path building
  let cx: number
  let cy: number

  switch (corner) {
    case "top-left":
      cx = offset
      cy = offset
      break
    case "top-right":
      cx = cardW - offset
      cy = offset
      break
    case "bottom-left":
      cx = offset
      cy = cardH - offset
      break
    case "bottom-right":
      cx = cardW - offset
      cy = cardH - offset
      break
    default:
      return { left: 0, top: 0, width: iconDiameter, height: iconDiameter }
  }

  return { left: cx - r, top: cy - r, width: iconDiameter, height: iconDiameter }
}

export function SubtractedCard({
  children,
  className,
  corner = "top-right",
  cutoutSize = 56,
  filletSize,
  color = "dark-green",
  ringSurface = "light",
  floatingElement,
  disableAnimation = false,
  cutouts,
  borderRadius = 32,
  scoopGap = DEFAULT_GAP,
}: SubtractedCardProps) {
  const cardRef  = useRef<HTMLDivElement>(null)
  const bodyRef  = useRef<HTMLDivElement>(null)
  const iconRef  = useRef<HTMLDivElement>(null)
  const shimRef  = useRef<HTMLDivElement>(null)
  const spotRef  = useRef<HTMLDivElement>(null)
  const rafRef   = useRef<number>(0)
  const shimmedRef = useRef(false)
  const [dims, setDims] = useState({ w: 0, h: 0 })

  const fillColor = FILL[color] || color
  const bgClass = BG[color] || ""

  const iconDiameter = useMemo(() => {
    if (dims.w === 0 || dims.h === 0) {
      return typeof cutoutSize === "string" ? parseFloat(cutoutSize) || 56 : cutoutSize
    }
    return resolveSize(cutoutSize, Math.min(dims.w, dims.h))
  }, [cutoutSize, dims.w, dims.h])

  const biteRadius = iconDiameter / 2 + scoopGap
  const resolvedFillet = filletSize ?? Math.min(iconDiameter * 0.4, 32)

  const activeCutouts: CutoutConfig[] =
    cutouts ||
    (corner !== "none"
      ? [
          {
            corner: corner as CutoutConfig["corner"],
            sizeX: cutoutSize,
            sizeY: cutoutSize,
            fillet: resolvedFillet,
          },
        ]
      : [])

  const effectiveCorner = cutouts && cutouts.length > 0 ? "none" : corner
  const singleCornerMode = effectiveCorner !== "none" ? effectiveCorner : undefined

  const outlinePath = useMemo(() => {
    if (activeCutouts.length === 0 || dims.w === 0 || dims.h === 0) return null
    return buildCardOutlinePath(dims.w, dims.h, borderRadius, activeCutouts, singleCornerMode, scoopGap)
  }, [activeCutouts, borderRadius, dims.h, dims.w, scoopGap, singleCornerMode])

  const floatingBox = useMemo(() => {
    if (effectiveCorner === "none" || dims.w === 0 || dims.h === 0) return null
    return getFloatingCircleBox(effectiveCorner, iconDiameter, dims.w, dims.h, biteRadius)
  }, [biteRadius, dims.h, dims.w, effectiveCorner, iconDiameter])

  const hasBorder = className?.includes("border")
  const cleanClass = useMemo(() => {
    if (!className) return ""
    return className
      .split(/\s+/)
      .filter((c) => !c.startsWith("border") && !c.startsWith("bg-"))
      .join(" ")
  }, [className])

  useEffect(() => {
    const el = bodyRef.current
    if (!el) return

    const update = () => {
      const { width, height } = el.getBoundingClientRect()
      const w = Math.max(1, Math.round(width))
      const h = Math.max(1, Math.round(height))
      setDims((prev) => (prev.w === w && prev.h === h ? prev : { w, h }))
    }

    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (disableAnimation) return
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        const body = bodyRef.current
        const icon = iconRef.current
        const spot = spotRef.current
        if (!body) return

        const rect = body.getBoundingClientRect()
        const nx = (e.clientX - rect.left) / rect.width
        const ny = (e.clientY - rect.top) / rect.height
        const dx = nx - 0.5
        const dy = ny - 0.5

        // Stronger 3D tilt
        body.style.transform = `perspective(800px) rotateX(${-dy * 18}deg) rotateY(${dx * 18}deg) scale(1.045) translateZ(0)`
        body.style.transition = "none"

        // Spotlight follow
        if (spot) {
          spot.style.opacity = "1"
          spot.style.background = `radial-gradient(circle at ${nx * 100}% ${ny * 100}%, rgba(255,255,255,0.07) 0%, transparent 60%)`
          spot.style.transition = "none"
        }

        // Icon parallax counter-movement
        if (icon && effectiveCorner !== "none") {
          icon.style.transform = `translate(${-dx * 14}px, ${-dy * 14}px) scale(1.05) rotate(${dx * 6}deg)`
          icon.style.transition = "none"
        }
      })
    },
    [disableAnimation, effectiveCorner]
  )

  const handleMouseEnter = useCallback(() => {
    if (disableAnimation) return
    // Shimmer sweep — only once per hover
    const shim = shimRef.current
    if (!shim) return
    shimmedRef.current = false
    shim.classList.remove("sc-shimmer-run")
    // force reflow
    void shim.offsetWidth
    shim.classList.add("sc-shimmer-run")
  }, [disableAnimation])

  const handleMouseLeave = useCallback(() => {
    if (disableAnimation) return
    cancelAnimationFrame(rafRef.current)
    const body = bodyRef.current
    const icon = iconRef.current
    const spot = spotRef.current

    if (body) {
      body.style.transition = "transform 0.55s cubic-bezier(0.22,1,0.36,1)"
      body.style.transform = ""
    }
    if (spot) {
      spot.style.transition = "opacity 0.4s ease"
      spot.style.opacity = "0"
    }
    if (icon && effectiveCorner !== "none") {
      icon.style.transition = "transform 0.55s cubic-bezier(0.22,1,0.36,1)"
      icon.style.transform = ""
    }
  }, [disableAnimation, effectiveCorner])

  const shaped = Boolean(outlinePath)

  const ringPalette = useMemo(() => {
    return RING_PALETTES[ringSurface][resolveRingColorKey(color)]
  }, [color, ringSurface])

  return (
    <div
      ref={cardRef}
      className={cn("relative w-full min-h-[200px] overflow-visible group", !disableAnimation && "cursor-pointer")}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {/* Inject shimmer keyframes once */}
      <style>{SHIMMER_STYLE}</style>
      {/* In-flow body — keeps grid row height; SVG paints the real card shape on top */}
      <div
        ref={bodyRef}
        className={cn(
          "relative w-full min-h-[200px] p-8 will-change-transform",
          !shaped && cn("rounded-[2rem] overflow-hidden", bgClass),
          cleanClass
        )}
      >
        {/* Shimmer sweep overlay */}
        <div
          ref={shimRef}
          className="absolute inset-0 z-[3] pointer-events-none overflow-hidden"
          style={{ borderRadius: borderRadius }}
        >
          <div
            className="absolute inset-y-0 w-[40%] bg-gradient-to-r from-transparent via-white/12 to-transparent"
            style={{ transform: "translateX(-120%) skewX(-15deg)" }}
          />
        </div>

        {/* Spotlight follow */}
        <div
          ref={spotRef}
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{ opacity: 0, borderRadius: borderRadius }}
        />

        {shaped && (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox={`0 0 ${dims.w} ${dims.h}`}
            preserveAspectRatio="none"
            aria-hidden
          >
            {/* Fill */}
            <path d={outlinePath!} fill={fillColor} />
            {/* Animated gradient border */}
            <path
              d={outlinePath!}
              fill="none"
              stroke="url(#sc-grad-border)"
              strokeWidth="1.8"
              strokeDasharray="80 40"
              vectorEffect="non-scaling-stroke"
              className="sc-border-anim opacity-60 group-hover:opacity-100 transition-opacity duration-500"
            />
            <defs>
              <linearGradient id="sc-grad-border" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                <stop offset="40%" stopColor="rgba(255,255,255,0.5)" />
                <stop offset="60%" stopColor="rgba(191,242,2,0.6)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
            </defs>
          </svg>
        )}

        {effectiveCorner !== "none" && effectiveCorner.includes("top") && (
          <div
            className="relative z-[2]"
            style={{
              float: effectiveCorner.includes("right") ? "right" : "left",
              width: biteRadius,
              height: biteRadius,
            }}
          />
        )}

        <div className="relative z-[2]">{children}</div>

        {effectiveCorner !== "none" && effectiveCorner.includes("bottom") && (
          <div className="relative z-[2]" style={{ height: biteRadius, width: "100%", clear: "both" }} />
        )}
      </div>

      {floatingElement && floatingBox && (
        <div
          ref={iconRef}
          className="absolute z-[60] flex items-center justify-center will-change-transform pointer-events-none"
          style={{
            left: `${floatingBox.left}px`,
            top: `${floatingBox.top}px`,
            width: `${floatingBox.width}px`,
            height: `${floatingBox.height}px`,
            transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {!disableAnimation && (
            <>
              {/* Outer ring */}
              <div
                className="absolute inset-0 rounded-full border-[2.5px] opacity-0 group-hover:opacity-100 group-hover:scale-[1.7] transition-all duration-700 ease-out"
                style={{ borderColor: ringPalette.outer, boxShadow: ringPalette.outerGlow }}
              />
              {/* Inner ring */}
              <div
                className="absolute inset-0 rounded-full border-[2.5px] opacity-0 group-hover:opacity-100 group-hover:scale-[1.3] transition-all duration-500 ease-out"
                style={{ borderColor: ringPalette.inner, boxShadow: ringPalette.innerGlow }}
              />
            </>
          )}
          <div className={cn(
            "size-full transition-all duration-500",
            !disableAnimation && "animate-bob group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
          )}>{floatingElement}</div>
        </div>
      )}
    </div>
  )
}
