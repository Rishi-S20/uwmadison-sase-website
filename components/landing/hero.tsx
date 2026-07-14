"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import AnimatedContent from "@/components/AnimatedContent";
import CircularText from "@/components/CircularText";
import CountUp from "@/components/CountUp";
import GlareHover from "@/components/GlareHover";
import ImageTrail from "@/components/ImageTrail";
import Magnet from "@/components/Magnet";
import ShinyText from "@/components/ShinyText";
import type Lenis from "lenis";

function scrollToSection(id: string) {
  const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
  if (lenis) lenis.scrollTo(`#${id}`, { offset: -32 });
  else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

/* Placeholder chapter photos — same seeds as the gallery for cohesion */
const TRAIL_IMAGES = [
  "https://picsum.photos/seed/sase-gbm/600/440",
  "https://picsum.photos/seed/sase-conv/600/440",
  "https://picsum.photos/seed/sase-culture/600/440",
  "https://picsum.photos/seed/sase-panel/600/440",
  "https://picsum.photos/seed/sase-service/600/440",
  "https://picsum.photos/seed/sase-study/600/440",
  "https://picsum.photos/seed/sase-social/600/440",
  "https://picsum.photos/seed/sase-food/600/440",
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
    <section id="top" ref={sectionRef} className="relative isolate">
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

      {/* Chapter photos trail behind the cursor as it sweeps the hero */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute inset-0"
        aria-hidden
      >
        <ImageTrail items={TRAIL_IMAGES} variant={1} />
      </motion.div>

      <motion.div
        style={{ y: contentY, scale: contentScale, opacity: contentOpacity }}
        className="container-editorial pointer-events-none relative z-10 flex min-h-svh flex-col items-center justify-center pb-36 pt-32 text-center"
      >
        <AnimatedContent distance={24} duration={1.1} ease="power3.out">
          <ShinyText
            text="University of Wisconsin–Madison"
            speed={4}
            color="#777b86"
            shineColor="#0050bd"
            className="text-[15px]"
          />
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
          <div className="pointer-events-auto mt-9 flex flex-wrap items-center justify-center gap-3">
            <Magnet padding={70} magnetStrength={4}>
              <button
                type="button"
                onClick={() => scrollToSection("join")}
                className="cursor-pointer overflow-hidden rounded-full bg-ink transition-opacity duration-300 hover:opacity-90"
              >
                <GlareHover
                  width="auto"
                  height="auto"
                  background="transparent"
                  borderRadius="9999px"
                  borderColor="transparent"
                  glareColor="#ffffff"
                  glareOpacity={0.35}
                  glareAngle={-30}
                  glareSize={260}
                  transitionDuration={700}
                  className="!border-0 px-6 py-3"
                >
                  <span className="text-[16px] text-paper">Join the chapter</span>
                </GlareHover>
              </button>
            </Magnet>
            <Magnet padding={70} magnetStrength={4}>
              <button
                type="button"
                onClick={() => scrollToSection("events")}
                className="cursor-pointer overflow-hidden rounded-full border border-ink transition-colors duration-300 hover:bg-paper"
              >
                <GlareHover
                  width="auto"
                  height="auto"
                  background="transparent"
                  borderRadius="9999px"
                  borderColor="transparent"
                  glareColor="#0050bd"
                  glareOpacity={0.12}
                  glareAngle={-30}
                  glareSize={260}
                  transitionDuration={700}
                  className="!border-0 px-6 py-3"
                >
                  <span className="text-[16px] text-ink">See this semester</span>
                </GlareHover>
              </button>
            </Magnet>
          </div>
        </AnimatedContent>

        {/* Chapter at a glance — quiet editorial strip */}
        <AnimatedContent distance={18} duration={1.1} delay={0.55} ease="power3.out">
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-0 gap-y-3">
            <span className="text-[15px] text-slate">
              <CountUp to={100} duration={2} className="tabular-nums" />
              <span className="text-sase-blue">+</span> chapters nationwide
            </span>
            <span aria-hidden className="mx-5 h-4 w-px bg-ink/15" />
            <span className="text-[15px] text-slate">
              Est. <CountUp to={2007} from={1990} duration={2} separator="" className="tabular-nums" />
            </span>
            <span aria-hidden className="mx-5 h-4 w-px bg-ink/15" />
            <span className="text-[15px] text-slate">Madison, Wisconsin</span>
          </div>
        </AnimatedContent>
      </motion.div>

      {/* Rotating scroll badge, pinned to the hero's bottom edge */}
      <motion.button
        type="button"
        onClick={() => scrollToSection("life")}
        aria-label="Scroll to explore"
        style={{ opacity: contentOpacity }}
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 cursor-pointer"
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
