"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { scrollToAnchor } from "@/lib/scroll-to-anchor";

// Shader is WebGL-only; load it client-side after the panel paints so the
// first frame is a plain wash card with zero layout shift.
const Dithering = dynamic(
  () => import("@paper-design/shaders-react").then((m) => m.Dithering),
  { ssr: false, loading: () => null },
);

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/**
 * Dithered CTA hero: a single bordered wash panel filled with an animated
 * Bayer-dither field that quickens on hover. Minimal center stack — badge,
 * wordmark, one CTA.
 */
export default function Hero() {
  const [hovered, setHovered] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="top" className="relative px-4 pt-4 md:px-6 md:pt-6">
      <div
        className="relative flex min-h-[600px] h-[calc(100svh-2rem)] flex-col items-center justify-center overflow-hidden rounded-[12px] border border-sase-deep/10 bg-sase-wash shadow-(--shadow-artifact)"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {!reducedMotion && (
          <div className="pointer-events-none absolute inset-0 z-0 opacity-60 mix-blend-multiply">
            <Dithering
              colorBack="#00000000"
              colorFront="#3d8bff"
              shape="warp"
              type="4x4"
              size={2.5}
              speed={hovered ? 0.6 : 0.2}
              minPixelRatio={1}
              className="h-full w-full"
            />
          </div>
        )}

        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-sase-deep/15 bg-paper/70 px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sase-green-bright opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sase-green" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sase-deep sm:text-[12px]">
              University of Wisconsin–Madison
            </span>
          </div>

          <h1 className="font-serif text-[clamp(5.5rem,22vw,16rem)] leading-none tracking-[-0.03em] text-sase-deep">
            SASE
          </h1>

          <a
            href="#join"
            onClick={(e) => scrollToAnchor("#join", e)}
            className="group mt-10 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-ink px-8 text-[16px] font-medium text-paper transition-all duration-300 ease-glide hover:scale-105 hover:bg-sase-deep hover:ring-4 hover:ring-sase-blue/20 active:scale-95"
          >
            Join the chapter
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
