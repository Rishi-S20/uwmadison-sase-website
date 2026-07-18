"use client";

import LogoLoop from "@/components/LogoLoop";

/* PLACEHOLDER wordmarks — swap for real sponsor logo images once corporate
   relations confirms who can be named publicly. */
const PARTNERS = [
  "Epic",
  "GE HealthCare",
  "Kohler",
  "Rockwell",
  "Exact Sciences",
  "Oshkosh",
  "TDS",
  "Promega",
];

const LOGOS = PARTNERS.map((name) => ({
  node: (
    <span className="whitespace-nowrap font-serif text-[clamp(1.3rem,2.2vw,1.8rem)] tracking-[-0.01em] text-ink/35 transition-colors duration-300 hover:text-ink">
      {name}
    </span>
  ),
  title: name,
  ariaLabel: name,
}));

/** Marquee of companies that have shown up for the chapter — pauses on
    hover so a recruiter can actually read it. */
export default function Partners() {
  return (
    <section className="relative py-14 md:py-20">
      <div className="container-editorial">
        <p className="text-[13px] uppercase tracking-[0.22em] text-ash">
          Companies who&apos;ve shown up
        </p>
      </div>
      <div className="container-editorial mt-8">
        <LogoLoop
          logos={LOGOS}
          speed={60}
          gap={64}
          logoHeight={32}
          pauseOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Companies who have sponsored or hosted events with SASE"
        />
      </div>
    </section>
  );
}
