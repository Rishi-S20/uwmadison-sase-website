"use client";

import ScrollVelocity from "@/components/ScrollVelocity";

export function Marquee() {
  return (
    <div className="relative z-10 -mx-[3vw] -my-6 w-[106vw] -rotate-2 overflow-hidden border-y border-white/10 bg-[#050e20] py-10">
      <ScrollVelocity
        texts={[
          <span key="line-1" className="text-sase-blue-bright">
            SASE UW–MADISON · FOUNDING CHAPTER ·&nbsp;
          </span>,
          <span key="line-2" className="text-paper/15">
            JOIN THE FIRST CLASS · BE FIRST ·&nbsp;
          </span>,
        ]}
        velocity={70}
        className="text-[clamp(34px,6vw,72px)] font-light uppercase leading-[1.1] tracking-tight"
      />
    </div>
  );
}
