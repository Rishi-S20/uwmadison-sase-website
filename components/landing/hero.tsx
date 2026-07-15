"use client";

import SmoothScrollHero, {
  type ParallaxImageSpec,
} from "@/components/ui/smooth-scroll-hero";

/* Placeholder chapter photos that parallax past the panel — swap for real
   shots. Layout fractions and travel distances follow the reference. */
const PARALLAX_IMAGES: ParallaxImageSpec[] = [
  {
    src: "https://picsum.photos/seed/sase-panel/800/600",
    alt: "Company panel",
    start: -200,
    end: 200,
    className: "w-1/3",
  },
  {
    src: "https://picsum.photos/seed/sase-culture/900/600",
    alt: "Culture night",
    start: 200,
    end: -250,
    className: "mx-auto w-2/3",
  },
  {
    src: "https://picsum.photos/seed/sase-conv/800/600",
    alt: "National Convention",
    start: -200,
    end: 200,
    className: "ml-auto w-1/3",
  },
  {
    src: "https://picsum.photos/seed/sase-social/800/500",
    alt: "Chapter social",
    start: 0,
    end: -500,
    className: "ml-24 w-5/12",
  },
];

/**
 * Cinematic scroll hero: a wash-blue panel holding the org name opens from a
 * clipped center window to fullscreen as you scroll, zooming out as it goes;
 * chapter photos then parallax past at different speeds before the page
 * settles into the mission section.
 */
export default function Hero() {
  return (
    <section id="top" className="relative">
      <SmoothScrollHero
        panelClassName="bg-[#3a2d6e]"
        images={PARALLAX_IMAGES}
        centerContent={
          <>
            <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-[#c9b8f5]">
              University of Wisconsin–Madison
            </p>
            <p className="mt-4 font-serif text-[clamp(5.5rem,24vw,17rem)] leading-none tracking-[-0.03em] text-paper">
              SASE
            </p>
            <p className="mt-5 text-[clamp(0.85rem,1.6vw,1.05rem)] text-paper/70">
              Society of Asian Scientists &amp; Engineers
            </p>
          </>
        }
      />
    </section>
  );
}
