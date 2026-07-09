import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SubtractedCardProps {
  children: ReactNode
  className?: string
  corner?: "top-right" | "bottom-right" | "top-left" | "bottom-left" | "none"
  cutoutSize?: number // Radius of the main cutout in pixels
  filletSize?: number // Radius of the smoothing fillets in pixels
  color?: "dark-green" | "neon" | "black" | "white"
  floatingElement?: ReactNode
}

export function SubtractedCard({
  children,
  className,
  corner = "top-right",
  cutoutSize = 72,
  filletSize = 24,
  color = "dark-green",
  floatingElement,
}: SubtractedCardProps) {
  const bgClasses = {
    "dark-green": "bg-[#023a35]",
    neon: "bg-[#BFF202] text-[#012522]",
    black: "bg-[#011A17] text-[#F5F0E8]",
    white: "bg-[#F5F0E8] text-[#012522]",
  }

  const R = cutoutSize
  const F = filletSize
  const dx = Math.sqrt(R * R + 2 * R * F).toFixed(2)

  // Generate SVG string for the mask
  let svgContent = ''
  if (corner === "top-right") {
    svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <mask id="m">
            <rect x="0" y="0" width="100%" height="100%" fill="white" rx="32" />
            
            <!-- Top Fillet -->
            <rect x="calc(100% - ${dx}px)" y="0" width="${dx}" height="${F}" fill="black" />
            <circle cx="calc(100% - ${dx}px)" cy="${F}" r="${F}" fill="white" />
            
            <!-- Right Fillet -->
            <rect x="calc(100% - ${F}px)" y="0" width="${F}" height="${dx}" fill="black" />
            <circle cx="calc(100% - ${F}px)" cy="${dx}" r="${F}" fill="white" />
            
            <!-- Main Cutout -->
            <circle cx="100%" cy="0" r="${R}" fill="black" />
          </mask>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="white" mask="url(#m)" />
      </svg>
    `
  } else if (corner === "bottom-left") {
    svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <mask id="m">
            <rect x="0" y="0" width="100%" height="100%" fill="white" rx="32" />
            
            <!-- Left Fillet -->
            <rect x="0" y="calc(100% - ${dx}px)" width="${F}" height="${dx}" fill="black" />
            <circle cx="${F}" cy="calc(100% - ${dx}px)" r="${F}" fill="white" />
            
            <!-- Bottom Fillet -->
            <rect x="0" y="calc(100% - ${F}px)" width="${dx}" height="${F}" fill="black" />
            <circle cx="${dx}" cy="calc(100% - ${F}px)" r="${F}" fill="white" />
            
            <!-- Main Cutout -->
            <circle cx="0" cy="100%" r="${R}" fill="black" />
          </mask>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="white" mask="url(#m)" />
      </svg>
    `
  }

  const maskImageStyle = corner !== "none" ? `url("data:image/svg+xml;utf8,${encodeURIComponent(svgContent.trim())}")` : undefined

  return (
    <div className="relative h-full w-full group">
      <div
        className={cn(
          "relative h-full w-full rounded-[2rem] p-8 transition-all duration-500",
          bgClasses[color],
          className
        )}
        style={{
          WebkitMaskImage: maskImageStyle,
          maskImage: maskImageStyle,
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
        }}
      >
        {children}
      </div>
      
      {floatingElement && corner !== "none" && (
        <div 
          className="absolute z-10 flex items-center justify-center transition-transform duration-500 hover:scale-110"
          style={{
            top: corner.includes('top') ? '0px' : 'auto',
            bottom: corner.includes('bottom') ? '0px' : 'auto',
            left: corner.includes('left') ? '0px' : 'auto',
            right: corner.includes('right') ? '0px' : 'auto',
            width: `${R * 1.4}px`,
            height: `${R * 1.4}px`,
            transform: corner === 'top-right' ? 'translate(15%, -15%)' :
                       corner === 'bottom-left' ? 'translate(-15%, 15%)' :
                       'translate(0, 0)'
          }}
        >
          {floatingElement}
        </div>
      )}
    </div>
  )
}
