"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { SplitFlapDisplay } from "@/components/ui/split-flap-display";

/* PLACEHOLDER numbers — swap in the chapter's real membership and event
   counts before this page goes live. */
const STATS = [
  {
    value: "80+",
    label: "Active members",
    note: "and growing every fall",
    accent: true,
  },
  {
    value: "15+",
    label: "STEM majors represented",
    note: "engineering, CS, and the sciences",
    accent: false,
  },
  {
    value: "40+",
    label: "Events each year",
    note: "panels, socials, service days",
    accent: false,
  },
];

/** Mount children only once the sentinel scrolls into view, so the flap
    boards run their flip wave when the band arrives, not on page load. */
function useInViewOnce<T extends HTMLElement>(rootMargin = "-15% 0px") {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);
  return { ref, inView };
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  return reduced;
}

export default function Why() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();
  const reducedMotion = usePrefersReducedMotion();
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setCompact(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setCompact(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <section id="why" className="relative py-16 md:py-24">
      <div className="container-editorial">
        <p className="text-[14px] text-ash">Why sponsor</p>

        <div className="mt-6 max-w-4xl">
          <ScrollReveal
            baseOpacity={0.08}
            baseRotation={1.5}
            blurStrength={3}
            containerClassName="my-0"
            textClassName="font-serif !leading-[1.32] tracking-[-0.015em] text-ink text-[clamp(1.55rem,3.1vw,2.7rem)]"
          >
            Your sponsorship reaches scientists and engineers before the career
            fair does — at résumé nights, company panels, and the National
            Convention. Support the pipeline, then meet it in person.
          </ScrollReveal>
        </div>
      </div>

      {/* Departure-board stat band: the page's one dark, full-bleed moment.
          Boards mount on scroll-in so the flip wave plays as you arrive. */}
      <div
        ref={ref}
        className="relative left-1/2 mt-16 w-screen -translate-x-1/2 bg-[#0c0c0c] py-14 md:py-20"
      >
        <div className="container-editorial">
          <p className="text-[13px] uppercase tracking-[0.22em] text-white/40">
            The chapter, by the numbers
          </p>
          <div className="mt-8 grid gap-10 md:grid-cols-3 md:gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="min-w-0">
                <div className="min-h-[86px] md:min-h-[104px]">
                  {inView && (
                    <SplitFlapDisplay
                      text={stat.value}
                      columns={3}
                      size={compact ? "md" : "lg"}
                      accentColor="#3d8bff"
                      staggerDelay={reducedMotion ? 0 : 90}
                      flipSpeed={reducedMotion ? 1 : 35}
                    />
                  )}
                </div>
                <p className="mt-4 text-[17px] text-paper">{stat.label}</p>
                <p
                  className={`mt-1 text-[14px] ${
                    stat.accent ? "text-sase-green-bright" : "text-white/50"
                  }`}
                >
                  {stat.accent ? "↑ " : ""}
                  {stat.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
