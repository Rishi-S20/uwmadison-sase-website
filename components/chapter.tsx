"use client";

import CountUp from "@/components/CountUp";
import { GhostPill } from "@/components/ui/ghost-pill";

const stats = [
  { value: 2026, label: "Chapter founded", offset: "md:mt-0" },
  { value: 4, label: "Pillars of the mission", offset: "md:mt-16" },
  { value: 1, label: "First chapter in Madison", offset: "md:mt-32" },
];

export function Chapter() {
  return (
    <section id="chapter" className="bg-obsidian py-[152px] text-paper">
      <div className="container-editorial">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="max-w-[10ch] text-[clamp(48px,9vw,94px)] font-normal leading-[0.9] md:leading-[0.76]">
              The founding class.
            </h2>
            <p className="mt-16 max-w-md text-body leading-[1.58] text-ash-mist">
              Every chapter has a first year. The people who join now write the
              constitution, set the traditions, and leave a name on something
              that outlasts them.
            </p>
            <div className="mt-20">
              <GhostPill href="#join" surface="dark">
                Become a founding member
              </GhostPill>
            </div>
          </div>

          <div className="flex flex-col gap-12 md:col-span-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`border-l border-sase-blue/40 pl-6 ${stat.offset}`}
              >
                <span className="block text-[clamp(40px,6vw,64px)] font-normal leading-[1.1] text-sase-blue-bright">
                  <CountUp to={stat.value} duration={1.25} separator="" />
                </span>
                <span className="mt-2 block text-[11px] uppercase leading-[1.36] tracking-[0.14em] text-ash-mist">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
