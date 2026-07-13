import { CheckCircle2 } from "lucide-react"

import { CampusMap } from "@/components/ui/campus-map"
import { GlowCard } from "@/components/ui/spotlight-card"

const majors = [
  "Computer Science",
  "Mechanical Engineering",
  "Biomedical Engineering",
  "Data Science",
  "Chemistry",
  "Industrial Engineering",
  "Electrical Engineering",
  "Statistics",
  "Biology",
  "Materials Science",
]

const perks = [
  "Shape the chapter's culture from day one",
  "First pick of founding leadership roles",
  "Direct line to SASE National's resources",
]

const steps = [
  { step: "01", label: "Come to an info session" },
  { step: "02", label: "Fill out the interest form" },
  { step: "03", label: "Show up and get involved" },
]

export function FeaturesBentoSection() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-6">
      <div className="mx-auto max-w-[1600px]">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            Why Now
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground">
            Local roots, national network.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <div className="col-span-1 md:col-span-4 min-h-[460px] flex flex-col rounded-[14px] border border-border bg-card overflow-hidden">
            <div className="p-8 relative z-10">
              <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                Grounded at UW–Madison. Connected nationally.
              </h3>
              <p className="text-muted-foreground max-w-md">
                SASE is a national professional association for Asian
                heritage scientists and engineers with a presence at
                universities and companies across the country. This chapter
                plants that flag right here in Madison.
              </p>
            </div>
            <CampusMap className="relative flex-1" />
          </div>

          <div className="col-span-1 md:col-span-2 rounded-[14px] border border-border bg-card p-8">
            <h3 className="font-serif text-xl font-medium text-foreground mb-4">
              Founding member perks
            </h3>
            <ul className="space-y-3">
              {perks.map((perk) => (
                <li
                  key={perk}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2
                    className="h-4 w-4 mt-0.5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-3 rounded-[14px] border border-border bg-card p-8 overflow-hidden">
            <h3 className="font-serif text-xl font-medium text-foreground mb-2">
              Open to every major
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              SASE welcomes all STEM (and STEM-curious) students.
            </p>
            <div className="flex flex-wrap gap-2">
              {majors.map((major) => (
                <span
                  key={major}
                  className="rounded-full border border-border bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground transition-transform duration-200 hover:scale-105 hover:text-primary hover:border-primary/30"
                >
                  {major}
                </span>
              ))}
            </div>
          </div>

          <GlowCard
            glowColor="navy"
            customSize
            className="col-span-1 md:col-span-3 w-full h-full p-8"
          >
            <div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-4">
                Getting started is simple
              </h3>
              <ol className="space-y-3">
                {steps.map(({ step, label }) => (
                  <li
                    key={step}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold shrink-0">
                      {step}
                    </span>
                    {label}
                  </li>
                ))}
              </ol>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  )
}
