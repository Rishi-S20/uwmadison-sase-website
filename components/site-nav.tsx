"use client";

import GlassSurface from "@/components/GlassSurface";

const links = [
  { href: "#mission", label: "MISSION" },
  { href: "#pillars", label: "PILLARS" },
  { href: "#chapter", label: "CHAPTER" },
  { href: "#team", label: "TEAM" },
];

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <GlassSurface
        width="min(960px, 100%)"
        height={56}
        borderRadius={0}
        backgroundOpacity={0.08}
        blur={14}
        brightness={55}
        opacity={0.9}
        className="!justify-between"
      >
        <div className="flex w-full items-center justify-between gap-4 px-5">
          <a
            href="#top"
            className="cursor-target whitespace-nowrap text-body-sm font-normal text-paper"
          >
            SASE <span className="text-sase-blue-bright">·</span> UW–Madison
          </a>
          <nav className="hidden items-center gap-6 sm:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="cursor-target text-[11px] leading-[1.36] tracking-[0.12em] text-paper/80 transition-colors duration-400 hover:text-sase-blue-bright"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#join"
            className="cursor-target whitespace-nowrap rounded-none border border-white/30 px-4 py-1.5 text-[11px] tracking-[0.12em] text-paper transition-colors duration-400 hover:border-sase-green-bright hover:text-sase-green-bright"
          >
            JOIN
          </a>
        </div>
      </GlassSurface>
    </header>
  );
}
