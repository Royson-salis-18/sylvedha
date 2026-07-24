"use client"

import { useActionState, useState, useEffect } from "react"
import { sendContact, type ContactState } from "@/app/actions/send-contact"
import { Send, CheckCircle2, ArrowLeft } from "lucide-react"

const initialState: ContactState = { status: "idle", message: "" }

export function NotifyCardForm({ onBack }: { onBack: () => void }) {
  const [state, formAction, isPending] = useActionState(sendContact, initialState)
  const [botToken, setBotToken] = useState("")
  const [slideToken, setSlideToken] = useState("")

  useEffect(() => {
    const now = Date.now()
    setBotToken(btoa(JSON.stringify({ t: now - 5000, s: "sylvedha-human-touch" })))
    setSlideToken(btoa(JSON.stringify({ t: now, s: "sylvedha-human-slide-unlock" })))
  }, [])

  if (state.status === "success") {
    return (
      <div className="flex flex-col gap-4 p-2 text-white">
        <div className="flex items-center gap-3 text-[#BFF202]">
          <CheckCircle2 className="size-8 shrink-0" />
          <h4 className="text-xl font-bold">You're on the list!</h4>
        </div>
        <p className="text-sm text-white/70 leading-relaxed">
          {state.message || "Thank you! We have registered your request and will notify you as soon as full-time roles open."}
        </p>
        <button
          onClick={onBack}
          type="button"
          className="self-start text-xs font-bold uppercase tracking-wider text-[#BFF202] hover:underline mt-2 flex items-center gap-1.5"
        >
          <ArrowLeft className="size-3.5" /> Back to info
        </button>
      </div>
    )
  }

  return (
    <form action={formAction} className="flex flex-col gap-4 w-full">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-extrabold text-white">Get Notified</h4>
        <button
          type="button"
          onClick={onBack}
          className="text-xs font-bold text-white/60 hover:text-white flex items-center gap-1"
        >
          <ArrowLeft className="size-3" /> Back
        </button>
      </div>

      {/* Hidden security fields required by sendContact action */}
      <input type="hidden" name="website" value="" />
      <input type="hidden" name="company" value="" />
      <input type="hidden" name="ts_token" value={botToken} />
      <input type="hidden" name="slide_token" value={slideToken} />
      <input type="hidden" name="subject" value="Full-Time Roles Notification Request" />

      <div className="flex flex-col gap-1">
        <label htmlFor="notify-card-name" className="text-[10px] font-bold uppercase tracking-wider text-white/60">
          Name
        </label>
        <input
          id="notify-card-name"
          name="name"
          type="text"
          required
          placeholder="Your full name"
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-[#BFF202] focus:outline-none transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="notify-card-email" className="text-[10px] font-bold uppercase tracking-wider text-white/60">
          Email
        </label>
        <input
          id="notify-card-email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-[#BFF202] focus:outline-none transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="notify-card-message" className="text-[10px] font-bold uppercase tracking-wider text-white/60">
          Role Interest / Message
        </label>
        <textarea
          id="notify-card-message"
          name="message"
          required
          rows={2}
          placeholder="e.g. Interested in Full-Stack or AI roles"
          defaultValue="I would like to be notified when full-time roles open."
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-[#BFF202] focus:outline-none transition-colors resize-none"
        />
      </div>

      {state.status === "error" && (
        <p className="text-xs text-red-400 font-medium">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="mt-1 inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#BFF202] text-[#011a17] font-bold hover:bg-[#aee000] transition-colors disabled:opacity-50 text-sm"
      >
        {isPending ? "Submitting..." : "Submit Request"}
        <Send className="size-4" />
      </button>
    </form>
  )
}
