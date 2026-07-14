"use client";

import ClickSpark from "@/components/ClickSpark";
import TargetCursor from "@/components/TargetCursor";

export function InteractiveShell({ children }: { children: React.ReactNode }) {
  return (
    <ClickSpark
      sparkColor="#3d8bff"
      sparkSize={11}
      sparkRadius={22}
      sparkCount={8}
      duration={450}
      easing="ease-out"
    >
      <TargetCursor
        targetSelector=".cursor-target"
        spinDuration={3}
        hideDefaultCursor={false}
        cursorColor="#0050bd"
        cursorColorOnTarget="#299d2d"
      />
      {children}
    </ClickSpark>
  );
}
