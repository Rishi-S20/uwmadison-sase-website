"use client";

import BlurText from "@/components/BlurText";
import FlowingMenu from "@/components/FlowingMenu";
import Shuffle from "@/components/Shuffle";

/* Marquee images reuse the gallery's placeholder seeds */
const MENU_ITEMS = [
  {
    link: "#events",
    text: "Professional development",
    image: "https://picsum.photos/seed/sase-panel/600/440",
  },
  {
    link: "#events",
    text: "Culture + community",
    image: "https://picsum.photos/seed/sase-culture/600/440",
  },
  {
    link: "#events",
    text: "Service",
    image: "https://picsum.photos/seed/sase-service/600/440",
  },
];

/**
 * Registry-native layout, no cards and no lists: TextPressure headline whose
 * letters swell under the cursor, then FlowingMenu rows that erupt into an
 * ink marquee of tags and photos on hover.
 */
export default function Pillars() {
  return (
    <section id="pillars" className="relative py-20 md:py-32">
      <div className="container-editorial">
        <p className="text-[14px] text-ash">What we do</p>

        {/* Slot-shuffle headline — characters slide into place, replays on hover */}
        <Shuffle
          text="Three pillars."
          tag="h2"
          textAlign="left"
          shuffleDirection="up"
          duration={0.5}
          stagger={0.04}
          shuffleTimes={2}
          triggerOnHover
          respectReducedMotion
          className="mt-4 font-serif !text-[clamp(2.4rem,5.2vw,4.4rem)] leading-[1.15] tracking-[-0.02em] text-ink"
        />

        <div className="mt-6 max-w-2xl">
          <BlurText
            text="Everything the chapter does hangs on three commitments — hover each one."
            animateBy="words"
            delay={50}
            className="text-body-lg text-slate"
          />
        </div>
      </div>

      <div className="container-editorial mt-12">
        <div className="h-[52vh] min-h-[400px]">
          <FlowingMenu
            items={MENU_ITEMS}
            textColor="#17191c"
            bgColor="transparent"
            borderColor="rgba(23,25,28,0.14)"
            marqueeBgColor="#e3edfc"
            marqueeTextColor="#123c7d"
          />
        </div>
        <p className="mt-6 text-[14px] text-smoke">
          Resume nights · Company panels · Mentorship · Culture nights ·
          Socials · Study tables · Volunteer days · STEM outreach
        </p>
      </div>
    </section>
  );
}
