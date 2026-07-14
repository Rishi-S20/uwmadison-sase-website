"use client";

import ScrollReveal from "@/components/ScrollReveal";
import ShinyText from "@/components/ShinyText";

export function Manifesto() {
  return (
    <section id="mission" className="relative py-[152px]">
      <div className="container-editorial">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <ShinyText
              text="OUR MISSION"
              speed={4}
              color="#3d8bff"
              shineColor="#4ade63"
              className="text-[11px] uppercase leading-[1.36] tracking-[0.2em]"
            />
            <p
              className="mt-10 hidden text-[11px] uppercase tracking-[0.3em] text-paper/30 md:block"
              style={{ writingMode: "vertical-rl" }}
            >
              EST. 2026 — MADISON, WI
            </p>
          </div>

          <div className="md:col-span-9">
            <ScrollReveal
              baseOpacity={0.08}
              baseRotation={2}
              blurStrength={5}
              textClassName="text-[clamp(34px,6vw,78px)] font-light leading-[1.1] text-paper"
            >
              A home for Asian scientists and engineers at Wisconsin — where
              heritage is not a footnote to ambition, but the ground it grows
              from.
            </ScrollReveal>

            <div className="mt-20 grid gap-10 md:grid-cols-2">
              <div className="h-px self-center bg-gradient-to-r from-sase-blue to-transparent" />
              <p className="text-body leading-[1.58] text-ash-mist">
                We are the founding chapter of the Society of Asian Scientists
                and Engineers at UW–Madison. We exist to prepare our members
                for the professional world, to celebrate the cultures they
                carry, and to give back to the communities that raised them.
                Everything begins here, with the people willing to build it
                first.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
