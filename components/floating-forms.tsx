"use client"

import { useState, useActionState, useEffect, useRef, useCallback } from "react"
import { X, Package, MessageSquare, HelpCircle, CheckCircle, AlertCircle, Send, ChevronRight } from "lucide-react"
import { sendGrevaraForm, type GrevaraState } from "@/app/actions/send-grevara-feedback"

// ── Types ─────────────────────────────────────────────────────────────────────
type ModalType = "preorder" | "feedback" | "query" | null

const MODAL_META = {
  preorder: { 
    label: "Pre-Order", icon: Package, text: "Reserve microgreens before they sell out.",
    gradient: "from-amber-200 via-amber-400 to-amber-600",
    headerBg: "bg-amber-400/5",
    headerBorder: "border-amber-400/20",
    iconBg: "bg-gradient-to-br from-amber-400/20 to-amber-600/20",
    iconColor: "text-amber-400",
  },
  feedback: { 
    label: "Feedback", icon: MessageSquare, text: "Share your experience — taste, freshness, packaging.",
    gradient: "from-purple-300 via-purple-500 to-purple-700",
    headerBg: "bg-purple-500/5",
    headerBorder: "border-purple-500/20",
    iconBg: "bg-gradient-to-br from-purple-400/20 to-purple-600/20",
    iconColor: "text-purple-400",
  },
  query: { 
    label: "Query", icon: HelpCircle, text: "Ask us anything — pricing, delivery, bulk orders.",
    gradient: "from-fuchsia-300 via-fuchsia-500 to-pink-600",
    headerBg: "bg-fuchsia-500/5",
    headerBorder: "border-fuchsia-500/20",
    iconBg: "bg-gradient-to-br from-fuchsia-400/20 to-pink-600/20",
    iconColor: "text-fuchsia-400",
  },
}

const PRODUCTS = [
  "Radish Purple Sango (50g)",
  "Radish Purple Sango (100g)",
  "Radish Purple Sango (250g)",
  "Mixed Microgreens Box",
  "Bulk / Restaurant Order",
  "Other / Custom",
]

// ── Slider Captcha ────────────────────────────────────────────────────────────
function SliderCaptcha({ onVerified }: { onVerified: () => void }) {
  const [verified, setVerified] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [pos, setPos] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const startX = useRef(0)

  const THRESHOLD = 85 // percent

  const onMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    if (verified) return
    setDragging(true)
    startX.current = "touches" in e ? e.touches[0].clientX : e.clientX
  }

  const onMouseMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!dragging || !trackRef.current) return
    const clientX = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX
    const trackW = trackRef.current.offsetWidth - 48 // thumb width
    const delta = Math.max(0, Math.min(clientX - startX.current, trackW))
    const pct = (delta / trackW) * 100
    setPos(pct)
    if (pct >= THRESHOLD) {
      setPos(100)
      setVerified(true)
      setDragging(false)
      onVerified()
    }
  }, [dragging, onVerified])

  const onMouseUp = useCallback(() => {
    if (!verified) setPos(0)
    setDragging(false)
  }, [verified])

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseup", onMouseUp)
    window.addEventListener("touchmove", onMouseMove)
    window.addEventListener("touchend", onMouseUp)
    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseup", onMouseUp)
      window.removeEventListener("touchmove", onMouseMove)
      window.removeEventListener("touchend", onMouseUp)
    }
  }, [onMouseMove, onMouseUp])

  return (
    <div className="flex flex-col gap-1.5">
      <p className="text-sm font-bold text-white/90 tracking-wide">Verification <span className="text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">*</span></p>
      <div
        ref={trackRef}
        className={`relative h-14 rounded-xl border select-none overflow-hidden transition-all duration-300 ${
          verified ? "border-purple-500/40 bg-purple-500/10" : "border-white/20 bg-black/40 backdrop-blur-md"
        }`}
      >
        {/* Fill bar */}
        <div
          className={`absolute left-0 top-0 h-full transition-colors duration-300 ${verified ? "bg-purple-500/30" : "bg-white/10"}`}
          style={{ width: `calc(${pos}% + 48px)` }}
        />
        {/* Label */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className={`text-sm font-bold tracking-wide transition-opacity duration-300 ${verified ? "text-purple-300 opacity-100 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" : "text-white/50 opacity-100"}`}>
            {verified ? "✓ Verified" : "Slide to verify →"}
          </span>
        </div>
        {/* Thumb */}
        <div
          onMouseDown={onMouseDown}
          onTouchStart={onMouseDown}
          className={`absolute top-0 h-full w-12 flex items-center justify-center rounded-xl cursor-grab active:cursor-grabbing transition-colors duration-200 ${
            verified ? "bg-purple-500 cursor-default shadow-[0_0_15px_rgba(168,85,247,0.5)]" : "bg-white/20 hover:bg-white/30 backdrop-blur-sm"
          }`}
          style={{ left: `${(pos / 100) * (trackRef.current ? trackRef.current.offsetWidth - 48 : 0)}px` }}
        >
          {verified
            ? <CheckCircle className="size-5 text-white" />
            : <ChevronRight className="size-5 text-white" />
          }
        </div>
      </div>
    </div>
  )
}

// ── Field helpers ─────────────────────────────────────────────────────────────
function Field({ id, name, label, type = "text", placeholder, required }: {
  id: string; name: string; label: string; type?: string; placeholder?: string; required?: boolean
}) {
  return (
    <div className="flex flex-col gap-2.5 group">
      <label htmlFor={id} className="text-xs font-bold uppercase tracking-[0.12em] text-white/60 group-focus-within:text-amber-400/80 transition-colors duration-200">
        {label} {required && <span className="text-amber-400">*</span>}
      </label>
      <input id={id} name={name} type={type} placeholder={placeholder} required={required}
        className="w-full rounded-xl border border-white/[0.07] bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-white/20 shadow-[inset_0_1px_3px_rgba(0,0,0,0.4)] focus:border-amber-400/50 focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-amber-400/25 transition-all duration-200" />
    </div>
  )
}

function TextArea({ id, name, label, placeholder, rows = 4, required }: {
  id: string; name: string; label: string; placeholder?: string; rows?: number; required?: boolean
}) {
  return (
    <div className="flex flex-col gap-2.5 group">
      <label htmlFor={id} className="text-xs font-bold uppercase tracking-[0.12em] text-white/60 group-focus-within:text-amber-400/80 transition-colors duration-200">
        {label} {required && <span className="text-amber-400">*</span>}
      </label>
      <textarea id={id} name={name} required={required} rows={rows} placeholder={placeholder}
        className="w-full resize-none rounded-xl border border-white/[0.07] bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-white/20 shadow-[inset_0_1px_3px_rgba(0,0,0,0.4)] focus:border-amber-400/50 focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-amber-400/25 transition-all duration-200 leading-relaxed" />
    </div>
  )
}

// ── Modal form ────────────────────────────────────────────────────────────────
const initial: GrevaraState = { status: "idle", message: "" }

function ModalForm({ type, onClose }: { type: ModalType; onClose: () => void }) {
  const [state, formAction, pending] = useActionState(sendGrevaraForm, initial)
  const [verified, setVerified] = useState(false)
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const formRef = useRef<HTMLFormElement>(null)
  const meta = MODAL_META[type!]

  useEffect(() => {
    if (state.status === "success") { formRef.current?.reset(); setRating(0) }
  }, [state.status])

  // close on Escape
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", fn)
    return () => window.removeEventListener("keydown", fn)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Panel Wrapper with Metallic Border */}
      <div className="relative w-full sm:max-w-4xl lg:max-w-[1000px] rounded-t-3xl sm:rounded-3xl shadow-[0_0_60px_-15px_rgba(251,191,36,0.15),0_0_60px_-15px_rgba(168,85,247,0.15)] overflow-hidden animate-in slide-in-from-bottom-8 sm:zoom-in-95 duration-300 max-h-[92dvh] flex flex-col p-[1px]">
        {/* Metallic Gradient Border Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/50 via-purple-500/20 to-purple-600/50" />

        {/* Inner Panel */}
        <div className="relative flex flex-col h-full bg-[#0d0d14]/95 backdrop-blur-xl rounded-t-[23px] sm:rounded-[23px] overflow-hidden">
          
          {/* Glowing Orbs */}
          <div className="absolute top-[-20%] left-[-10%] w-[300px] h-[300px] bg-purple-600/15 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] bg-amber-500/15 rounded-full blur-[90px] pointer-events-none mix-blend-screen" />

          {/* Header */}
          <div className={`relative z-10 shrink-0 px-6 sm:px-8 pt-6 pb-4 ${meta.headerBg} border-b ${meta.headerBorder}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`flex size-12 items-center justify-center rounded-2xl ${meta.iconBg} ring-1 ring-inset ${meta.headerBorder}`}>
                <meta.icon className={`size-6 ${meta.iconColor}`} />
              </div>
              <div>
                <h2 className="font-bold text-white text-lg tracking-wide">{meta.label}</h2>
                <p className="text-sm text-white/50 mt-1">{meta.text}</p>
              </div>
            </div>
            <button onClick={onClose} className="flex size-8 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
              <X className="size-4 text-white/70" />
            </button>
          </div>
          {/* top accent line */}
          <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${meta.gradient}`} />
        </div>

        {/* Scrollable form area */}
        <div className="relative z-10 overflow-y-auto flex-1 px-6 sm:px-8 pb-8 pt-6 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gradient-to-b [&::-webkit-scrollbar-thumb]:from-amber-400/50 [&::-webkit-scrollbar-thumb]:to-purple-500/50 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:from-amber-400/80 hover:[&::-webkit-scrollbar-thumb]:to-purple-500/80">
          <form ref={formRef} action={formAction} className="flex flex-col gap-6">
            <input type="hidden" name="form_type" value={type!} />
            <input type="hidden" name="rating" value={rating} />
            <input type="text" name="website" tabIndex={-1} aria-hidden className="hidden" />

            {/* ── PREORDER ── */}
            {type === "preorder" && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
                  <Field id="ff-name" name="name" label="Full Name" placeholder="Your name" required />
                  <Field id="ff-email" name="email" label="Email" type="email" placeholder="your@email.com" required />
                  <Field id="ff-phone" name="phone" label="Phone (optional)" placeholder="Your phone number" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
                  <div className="flex flex-col gap-2.5 group">
                    <label htmlFor="ff-product" className="text-xs font-bold uppercase tracking-[0.12em] text-white/60 group-focus-within:text-amber-400/80 transition-colors duration-200">
                      Product <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <select id="ff-product" name="product" required defaultValue=""
                        className="w-full rounded-xl border border-white/[0.07] bg-white/[0.04] px-4 py-3.5 text-sm text-white shadow-[inset_0_1px_3px_rgba(0,0,0,0.4)] focus:border-amber-400/50 focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-amber-400/25 transition-all duration-200 appearance-none">
                        <option value="" disabled className="text-white/50 bg-[#1a0a22]">Select a product…</option>
                        {PRODUCTS.map(p => <option key={p} value={p} className="bg-[#1a0a22] text-white">{p}</option>)}
                      </select>
                      <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-white/40 pointer-events-none rotate-90" />
                    </div>
                  </div>
                  <Field id="ff-qty" name="quantity" label="Quantity" placeholder="e.g. 2 packs" />
                  <Field id="ff-city" name="city" label="City / Area" placeholder="Your city" />
                </div>
                <TextArea id="ff-notes" name="notes" label="Notes (optional)" placeholder="Delivery preference, special requests..." rows={2} />
              </>
            )}

            {/* ── FEEDBACK ── */}
            {type === "feedback" && (
              <>
                <Field id="ff-email-f" name="email" label="Email (optional — stay anonymous)" type="email" placeholder="your@email.com" />
                <div className="flex flex-col gap-2.5">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/60">Rating (optional)</p>
                  <div className="flex gap-2">
                    {[1,2,3,4,5].map(star => (
                      <button key={star} type="button"
                        onClick={() => setRating(star === rating ? 0 : star)}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                        className="text-3xl transition-transform hover:scale-110">
                        <span className={star <= (hover || rating) ? "text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" : "text-white/30"}>★</span>
                      </button>
                    ))}
                  </div>
                </div>
                <TextArea id="ff-fb" name="message" label="Your Feedback" required placeholder="Taste, freshness, packaging, what you loved or what we can improve…" rows={4} />
              </>
            )}

            {/* ── QUERY ── */}
            {type === "query" && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
                  <Field id="ff-name-q" name="name" label="Full Name" placeholder="Your name" required />
                  <Field id="ff-email-q" name="email" label="Email" type="email" placeholder="your@email.com" required />
                  <Field id="ff-phone-q" name="phone" label="Phone (optional)" placeholder="Your phone number" />
                </div>
                <TextArea id="ff-q" name="message" label="Your Question" required placeholder="Ask anything — pricing, varieties, delivery, bulk orders…" rows={4} />
              </>
            )}

            {/* Status */}
            {state.status !== "idle" && (
              <div className={`flex items-start gap-2.5 rounded-xl border px-4 py-3 text-sm ${
                state.status === "success"
                  ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                  : "border-red-400/30 bg-red-400/10 text-red-300"
              }`}>
                {state.status === "success" ? <CheckCircle className="size-4 mt-0.5 shrink-0" /> : <AlertCircle className="size-4 mt-0.5 shrink-0" />}
                <span>{state.message}</span>
              </div>
            )}

            {/* DPDP Collection Notice */}
            <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] px-4 py-3">
              <p className="text-[11px] leading-relaxed text-white/35">
                By submitting this form, you acknowledge that Sylvedha LLP will process the information provided to respond to your request in accordance with our{" "}
                <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-purple-400/70 underline underline-offset-2 hover:text-purple-300 transition-colors">Privacy Policy</a>.
              </p>
            </div>

            {/* Marketing Consent — standalone opt-in per DPDP (for preorder & query only) */}
            {(type === "preorder" || type === "query") && (
              <label htmlFor={`ff-marketing-${type}`} className="flex items-start gap-3 cursor-pointer group">
                <input
                  id={`ff-marketing-${type}`}
                  name="marketing_consent"
                  type="checkbox"
                  className="mt-0.5 size-4 shrink-0 rounded border-white/20 bg-white/5 accent-amber-400 cursor-pointer"
                />
                <span className="text-[11px] text-white/35 leading-relaxed group-hover:text-white/50 transition-colors">
                  I would like to receive occasional updates about Sylvedha&apos;s products and news. You can unsubscribe at any time.
                </span>
              </label>
            )}
            <div className="flex flex-col sm:flex-row items-end justify-between gap-6 pt-2">
              <div className="w-full sm:flex-1">
                <SliderCaptcha onVerified={() => setVerified(true)} />
              </div>
              <button type="submit"
                disabled={!verified || pending || state.status === "success"}
                className={`w-full sm:w-[220px] group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r ${meta.gradient} px-8 py-3.5 h-[56px] text-base font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] disabled:!bg-none disabled:bg-white/10 disabled:text-white/60 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none disabled:border disabled:border-white/20 flex shrink-0`}>
                {!(!verified || pending || state.status === "success") && (
                  <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                )}
                <Send className="relative size-5" />
                <span className="relative tracking-wide">
                  {pending ? "Sending…" : state.status === "success" ? "Sent ✓" : meta.label === "Pre-Order" ? "Reserve Now" : "Send"}
                </span>
              </button>
            </div>

            {!verified && (
              <p className="text-center text-xs text-white/30">Complete the slider above to enable submit</p>
            )}
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}

// ── Floating trigger cluster ───────────────────────────────────────────────────
export function FloatingForms() {
  const [open, setOpen] = useState(false)
  const [modal, setModal] = useState<ModalType>(null)

  const openModal = (type: ModalType) => { setModal(type); setOpen(false) }
  const closeModal = () => setModal(null)

  // Listen for events dispatched by Grevara section buttons
  useEffect(() => {
    const handler = (e: Event) => {
      const type = (e as CustomEvent<{ type: ModalType }>).detail?.type
      if (type) openModal(type)
    }
    window.addEventListener("open-grevara-form", handler)
    return () => window.removeEventListener("open-grevara-form", handler)
  }, [])

  const btns: { type: ModalType; label: string; icon: typeof Package; color: string; glow: string }[] = [
    { type: "preorder", label: "Pre-Order",  icon: Package,       color: "bg-amber-400   hover:bg-amber-300   text-black",  glow: "hover:shadow-[0_0_20px_rgba(251,191,36,0.6)]" },
    { type: "feedback", label: "Feedback",   icon: MessageSquare, color: "bg-purple-500  hover:bg-purple-400  text-white",  glow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]" },
    { type: "query",    label: "Query",      icon: HelpCircle,    color: "bg-fuchsia-500 hover:bg-fuchsia-400 text-white",  glow: "hover:shadow-[0_0_20px_rgba(232,121,249,0.6)]" },
  ]

  return (
    <>
      {/* Floating cluster */}
      <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-2.5">
        {/* Sub-buttons */}
        {btns.map((b, i) => (
          <div
            key={b.type}
            className={`flex items-center gap-2.5 transition-all duration-300 ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
            style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
          >
            <span className="rounded-full bg-black/70 border border-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm whitespace-nowrap">
              {b.label}
            </span>
            <button
              onClick={() => openModal(b.type)}
              className={`flex size-12 items-center justify-center rounded-full shadow-lg transition-all duration-200 ${b.color} ${b.glow}`}
              aria-label={b.label}
            >
              <b.icon className="size-5" />
            </button>
          </div>
        ))}

        {/* Main toggle */}
        <button
          onClick={() => setOpen(o => !o)}
          aria-label="Open Grevara forms"
          className={`flex size-14 items-center justify-center rounded-full shadow-xl transition-all duration-300 border-2 ${
            open
              ? "bg-white/15 border-white/30 rotate-45 backdrop-blur-md"
              : "bg-gradient-to-br from-amber-400 to-amber-600 border-amber-300/50 hover:scale-110 hover:shadow-[0_0_30px_rgba(251,191,36,0.5)]"
          }`}
        >
          {open
            ? <X className="size-6 text-white" />
            : <Package className="size-6 text-black" />
          }
        </button>
      </div>

      {/* Modal */}
      {modal && <ModalForm type={modal} onClose={closeModal} />}
    </>
  )
}
