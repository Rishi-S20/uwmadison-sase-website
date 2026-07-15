"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import DecryptedText from "@/components/DecryptedText";

const HOLD_MS = 2400;

/**
 * Boot screen: the wordmark decrypts out of scrambled characters — cipher
 * settling into serif — then the sheet wipes upward to reveal the hero.
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
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-paper px-6"
      initial={{ y: 0 }}
      animate={exiting ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
      onAnimationComplete={() => {
        if (exiting) setDone(true);
      }}
    >
      <DecryptedText
        text="SASE"
        animateOn="view"
        sequential
        speed={110}
        revealDirection="start"
        parentClassName="font-serif text-[clamp(4rem,16vw,9rem)] leading-none tracking-[-0.03em]"
        className="text-ink"
        encryptedClassName="text-smoke/60"
      />
      <DecryptedText
        text="Society of Asian Scientists & Engineers"
        animateOn="view"
        sequential
        speed={22}
        revealDirection="center"
        parentClassName="mt-5 text-center text-[clamp(12px,3.4vw,15px)] tracking-[0.08em]"
        className="text-slate"
        encryptedClassName="text-smoke/50"
      />
      <DecryptedText
        text="UW–Madison"
        animateOn="view"
        sequential
        speed={45}
        revealDirection="center"
        parentClassName="mt-2 text-[clamp(11px,3vw,13px)] tracking-[0.14em]"
        className="text-sase-blue"
        encryptedClassName="text-smoke/40"
      />

      <motion.span
        className="absolute bottom-14 h-1.5 w-1.5 rounded-full bg-sase-blue"
        animate={{ opacity: [0.25, 1, 0.25], scale: [1, 1.35, 1] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
