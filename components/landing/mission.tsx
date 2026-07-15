"use client";

import CountUp from "@/components/CountUp";
import ScrollReveal from "@/components/ScrollReveal";

const STATS = [
  {
    value: 100,
    suffix: "+",
    label: "Collegiate chapters",
    note: "across the national network",
    accent: true,
  },
  {
    value: 2007,
    suffix: "",
    label: "National org founded",
    note: "SASE has grown ever since",
    accent: false,
  },
  {
    value: 1,
    suffix: "",
    label: "Home at UW–Madison",
    note: "every STEM major welcome",
    accent: false,
  },
];

export default function Mission() {
  return (
    <section id="mission" className="relative py-20 md:py-32">
      <div className="container-editorial">
        <p className="text-[14px] text-ash">Who we are</p>

        {/* Words sharpen and brighten as the scroll drags through them */}
        <div className="mt-6 max-w-4xl">
          <ScrollReveal
            baseOpacity={0.08}
            baseRotation={1.5}
            blurStrength={3}
            containerClassName="my-0"
            textClassName="font-serif !leading-[1.32] tracking-[-0.015em] text-ink text-[clamp(1.55rem,3.1vw,2.7rem)]"
          >
            SASE at UW–Madison is the campus home of the Society of Asian
            Scientists and Engineers. We prepare scientists and engineers of
            Asian heritage for professional success, celebrate culture and
            diversity on campus, and give back to the Madison community.
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[12px] bg-mist/90 px-6 py-7"
            >
              <p className="text-[26px] font-medium tracking-[-0.23px] text-ink md:text-[32px]">
                <CountUp to={stat.value} duration={2} separator="" />
                {stat.suffix && (
                  <span className="text-sase-blue">{stat.suffix}</span>
                )}
              </p>
              <p className="mt-2 text-[17px] text-ink">{stat.label}</p>
              <p
                className={`mt-1 text-[14px] ${
                  stat.accent ? "text-sase-green" : "text-slate"
                }`}
              >
                {stat.accent ? "↑ " : ""}
                {stat.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
