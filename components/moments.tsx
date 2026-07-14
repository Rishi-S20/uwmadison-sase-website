"use client";

import ChromaGrid, { ChromaItem } from "@/components/ChromaGrid";
import ShinyText from "@/components/ShinyText";

// Placeholder photos — swap the image URLs for real chapter photos.
const items: ChromaItem[] = [
  {
    image: "https://picsum.photos/seed/sase1/600/750",
    title: "First GBM",
    subtitle: "Fall 2026",
    borderColor: "#0050bd",
    gradient: "linear-gradient(145deg, #0050bd, #030a18)",
  },
  {
    image: "https://picsum.photos/seed/sase2/600/750",
    title: "Company night",
    subtitle: "Industry partners",
    borderColor: "#299d2d",
    gradient: "linear-gradient(145deg, #299d2d, #030a18)",
  },
  {
    image: "https://picsum.photos/seed/sase3/600/750",
    title: "Study tables",
    subtitle: "Every week",
    borderColor: "#3d8bff",
    gradient: "linear-gradient(145deg, #3d8bff, #030a18)",
  },
  {
    image: "https://picsum.photos/seed/sase4/600/750",
    title: "Lunar New Year",
    subtitle: "Cultural night",
    borderColor: "#4ade63",
    gradient: "linear-gradient(145deg, #4ade63, #030a18)",
  },
  {
    image: "https://picsum.photos/seed/sase5/600/750",
    title: "K-12 outreach",
    subtitle: "Madison schools",
    borderColor: "#0050bd",
    gradient: "linear-gradient(145deg, #0050bd, #030a18)",
  },
  {
    image: "https://picsum.photos/seed/sase6/600/750",
    title: "National convention",
    subtitle: "SASE 2026",
    borderColor: "#299d2d",
    gradient: "linear-gradient(145deg, #299d2d, #030a18)",
  },
];

export function Moments() {
  return (
    <section id="moments" className="py-[152px]">
      <div className="container-editorial">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <ShinyText
            text="MOMENTS"
            speed={4}
            color="#3d8bff"
            shineColor="#4ade63"
            className="text-[11px] uppercase leading-[1.36] tracking-[0.2em]"
          />
          <p className="text-body-sm text-ash-mist">
            Color follows the cursor. Photos to come — this is year one.
          </p>
        </div>
        <ChromaGrid items={items} radius={320} damping={0.45} fadeOut={0.6} />
      </div>
    </section>
  );
}
