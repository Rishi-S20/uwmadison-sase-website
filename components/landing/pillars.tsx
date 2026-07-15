"use client";

import BlurText from "@/components/BlurText";
import FlowingMenu from "@/components/FlowingMenu";
import RotatingText from "@/components/RotatingText";

/* Marquee images reuse the gallery's placeholder seeds; the hover band
   streams each pillar's actual description and activities */
const MENU_ITEMS = [
  {
    link: "#events",
    text: "Professional development",
    image: "https://picsum.photos/seed/sase-panel/600/440",
    marqueeText:
      "Resume clinics, corporate panels, and mentorship for a global workplace — Resume nights · Company panels · Mentorship · National convention",
  },
  {
    link: "#events",
    text: "Culture + community",
    image: "https://picsum.photos/seed/sase-culture/600/440",
    marqueeText:
      "A campus home celebrating Asian heritage across every major and year — Culture nights · Socials · Study tables · Food crawls",
  },
  {
    link: "#events",
    text: "Service",
    image: "https://picsum.photos/seed/sase-service/600/440",
    marqueeText:
      "Giving back to Madison through volunteering and outreach — Volunteer days · STEM outreach · Campus partners",
  },
];

/**
 * Registry-native layout, no cards and no lists: a serif headline whose
 * rotating word flips through the three pillar names, then FlowingMenu rows
 * that erupt into a marquee of activities on hover or tap.
 */
export default function Pillars() {
  return (
    <section id="pillars" className="relative py-20 md:py-32">
      <div className="container-editorial">
        <p className="text-[14px] text-ash">What we do</p>

        {/* Rotating headline — the pillar names spring through a wash pill,
            character by character, previewing the rows beneath */}
        <h2 className="mt-6 font-serif text-[clamp(2.4rem,5.2vw,4.4rem)] leading-[1.12] tracking-[-0.02em] text-ink">
          Three pillars.
        </h2>
        <div className="mt-4 flex">
          <RotatingText
            texts={["Professional development", "Culture + community", "Service"]}
            mainClassName="overflow-hidden rounded-[14px] bg-sase-wash px-4 py-1.5 font-serif text-[clamp(1.4rem,2.9vw,2.5rem)] leading-[1.2] tracking-[-0.01em] text-sase-deep sm:px-5"
            staggerFrom="first"
            staggerDuration={0.018}
            rotationInterval={2800}
            splitBy="characters"
          />
        </div>

        <div className="mt-6 max-w-2xl">
          <BlurText
            text="Everything the chapter does hangs on three commitments — open each one."
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
      </div>
    </section>
  );
}
