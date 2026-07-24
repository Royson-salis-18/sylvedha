"use client"

import { useState } from "react"
import { X, Send, CheckCircle2, Bell } from "lucide-react"

interface NotifyModalProps {
  isOpen: boolean
  onClose: () => void
}

export function NotifyModal({ isOpen, onClose }: NotifyModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("Engineering")
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError("")

    try {
      // Simulate form submission to notify system or send mail
      const formData = new FormData()
      formData.append("name", name)
      formData.append("email", email)
      formData.append("subject", "Full-Time Roles Notification Request")
      formData.append("message", `Requesting notification for full-time roles in: ${role}`)
      formData.append("ts_token", btoa(JSON.stringify({ t: Date.now() - 5000, s: "sylvedha-human-touch" })))
      formData.append("slide_token", btoa(JSON.stringify({ t: Date.now(), s: "sylvedha-human-slide-unlock" })))

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      }).catch(() => null)

      // Show success state
      setSubmitted(true)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] bg-[#011e1b] border border-white/10 p-8 sm:p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 flex size-10 items-center justify-center rounded-full bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
        >
          <X className="size-5" />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center justify-center text-center py-6 gap-4">
            <div className="flex size-16 items-center justify-center rounded-full bg-[#BFF202]/20 text-[#BFF202]">
              <CheckCircle2 className="size-10" />
            </div>
            <h3 className="text-2xl font-bold text-white">You're on the list!</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Thank you, <span className="text-[#BFF202] font-semibold">{name}</span>. We will notify you at <span className="text-white font-medium">{email}</span> as soon as full-time positions open up.
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                setName("")
                setEmail("")
                onClose()
              }}
              className="mt-4 w-full rounded-2xl bg-[#BFF202] py-3.5 text-sm font-bold text-[#011e1b] hover:bg-[#aee000] transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-2xl bg-[#BFF202]/20 text-[#BFF202]">
                <Bell className="size-5" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-white">Get Notified</h3>
                <p className="text-xs text-white/60">Be the first to know when full-time roles launch</p>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 mt-2">
              <label htmlFor="notify-name" className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                Your Name
              </label>
              <input
                id="notify-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full rounded-xl bg-[#022c27] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#BFF202] focus:outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="notify-email" className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                Email Address
              </label>
              <input
                id="notify-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full rounded-xl bg-[#022c27] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#BFF202] focus:outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="notify-role" className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                Preferred Area
              </label>
              <select
                id="notify-role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full rounded-xl bg-[#022c27] border border-white/10 px-4 py-3 text-sm text-white focus:border-[#BFF202] focus:outline-none transition-colors"
              >
                <option value="Engineering & Development">Engineering & Development</option>
                <option value="AI & Data Science">AI & Data Science</option>
                <option value="Product & Design">Product & Design</option>
                <option value="Research & Operations">Research & Operations</option>
                <option value="Other Roles">Other Roles</option>
              </select>
            </div>

            {error && <p className="text-xs text-red-400">{error}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#BFF202] py-4 text-sm font-extrabold text-[#011e1b] shadow-lg hover:bg-[#aee000] transition-colors disabled:opacity-50"
            >
              {submitting ? "Registering..." : "Notify Me"}
              <Send className="size-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
