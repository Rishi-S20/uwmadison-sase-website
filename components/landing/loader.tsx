"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import CountUp from "@/components/CountUp";
import { KineticTextReveal } from "@/components/ui/kinetic-text-reveal";

const HOLD_MS = 2100;

/**
 * Boot screen: the wordmark rises in character by character while a thin
 * progress line fills, then the whole sheet wipes upward to reveal the hero.
 */
export default function Loader() {
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const exit = setTimeout(() => setExiting(true), HOLD_MS);
    return () => {
      clearTimeout(exit);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  if (done) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-paper"
      initial={{ y: 0 }}
      animate={exiting ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
      onAnimationComplete={() => {
        if (exiting) setDone(true);
      }}
    >
      <KineticTextReveal
        text="SASE"
        splitBy="characters"
        direction="up"
        distance={90}
        stagger={0.09}
        className="font-serif text-[clamp(4rem,14vw,9rem)] leading-none tracking-[-0.03em] text-ink"
      />
      <KineticTextReveal
        text="UW–Madison"
        splitBy="characters"
        direction="up"
        distance={24}
        stagger={0.03}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        className="mt-4 text-[15px] tracking-[0.08em] text-slate"
      />

      <div className="absolute inset-x-0 bottom-14 flex flex-col items-center gap-3">
        <div className="h-px w-44 overflow-hidden bg-ink/10">
          <motion.div
            className="h-full bg-sase-blue"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: (HOLD_MS - 200) / 1000, ease: "easeInOut" }}
          />
        </div>
        <p className="text-[13px] tabular-nums text-smoke">
          <CountUp to={100} duration={(HOLD_MS - 300) / 1000} />%
        </p>
      </div>
    </motion.div>
  );
}
