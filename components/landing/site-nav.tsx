"use client";

import type Lenis from "lenis";

const LINKS = [
  { id: "mission", label: "Mission" },
  { id: "pillars", label: "Pillars" },
  { id: "events", label: "Events" },
];

function scrollToSection(id: string) {
  const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
  if (lenis) {
    lenis.scrollTo(`#${id}`, { offset: -32 });
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
}

export default function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-paper/70 backdrop-blur-md">
      <nav className="container-editorial flex h-16 items-center justify-between">
        <button
          type="button"
          onClick={() => {
            const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
            if (lenis) lenis.scrollTo(0);
            else window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex cursor-pointer items-baseline gap-2"
          aria-label="Back to top"
        >
          <span className="text-[17px] font-medium tracking-tight text-ink">SASE</span>
          <span className="hidden text-[14px] text-slate sm:inline">UW–Madison</span>
        </button>

        <div className="flex items-center gap-2 md:gap-6">
          <ul className="hidden items-center gap-6 md:flex">
            {LINKS.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className="cursor-pointer text-[15px] text-ink/70 transition-colors duration-300 hover:text-ink"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => scrollToSection("join")}
            className="cursor-pointer rounded-full bg-ink px-5 py-2 text-[15px] text-paper transition-opacity duration-300 hover:opacity-85"
          >
            Join
          </button>
        </div>
      </nav>
    </header>
  );
}
