"use client";

import FlowingMenu from "@/components/FlowingMenu";
import ShinyText from "@/components/ShinyText";

const swatch = (a: string, b: string) =>
  `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='70'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='%23${a}'/><stop offset='1' stop-color='%23${b}'/></linearGradient></defs><rect width='140' height='70' fill='url(%23g)'/></svg>`;

const items = [
  { link: "#join", text: "President", image: swatch("0050bd", "3d8bff") },
  { link: "#join", text: "VP Professional Dev", image: swatch("299d2d", "4ade63") },
  { link: "#join", text: "VP Mentorship", image: swatch("0050bd", "299d2d") },
  { link: "#join", text: "Treasurer", image: swatch("3d8bff", "4ade63") },
  { link: "#join", text: "Outreach Chair", image: swatch("299d2d", "0050bd") },
  { link: "#join", text: "Marketing Chair", image: swatch("3d8bff", "0050bd") },
];

export function Team() {
  return (
    <section id="team" className="py-[152px]">
      <div className="container-editorial">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <ShinyText
            text="FOUNDING TEAM"
            speed={4}
            color="#3d8bff"
            shineColor="#4ade63"
            className="text-[11px] uppercase leading-[1.36] tracking-[0.2em]"
          />
          <p className="text-body-sm text-ash-mist">
            Every seat is open. Hover a role, claim it.
          </p>
        </div>
      </div>
      <div className="h-[420px] md:h-[520px]">
        <FlowingMenu
          items={items}
          speed={18}
          textColor="#ffffff"
          bgColor="transparent"
          marqueeBgColor="#0050bd"
          marqueeTextColor="#ffffff"
        />
      </div>
    </section>
  );
}
