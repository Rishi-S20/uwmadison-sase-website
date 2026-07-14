"use client";

import Magnet from "@/components/Magnet";
import { cn } from "@/lib/utils";

type GhostPillProps = {
  href: string;
  surface?: "light" | "dark";
  children: React.ReactNode;
  className?: string;
};

export function GhostPill({
  href,
  surface = "light",
  children,
  className,
}: GhostPillProps) {
  return (
    <Magnet padding={60} magnetStrength={3} wrapperClassName="inline-block">
      <a
        href={href}
        className={cn(
          "cursor-target inline-block rounded-none border bg-transparent px-[33px] py-[11px] text-body-sm font-normal",
          "transition-[letter-spacing,border-color,color] duration-800 ease-glide hover:tracking-[0.08em]",
          surface === "light"
            ? "border-obsidian text-obsidian hover:border-sase-blue hover:text-sase-blue"
            : "border-white/30 text-paper hover:border-sase-green-bright hover:text-sase-green-bright",
          className
        )}
      >
        {children}
      </a>
    </Magnet>
  );
}
