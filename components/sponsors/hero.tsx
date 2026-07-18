"use client";

import BlurText from "@/components/BlurText";
import Magnet from "@/components/Magnet";
import { scrollToAnchor } from "@/lib/scroll-to-anchor";

/**
 * Editorial page hero — no pinned reveal here; the nav is visible from the
 * start, so the headline just sits high on clean paper.
 */
export default function SponsorsHero() {
  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-24">
      <div className="container-editorial">
        <p className="text-[14px] text-ash">Sponsor SASE</p>
        <h1 className="mt-5 max-w-4xl font-serif text-[clamp(2.6rem,6vw,5rem)] leading-[1.18] tracking-[-0.02em] text-ink">
          Back the chapter, meet your next <em className="italic">hires.</em>
        </h1>
        <div className="mt-6 max-w-2xl">
          <BlurText
            text="Sponsorship funds convention travel, professional programming, and outreach across Madison — and puts your company in the room with STEM students who show up. Here's how it works, and what each tier includes."
            animateBy="words"
            delay={40}
            className="text-body-lg text-slate"
          />
        </div>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Magnet padding={60} magnetStrength={4}>
            <a
              href="mailto:sase@rso.wisc.edu?subject=Sponsorship%20inquiry"
              className="block rounded-full bg-ink px-6 py-3 text-[16px] text-paper transition-opacity duration-300 hover:opacity-85"
            >
              Start the conversation
            </a>
          </Magnet>
          <Magnet padding={60} magnetStrength={4}>
            <a
              href="#tiers"
              onClick={(e) => scrollToAnchor("#tiers", e)}
              className="block rounded-full border border-ink px-6 py-3 text-[16px] text-ink transition-colors duration-300 hover:bg-mist"
            >
              See the tiers
            </a>
          </Magnet>
        </div>
      </div>
    </section>
  );
}
