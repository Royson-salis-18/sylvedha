import { ReactNode, useId } from "react"
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
  const maskId = useId()

  const bgClasses = {
    "dark-green": "bg-[#023a35]",
    neon: "bg-[#BFF202] text-[#012522]",
    black: "bg-[#011A17] text-[#F5F0E8]",
    white: "bg-[#F5F0E8] text-[#012522]",
  }

  const R = cutoutSize
  const F = filletSize

  return (
    <div className="relative h-full w-full group">
      {corner !== "none" && (
        <svg width="0" height="0" className="absolute pointer-events-none">
          <defs>
            <mask id={maskId}>
              <rect x="0" y="0" width="100%" height="100%" fill="white" rx="32" />
              
              {corner === "top-right" && (
                <>
                  <circle cx="100%" cy="0" r={R} fill="black" />
                  <path d={`M calc(100% - ${R}px) 0 L calc(100% - ${R + F}px) 0 A ${F} ${F} 0 0 1 calc(100% - ${R}px) ${F} Z`} fill="black" />
                  <path d={`M 100% ${R} L 100% ${R + F} A ${F} ${F} 0 0 0 calc(100% - ${F}px) ${R} Z`} fill="black" />
                </>
              )}
              
              {corner === "bottom-left" && (
                <>
                  <circle cx="0" cy="100%" r={R} fill="black" />
                  <path d={`M 0 calc(100% - ${R}px) L 0 calc(100% - ${R + F}px) A ${F} ${F} 0 0 0 ${F} calc(100% - ${R}px) Z`} fill="black" />
                  <path d={`M ${R} 100% L ${R + F} 100% A ${F} ${F} 0 0 1 ${R} calc(100% - ${F}px) Z`} fill="black" />
                </>
              )}
              
              {/* Note: top-left and bottom-right omitted for brevity, add if needed later */}
            </mask>
          </defs>
        </svg>
      )}

      <div
        className={cn(
          "relative h-full w-full rounded-[2rem] p-8 transition-all duration-500",
          bgClasses[color],
          className
        )}
        style={{
          WebkitMaskImage: corner !== "none" ? `url(#${maskId})` : undefined,
          maskImage: corner !== "none" ? `url(#${maskId})` : undefined,
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
