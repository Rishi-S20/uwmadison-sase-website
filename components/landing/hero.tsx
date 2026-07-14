"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import AnimatedContent from "@/components/AnimatedContent";
import CircularText from "@/components/CircularText";
import type Lenis from "lenis";

function scrollToSection(id: string) {
  const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
  if (lenis) lenis.scrollTo(`#${id}`, { offset: -32 });
  else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const FACTS = [
  "100+ chapters nationwide",
  "Est. 2007",
  "Madison, Wisconsin",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-out transition: as the hero leaves, its content drifts up,
  // shrinks slightly, and dissolves into the gallery rising beneath it.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section id="top" ref={sectionRef} className="relative">
      {/* Soft white pool behind the headline so type stays quiet and legible
          against the page-wide wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(48% 42% at 50% 46%, rgba(255,255,255,0.75) 25%, rgba(255,255,255,0) 100%)",
        }}
      />

      <motion.div
        style={{ y: contentY, scale: contentScale, opacity: contentOpacity }}
        className="container-editorial relative flex min-h-svh flex-col items-center justify-center pb-36 pt-32 text-center"
      >
        <AnimatedContent distance={24} duration={1.1} ease="power3.out">
          <p className="text-[15px] text-slate">
            University of Wisconsin–Madison
          </p>
        </AnimatedContent>

        <AnimatedContent distance={32} duration={1.2} delay={0.12} ease="power3.out">
          <h1 className="mt-5 max-w-5xl font-serif text-[clamp(2.6rem,6.8vw,5.5rem)] leading-[1.14] tracking-[-0.02em] text-ink">
            Society of <em className="italic">Asian Scientists</em>
            <br className="hidden sm:block" /> &amp; Engineers
          </h1>
        </AnimatedContent>

        <AnimatedContent distance={24} duration={1.1} delay={0.26} ease="power3.out">
          <p className="mx-auto mt-6 max-w-xl text-body-lg text-slate">
            A professional and cultural home for students in STEM on the
            UW–Madison campus.
          </p>
        </AnimatedContent>

        <AnimatedContent distance={24} duration={1.1} delay={0.4} ease="power3.out">
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => scrollToSection("join")}
              className="cursor-pointer rounded-full bg-ink px-6 py-3 text-[16px] text-paper transition-opacity duration-300 hover:opacity-85"
            >
              Join the chapter
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("events")}
              className="cursor-pointer rounded-full border border-ink px-6 py-3 text-[16px] text-ink transition-colors duration-300 hover:bg-paper"
            >
              See this semester
            </button>
          </div>
        </AnimatedContent>

        {/* Chapter at a glance — quiet editorial strip */}
        <AnimatedContent distance={18} duration={1.1} delay={0.55} ease="power3.out">
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-0 gap-y-3">
            {FACTS.map((fact, i) => (
              <span key={fact} className="flex items-center">
                {i > 0 && (
                  <span aria-hidden className="mx-5 h-4 w-px bg-ink/15" />
                )}
                <span className="text-[15px] text-slate">{fact}</span>
              </span>
            ))}
          </div>
        </AnimatedContent>
      </motion.div>

      {/* Rotating scroll badge, pinned to the hero's bottom edge */}
      <motion.button
        type="button"
        onClick={() => scrollToSection("life")}
        aria-label="Scroll to explore"
        style={{ opacity: contentOpacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer"
      >
        <div className="scale-[0.48] transition-transform duration-700 ease-glide hover:rotate-45">
          <CircularText
            text="SCROLL · EXPLORE · SCROLL · EXPLORE · "
            spinDuration={24}
            onHover="speedUp"
            className="!text-ink/45 !font-medium"
          />
        </div>
      </motion.button>
    </section>
  );
}
