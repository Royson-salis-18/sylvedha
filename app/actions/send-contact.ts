"use server"

import { Resend } from "resend"

export type ContactState = {
  status: "idle" | "success" | "error"
  message: string
}

export async function sendContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
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
