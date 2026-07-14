"use client";

import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

const PILLARS = [
  {
    tag: "Pillar 01",
    title: "Professional development",
    body: "Resume clinics, corporate panels, and mentorship that prepare members to thrive in a global, cross-cultural workplace.",
    items: ["Resume nights", "Company panels", "Mentorship", "National convention"],
    stroke: "#0050bd",
  },
  {
    tag: "Pillar 02",
    title: "Culture + community",
    body: "A campus home that celebrates Asian heritage and diversity — across every major, background, and year.",
    items: ["Culture nights", "Socials", "Study tables", "Food crawls"],
    stroke: "#299d2d",
  },
  {
    tag: "Pillar 03",
    title: "Service",
    body: "Giving back to Madison through volunteering and outreach, because engineers are neighbors first.",
    items: ["Volunteer days", "STEM outreach", "Campus partners"],
    stroke: "#123c7d",
  },
];

export default function Pillars() {
  return (
    <section id="pillars" className="relative py-20 md:py-32">
      <div className="container-editorial">
        <p className="text-[14px] text-ash">What we do</p>
        <h2 className="mt-4 max-w-2xl font-serif text-[clamp(2.2rem,4.6vw,4rem)] leading-[1.3] tracking-[-0.015em] text-ink">
          Three pillars, <em className="italic">one chapter.</em>
        </h2>
      </div>

      {/* Cards ride the scroll: each pins and settles softly under the next */}
      <div className="container-editorial relative mt-14 max-w-4xl">
        <ScrollStack
          useWindowScroll
          itemDistance={120}
          itemStackDistance={16}
          stackPosition="20%"
          scaleEndPosition="10%"
          baseScale={0.94}
        >
          {PILLARS.map((pillar) => (
            <ScrollStackItem
              key={pillar.tag}
              itemClassName="min-h-[22rem] md:min-h-[24rem] rounded-[24px] bg-mist/95 p-8 md:p-12"
            >
              <div className="flex h-full min-h-[inherit] flex-col justify-between gap-8">
                <div className="flex items-center justify-between">
                  <p className="text-[14px] text-ash">{pillar.tag}</p>
                  <svg viewBox="0 0 96 20" className="h-5 w-24" fill="none" aria-hidden>
                    <path
                      d="M2 16 C 18 15, 28 11, 42 10 S 68 7, 80 4 S 92 2, 94 2"
                      stroke={pillar.stroke}
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-[clamp(1.7rem,3.4vw,2.6rem)] leading-[1.18] tracking-[-0.015em] text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-body text-slate">{pillar.body}</p>
                  <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
                    {pillar.items.map((item) => (
                      <li key={item} className="text-[14px] text-ash">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
