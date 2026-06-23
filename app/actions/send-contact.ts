"use server"

import { Resend } from "resend"
import { headers, cookies } from "next/headers"

export type ContactState = {
  status: "idle" | "success" | "error"
  message: string
}

// In-memory rate limiting map for active requests
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

export async function sendContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const now = Date.now()

  // 1. Honeypot check: Bots will scan the form and auto-fill these fields, but they are hidden from human users.
  const website = String(formData.get("website") ?? "").trim()
  const company = String(formData.get("company") ?? "").trim()

  if (website || company) {
    console.warn("[Anti-Bot] Submission rejected: Honeypot field filled.")
    // Return a fake success message so the bot thinks it succeeded and does not retry/adapt.
    return {
      status: "success",
      message: "Thank you! Your message has been sent. We'll be in touch soon.",
    }
  }

  // 2. Token check: Bots posting directly without JS interaction won't have this token.
  const tsToken = String(formData.get("ts_token") ?? "").trim()
  if (!tsToken) {
    console.warn("[Anti-Bot] Submission rejected: Missing token.")
    return {
      status: "success",
      message: "Thank you! Your message has been sent. We'll be in touch soon.",
    }
  }

  try {
    const decoded = JSON.parse(Buffer.from(tsToken, "base64").toString("utf-8"))
    if (
      !decoded ||
      typeof decoded.t !== "number" ||
      decoded.s !== "sylvedha-human-touch"
    ) {
      console.warn("[Anti-Bot] Submission rejected: Invalid token structure.")
      return {
        status: "success",
        message: "Thank you! Your message has been sent. We'll be in touch soon.",
      }
    }

    const elapsed = now - decoded.t
    // Humans take at least 3 seconds from page interaction to form submission.
    if (elapsed < 3000) {
      console.warn(`[Anti-Bot] Submission rejected: Submitted too fast (${elapsed}ms).`)
      return {
        status: "success",
        message: "Thank you! Your message has been sent. We'll be in touch soon.",
      }
    }

    // Expiry check: 2 hours (7,200,000 ms)
    if (elapsed > 7200000) {
      console.warn(`[Anti-Bot] Submission rejected: Token expired (${elapsed}ms).`)
      return {
        status: "error",
        message: "Form session expired. Please refresh the page and try again.",
      }
    }
  } catch (err) {
    console.warn("[Anti-Bot] Submission rejected: Failed to parse token.", err)
    return {
      status: "success",
      message: "Thank you! Your message has been sent. We'll be in touch soon.",
    }
  }

  // 2.5 Slide unlock token check:
  const slideToken = String(formData.get("slide_token") ?? "").trim()
  if (!slideToken) {
    console.warn("[Anti-Bot] Submission rejected: Missing slide verification token.")
    return {
      status: "success",
      message: "Thank you! Your message has been sent. We'll be in touch soon.",
    }
  }

  try {
    const decoded = JSON.parse(Buffer.from(slideToken, "base64").toString("utf-8"))
    if (
      !decoded ||
      typeof decoded.t !== "number" ||
      decoded.s !== "sylvedha-human-slide-unlock"
    ) {
      console.warn("[Anti-Bot] Submission rejected: Invalid slide verification token structure.")
      return {
        status: "success",
        message: "Thank you! Your message has been sent. We'll be in touch soon.",
      }
    }
  } catch (err) {
    console.warn("[Anti-Bot] Submission rejected: Failed to parse slide verification token.", err)
    return {
      status: "success",
      message: "Thank you! Your message has been sent. We'll be in touch soon.",
    }
  }

  // 3. IP-based Rate Limiting (In-Memory)
  let ip = "127.0.0.1"
  try {
    const reqHeaders = await headers()
    ip = reqHeaders.get("x-forwarded-for")?.split(",")[0] || reqHeaders.get("x-real-ip") || "127.0.0.1"
  } catch (err) {
    console.error("[Anti-Bot] Failed to read headers for IP rate limiting.", err)
  }

  // Clean rate limit map entries older than current time
  for (const [key, val] of rateLimitMap.entries()) {
    if (now > val.resetTime) {
      rateLimitMap.delete(key)
    }
  }

  const limitRecord = rateLimitMap.get(ip)
  if (limitRecord) {
    if (now < limitRecord.resetTime) {
      if (limitRecord.count >= 5) { // max 5 emails per hour per IP
        console.warn(`[Anti-Bot] Submission rejected: IP ${ip} rate limit exceeded.`)
        return {
          status: "success",
          message: "Thank you! Your message has been sent. We'll be in touch soon.",
        }
      }
      limitRecord.count++
    } else {
      rateLimitMap.set(ip, { count: 1, resetTime: now + 3600000 })
    }
  } else {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 3600000 })
  }

  // 4. Browser Cookie Rate Limiting (Throttle to 1 submit per minute)
  let cookieStore
  try {
    cookieStore = await cookies()
    const lastSub = cookieStore.get("sylvedha_last_sub")?.value
    if (lastSub) {
      const lastSubTime = parseInt(lastSub, 10)
      if (!isNaN(lastSubTime) && (now - lastSubTime) < 60000) {
        console.warn("[Anti-Bot] Submission rejected: Browser throttle rate limit hit.")
        return {
          status: "success",
          message: "Thank you! Your message has been sent. We'll be in touch soon.",
        }
      }
    }
  } catch (err) {
    console.error("[Anti-Bot] Failed to read cookies.", err)
  }

  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const subject = String(formData.get("subject") ?? "").trim()
  const message = String(formData.get("message") ?? "").trim()

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in your name, email, and message." }
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email)) {
    return { status: "error", message: "Please enter a valid email address." }
  }

  // 5. Content-based Anti-Spam Filtering (URL / Links Checks)
  // Check for link insertions in name or subject
  const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/gi
  if (urlRegex.test(name) || urlRegex.test(subject)) {
    console.warn("[Anti-Bot] Submission rejected: URLs found in name or subject.")
    return {
      status: "success",
      message: "Thank you! Your message has been sent. We'll be in touch soon.",
    }
  }

  // Check for excessive links in the message body (max 1 link is allowed for real inquiries)
  const messageUrls = message.match(urlRegex) || []
  if (messageUrls.length > 1) {
    console.warn(`[Anti-Bot] Submission rejected: Message contains too many links (${messageUrls.length}).`)
    return {
      status: "success",
      message: "Thank you! Your message has been sent. We'll be in touch soon.",
    }
  }

  // 6. Content-based Anti-Spam Filtering (Spam Keywords)
  const spamKeywords = [
    "casino", "viagra", "cialis", "sex", "dating", "crypto", "bitcoin",
    "forex", "solana", "ethereum", "investing", "guest post", "backlinks",
    "seo services", "increase traffic", "leads generation", "optimize your site",
    "ranking on google", "make money online", "passive income", "earn cash",
    "unsecured loan", "mortgage rate", "lottery winner", "congratulations you won",
    "advertise on your site", "cheap domain", "seo audit"
  ]
  const messageLower = message.toLowerCase()
  const hasSpamKeyword = spamKeywords.some(keyword => messageLower.includes(keyword))
  if (hasSpamKeyword) {
    console.warn("[Anti-Bot] Submission rejected: Message contains blacklisted spam words.")
    return {
      status: "success",
      message: "Thank you! Your message has been sent. We'll be in touch soon.",
    }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return {
      status: "error",
      message: "Email service is not configured yet. Please try again later.",
    }
  }

  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.emails.send({
      from: "SYLVEDHA Website <info@sylvedha.com>",
      to: ["sylvedhatechnologies@gmail.com", "info@sylvedha.com"],
      replyTo: email,
      subject: subject ? `Contact form: ${subject}` : `New message from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        subject ? `Subject: ${subject}` : null,
        "",
        message,
      ]
        .filter((line) => line !== null)
        .join("\n"),
    })

    if (error) {
      console.log("[v0] Resend error:", error)
      return {
        status: "error",
        message: "Something went wrong sending your message. Please try again.",
      }
    }

    // Set cookie on successful submission to throttle submissions from this browser
    if (cookieStore) {
      try {
        cookieStore.set("sylvedha_last_sub", String(Date.now()), {
          maxAge: 60, // 60 seconds throttle
          path: "/",
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
        })
      } catch (err) {
        console.error("[Anti-Bot] Failed to set throttle cookie.", err)
      }
    }

    return {
      status: "success",
      message: "Thank you! Your message has been sent. We'll be in touch soon.",
    }
  } catch (err) {
    console.log("[v0] Contact send exception:", err)
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again.",
    }
  }
}
