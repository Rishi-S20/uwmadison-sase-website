"use client";

import CircularGallery from "@/components/CircularGallery";
import ShinyText from "@/components/ShinyText";

// Placeholder photos — swap the image URLs for real chapter photos.
const items = [
  { image: "https://picsum.photos/seed/uw1/800/600", text: "Bascom Hill" },
  { image: "https://picsum.photos/seed/uw2/800/600", text: "Engineering Hall" },
  { image: "https://picsum.photos/seed/uw3/800/600", text: "GBM nights" },
  { image: "https://picsum.photos/seed/uw4/800/600", text: "The Terrace" },
  { image: "https://picsum.photos/seed/uw5/800/600", text: "Hackathons" },
  { image: "https://picsum.photos/seed/uw6/800/600", text: "State Street" },
  { image: "https://picsum.photos/seed/uw7/800/600", text: "Career fair" },
  { image: "https://picsum.photos/seed/uw8/800/600", text: "Study tables" },
];

export function Gallery() {
  return (
    <section className="overflow-hidden py-[100px]">
      <div className="container-editorial mb-6">
        <ShinyText
          text="LIFE AT SASE — DRAG TO EXPLORE"
          speed={4}
          color="#3d8bff"
          shineColor="#4ade63"
          className="text-[11px] uppercase leading-[1.36] tracking-[0.2em]"
        />
      </div>
      <div className="h-[480px] w-full md:h-[560px]">
        <CircularGallery
          items={items}
          bend={2.5}
          textColor="#9a9a9a"
          borderRadius={0}
          scrollSpeed={2}
          scrollEase={0.06}
        />
      </div>
    </section>
  );
}
