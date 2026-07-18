"use client";

import { useState } from "react";
import AnimatedContent from "@/components/AnimatedContent";
import DecryptedText from "@/components/DecryptedText";
import { BorderBeam } from "@/components/ui/border-beam";

/* PLACEHOLDER tiers — names, amounts, and benefits are drafts for the exec
   board to confirm with corporate relations before launch. Benefits listed
   per tier are what that tier ADDS; every tier includes the ones below it. */
const TIERS = [
  {
    name: "Platinum",
    price: "$2,500",
    featured: false,
    benefits: [
      "Title sponsor of one flagship event",
      "Tabling at chapter events",
      "Semester-long branding across programs",
    ],
  },
  {
    name: "Gold",
    price: "$1,000",
    featured: true,
    benefits: [
      "Hosted info session or GBM takeover",
      "Résumé book access",
      "First call for panels and case nights",
    ],
  },
  {
    name: "Silver",
    price: "$500",
    featured: false,
    benefits: [
      "Logo on chapter banner and event slides",
      "Social media spotlight",
    ],
  },
  {
    name: "Bronze",
    price: "$250",
    featured: false,
    benefits: [
      "Logo and link on our website",
      "Thank-you in the member newsletter",
    ],
  },
];

/**
 * Tiers as an interactive rate card: a tier selector rail beside a detail
 * panel that re-decrypts the price and staggers in the cumulative benefit
 * list on every change. Hover previews, click persists.
 */
export default function Tiers() {
  const [activeIndex, setActiveIndex] = useState(
    TIERS.findIndex((t) => t.featured),
  );
  const active = TIERS[activeIndex];
  // Everything from the tiers below the active one is included too.
  const inherited = TIERS.slice(activeIndex + 1).flatMap((t) => t.benefits);

  return (
    <section id="tiers" className="relative py-20 md:py-28">
      <div className="container-editorial">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[14px] text-ash">Sponsorship tiers</p>
            <h2 className="mt-4 font-serif text-[clamp(2.2rem,4.6vw,4rem)] leading-[1.3] tracking-[-0.015em] text-ink">
              Four ways <em className="italic">in.</em>
            </h2>
          </div>
          <p className="max-w-xs pb-2 text-[15px] leading-[1.5] text-slate">
            Every tier includes everything in the tiers below it. All amounts
            are per academic year.
          </p>
        </div>

        <AnimatedContent distance={44} duration={1.2} ease="power3.out">
          <div className="mt-14 flex flex-col gap-2 rounded-[10px] bg-paper p-2 shadow-(--shadow-artifact) md:flex-row md:gap-0 md:p-3">
            {/* Selector rail */}
            <div
              role="tablist"
              aria-label="Sponsorship tiers"
              className="flex gap-1 overflow-x-auto md:w-[240px] md:shrink-0 md:flex-col md:overflow-visible md:border-r md:border-border md:pr-3"
            >
              {TIERS.map((tier, i) => {
                const isActive = i === activeIndex;
                return (
                  <button
                    key={tier.name}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveIndex(i)}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={`shrink-0 cursor-pointer rounded-[8px] px-4 py-3 text-left transition-colors duration-300 md:px-5 md:py-4 ${
                      isActive
                        ? "bg-sase-wash text-sase-deep"
                        : "text-ink hover:bg-fog"
                    }`}
                  >
                    <span className="block font-serif text-[clamp(1.25rem,2vw,1.6rem)] leading-[1.2]">
                      {tier.name}
                    </span>
                    <span
                      className={`mt-0.5 block text-[13px] tracking-[0.06em] ${
                        isActive ? "text-sase-deep/70" : "text-slate"
                      }`}
                    >
                      {tier.featured ? "Most popular" : tier.price}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Detail panel — keyed by tier so the reveal replays per change */}
            <div
              key={active.name}
              className="relative min-h-[300px] flex-1 overflow-hidden rounded-[8px] px-4 py-6 md:px-8 md:py-7"
            >
              {active.featured && (
                <BorderBeam
                  size={90}
                  duration={9}
                  borderWidth={1.5}
                  colorFrom="#3d8bff"
                  colorTo="#f3c3dc"
                />
              )}
              <p className="text-[13px] uppercase tracking-[0.22em] text-ash">
                {active.name} · per academic year
              </p>
              <p className="mt-2 text-[clamp(2.4rem,4vw,3.4rem)] font-medium tracking-[-0.02em] text-ink">
                <DecryptedText
                  text={active.price}
                  animateOn="view"
                  sequential
                  speed={40}
                />
              </p>

              <ul className="mt-6 flex flex-col gap-2.5">
                {active.benefits.map((benefit, i) => (
                  <AnimatedContent
                    key={benefit}
                    distance={16}
                    duration={0.6}
                    delay={0.05 * i}
                    ease="power3.out"
                  >
                    <li className="flex gap-3 text-[16px] leading-[1.55] text-ink">
                      <span aria-hidden className="font-medium text-sase-blue">
                        +
                      </span>
                      {benefit}
                    </li>
                  </AnimatedContent>
                ))}
                {inherited.map((benefit, i) => (
                  <AnimatedContent
                    key={benefit}
                    distance={16}
                    duration={0.6}
                    delay={0.05 * (active.benefits.length + i)}
                    ease="power3.out"
                  >
                    <li className="flex gap-3 text-[16px] leading-[1.55] text-slate">
                      <span aria-hidden>·</span>
                      {benefit}
                    </li>
                  </AnimatedContent>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedContent>

        <p className="mt-6 text-[15px] text-slate">
          Have a budget or recruiting goal that doesn&apos;t fit a box?{" "}
          <a
            href="mailto:sase@rso.wisc.edu?subject=Custom%20sponsorship"
            className="text-ink transition-colors duration-300 hover:text-sase-blue"
          >
            We&apos;ll build a custom package →
          </a>
        </p>
      </div>
    </section>
  );
}
