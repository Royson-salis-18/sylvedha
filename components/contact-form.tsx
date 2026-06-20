"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { CheckCircle2, AlertCircle, Send } from "lucide-react"
import { sendContact, type ContactState } from "@/app/actions/send-contact"

const initialState: ContactState = { status: "idle", message: "" }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#BFF202] px-6 py-4 text-base font-semibold text-[#01312D] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#BFF202]/25 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending..." : "Send message"}
      <Send className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </button>
  )
}

const inputClasses =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-base text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[#BFF202]/50 focus:bg-white/[0.08] focus:ring-2 focus:ring-[#BFF202]/20"

export function ContactForm() {
  const [state, formAction] = useActionState(sendContact, initialState)

  return (
    <form action={formAction} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 sm:p-10 backdrop-blur-sm">
      <h3 className="font-heading text-xl font-semibold text-white">
        Send us a message
      </h3>
      <p className="mt-2 text-sm text-white/50">We&apos;ll get back to you within 24 hours.</p>

      <div className="mt-8 grid gap-6">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium text-white/80">
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
          <label htmlFor="email" className="text-sm font-medium text-white/80">
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
          <label htmlFor="subject" className="text-sm font-medium text-white/80">
            Subject <span className="text-white/35">(optional)</span>
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
          <label htmlFor="message" className="text-sm font-medium text-white/80">
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

        <SubmitButton />
      </div>
    </form>
  )
}
