"use client"

import { useActionState, useEffect, useState, useRef, useCallback } from "react"
import { useFormStatus } from "react-dom"
import { CheckCircle2, AlertCircle, Send, ArrowRight, Check } from "lucide-react"
import { sendContact, type ContactState } from "@/app/actions/send-contact"

const initialState: ContactState = { status: "idle", message: "" }

function SubmitButton({ disabled }: { disabled: boolean }) {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending || disabled}
      className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-b from-[#d4ff33] to-[#BFF202] border border-[#a1cc00] shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_4px_14px_rgba(191,242,2,0.15)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_6px_20px_rgba(191,242,2,0.3)] px-6 py-4 text-base font-semibold text-[#01312D] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#BFF202]/25 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending..." : "Send message"}
      <Send className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </button>
  )
}

const inputClasses =
  "w-full rounded-xl border border-transparent bg-[#022c27] px-5 py-4 text-sm font-medium text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[#BFF202]/50 focus:bg-[#02332e] focus:ring-4 focus:ring-[#BFF202]/10"

function SlideToVerify({ onVerify }: { onVerify: (verified: boolean) => void }) {
  const [position, setPosition] = useState(0)
  const [isVerified, setIsVerified] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)

  const handleStart = (clientX: number) => {
    if (isVerified) return
    setIsDragging(true)
  }

  const handleMove = (clientX: number) => {
    if (!isDragging || isVerified || !trackRef.current) return
    const track = trackRef.current
    const rect = track.getBoundingClientRect()
    const maxDistance = rect.width - 48 // Handle width is 40px + padding (8px total)
    const currentDistance = clientX - rect.left - 20 // Center of handle
    const percentage = Math.max(0, Math.min(100, (currentDistance / maxDistance) * 100))
    
    setPosition(percentage)
    
    if (percentage >= 95) {
      setIsVerified(true)
      setIsDragging(false)
      setPosition(100)
      onVerify(true)
    }
  }

  const handleEnd = () => {
    if (isVerified) return
    setIsDragging(false)
    if (position < 95) {
      setPosition(0) // snap back
    }
  }

  // Handle global mouse/touch releases when dragging outside the slider
  useEffect(() => {
    const globalMove = (e: MouseEvent) => handleMove(e.clientX)
    const globalEnd = () => handleEnd()
    const globalTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX)
      }
    }
    const globalTouchEnd = () => handleEnd()

    if (isDragging) {
      window.addEventListener("mousemove", globalMove)
      window.addEventListener("mouseup", globalEnd)
      window.addEventListener("touchmove", globalTouchMove)
      window.addEventListener("touchend", globalTouchEnd)
    }

    return () => {
      window.removeEventListener("mousemove", globalMove)
      window.removeEventListener("mouseup", globalEnd)
      window.removeEventListener("touchmove", globalTouchMove)
      window.removeEventListener("touchend", globalTouchEnd)
    }
  }, [isDragging, position])

  return (
    <div 
      ref={trackRef}
      className={`relative w-full h-14 rounded-xl bg-[#022c27] transition-all duration-300 overflow-hidden flex items-center justify-center select-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] ${isVerified ? "border border-[#BFF202]/40 bg-[#BFF202]/10 shadow-[0_0_20px_rgba(191,242,2,0.15)]" : "border border-transparent"}`}
    >
      {/* Background text */}
      <span className={`text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 z-10 ${isVerified ? "text-[#BFF202] drop-shadow-[0_0_8px_rgba(191,242,2,0.4)]" : "text-white/40"}`}>
        {isVerified ? "Verification Successful" : "Slide to verify →"}
      </span>

      {/* Track fill */}
      <div 
        className="absolute left-0 top-0 bottom-0 bg-[#BFF202]/10 transition-all duration-100 ease-out"
        style={{ width: `${position}%` }}
      />

      {/* Slider handle */}
      <div
        className={`absolute top-1.5 bottom-1.5 h-11 w-12 rounded-lg flex items-center justify-center transition-transform duration-100 ease-out cursor-grab shadow-lg z-20 ${isDragging ? "cursor-grabbing scale-95" : ""} ${isVerified ? "bg-[#BFF202] text-[#011e1b] left-[calc(100%-52px)] shadow-[0_0_15px_rgba(191,242,2,0.4)]" : "bg-[#011e1b] text-white left-1.5 hover:scale-105"}`}
        style={isVerified ? {} : { left: `calc(${position}% - ${position * 0.48}px + 6px)` }}
        onMouseDown={(e) => handleStart(e.clientX)}
        onTouchStart={(e) => {
          if (e.touches.length > 0) {
            handleStart(e.touches[0].clientX)
          }
        }}
      >
        {isVerified ? (
          <Check className="size-5 stroke-[3]" />
        ) : (
          <ArrowRight className="size-5" />
        )}
      </div>
    </div>
  )
}

export function ContactForm() {
  const [state, formAction] = useActionState(sendContact, initialState)
  const [botToken, setBotToken] = useState("")
  const [slideToken, setSlideToken] = useState("")
  const [isVerified, setIsVerified] = useState(false)

  useEffect(() => {
    const handleInteraction = () => {
      if (!botToken) {
        const now = Date.now()
        const token = btoa(JSON.stringify({ t: now, s: "sylvedha-human-touch" }))
        setBotToken(token)
      }
    }

    // Capture standard human events
    window.addEventListener("mousemove", handleInteraction, { once: true })
    window.addEventListener("keydown", handleInteraction, { once: true })
    window.addEventListener("touchstart", handleInteraction, { once: true })
    window.addEventListener("pointerdown", handleInteraction, { once: true })
    window.addEventListener("click", handleInteraction, { once: true })

    return () => {
      window.removeEventListener("mousemove", handleInteraction)
      window.removeEventListener("keydown", handleInteraction)
      window.removeEventListener("touchstart", handleInteraction)
      window.removeEventListener("pointerdown", handleInteraction)
      window.removeEventListener("click", handleInteraction)
    }
  }, [botToken])

  const handleVerify = (verified: boolean) => {
    setIsVerified(verified)
    if (verified) {
      const now = Date.now()
      const token = btoa(JSON.stringify({ t: now, s: "sylvedha-human-slide-unlock" }))
      setSlideToken(token)
    }
  }

  const formCardRef = useRef<HTMLFormElement>(null)
  const formRafRef  = useRef<number>(0)

  const onFormMove = useCallback((e: React.MouseEvent<HTMLFormElement>) => {
    cancelAnimationFrame(formRafRef.current)
    formRafRef.current = requestAnimationFrame(() => {
      const el = formCardRef.current
      if (!el) return
      const r  = el.getBoundingClientRect()
      const nx = (e.clientX - r.left)  / r.width
      const ny = (e.clientY - r.top)   / r.height
      el.style.transform  = `perspective(900px) rotateX(${(ny - 0.5) * -10}deg) rotateY(${(nx - 0.5) * 10}deg) scale(1.02) translateZ(0)`
      el.style.transition = "none"
    })
  }, [])

  const onFormLeave = useCallback(() => {
    cancelAnimationFrame(formRafRef.current)
    const el = formCardRef.current
    if (el) {
      el.style.transition = "transform 0.55s cubic-bezier(0.22,1,0.36,1)"
      el.style.transform  = ""
    }
  }, [])

  return (
    <form
      ref={formCardRef}
      action={formAction}
      onMouseMove={onFormMove}
      onMouseLeave={onFormLeave}
      className="relative overflow-hidden rounded-[2.5rem] border border-white/[0.05] bg-[#011e1b] p-8 sm:p-10 shadow-2xl will-change-transform cursor-default"
    >
      
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#BFF202] mb-3">Get in Touch</p>
        <h3 className="font-heading text-3xl font-bold text-white">
          Send us a message
        </h3>
        <p className="mt-2 text-sm text-white/50">We&apos;ll get back to you within 24 hours.</p>
      </div>

      {/* Honeypot fields - invisible to humans, tempting for bot scrapers */}
      <div className="absolute -top-[9999px] -left-[9999px] h-0 w-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Human interaction token */}
      <input type="hidden" name="ts_token" value={botToken} />

      {/* Slide unlock token */}
      <input type="hidden" name="slide_token" value={slideToken} />

      <div className="relative mt-8 grid gap-6">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/60 pl-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClasses}
            placeholder="Your name"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/60 pl-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClasses}
            placeholder="you@example.com"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/60 pl-1">
            Subject <span className="text-white/30 lowercase tracking-normal">(optional)</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            className={inputClasses}
            placeholder="How can we help?"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/60 pl-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className={`resize-y ${inputClasses}`}
            placeholder="Tell us about your project or inquiry..."
          />
        </div>

        {/* Security verification section */}
        <div className="grid gap-2 mt-2">
          <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/60 pl-1">
            Security Verification
          </label>
          <SlideToVerify onVerify={handleVerify} />
        </div>

        {state.status === "success" && (
          <p
            role="status"
            className="flex items-start gap-2 rounded-xl bg-[#BFF202]/10 px-4 py-3.5 text-sm text-[#BFF202]"
          >
            <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
            {state.message}
          </p>
        )}

        {state.status === "error" && (
          <p
            role="alert"
            className="flex items-start gap-2 rounded-xl bg-red-500/10 px-4 py-3.5 text-sm text-red-400"
          >
            <AlertCircle className="mt-0.5 size-4 shrink-0" />
            {state.message}
          </p>
        )}

        {/* DPDP Collection Notice */}
        <div className="rounded-xl bg-white/[0.02] border border-white/[0.05] px-4 py-3 mt-2">
          <p className="text-[11px] leading-relaxed text-white/40">
            By submitting this form, you acknowledge that Sylvedha LLP will process the information provided to respond to your request in accordance with our{" "}
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#BFF202]/60 underline underline-offset-2 hover:text-[#BFF202] transition-colors">Privacy Policy</a>.
          </p>
        </div>

        {/* Marketing Consent — standalone opt-in per DPDP */}
        <label htmlFor="marketing-consent" className="flex items-start gap-3 cursor-pointer group mt-1">
          <input
            id="marketing-consent"
            name="marketing_consent"
            type="checkbox"
            className="mt-0.5 size-4 shrink-0 rounded border-white/20 bg-white/5 accent-[#BFF202] cursor-pointer"
          />
          <span className="text-xs text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
            I would like to receive occasional updates about Sylvedha&apos;s products, projects, and news. You can unsubscribe at any time.
          </span>
        </label>

        <SubmitButton disabled={!isVerified} />
      </div>
    </form>
  )
}
