import { Mail, Phone, ArrowUpRight } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { FloatingCubes } from "./floating-cubes"
import { SubtractedCard } from "@/components/subtracted-card"

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const phones = ["CEO: +91 77950 70676", "COO: +91 96323 97595", "CTO: +91 82771 51149", "Whatsapp: +91 91875 98775"]

export function Contact() {
  return (
    <section id="contact" className="relative z-30 overflow-hidden bg-[#01312D] text-white min-h-[100svh] flex flex-col justify-center">
      <FloatingCubes />
      {/* Decorative */}
      <div className="absolute left-0 top-0 -z-[1] h-[600px] w-[600px] rounded-full bg-[#3A7717]/30 blur-[200px]" />
      <div className="absolute right-0 bottom-0 -z-[1] h-[400px] w-[400px] rounded-full bg-[#BFF202]/10 blur-[150px]" />

      {/* Sharp geometric accents */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#BFF202]/80 via-white/20 to-transparent" />
        <div className="absolute top-0 left-0 w-32 h-[3px] bg-[#BFF202]" />
        <div className="absolute left-8 top-8 h-14 w-14 border-l-2 border-t-2 border-[#BFF202]/60" />
        <div className="absolute right-8 top-8 h-14 w-14 border-r-2 border-t-2 border-white/20" />
        <div className="absolute bottom-8 right-8 h-10 w-10 border-b-2 border-r-2 border-[#BFF202]/40" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#BFF202]/30 via-white/10 to-transparent" />
        <div className="absolute left-0 top-0 h-[35%] w-px bg-gradient-to-b from-[#BFF202]/60 to-transparent" />
      </div>

      <div className="relative z-40 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-2">

          {/* Left column */}
          <div className="flex flex-col">
            <div className="mb-12">
              <p className="animate-on-scroll inline-flex items-center gap-2 rounded-xl border border-[#BFF202]/30 bg-[#BFF202]/10 px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#BFF202] backdrop-blur-sm">
                Contact
              </p>
              <h2 className="animate-on-scroll mt-6 font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-white">
                Let&apos;s build a{" "}
                <span className="italic text-[#BFF202]">sustainable future</span>{" "}
                together
              </h2>
              <p className="animate-on-scroll mt-6 max-w-lg text-lg leading-relaxed text-white/75">
                Whether you&apos;re a farmer, researcher, investor, educational
                institution, industry partner, or sustainability enthusiast, we
                welcome opportunities to collaborate and innovate.
              </p>
            </div>

            <div className="flex-1 flex flex-col gap-6 lg:gap-8 justify-end">

              {/* White Contact Card */}
              <div className="animate-on-scroll">
                <SubtractedCard
                  color="white"
                  ringSurface="dark"
                  shutterColor="#E8E2D4"
                  shutterContent={
                    <div className="flex flex-col items-center gap-4">
                      <Mail className="size-24 text-[#011e1b]/40" strokeWidth={1} />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#011e1b]/40">Hover to reveal</span>
                    </div>
                  }
                  corner="bottom-right"
                  cutoutSize={72}
                  filletSize={28}
                  scoopGap={14}
                  borderRadius={40}
                  floatingElement={
                    <div className="size-full rounded-full bg-[#011e1b] flex items-center justify-center shadow-xl">
                      <Mail className="size-7 text-[#BFF202]" />
                    </div>
                  }
                >
                  <h3 className="font-heading text-xl font-bold text-[#011e1b]">
                    Contact Information
                  </h3>
                  <div className="mt-8 space-y-8">
                    <a href="mailto:info@sylvedha.com" className="flex items-center gap-5">
                      <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#011e1b] text-white shadow-lg">
                        <Mail className="size-6" />
                      </span>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#011e1b]/40 mb-1">Email</p>
                        <span className="text-lg font-bold text-[#011e1b]">info@sylvedha.com</span>
                      </div>
                    </a>

                    <div className="flex items-start gap-5">
                      <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#011e1b]/5 border border-[#011e1b]/10 text-[#011e1b] shadow-sm">
                        <Phone className="size-6" />
                      </span>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#011e1b]/40 mb-2">Phone</p>
                        <div className="flex flex-col gap-2">
                          {phones.map((phone) => (
                            <a 
                              key={phone} 
                              href={phone.includes('Whatsapp') ? `https://wa.me/${phone.replace(/[^\d]/g, "")}` : `tel:${phone.replace(/[^\d+]/g, "")}`} 
                              target={phone.includes('Whatsapp') ? "_blank" : undefined}
                              rel={phone.includes('Whatsapp') ? "noopener noreferrer" : undefined}
                              className="text-base font-semibold text-[#011e1b]/80"
                            >
                              {phone}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </SubtractedCard>
              </div>

              {/* Neon LinkedIn Card */}
              <div className="animate-on-scroll">
                <SubtractedCard
                  color="neon"
                  ringSurface="dark"
                  shutterColor="#011e1b"
                  shutterContent={
                    <div className="flex flex-col items-center gap-4">
                      <LinkedinIcon className="size-24 text-[#BFF202]" strokeWidth={1} />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#BFF202]/70">Hover to connect</span>
                    </div>
                  }
                  corner="top-left"
                  cutoutSize={64}
                  filletSize={24}
                  scoopGap={12}
                  borderRadius={40}
                  floatingElement={
                    <div className="size-full rounded-full bg-[#011e1b] flex items-center justify-center shadow-xl">
                      <LinkedinIcon className="size-6 text-[#BFF202]" />
                    </div>
                  }
                >
                  <a
                    href="https://www.linkedin.com/company/sylvedha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full h-full pt-4"
                  >
                    <div className="flex flex-col gap-1">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#011e1b]/60 mb-3">Social</p>
                      <span className="block font-heading text-3xl lg:text-4xl font-extrabold text-[#011e1b]">LinkedIn</span>
                      <span className="text-base lg:text-lg font-medium text-[#011e1b]/70">@Sylvedha</span>
                    </div>
                    <ArrowUpRight className="size-10 lg:size-12 text-[#011e1b]/40 transition-transform group-hover/card:translate-x-1 group-hover/card:-translate-y-1 group-data-[mobile-open=true]/card:translate-x-1 group-data-[mobile-open=true]/card:-translate-y-1" />
                  </a>
                </SubtractedCard>
              </div>

            </div>
          </div>

          {/* Right column — contact form */}
          <div className="animate-on-scroll flex flex-col pt-2 gap-6 lg:gap-8">
            <ContactForm />
            
            {/* Instagram Card */}
            <div className="animate-on-scroll">
              <SubtractedCard
                color="black"
                  ringSurface="dark"
                  shutterColor="#BFF202"
                  shutterContent={
                    <div className="flex flex-col items-center gap-4">
                      <InstagramIcon className="size-24 text-[#011e1b]" strokeWidth={1} />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#011e1b]/70">Hover to connect</span>
                    </div>
                  }
                corner="top-right"
                cutoutSize={64}
                filletSize={24}
                scoopGap={12}
                borderRadius={40}
                floatingElement={
                  <div className="size-full rounded-full bg-[#BFF202] flex items-center justify-center shadow-xl">
                    <InstagramIcon className="size-6 text-[#011e1b]" />
                  </div>
                }
              >
                <a
                  href="https://instagram.com/sylvedha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full h-full pt-4"
                >
                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5F0E8]/60 mb-3">Social</p>
                    <span className="block font-heading text-3xl lg:text-4xl font-extrabold text-[#F5F0E8]">Instagram</span>
                    <span className="text-base lg:text-lg font-medium text-[#F5F0E8]/70">@Sylvedha</span>
                  </div>
                  <ArrowUpRight className="size-10 lg:size-12 text-[#F5F0E8]/40 transition-transform group-hover/card:translate-x-1 group-hover/card:-translate-y-1 group-data-[mobile-open=true]/card:translate-x-1 group-data-[mobile-open=true]/card:-translate-y-1" />
                </a>
              </SubtractedCard>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
