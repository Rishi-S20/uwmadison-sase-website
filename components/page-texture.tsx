"use client";

import DotGrid from "@/components/DotGrid";

export function PageTexture() {
  return (
    <div className="fixed inset-0 z-0 opacity-40">
      <DotGrid
        dotSize={2}
        gap={26}
        baseColor="#0a1c3f"
        activeColor="#0050bd"
        proximity={130}
        shockRadius={220}
        shockStrength={4}
        className="!p-0"
      />
    </div>
  );
}
