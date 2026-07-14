"use client";

import CircularText from "@/components/CircularText";
import FaultyTerminal from "@/components/FaultyTerminal";
import GradualBlur from "@/components/GradualBlur";
import SplitText from "@/components/SplitText";
import { SplitFlapDisplay } from "@/components/ui/split-flap-display";

export function Hero() {
  return (
    <section id="top" className="relative h-svh w-full overflow-hidden bg-sase-navy">
      <div className="absolute inset-0">
        <FaultyTerminal
          tint="#1d6fff"
          scale={1.6}
          digitSize={1.4}
          timeScale={0.6}
          scanlineIntensity={0.5}
          glitchAmount={1}
          flickerAmount={0.7}
          noiseAmp={0.9}
          chromaticAberration={0}
          dither={0}
          curvature={0.12}
          mouseReact
          mouseStrength={0.6}
          brightness={0.7}
          pageLoadAnimation
          className="h-full w-full"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-10 px-6">
        <SplitText
          text="SASE"
          tag="h1"
          splitType="chars"
          delay={80}
          duration={1.25}
          ease="power3.out"
          from={{ opacity: 0, y: 80 }}
          to={{ opacity: 1, y: 0 }}
          textAlign="center"
          className="text-[clamp(96px,24vw,300px)] font-normal leading-[0.9] text-paper"
        />
        <div className="hidden md:block">
          <SplitFlapDisplay
            text="UW-MADISON - FOUNDING CHAPTER"
            columns={29}
            size="sm"
            accentColor="#4ade63"
            showIndicators={false}
            staggerDelay={45}
            flipSpeed={70}
          />
        </div>
        <div className="md:hidden">
          <SplitFlapDisplay
            text="UW-MADISON"
            columns={10}
            size="sm"
            accentColor="#4ade63"
            showIndicators={false}
            staggerDelay={45}
            flipSpeed={70}
          />
        </div>
      </div>

      <GradualBlur
        position="bottom"
        height="7rem"
        strength={2.5}
        divCount={6}
        curve="bezier"
        exponential
        opacity={1}
      />

      <div className="pointer-events-none absolute bottom-6 left-6 origin-bottom-left scale-[0.55]">
        <CircularText
          text="SCROLL DOWN · SCROLL DOWN · "
          spinDuration={24}
          onHover="slowDown"
          className="!font-normal text-paper [&_span]:!text-[13px] [&_span]:!font-normal"
        />
      </div>
    </section>
  );
}
