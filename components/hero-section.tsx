"use client"

import { useState, Suspense, lazy, useSyncExternalStore } from "react"

import { CtaLink } from "@/components/ui/cta-link"

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
)

function subscribeToReducedMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)")
  query.addEventListener("change", callback)
  return () => query.removeEventListener("change", callback)
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function getReducedMotionServerSnapshot() {
  return false
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  )
}

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <section
      className="relative w-full min-h-dvh overflow-hidden bg-card flex flex-col items-center justify-center duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!prefersReducedMotion && (
        <Suspense fallback={<div className="absolute inset-0 bg-muted/20" />}>
          <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen">
            <Dithering
              colorBack="#00000000"
              colorFront="#2563EB"
              shape="warp"
              type="4x4"
              speed={isHovered ? 0.6 : 0.2}
              className="size-full"
              minPixelRatio={1}
            />
          </div>
        </Suspense>
      )}

      <div className="relative z-10 px-6 max-w-5xl mx-auto text-center flex flex-col items-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          Now Recruiting — Founding Chapter
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-medium tracking-tight text-foreground mb-8 leading-[1.05]">
          A home for Asian heritage <br />
          <span className="text-foreground/80">engineers & scientists.</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          SASE UW–Madison connects students through professional development,
          mentorship, and community. Join us as a founding member and help
          build this chapter from the ground up.
        </p>

        <CtaLink href="#get-involved">Join the Founding Chapter</CtaLink>
      </div>
    </section>
  )
}
