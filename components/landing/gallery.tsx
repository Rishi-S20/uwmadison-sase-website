"use client";

import AnimatedContent from "@/components/AnimatedContent";
import CircularGallery from "@/components/CircularGallery";

/* Placeholder chapter-life photos — swap for real ones when available */
const ITEMS = [
  { image: "https://picsum.photos/seed/sase-gbm/900/650", text: "General meetings" },
  { image: "https://picsum.photos/seed/sase-conv/900/650", text: "National Convention" },
  { image: "https://picsum.photos/seed/sase-culture/900/650", text: "Culture night" },
  { image: "https://picsum.photos/seed/sase-panel/900/650", text: "Company panels" },
  { image: "https://picsum.photos/seed/sase-service/900/650", text: "Volunteer days" },
  { image: "https://picsum.photos/seed/sase-study/900/650", text: "Study tables" },
  { image: "https://picsum.photos/seed/sase-social/900/650", text: "Socials" },
  { image: "https://picsum.photos/seed/sase-food/900/650", text: "Food crawls" },
];

export default function Gallery() {
  return (
    <section id="life" className="relative -mt-14 pb-14 md:pb-20">
      <AnimatedContent distance={28} duration={1.1} ease="power3.out" threshold={0.05}>
        <div className="container-editorial flex items-end justify-between gap-6">
          <p className="text-[14px] text-ash">Chapter life</p>
          <p className="text-[14px] text-smoke">Drag or scroll — photos coming soon</p>
        </div>
      </AnimatedContent>

      {/* Draggable curved gallery — images bend as they sweep past, rising
          into the hero as it dissolves */}
      <AnimatedContent distance={70} duration={1.3} ease="power3.out" scale={0.97} threshold={0.05}>
        <div className="relative mt-6 h-[380px] md:h-[480px]">
          <CircularGallery
            items={ITEMS}
            bend={2.6}
            textColor="#17191c"
            borderRadius={0.06}
            font="italic 28px Georgia"
            scrollSpeed={2}
            scrollEase={0.06}
          />
        </div>
      </AnimatedContent>
    </section>
  );
}
