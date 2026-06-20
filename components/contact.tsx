import { Mail, Phone, Link2, ArrowUpRight } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

const phones = ["+91 96323 97595", "+91 77950 70676", "+91 82771 51149"]

export function Contact() {
  return (
    <section id="contact" className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Contact
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
              Let&apos;s build a sustainable future together
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Whether you&apos;re a farmer, researcher, investor, educational
              institution, industry partner, or sustainability enthusiast, we
              welcome opportunities to collaborate and innovate.
            </p>

            <div className="mt-10 rounded-2xl border border-border bg-card p-8 sm:p-10">
            <h3 className="font-heading text-lg font-semibold text-card-foreground">
              Contact Information
            </h3>
            <div className="mt-6 space-y-5">
              <a
                href="mailto:info@sylvedha.com"
                className="flex items-center gap-4 text-foreground transition-colors hover:text-primary"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="size-5" />
                </span>
                <span className="text-base">info@sylvedha.com</span>
              </a>

              <div className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="size-5" />
                </span>
                <div className="flex flex-col gap-1.5">
                  {phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="text-base text-foreground transition-colors hover:text-primary"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="https://www.linkedin.com/company/sylvedhallp/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground transition-colors hover:text-primary"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Link2 className="size-5" />
                </span>
                <span className="inline-flex items-center gap-1 text-base">
                  LinkedIn
                  <ArrowUpRight className="size-4" />
                </span>
              </a>
            </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
