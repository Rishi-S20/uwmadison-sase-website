import { CtaLink } from "@/components/ui/cta-link"

const openRoles = [
  "President",
  "VP of Professional Development",
  "VP of Mentorship",
  "Treasurer",
  "Outreach Chair",
  "Marketing Chair",
]

export function FoundingTeamSection() {
  return (
    <section id="get-involved" className="py-20 md:py-28 px-4 md:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
          Get Involved
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-6">
          Help us build the founding board.
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10">
          This chapter doesn&apos;t have officers yet — that&apos;s where you
          come in. We&apos;re looking for founding members to help shape
          everything from our first events to our long-term direction. No
          experience required, just interest.
        </p>
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {openRoles.map((role) => (
            <span
              key={role}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground"
            >
              {role}
            </span>
          ))}
        </div>
        <CtaLink href="mailto:hello@sase-uwmadison.org?subject=Founding%20Board%20Interest">
          Apply for a Founding Role
        </CtaLink>
      </div>
    </section>
  )
}
