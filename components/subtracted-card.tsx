"use client"

import { ReactNode, useRef, useCallback, useState, useEffect, useMemo } from "react"
import { cn } from "@/lib/utils"

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
  floatingElement,
  disableAnimation = false,
  cutouts,
  borderRadius = 32,
  scoopGap = DEFAULT_GAP,
}: SubtractedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
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
        if (!body) return

        const rect = body.getBoundingClientRect()
        const nx = (e.clientX - rect.left) / rect.width
        const ny = (e.clientY - rect.top) / rect.height
        const dx = nx - 0.5
        const dy = ny - 0.5

        body.style.transform = `perspective(900px) rotateX(${-dy * 35}deg) rotateY(${dx * 35}deg) scale(1.04)`
        body.style.transition = "none"

        if (icon && effectiveCorner !== "none") {
          icon.style.transform = `translate(${-dx * 8}px, ${-dy * 8}px) scale(1.03)`
          icon.style.transition = "none"
        }
      })
    },
    [disableAnimation, effectiveCorner]
  )

  const handleMouseLeave = useCallback(() => {
    if (disableAnimation) return
    cancelAnimationFrame(rafRef.current)
    const body = bodyRef.current
    const icon = iconRef.current

    if (body) {
      body.style.transition = "transform 0.5s cubic-bezier(0.22,1,0.36,1)"
      body.style.transform = ""
    }
    if (icon && effectiveCorner !== "none") {
      icon.style.transition = "transform 0.5s cubic-bezier(0.22,1,0.36,1)"
      icon.style.transform = ""
    }
  }, [disableAnimation, effectiveCorner])

  const shaped = Boolean(outlinePath)

  return (
    <div
      ref={cardRef}
      className={cn("relative w-full min-h-[200px] overflow-visible group", !disableAnimation && "cursor-pointer")}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* In-flow body — keeps grid row height; SVG paints the real card shape on top */}
      <div
        ref={bodyRef}
        className={cn(
          "relative w-full min-h-[200px] p-8 will-change-transform",
          !shaped && cn("rounded-[2rem] overflow-hidden", bgClass),
          cleanClass
        )}
      >
        {shaped && (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox={`0 0 ${dims.w} ${dims.h}`}
            preserveAspectRatio="none"
            aria-hidden
          >
            <path d={outlinePath!} fill={fillColor} />
            {hasBorder && (
              <path
                d={outlinePath!}
                fill="none"
                stroke="rgba(255,255,255,0.14)"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
            )}
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
            <div className="absolute inset-0 rounded-full border-2 border-current opacity-0 group-hover:opacity-30 group-hover:scale-[1.4] transition-all duration-700 ease-out" />
          )}
          <div className={cn("size-full", !disableAnimation && "animate-bob")}>{floatingElement}</div>
        </div>
      )}
    </div>
  )
}
