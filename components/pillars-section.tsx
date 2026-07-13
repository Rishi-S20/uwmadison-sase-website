import {
  Briefcase,
  GraduationCap,
  HeartHandshake,
  Users,
  type LucideIcon,
} from "lucide-react"

import { GlowCard } from "@/components/ui/spotlight-card"

type Pillar = {
  icon: LucideIcon
  title: string
  description: string
  glowColor: "blue" | "green"
  tint: "primary" | "accent"
}

const pillars: Pillar[] = [
  {
    icon: Briefcase,
    title: "Professional Development",
    description:
      "Resume workshops, interview prep, and direct connections to industry partners recruiting Asian heritage talent.",
    glowColor: "blue",
    tint: "primary",
  },
  {
    icon: Users,
    title: "Mentorship",
    description:
      "Pairing incoming students with upperclassmen and alumni for guidance through coursework, internships, and career decisions.",
    glowColor: "green",
    tint: "accent",
  },
  {
    icon: HeartHandshake,
    title: "Community & Belonging",
    description:
      "A space to connect with peers who share your background and experience on campus.",
    glowColor: "blue",
    tint: "primary",
  },
  {
    icon: GraduationCap,
    title: "Outreach & Impact",
    description:
      "K-12 STEM outreach and campus partnerships that extend SASE's mission beyond our own membership.",
    glowColor: "green",
    tint: "accent",
  },
]

export function PillarsSection() {
  return (
    <section id="offer" className="py-20 md:py-28 px-4 md:px-6 bg-muted/40">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            What We&apos;re Building
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground">
            Four pillars, one community.
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, description, glowColor, tint }) => (
            <GlowCard
              key={title}
              glowColor={glowColor}
              customSize
              className="w-full aspect-[3/4] p-8"
            >
              <div className="flex flex-col">
                <div
                  className={`mb-6 flex size-12 items-center justify-center rounded-2xl ${
                    tint === "primary"
                      ? "bg-primary/10 text-primary"
                      : "bg-accent/10 text-accent"
                  }`}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                  {title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}
