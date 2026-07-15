"use client";

// Vendored from 21st.dev (SmoothScrollHero / modern-hero), adapted for this
// site: the sticky center is a content slot instead of a background image
// (the clip-window reveal and zoom now act on the slotted content), parallax
// images come in via props, and the dark bottom fade is dropped so the
// page-wide wash flows through. Scrolling is the page's own (Lenis in Shell).

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

const SECTION_HEIGHT = 1500;

export interface ParallaxImageSpec {
  src: string;
  alt: string;
  className: string;
  start: number;
  end: number;
}

export default function SmoothScrollHero({
  centerContent,
  panelClassName,
  images,
}: {
  centerContent: ReactNode;
  panelClassName?: string;
  images: ParallaxImageSpec[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Progress of the pinned stretch itself (0 = hero at top, 1 = unpin) —
  // keyed to the container rather than absolute scrollY so the panel is
  // guaranteed to finish dissolving before it unpins.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterPanel progress={scrollYProgress} panelClassName={panelClassName}>
        {centerContent}
      </CenterPanel>
      <ParallaxImages images={images} />

      {/* Bottom blend — the reference's fade strip. It steps through the
          panel's own pale-lavender family on the way to paper so the violet
          dissolves tonally instead of graying out against the white */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-[50vh]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(227,237,252,0.6) 45%, var(--color-paper) 92%)",
        }}
      />
    </div>
  );
}

const CenterPanel = ({
  children,
  progress,
  panelClassName,
}: {
  children: ReactNode;
  progress: MotionValue<number>;
  panelClassName?: string;
}) => {
  // On phones the initial window opens wider and the zoom starts lower so
  // the slotted wordmark fits inside the clip from the first frame.
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setCompact(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const clip1 = useTransform(progress, [0, 0.7], [compact ? 15 : 25, 0]);
  const clip2 = useTransform(progress, [0, 0.7], [compact ? 85 : 75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  // The reference zooms its background image from 170% -> 100%; with slotted
  // content the equivalent is a scale on the inner wrapper. No opacity fade:
  // the panel stays solid and wipes off-screen when the pin ends.
  const scale = useTransform(progress, [0, 0.85], [compact ? 1.15 : 1.7, 1]);

  return (
    <motion.div
      className={`sticky top-0 h-screen w-full ${panelClassName ?? ""}`}
      style={{ clipPath }}
    >
      <motion.div
        style={{ scale }}
        className="flex h-full w-full flex-col items-center justify-center px-4 text-center"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const ParallaxImages = ({ images }: { images: ParallaxImageSpec[] }) => {
  return (
    <div className="relative z-10 mx-auto max-w-5xl px-4 pt-[200px]">
      {images.map((img) => (
        <ParallaxImg key={img.src} {...img} />
      ))}
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }: ParallaxImageSpec) => {
  const ref = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <motion.img
      src={src}
      alt={alt}
      className={`shadow-(--shadow-artifact) ${className}`}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};
