
"use client"

import { SubtractedCard } from "./subtracted-card"
import { cn } from "@/lib/utils"
import { useRef, useEffect, useState } from "react"

const milestones = [
  {
    title: "K-Tech NAIN Incubation",
    description:
      "Received institutional backing through the K-Tech NAIN program — validating our early technology direction. This support enabled the foundational R&D that shaped everything Sylvedha is building today.",
    note: "The NAIN funding was given to one of the partners before the founding of the firm.",
  },
  {
    title: "Hardware Prototypes Built & Field-Tested",
    description:
      "Moved from concept to working hardware. ARIS (Agriculture Real-Time Intelligence Sensor), ECES (Environmental Controlled Experiment Setup), and the Smart Irrigation Automation System were developed, tested, and demonstrated at industry platforms.",
  },
  {
    title: "First Commercial Sales",
    description:
      "Grevara, our indoor farming sub-brand, completed its first real sales — real customers, real revenue. Proof that our products are market-ready, not just lab experiments.",
  },
  {
    title: "Industry Showcases & Recognition",
    description:
      "Took the hardware to the floor — demonstrated at technology exhibitions and academic platforms. Industry experts, researchers, and stakeholders saw it working. The feedback was clear: this matters.",
  },
]

const cardConfigs = [
  { color: "dark-green", corner: "top-left", ringSurface: "light", textPrimary: "text-white", textSecondary: "text-white/80", floatBg: "bg-transparent", floatText: "text-[#BFF202]" },
  { color: "white", corner: "top-left", ringSurface: "light", textPrimary: "text-[#011e1b]", textSecondary: "text-[#011e1b]/70", floatBg: "bg-transparent", floatText: "text-[#023a35]" },
  { color: "mid-green", corner: "top-left", ringSurface: "light", textPrimary: "text-white", textSecondary: "text-white/80", floatBg: "bg-transparent", floatText: "text-[#1e4d41]" },
  { color: "neon", corner: "top-left", ringSurface: "light", textPrimary: "text-[#011e1b]", textSecondary: "text-[#011e1b]/75", floatBg: "bg-transparent", floatText: "text-[#023a35]" },
] as const

export function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [points, setPoints] = useState<{x: number, y: number}[]>([]);

  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const icons = containerRef.current.querySelectorAll('.milestone-icon');
      
      const newPoints = Array.from(icons).map(icon => {
        const rect = icon.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top,
        };
      });
      setPoints(newPoints);
    };

    // Delay calculation slightly to ensure DOM is fully rendered
    const timeout = setTimeout(updatePath, 100);
    window.addEventListener('resize', updatePath);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', updatePath);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how far the center of the viewport has traveled down the container
      const start = viewportHeight / 2;
      const totalHeight = rect.height;
      // Progress from 0 to 1
      let progress = (start - rect.top) / totalHeight;
      progress = Math.max(-0.2, Math.min(1.2, progress)); // allow glow to enter/exit fully
      
      containerRef.current.style.setProperty('--scroll-progress', progress.toString());
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const createPath = () => {
    if (points.length < 2) return "";
    // Extend start and end points vertically so the line doesn't just stop at the icons
    const startY = -100;
    const endY = points[points.length - 1].y + 200;

    let d = `M ${points[0].x} ${startY} L ${points[0].x} ${points[0].y}`;
    
    for (let i = 1; i < points.length; i++) {
      const pPrev = points[i - 1];
      const pCurr = points[i];
      // Vertical cubic bezier
      const cy1 = pPrev.y + (pCurr.y - pPrev.y) / 2;
      const cy2 = pCurr.y - (pCurr.y - pPrev.y) / 2;
      d += ` C ${pPrev.x} ${cy1}, ${pCurr.x} ${cy2}, ${pCurr.x} ${pCurr.y}`;
    }
    
    d += ` L ${points[points.length - 1].x} ${endY}`;
    return d;
  };

  return (
    <section id="journey" className="relative bg-background min-h-[100svh] py-24 flex flex-col justify-center">
      {/* Decorative Blur Orbs — isolated overflow so they don't clip content */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-[1]">
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-[#BFF202]/5 blur-[150px]" />
        <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-[#3A7717]/5 blur-[120px]" />
      </div>
      
      {/* Sharp grid background overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <p className="animate-on-scroll inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            Company Journey
          </p>
          <h2 className="animate-on-scroll mt-6 font-heading text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            From NAIN incubation<br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#BFF202] pr-2">to first sales</span>
          </h2>
          <p className="animate-on-scroll mt-5 text-base md:text-lg text-muted-foreground font-medium max-w-xl">
            This is where we started. What comes next — you'll see.
          </p>
        </div>

        <div ref={containerRef} className="relative stagger-children max-w-5xl mx-auto md:py-10">
          
          {/* Dynamic SVG Curved Path */}
          <div className="absolute inset-0 pointer-events-none z-[5]">
            <svg className="w-full h-full overflow-visible">
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              {/* Static Dotted Line */}
              <path 
                d={createPath()} 
                fill="none" 
                stroke="#023a35" 
                strokeWidth="2" 
                strokeDasharray="8 8" 
              />
              {/* Moving Glowing Line Segment */}
              <path 
                d={createPath()} 
                fill="none" 
                stroke="#BFF202" 
                strokeWidth="4" 
                pathLength="1"
                strokeDasharray="0.05 1"
                style={{ strokeDashoffset: 'calc(var(--scroll-progress, 0) * -1.05)' }}
                filter="url(#glow)"
                className="transition-all duration-150 ease-out"
              />
            </svg>
          </div>

          {/* Subtracted Cards Layout */}
          <div className="flex flex-col gap-12 lg:gap-16">
            {milestones.map((milestone, i) => {
              const isLast = i === milestones.length - 1;
              const config = isLast ? cardConfigs[3] : cardConfigs[i % cardConfigs.length];
              const isEven = i % 2 === 0;

              return (
                <div 
                  key={milestone.title} 
                  className={cn(
                    "animate-on-scroll w-full md:w-[85%] relative z-10",
                    isEven ? "md:mr-auto" : "md:ml-auto"
                  )}
                >
                  <SubtractedCard
                    color={config.color}
                    ringSurface={config.ringSurface}
                    corner={config.corner}
                    cutoutSize={72}
                    filletSize={28}
                    scoopGap={14}
                    borderRadius={40}
                    floatingElement={
                      <div 
                        className={cn("milestone-icon size-full rounded-full flex items-center justify-center font-heading text-4xl font-black drop-shadow-sm", config.floatBg, config.floatText)}
                        style={config.floatText === "text-[#BFF202]" ? { WebkitTextStroke: "0.5px rgba(1, 37, 34, 0.7)" } : undefined}
                      >
                        0{i + 1}
                      </div>
                    }
                  >
                    <div className="py-2 px-4 lg:px-8 flex flex-col justify-center min-h-[160px]">
                      <h3 className={cn("font-heading text-2xl md:text-3xl font-bold mb-4", config.textPrimary)}>
                        {milestone.title}
                      </h3>
                      <p className={cn("text-base md:text-lg leading-relaxed font-medium max-w-2xl", config.textSecondary)}>
                        {milestone.description}
                      </p>

                      {"ongoing" in milestone && milestone.ongoing && (
                        <div className="mt-5 inline-flex">
                          <span className="inline-flex items-center gap-2 rounded-full border border-[#BFF202]/30 bg-[#BFF202]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#BFF202]">
                            <span className="size-2 rounded-full bg-[#BFF202] animate-pulse" />
                            In Progress
                          </span>
                        </div>
                      )}
                      
                      {milestone.note && (
                        <div className="mt-6 inline-flex">
                          <p className={cn("flex items-start gap-2 rounded-xl border px-4 py-3 text-base md:text-lg font-semibold shadow-inner", 
                            config.color === "white" || config.color === "neon" 
                              ? "border-[#011e1b]/10 bg-[#011e1b]/5 text-[#011e1b]/80"
                              : "border-[#BFF202]/20 bg-[#BFF202]/5 text-[#BFF202]"
                          )}>
                            <span className="mt-0.5 text-[#BFF202]">*</span>
                            {milestone.note}
                          </p>
                        </div>
                      )}
                    </div>
                  </SubtractedCard>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
