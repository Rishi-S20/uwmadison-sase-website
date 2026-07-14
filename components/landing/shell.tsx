"use client";

import type { ReactNode } from "react";
import ClickSpark from "@/components/ClickSpark";
import { LiquidBlob } from "@/components/ui/liquid-blob";

/**
 * Page-level client shell. One continuous liquid-blob wash spans the whole
 * document — pools placed intentionally down the page, alternating edges —
 * so sections share a single flowing background instead of banded blocks.
 * SASE-blue click sparks are the only other page-wide flourish.
 */
export default function Shell({ children }: { children: ReactNode }) {
  return (
    <ClickSpark sparkColor="#0050bd" sparkRadius={20} sparkCount={8} duration={420}>
      <div className="relative min-h-screen overflow-x-clip bg-paper text-ink">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <LiquidBlob layout="page" interactive={false} blur={90} speed={34} opacity={0.5} />
        </div>
        <div className="relative">{children}</div>
      </div>
    </ClickSpark>
  );
}
