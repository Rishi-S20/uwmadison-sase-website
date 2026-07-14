"use client";

import MagicBento from "@/components/MagicBento";
import ShinyText from "@/components/ShinyText";

export function Pillars() {
  return (
    <section id="pillars" className="py-[152px]">
      <div className="container-editorial">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <ShinyText
            text="FOUR PILLARS"
            speed={4}
            color="#3d8bff"
            shineColor="#4ade63"
            className="text-[11px] uppercase leading-[1.36] tracking-[0.2em]"
          />
          <h2 className="max-w-[18ch] text-right text-[clamp(28px,4vw,45px)] font-light leading-[1.15] text-paper">
            What we build, we build together.
          </h2>
        </div>
        <MagicBento
          enableStars
          enableSpotlight
          enableBorderGlow
          enableTilt
          clickEffect
          enableMagnetism
          spotlightRadius={340}
          particleCount={10}
          glowColor="0, 80, 189"
        />
      </div>
    </section>
  );
}
