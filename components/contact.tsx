"use client"

import { Mail, Phone, Link2, ArrowUpRight } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { useAnimate } from "./use-animate"
import { FloatingCubes } from "./floating-cubes"

const phones = ["+91 96323 97595", "+91 77950 70676", "+91 82771 51149"]

export function Contact() {
  const ref = useAnimate()

  return (
    <section id="contact" ref={ref} className="relative z-30 overflow-hidden bg-[#01312D] text-white min-h-[100svh] flex flex-col justify-center">
      <FloatingCubes />
      {/* Decorative */}
      <div className="absolute left-0 top-0 -z-[1] h-[600px] w-[600px] rounded-full bg-[#3A7717]/20 blur-[200px]" />
      <div className="absolute right-0 bottom-0 -z-[1] h-[400px] w-[400px] rounded-full bg-[#BFF202]/5 blur-[150px]" />

      <div className="relative z-40 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="animate-on-scroll inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#BFF202] backdrop-blur-sm">
              Contact
            </p>
            <h2 className="animate-on-scroll mt-6 font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s build a{" "}
              <span className="italic text-[#BFF202]">sustainable future</span>{" "}
              together
            </h2>
            <p className="animate-on-scroll mt-6 max-w-lg text-lg leading-relaxed text-white/65">
              Whether you&apos;re a farmer, researcher, investor, educational
              institution, industry partner, or sustainability enthusiast, we
              welcome opportunities to collaborate and innovate.
            </p>

            <div className="animate-on-scroll mt-12 rounded-[2rem] border border-white/10 bg-white/5 p-8 sm:p-10">
              <h3 className="font-heading text-xl font-semibold text-white">
                Contact Information
              </h3>
              <div className="mt-8 space-y-6">
                <a
                  href="mailto:info@sylvedha.com"
                  className="group flex items-center gap-4 text-white/90 transition-colors hover:text-[#BFF202]"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#BFF202] transition-all duration-300 group-hover:bg-[#BFF202]/15 group-hover:scale-110">
                    <Mail className="size-5" />
                  </span>
                  <span className="text-base">info@sylvedha.com</span>
                </a>

                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#BFF202]">
                    <Phone className="size-5" />
                  </span>
                  <div className="flex flex-col gap-2">
                    {phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="text-base text-white/90 transition-colors hover:text-[#BFF202]"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/company/sylvedhallp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-white/90 transition-colors hover:text-[#BFF202]"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#BFF202] transition-all duration-300 group-hover:bg-[#BFF202]/15 group-hover:scale-110">
                    <Link2 className="size-5" />
                  </span>
                  <span className="inline-flex items-center gap-1 text-base">
                    LinkedIn
                    <ArrowUpRight className="size-4" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
