"use client";

import ScrollVelocity from "@/components/ScrollVelocity";

/**
 * Section seam: counter-scrolling serif watermarks whose speed follows
 * scroll velocity — quiet outlines, not billboards.
 */
export default function Seam({
  primary,
  secondary,
}: {
  primary: string;
  secondary: string;
}) {
  return (
    <div className="relative select-none overflow-hidden py-10 md:py-14">
      <ScrollVelocity
        texts={[
          <span key="a" className="text-outline">
            {primary}
          </span>,
          <span key="b" className="text-outline-accent">
            {secondary}
          </span>,
        ]}
        velocity={55}
        numCopies={8}
        className="pr-6 font-serif italic text-[clamp(2.2rem,5vw,4.2rem)] font-normal tracking-[-0.02em]"
      />
    </div>
  );
}
