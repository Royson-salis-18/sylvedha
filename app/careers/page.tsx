"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { SubtractedCard } from "@/components/subtracted-card"
import { NotifyCardForm } from "@/components/notify-card-form"

export default function CareersPage() {
  const [showNotifyForm, setShowNotifyForm] = useState(false)

  return (
    <>
      <SiteHeader />
      
      <main className="min-h-screen pt-32 pb-24">
        <div className="mx-auto max-w-none landscape:max-w-[95%] 2xl:max-w-[95%] px-5 sm:px-8">
          
          <div className="mb-14">
            <div className="inline-flex items-center gap-2.5 self-start bg-[#BFF202]/10 text-[#BFF202] font-extrabold text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-[#BFF202]/30 shadow-[0_0_20px_rgba(191,242,2,0.15)] backdrop-blur-md mb-6">
              <span className="size-2 rounded-full bg-[#BFF202] animate-pulse shadow-[0_0_8px_#BFF202]" />
              Join Our Team
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-5">
              Innovate with{" "}
              <span className="bg-gradient-to-r from-[#BFF202] via-[#d4ff33] to-[#99cc00] bg-clip-text text-transparent italic font-normal drop-shadow-[0_0_25px_rgba(191,242,2,0.25)]">
                Sylvedha
              </span>
            </h1>
            <p className="text-white/80 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl">
              Build. Learn. Contribute. Join us in building enterprise technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10 items-start">
            
            {/* LEFT SIDE: DETAILED POSTER BENTO + DYNAMIC FORM CARD */}
            <div className="xl:col-span-5 w-full flex flex-col gap-8">
              <div className="w-full relative rounded-[2.5rem] overflow-hidden shadow-[0_30px_90px_rgba(191,242,2,0.1)] border border-white/10 group bg-[#020b07]">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#BFF202]/10 via-transparent to-[#123b00]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />
                <Image src="/images/careers/untitled-design-7.png" alt="Detailed Internship Poster" width={1600} height={2400} quality={100} unoptimized className="w-full h-auto object-contain" />
              </div>

              {/* NEW CARD THAT APPEARS IN THE EMPTY LEFT SPACE WHEN NOTIFY ME IS CLICKED */}
              <AnimatePresence>
                {showNotifyForm && (
                  <motion.div
                    initial={{ opacity: 0, y: 35, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 25, scale: 0.96 }}
                    transition={{
                      duration: 0.75,
                      ease: [0.16, 1, 0.3, 1], // Slow, soothing ease-out
                    }}
                    className="w-full"
                  >
                    <SubtractedCard
                      color="black"
                      corner="top-right"
                      cutoutSize={64}
                      hoverRingScale="small"
                      animationIntensity={0.3}
                      floatingElement={
                        <div className="flex size-full items-center justify-center rounded-full bg-[#BFF202] shadow-md border border-white/10">
                          <ArrowUpRight className="size-6 text-[#011a17]" />
                        </div>
                      }
                      className="!p-8 sm:!p-10"
                    >
                      <NotifyCardForm onBack={() => setShowNotifyForm(false)} />
                    </SubtractedCard>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* RIGHT SIDE: 2 CARDS ONE AFTER THE OTHER */}
            <div className="xl:col-span-7 flex flex-col gap-8 h-full">
              
              {/* INTERNSHIP CARD using SubtractedCard */}
              <div className="w-full">
                <SubtractedCard
                  color="white"
                  corner="top-right"
                  cutoutSize={96}
                  hoverRingScale="large"
                  animationIntensity={0.4}
                  floatingElement={
                    <div className="flex size-full items-center justify-center rounded-full bg-white shadow-lg border border-black/10">
                      <ArrowUpRight className="size-8 text-[#012522]" />
                    </div>
                  }
                  className="h-full !p-0 sm:!p-0"
                >
                  <div className="flex flex-col gap-10 items-center p-8 md:p-12 h-full">
                    {/* 16:9 Image Infographic */}
                    <div className="w-full relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg border border-black/5 group-hover/card:shadow-xl transition-all duration-500 shrink-0 bg-[#051C12]">
                      <div className="relative w-full aspect-[16/9]">
                        <Image src="/images/careers/intern-card.png" alt="Sylvedha Engineering Innovation" fill quality={100} unoptimized className="object-cover group-hover/card:scale-[1.03] transition-transform duration-700 ease-out" />
                      </div>
                    </div>

                    <div className="w-full flex flex-col gap-6">
                      <h2 className="text-3xl md:text-4xl font-extrabold text-[#021a0f] leading-tight tracking-tight">
                        We Are Hiring Interns
                      </h2>
                      
                      <p className="text-[#2a4c3e] text-lg leading-relaxed font-medium">
                        Join Sylvedha and work on meaningful, real-world projects that bring technology, research, and sustainable innovation together.
                      </p>
                      
                      <div className="flex flex-wrap gap-2.5">
                        {[
                          "Web Development", "Software Development", "Embedded & IoT",
                          "AI/ML", "Research & Analytics", "UI/UX & Marketing"
                        ].map(domain => (
                          <span key={domain} className="bg-[#ecf3ed] text-[#042918] text-sm font-bold px-4 py-2 rounded-full border border-transparent transition-colors duration-200 group-hover/card:bg-[#d6e5dc]">
                            {domain}
                          </span>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                        {[
                          { lbl: "Duration", val: "180 Days" },
                          { lbl: "Vacancies", val: "10 Openings" },
                          { lbl: "Mode", val: "Hybrid & Online" },
                          { lbl: "Program", val: "Free Internship" },
                        ].map(detail => (
                          <div key={detail.lbl} className="flex flex-col">
                            <span className="text-xs uppercase font-bold text-[#4b6b5c] tracking-widest">{detail.lbl}</span>
                            <span className="text-base font-bold text-[#021a0f]">{detail.val}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <a href="https://forms.gle/9p3J5Xq4sptwvRTZA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#BFF202] text-[#021a0f] font-bold px-8 py-3.5 rounded-full border border-black/5 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(191,242,2,0.3)] transition-all duration-300">
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </SubtractedCard>
              </div>

              {/* FUTURE HIRING CARD using SubtractedCard */}
              <div className="w-full flex-1 flex flex-col">
                <SubtractedCard
                  color="black"
                  corner="bottom-left"
                  cutoutSize={72}
                  hoverRingScale="small"
                  animationIntensity={0.4}
                  floatingElement={
                    <div className="flex size-full items-center justify-center rounded-full bg-[#BFF202] shadow-md border border-white/10">
                      <ArrowUpRight className="size-6 text-[#011a17]" />
                    </div>
                  }
                  className="h-full !p-0 sm:!p-0"
                >
                  <div className="flex flex-col xl:flex-row-reverse gap-8 xl:gap-10 items-center p-8 md:p-12 h-full">
                    
                    <div className="w-full xl:w-[55%] relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg border border-white/10 group-hover/card:shadow-xl transition-all duration-500 shrink-0 p-3 xl:p-5 flex items-center justify-center bg-[#01140e]">
                      <div className="relative w-full aspect-[16/9] rounded-[1rem] overflow-hidden shadow-md border border-white/10">
                        <Image src="/images/careers/full-time-card.png" alt="Full-Time Hiring" fill quality={100} unoptimized className="object-cover group-hover/card:scale-105 transition-transform duration-700" />
                      </div>
                    </div>

                    <div className="w-full xl:w-[45%] flex flex-col justify-center gap-6">
                      <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight">
                        Full-Time Roles
                      </h3>
                      <p className="text-white/70 text-lg leading-relaxed font-medium">
                        We will be opening up full-time employment opportunities very soon. Keep an eye on this space for engineering, product, and design roles.
                      </p>
                      <button
                        onClick={() => setShowNotifyForm((v) => !v)}
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-max mt-4 px-10 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 cursor-pointer"
                      >
                        {showNotifyForm ? "Close Form" : "Notify Me"}
                      </button>
                    </div>

                  </div>
                </SubtractedCard>
              </div>

            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
