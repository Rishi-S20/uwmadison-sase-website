"use client"

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type MotionValue,
} from "framer-motion"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface LiquidBlobProps {
  className?: string
  color?: string
  secondaryColor?: string
  blur?: number
  speed?: number
  opacity?: number
  interactive?: boolean
  /**
   * "section": four pools filling one section (default).
   * "page": one continuous wash for the whole document — pools placed
   * deliberately down the page, alternating edges, each with its own
   * color pair so the palette progresses top to bottom.
   */
  layout?: "section" | "page"
}

/*
 * Performance notes (tuned from the registry original):
 * - Blobs animate transform only (translate/scale/rotate). The original
 *   morphed border-radius, which re-rasterizes the huge blurred layer every
 *   frame; with a static shape the blur is rendered once and composited.
 * - Blobs are sized as percentages of the container so the wash fills the
 *   whole section at any viewport size.
 * - Animation pauses when the container is off-screen and honors
 *   prefers-reduced-motion.
 */

interface BlobSpec {
  width: string
  position: React.CSSProperties
  radius: string
  drift: {
    x: number[]
    y: number[]
    scale: number[]
    rotate: number[]
  }
  swap: boolean
  fade: boolean
  damping: number
  durFactor: number
  /** Per-blob color pair override (used by the page layout) */
  colors?: [string, string]
}

const BLOBS: BlobSpec[] = [
  {
    width: "58%",
    position: { left: "-12%", top: "-18%" },
    radius: "60% 40% 30% 70% / 60% 30% 70% 40%",
    drift: { x: [0, 34, -22, 0], y: [0, 26, -14, 0], scale: [1, 1.09, 0.95, 1], rotate: [0, 6, -4, 0] },
    swap: false,
    fade: false,
    damping: 25,
    durFactor: 1,
  },
  {
    width: "48%",
    position: { right: "-10%", top: "2%" },
    radius: "30% 60% 70% 40% / 50% 60% 30% 60%",
    drift: { x: [0, -28, 20, 0], y: [0, 22, -18, 0], scale: [1, 0.94, 1.08, 1], rotate: [0, -5, 4, 0] },
    swap: true,
    fade: false,
    damping: 30,
    durFactor: 1.18,
  },
  {
    width: "54%",
    position: { left: "12%", bottom: "-24%" },
    radius: "40% 60% 60% 40% / 70% 30% 50% 60%",
    drift: { x: [0, 26, -30, 0], y: [0, -20, 14, 0], scale: [1, 1.07, 0.96, 1], rotate: [0, 4, -6, 0] },
    swap: true,
    fade: false,
    damping: 35,
    durFactor: 0.88,
  },
  {
    width: "40%",
    position: { right: "6%", bottom: "0%" },
    radius: "60% 40% 30% 70% / 60% 30% 70% 40%",
    drift: { x: [0, -22, 16, 0], y: [0, 18, -22, 0], scale: [1, 0.95, 1.1, 1], rotate: [0, -4, 5, 0] },
    swap: false,
    fade: true,
    damping: 20,
    durFactor: 1.32,
  },
]

/*
 * Page-wide wash: percentages are of the whole document, so pools land at
 * intentional stops — hero (lavender/pink), gallery-mission (periwinkle),
 * pillars (lilac), events (blue), join (pink warming toward the close).
 * Positions hug alternating edges like the Steep reference.
 */
const PAGE_BLOBS: BlobSpec[] = [
  {
    width: "44%",
    position: { left: "-14%", top: "-2%" },
    radius: "60% 40% 30% 70% / 60% 30% 70% 40%",
    drift: { x: [0, 34, -22, 0], y: [0, 26, -14, 0], scale: [1, 1.08, 0.95, 1], rotate: [0, 6, -4, 0] },
    swap: false,
    fade: false,
    damping: 25,
    durFactor: 1,
    colors: ["#c9b8f5", "#f3c3dc"],
  },
  {
    width: "38%",
    position: { right: "-12%", top: "4%" },
    radius: "30% 60% 70% 40% / 50% 60% 30% 60%",
    drift: { x: [0, -28, 20, 0], y: [0, 22, -18, 0], scale: [1, 0.94, 1.08, 1], rotate: [0, -5, 4, 0] },
    swap: false,
    fade: false,
    damping: 30,
    durFactor: 1.18,
    colors: ["#f3c3dc", "#c9b8f5"],
  },
  {
    width: "40%",
    position: { right: "-10%", top: "18%" },
    radius: "40% 60% 60% 40% / 70% 30% 50% 60%",
    drift: { x: [0, 26, -30, 0], y: [0, -20, 14, 0], scale: [1, 1.07, 0.96, 1], rotate: [0, 4, -6, 0] },
    swap: false,
    fade: false,
    damping: 35,
    durFactor: 0.88,
    colors: ["#c3d3f7", "#e7c9ee"],
  },
  {
    width: "42%",
    position: { left: "-12%", top: "34%" },
    radius: "60% 40% 30% 70% / 60% 30% 70% 40%",
    drift: { x: [0, -22, 16, 0], y: [0, 18, -22, 0], scale: [1, 0.95, 1.1, 1], rotate: [0, -4, 5, 0] },
    swap: false,
    fade: false,
    damping: 20,
    durFactor: 1.32,
    colors: ["#c3cdf5", "#dcc9f0"],
  },
  {
    width: "38%",
    position: { right: "-12%", top: "52%" },
    radius: "30% 60% 70% 40% / 50% 60% 30% 60%",
    drift: { x: [0, 24, -18, 0], y: [0, -16, 20, 0], scale: [1, 1.06, 0.96, 1], rotate: [0, 5, -3, 0] },
    swap: false,
    fade: false,
    damping: 28,
    durFactor: 1.1,
    colors: ["#d5c9f2", "#f0cde0"],
  },
  {
    width: "40%",
    position: { left: "-12%", top: "68%" },
    radius: "40% 60% 60% 40% / 70% 30% 50% 60%",
    drift: { x: [0, -26, 18, 0], y: [0, 20, -14, 0], scale: [1, 0.95, 1.07, 1], rotate: [0, -6, 4, 0] },
    swap: false,
    fade: false,
    damping: 32,
    durFactor: 0.95,
    colors: ["#c9b8f5", "#c3d3f7"],
  },
  {
    width: "42%",
    position: { right: "-14%", top: "84%" },
    radius: "60% 40% 30% 70% / 60% 30% 70% 40%",
    drift: { x: [0, 22, -16, 0], y: [0, -18, 12, 0], scale: [1, 1.08, 0.95, 1], rotate: [0, 4, -5, 0] },
    swap: false,
    fade: false,
    damping: 24,
    durFactor: 1.22,
    colors: ["#f3c3dc", "#e7c9ee"],
  },
]

function Blob({
  spec,
  color,
  secondaryColor,
  blur,
  speed,
  opacity,
  active,
  mouseX,
  mouseY,
}: {
  spec: BlobSpec
  color: string
  secondaryColor: string
  blur: number
  speed: number
  opacity: number
  active: boolean
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}) {
  const springConfig = { damping: spec.damping, stiffness: 120 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const base = spec.colors?.[0] ?? color
  const pair = spec.colors?.[1] ?? secondaryColor
  const from = spec.swap ? pair : base
  const to = spec.fade ? "transparent" : spec.swap ? base : pair

  return (
    <motion.div
      className="absolute"
      style={{ width: spec.width, aspectRatio: "1", ...spec.position, x, y }}
    >
      <motion.div
        className="h-full w-full"
        style={{
          background: `radial-gradient(circle, ${from} 0%, ${to} 100%)`,
          filter: `blur(${blur}px)`,
          borderRadius: spec.radius,
          opacity,
          willChange: "transform",
        }}
        animate={active ? spec.drift : { x: 0, y: 0, scale: 1, rotate: 0 }}
        transition={
          active
            ? {
                duration: speed * spec.durFactor,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : { duration: 0.8 }
        }
      />
    </motion.div>
  )
}

export function LiquidBlob({
  className,
  color = "#8b5cf6",
  secondaryColor = "#ec4899",
  blur = 90,
  speed = 30,
  opacity = 0.7,
  interactive = true,
  layout = "section",
}: LiquidBlobProps) {
  const specs = layout === "page" ? PAGE_BLOBS : BLOBS
  const containerRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const inView = useInView(containerRef, { margin: "15% 0px 15% 0px" })
  const active = inView && !reducedMotion

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    if (!interactive) return

    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      mouseX.set(x * 0.12)
      mouseY.set(y * 0.12)
    }

    const handleMouseLeave = () => {
      mouseX.set(0)
      mouseY.set(0)
    }

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [interactive, mouseX, mouseY])

  return (
    <div
      ref={containerRef}
      className={cn("pointer-events-auto absolute inset-0 overflow-hidden", className)}
    >
      {specs.map((spec, i) => (
        <Blob
          key={i}
          spec={spec}
          color={color}
          secondaryColor={secondaryColor}
          blur={blur}
          speed={speed}
          opacity={opacity}
          active={active}
          mouseX={mouseX}
          mouseY={mouseY}
        />
      ))}
    </div>
  )
}
