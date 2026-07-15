"use client";

import AnimatedContent from "@/components/AnimatedContent";

const EVENTS = [
  { name: "General meetings", when: "Biweekly", tag: "Chapter" },
  { name: "Company panels + info sessions", when: "Fall + Spring", tag: "Professional" },
  { name: "SASE National Convention", when: "October", tag: "National" },
  { name: "Culture night", when: "Spring", tag: "Social" },
  { name: "Volunteer day", when: "Each semester", tag: "Service" },
  { name: "Study tables", when: "Weekly", tag: "Academic" },
];

export default function Events() {
  return (
    <section id="events" className="relative py-20 md:py-32">
      <div className="container-editorial">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[14px] text-ash">On the calendar</p>
            <h2 className="mt-4 font-serif text-[clamp(2.2rem,4.6vw,4rem)] leading-[1.3] tracking-[-0.015em] text-ink">
              A typical <em className="italic">semester.</em>
            </h2>
          </div>
          <p className="max-w-xs pb-2 text-[15px] leading-[1.5] text-slate">
            Exact dates and rooms are posted on Instagram and in the member
            newsletter.
          </p>
        </div>

        {/* The one floating artifact of the section — an editorial schedule table */}
        <AnimatedContent distance={44} duration={1.2} ease="power3.out">
          <div className="mt-14 rounded-[10px] bg-paper p-2 shadow-(--shadow-artifact) md:p-3">
            <ul>
              {EVENTS.map((event, i) => (
                <li key={event.name}>
                  <AnimatedContent
                    distance={20}
                    duration={0.9}
                    delay={0.08 * i}
                    ease="power3.out"
                  >
                    <div
                      className={`group flex items-center justify-between gap-4 rounded-[8px] px-4 py-4 transition-colors duration-300 hover:bg-fog md:px-6 ${
                        i > 0 ? "border-t border-border" : ""
                      }`}
                    >
                      <div className="flex min-w-0 items-center gap-4">
                        <span className="hidden w-6 text-[14px] text-smoke sm:block">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="truncate text-[17px] text-ink">
                          {event.name}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-3 sm:gap-6">
                        <span className="hidden text-[14px] text-ash sm:inline">
                          {event.tag}
                        </span>
                        <span className="text-[15px] text-slate">
                          {event.when}
                        </span>
                        <span className="hidden text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:inline">
                          →
                        </span>
                      </div>
                    </div>
                  </AnimatedContent>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
