"use client"

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react"

import { cn } from "@/lib/utils"

type GlowColor = "navy" | "blue" | "green" | "red"
type GlowSize = "sm" | "md" | "lg"

interface GlowCardProps {
  children: ReactNode
  className?: string
  glowColor?: GlowColor
  size?: GlowSize
  width?: string | number
  height?: string | number
  /** When true, ignores `size` and sizes via `className`/`width`/`height` instead. */
  customSize?: boolean
  /** Corner radius in px. Defaults to 14 to match the original spotlight-card design. */
  radius?: number
}

// Hue/saturation/lightness derived from the site's brand tokens (app/globals.css).
// `spread` is kept small on purpose: the original demo used a spread of
// 200-300deg, which sweeps the glow through the entire hue wheel (the
// "rainbow" effect) as the cursor crosses the viewport. Here it just nudges
// the hue a few degrees so the glow reads as *the* brand color, not a
// gradient through unrelated ones.
const glowColorMap: Record<
  GlowColor,
  { base: number; spread: number; saturation: number; lightness: number }
> = {
  navy: { base: 214, spread: 10, saturation: 52, lightness: 28 }, // --primary #1E3A5F
  blue: { base: 221, spread: 12, saturation: 83, lightness: 55 }, // --secondary #2563EB
  green: { base: 142, spread: 12, saturation: 76, lightness: 38 }, // --accent #16A34A
  red: { base: 358, spread: 8, saturation: 90, lightness: 42 }, // --uw-accent #C5050C, use sparingly
}

const sizeMap: Record<GlowSize, string> = {
  sm: "w-48 h-64",
  md: "w-64 h-80",
  lg: "w-80 h-96",
}

type GlowStyle = CSSProperties & Record<`--${string}`, string | number>

export function GlowCard({
  children,
  className = "",
  glowColor = "navy",
  size = "md",
  width,
  height,
  customSize = false,
  radius = 14,
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const syncPointer = (event: PointerEvent) => {
      const card = cardRef.current
      if (!card) return
      const { clientX: x, clientY: y } = event
      card.style.setProperty("--x", x.toFixed(2))
      card.style.setProperty("--xp", (x / window.innerWidth).toFixed(2))
      card.style.setProperty("--y", y.toFixed(2))
      card.style.setProperty("--yp", (y / window.innerHeight).toFixed(2))
    }

    document.addEventListener("pointermove", syncPointer)
    return () => document.removeEventListener("pointermove", syncPointer)
  }, [])

  const { base, spread, saturation, lightness } = glowColorMap[glowColor]

  const style: GlowStyle = {
    "--base": base,
    "--spread": spread,
    "--saturation": saturation,
    "--lightness": lightness,
    "--radius": radius,
    "--border": "3",
    "--backdrop": "hsl(0 0% 60% / 0.12)",
    "--backup-border": "var(--backdrop)",
    "--size": "200",
    "--outer": "1",
    "--border-size": "calc(var(--border, 2) * 1px)",
    "--spotlight-size": "calc(var(--size, 150) * 1px)",
    "--hue": "calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))",
    backgroundImage: `radial-gradient(
      var(--spotlight-size) var(--spotlight-size) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-spot-opacity, 0.1)), transparent
    )`,
    backgroundColor: "var(--backdrop, transparent)",
    backgroundSize:
      "calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))",
    backgroundPosition: "50% 50%",
    backgroundAttachment: "fixed",
    border: "var(--border-size) solid var(--backup-border)",
    borderRadius: "calc(var(--radius) * 1px)",
    position: "relative",
    touchAction: "none",
    ...(width !== undefined && {
      width: typeof width === "number" ? `${width}px` : width,
    }),
    ...(height !== undefined && {
      height: typeof height === "number" ? `${height}px` : height,
    }),
  }

  return (
    <div
      ref={cardRef}
      data-glow
      style={style}
      className={cn(
        !customSize && sizeMap[size],
        !customSize && "aspect-[3/4]",
        "relative grid grid-rows-[1fr_auto] shadow-[0_1rem_2rem_-1rem_black] p-4 gap-4 backdrop-blur-[5px]",
        className
      )}
    >
      <div data-glow />
      {children}
    </div>
  )
}
