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
      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending..." : "Send message"}
      <Send className="size-4" />
    </button>
  )
}

export function ContactForm() {
  const [state, formAction] = useActionState(sendContact, initialState)

  return (
    <form action={formAction} className="rounded-2xl border border-border bg-card p-8 sm:p-10">
      <h3 className="font-heading text-lg font-semibold text-card-foreground">
        Send us a message
      </h3>

      <div className="mt-6 grid gap-5">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30"
            placeholder="Your name"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30"
            placeholder="you@example.com"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="subject" className="text-sm font-medium text-foreground">
            Subject <span className="text-muted-foreground">(optional)</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            className="rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30"
            placeholder="How can we help?"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="resize-y rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30"
            placeholder="Tell us about your project or inquiry..."
          />
        </div>

        {state.status === "success" && (
          <p
            role="status"
            className="flex items-start gap-2 rounded-xl bg-primary/10 px-4 py-3 text-sm text-primary"
          >
            <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
            {state.message}
          </p>
        )}

        {state.status === "error" && (
          <p
            role="alert"
            className="flex items-start gap-2 rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive"
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
