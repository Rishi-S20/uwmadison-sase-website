"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import ClickSpark from "@/components/ClickSpark";
import { LiquidBlob } from "@/components/ui/liquid-blob";
import Loader from "@/components/landing/loader";

/**
 * Page-level client shell. One continuous liquid-blob wash spans the whole
 * document — pools placed intentionally down the page, alternating edges —
 * so sections share a single flowing background instead of banded blocks.
 * Owns the page-wide Lenis smooth-scroll instance (exposed at window.__lenis
 * for anchor navigation). SASE-blue click sparks are the only other
 * page-wide flourish.
 */
export default function Shell({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      wheelMultiplier: 1,
      lerp: 0.1,
      syncTouch: true,
      syncTouchLerp: 0.075,
    });
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    let frame: number;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      const w = window as unknown as { __lenis?: Lenis };
      if (w.__lenis === lenis) delete w.__lenis;
      lenis.destroy();
    };
  }, []);

  return (
    <ClickSpark sparkColor="#0050bd" sparkRadius={20} sparkCount={8} duration={420}>
      <Loader />
      <div className="relative min-h-screen overflow-x-clip bg-paper text-ink">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <LiquidBlob layout="page" interactive={false} blur={90} speed={34} opacity={0.5} />
        </div>
        <div className="relative">{children}</div>
      </div>
    </ClickSpark>
  );
}
