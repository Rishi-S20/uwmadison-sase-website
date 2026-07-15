"use client";

// Vendored from 21st.dev (scroll-morph-hero), adapted for this site:
// transparent background (page-wide wash shows through), image/label props,
// slot content for the circle center and arc phases, and a one-way handoff —
// onComplete fires once the virtual scroll is exhausted so the page can
// release into normal scrolling.

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export type AnimationPhase = "scatter" | "line" | "circle";

const IMG_WIDTH = 60;
const IMG_HEIGHT = 85;
const MORPH_END = 600; // virtual px: circle -> arc morph
const MAX_SCROLL = 1600; // virtual px: total hijacked range

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

interface CardTarget {
  x: number;
  y: number;
  rotation: number;
  scale: number;
  opacity: number;
}

function FlipCard({
  src,
  label,
  target,
}: {
  src: string;
  label: string;
  target: CardTarget;
}) {
  return (
    <motion.div
      animate={{
        x: target.x,
        y: target.y,
        rotate: target.rotation,
        scale: target.scale,
        opacity: target.opacity,
      }}
      transition={{ type: "spring", stiffness: 40, damping: 15 }}
      style={{
        position: "absolute",
        width: IMG_WIDTH,
        height: IMG_HEIGHT,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="group cursor-pointer"
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ rotateY: 180 }}
      >
        {/* Front face */}
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-[8px] bg-mist shadow-(--shadow-artifact)"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={label} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-ink/10 transition-colors group-hover:bg-transparent" />
        </div>

        {/* Back face */}
        <div
          className="absolute inset-0 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[8px] border border-sase-deep/10 bg-sase-wash p-2 shadow-(--shadow-artifact)"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="text-center">
            <p className="mb-1 text-[8px] font-bold uppercase tracking-widest text-sase-blue">
              SASE
            </p>
            <p className="text-xs font-medium text-sase-deep">{label}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface ScrollMorphHeroProps {
  images: string[];
  /** Cycled across the card back faces */
  labels?: string[];
  /** Shown at the circle's center; fades out as the morph begins */
  centerContent?: ReactNode;
  /** Fades in above the arc once the morph completes */
  arcContent?: ReactNode;
  /** Fired exactly once, when the virtual scroll range is exhausted */
  onComplete?: () => void;
}

export default function ScrollMorphHero({
  images,
  labels = [],
  centerContent,
  arcContent,
  onComplete,
}: ScrollMorphHeroProps) {
  const total = images.length;
  const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [completed, setCompleted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const phaseRef = useRef<AnimationPhase>("scatter");
  const completedRef = useRef(false);

  // --- Container size ---
  useEffect(() => {
    if (!containerRef.current) return;

    const handleResize = (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        setContainerSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    };

    const observer = new ResizeObserver(handleResize);
    observer.observe(containerRef.current);
    setContainerSize({
      width: containerRef.current.offsetWidth,
      height: containerRef.current.offsetHeight,
    });

    return () => observer.disconnect();
  }, []);

  // --- Virtual scroll (hijacked until MAX_SCROLL, then released for good) ---
  const virtualScroll = useMotionValue(0);
  const scrollRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || completed) return;

    const advance = (delta: number) => {
      const next = Math.min(Math.max(scrollRef.current + delta, 0), MAX_SCROLL);
      scrollRef.current = next;
      virtualScroll.set(next);
      if (next >= MAX_SCROLL && !completedRef.current) {
        completedRef.current = true;
        setCompleted(true);
        onComplete?.();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (phaseRef.current !== "circle") return;
      advance(e.deltaY);
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      touchStartY = touchY;
      if (phaseRef.current !== "circle") return;
      advance(deltaY);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: false });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, [completed, onComplete, virtualScroll]);

  // Morph progress: 0 (circle) -> 1 (bottom arc)
  const morphProgress = useTransform(virtualScroll, [0, MORPH_END], [0, 1]);
  const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });

  // Arc shuffle rotation after the morph
  const scrollRotate = useTransform(virtualScroll, [MORPH_END, MAX_SCROLL], [0, 360]);
  const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 });

  // --- Mouse parallax ---
  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normalizedX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseX.set(normalizedX * 100);
    };
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX]);

  // --- Intro sequence ---
  useEffect(() => {
    const timer1 = setTimeout(() => {
      phaseRef.current = "line";
      setIntroPhase("line");
    }, 500);
    const timer2 = setTimeout(() => {
      phaseRef.current = "circle";
      setIntroPhase("circle");
    }, 2500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // --- Random scatter positions ---
  const scatterPositions = useMemo(() => {
    return images.map(() => ({
      x: (Math.random() - 0.5) * 1500,
      y: (Math.random() - 0.5) * 1000,
      rotation: (Math.random() - 0.5) * 180,
      scale: 0.6,
      opacity: 0,
    }));
  }, [images]);

  // --- Render loop (manual values for the morph math) ---
  const [morphValue, setMorphValue] = useState(0);
  const [rotateValue, setRotateValue] = useState(0);
  const [parallaxValue, setParallaxValue] = useState(0);

  useEffect(() => {
    const unsubscribeMorph = smoothMorph.on("change", setMorphValue);
    const unsubscribeRotate = smoothScrollRotate.on("change", setRotateValue);
    const unsubscribeParallax = smoothMouseX.on("change", setParallaxValue);
    return () => {
      unsubscribeMorph();
      unsubscribeRotate();
      unsubscribeParallax();
    };
  }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

  // Arc content fades in as the arch forms
  const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
  const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center">
        {/* Circle-center content (fades out as the morph begins) */}
        <div className="pointer-events-none absolute top-1/2 z-0 flex -translate-y-1/2 flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={
              introPhase === "circle" && morphValue < 0.5
                ? { opacity: 1 - morphValue * 2, y: 0, filter: "blur(0px)" }
                : { opacity: 0, filter: "blur(10px)" }
            }
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            {centerContent}
          </motion.div>
        </div>

        {/* Arc-phase content (fades in above the arch) */}
        <motion.div
          style={{
            opacity: contentOpacity,
            y: contentY,
            pointerEvents: morphValue > 0.85 ? "auto" : "none",
          }}
          className="absolute inset-x-0 top-[8%] z-10 flex flex-col items-center justify-center px-4 text-center"
        >
          {arcContent}
        </motion.div>

        {/* Cards */}
        <div className="relative flex h-full w-full items-center justify-center">
          {images.map((src, i) => {
            let target: CardTarget = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

            if (introPhase === "scatter") {
              target = scatterPositions[i];
            } else if (introPhase === "line") {
              const lineSpacing = 70;
              const lineTotalWidth = total * lineSpacing;
              const lineX = i * lineSpacing - lineTotalWidth / 2;
              target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
            } else {
              const isMobile = containerSize.width < 768;
              const minDimension = Math.min(containerSize.width, containerSize.height);

              // A. Circle position
              const circleRadius = Math.min(minDimension * 0.35, 350);
              const circleAngle = (i / total) * 360;
              const circleRad = (circleAngle * Math.PI) / 180;
              const circlePos = {
                x: Math.cos(circleRad) * circleRadius,
                y: Math.sin(circleRad) * circleRadius,
                rotation: circleAngle + 90,
              };

              // B. Bottom "rainbow" arc position
              const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
              const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);
              const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25);
              const arcCenterY = arcApexY + arcRadius;
              const spreadAngle = isMobile ? 100 : 130;
              const startAngle = -90 - spreadAngle / 2;
              const step = spreadAngle / (total - 1);

              // Bounded shuffle: keep the last card in view
              const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
              const maxRotation = spreadAngle * 0.8;
              const boundedRotation = -scrollProgress * maxRotation;

              const currentArcAngle = startAngle + i * step + boundedRotation;
              const arcRad = (currentArcAngle * Math.PI) / 180;
              const arcPos = {
                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                rotation: currentArcAngle + 90,
                scale: isMobile ? 1.4 : 1.8,
              };

              // C. Interpolate circle -> arc
              target = {
                x: lerp(circlePos.x, arcPos.x, morphValue),
                y: lerp(circlePos.y, arcPos.y, morphValue),
                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                scale: lerp(1, arcPos.scale, morphValue),
                opacity: 1,
              };
            }

            return (
              <FlipCard
                key={i}
                src={src}
                label={labels.length ? labels[i % labels.length] : "SASE"}
                target={target}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
