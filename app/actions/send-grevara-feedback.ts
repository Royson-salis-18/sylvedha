"use server"

import { Resend } from "resend"
import { headers } from "next/headers"
import { appendRow, ensureHeaders } from "@/lib/google-sheets"

// ── Column definitions ──────────────────────────────────────────────────────

const FEEDBACK_COLS = [
  "Timestamp", "Email", "Visitor Type", "Submission #", "IP (partial)",
  "Rating (1–5)", "Message",
]

const QUERY_COLS = [
  "Timestamp", "Name", "Email", "Phone", "Visitor Type", "Submission #", "IP (partial)",
  "Question", "Status",
]

const PREORDER_COLS = [
  "Timestamp", "Name", "Email", "Phone", "Product",
  "Quantity", "City / Area", "Notes", "IP (partial)", "Status",
]

// ── State type ──────────────────────────────────────────────────────────────

export type GrevaraState = {
  status: "idle" | "success" | "error"
  message: string
}

// ── In-memory visitor tracking (resets on server restart) ────────────────────
// For persistent tracking, a DB would be needed — this is a good-enough MVP.

const emailMap = new Map<string, { count: number; first: number }>()
const ipMap    = new Map<string, { count: number; first: number }>()
const ipRate   = new Map<string, { count: number; resetTime: number }>()

// ── Helper: partial-mask an IP for privacy ──────────────────────────────────
function maskIP(ip: string) {
  if (!ip || ip === "unknown") return "unknown"
  const v4 = ip.match(/^(\d+\.\d+\.\d+)\.\d+$/)
  if (v4) return `${v4[1]}.xxx`
  // IPv6 — keep first 3 groups only
  const parts = ip.split(":")
  return parts.slice(0, 3).join(":") + ":xxxx"
}

// ── Main action ─────────────────────────────────────────────────────────────

export async function sendGrevaraForm(
  _prev: GrevaraState,
  formData: FormData,
): Promise<GrevaraState> {
  const now = Date.now()

  // Honeypot
  if (String(formData.get("website") ?? "").trim()) {
    return { status: "success", message: "Thank you!" }
  }

  // Collect IP
  let rawIP = "unknown"
  try {
    const h = await headers()
    rawIP =
      h.get("x-forwarded-for")?.split(",")[0].trim() ||
      h.get("x-real-ip") ||
      "unknown"
  } catch { /* ignore */ }

  const ip = maskIP(rawIP)

  // IP rate limit (5 per hour across all form types)
  for (const [k, v] of ipRate) { if (now > v.resetTime) ipRate.delete(k) }
  const rl = ipRate.get(ip) ?? { count: 0, resetTime: now + 3_600_000 }
  if (rl.count >= 5) {
    return { status: "error", message: "Too many submissions. Please wait an hour." }
  }
  rl.count++
  ipRate.set(ip, rl)

  // Fields
  const formType = String(formData.get("form_type") ?? "feedback").trim() as
    "feedback" | "query" | "preorder"
  const email   = String(formData.get("email")   ?? "").trim().toLowerCase()
  const message = String(formData.get("message")  ?? "").trim()
  const notes   = String(formData.get("notes")    ?? "").trim()

  // Preorder/Query-specific fields
  const name    = String(formData.get("name")     ?? "").trim()
  const phone   = String(formData.get("phone")    ?? "").trim()
  const product = String(formData.get("product")  ?? "").trim()
  const qty     = String(formData.get("qty")      ?? "").trim()
  const city    = String(formData.get("city")     ?? "").trim()
  const rating  = String(formData.get("rating")   ?? "").trim()

  // Validation
  if (formType === "preorder") {
    if (!name) return { status: "error", message: "Please enter your name." }
    if (!email) return { status: "error", message: "Email is required for pre-orders." }
    if (!product) return { status: "error", message: "Please select a product." }
  } else if (formType === "query") {
    if (!name) return { status: "error", message: "Please enter your name." }
    if (!message || message.length < 5)
      return { status: "error", message: "Please enter a message (at least 5 characters)." }
  } else {
    if (!message || message.length < 5)
      return { status: "error", message: "Please enter a message (at least 5 characters)." }
    if (message.length > 2000)
      return { status: "error", message: "Message is too long (max 2000 characters)." }
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." }
  }

  // Visitor classification
  let visitorType = "Anonymous"
  let submitCount = 1

  if (email) {
    const prev = emailMap.get(email)
    if (prev) {
      prev.count++
      submitCount = prev.count
      visitorType = "Returning"
    } else {
      emailMap.set(email, { count: 1, first: now })
      visitorType = "New"
    }
  } else {
    const prev = ipMap.get(ip)
    if (prev) {
      prev.count++
      submitCount = prev.count
      visitorType = "Returning (no email)"
    } else {
      ipMap.set(ip, { count: 1, first: now })
      visitorType = "New (no email)"
    }
  }

  const ts = new Date(now).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })

  // ── Write to the correct Google Sheet ──────────────────────────────────────
  let sheetError: string | null = null

  const qSheetId = process.env.GS_QUERY_SHEET_ID
  const fSheetId = process.env.GS_FEEDBACK_SHEET_ID
  const pSheetId = process.env.GS_PREORDER_SHEET_ID

  try {
    if (formType === "feedback" && fSheetId) {
      await ensureHeaders(fSheetId, FEEDBACK_COLS)
      await appendRow(fSheetId, "Sheet1!A:G", [
        ts, email || "(anonymous)", visitorType, submitCount, ip,
        rating || "", message,
      ])
    } else if (formType === "query" && qSheetId) {
      await ensureHeaders(qSheetId, QUERY_COLS)
      await appendRow(qSheetId, "Sheet1!A:I", [
        ts, name, email || "(anonymous)", phone || "", visitorType, submitCount, ip,
        message, "New",
      ])
    } else if (formType === "preorder" && pSheetId) {
      await ensureHeaders(pSheetId, PREORDER_COLS)
      await appendRow(pSheetId, "Sheet1!A:J", [
        ts, name, email, phone || "", product,
        qty || "1", city || "", notes || "", ip, "Pending",
      ])
    }
  } catch (err: any) {
    console.error("[Grevara Sheets] Failed to write row:", err)
    const errDetails = err?.message || "Unknown error"
    sheetError = `Sheet Error: ${errDetails}. Please make sure you have shared the spreadsheet with the Service Account email.`
  }

  // ── Send notification email ────────────────────────────────────────────────
  const apiKey = process.env.RESEND_API_KEY
  if (apiKey) {
    const resend = new Resend(apiKey)
    const typeLabels = { feedback: "Feedback", query: "Query", preorder: "Pre-Order" }
    const label = typeLabels[formType]
    const visitorBadge = visitorType.startsWith("New") ? "🆕 New" : "🔁 Returning"

    const textLines: string[] = [
      `=== GREVARA ${label.toUpperCase()} ===`,
      `Submitted   : ${ts}`,
      `Visitor     : ${visitorBadge} — ${visitorType} (submission #${submitCount})`,
      `IP (partial): ${ip}`,
      ``,
    ]

    if (formType === "preorder") {
      textLines.push(
        `Name    : ${name}`,
        `Email   : ${email}`,
        `Phone   : ${phone || "(not provided)"}`,
        `Product : ${product}`,
        `Qty     : ${qty || "1"}`,
        `City    : ${city || "(not provided)"}`,
        `Notes   : ${notes || "(none)"}`,
      )
    } else if (formType === "query") {
      textLines.push(
        `Name    : ${name}`,
        `Email   : ${email}`,
        `Phone   : ${phone || "(not provided)"}`,
        ``,
        `--- Question ---`,
        message,
      )
    } else {
      textLines.push(
        `Email   : ${email || "(anonymous)"}`,
        rating ? `Rating  : ${rating}/5` : "",
        ``,
        `--- Message ---`,
        message,
      )
    }

    try {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: ["sylvedhatechnologies@gmail.com"],
        replyTo: email || "no-reply@sylvedha.com",
        subject: `[Grevara ${label}] ${visitorBadge} submission`,
        text: textLines.filter(Boolean).join("\n"),
      })
    } catch (err) {
      console.error("[Grevara Email] Failed to send:", err)
    }
  }

  if (sheetError) {
    return { status: "error", message: sheetError }
  }

  const successMessages = {
    feedback: "Thank you for your feedback — it helps us grow! 🌱",
    query:    "Your query has been sent! We'll get back to you soon.",
    preorder: "Pre-order registered! We'll confirm details with you shortly.",
  }

  return { status: "success", message: successMessages[formType] }
}
