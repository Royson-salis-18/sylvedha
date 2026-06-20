const team = [
  {
    name: "Royson Salis",
    role: "Founder & Chief Executive Officer",
    bio: "Leading innovation strategy, research initiatives, business development, and technology vision.",
    initials: "RS",
  },
  {
    name: "Sharath",
    role: "Chief Operating Officer",
    bio: "Driving operational excellence, partnerships, implementation, and organizational growth.",
    initials: "SH",
  },
  {
    name: "Prakash Nayak",
    role: "Chief Technology Officer",
    bio: "Leading technology architecture, product development, automation systems, and engineering initiatives.",
    initials: "PN",
  },
]

export function Leadership() {
  return (
    <section id="team" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Leadership Team
          </p>
          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-tight text-balance text-foreground sm:text-4xl">
            The people behind the platform
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <span className="flex size-14 items-center justify-center rounded-full bg-primary font-heading text-lg font-semibold text-primary-foreground">
                {member.initials}
              </span>
              <h3 className="mt-5 font-heading text-xl font-semibold text-card-foreground">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                {member.role}
              </p>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
