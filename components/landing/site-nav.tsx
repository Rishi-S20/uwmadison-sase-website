"use client";

import { useEffect, useState } from "react";
import PillNav from "@/components/PillNav";
import type Lenis from "lenis";

const ITEMS = [
  { label: "Home", href: "#top" },
  { label: "Mission", href: "#mission" },
  { label: "Pillars", href: "#pillars" },
  { label: "Events", href: "#events" },
  { label: "Join", href: "#join" },
];

export default function SiteNav() {
  // The nav stays out of the way for the whole hero sequence (panel reveal +
  // parallax photos) and slides in as the mission section arrives.
  const [heroInView, setHeroInView] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) =>
      setHeroInView(entry.isIntersecting),
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const handleItemClick = (
    href: string,
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
    if (href === "#top") {
      if (lenis) lenis.scrollTo(0);
      else window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (lenis) lenis.scrollTo(href, { offset: -32 });
    else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-3 z-50 flex justify-center px-4 transition-all duration-500 ease-glide ${
        heroInView
          ? "pointer-events-none -translate-y-8 opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <PillNav
        logoNode={
          <span className="font-serif text-[17px] leading-none text-paper">
            S
          </span>
        }
        items={ITEMS}
        baseColor="#17191c"
        pillColor="#ffffff"
        pillTextColor="#17191c"
        hoveredPillTextColor="#ffffff"
        onItemClick={handleItemClick}
        initialLoadAnimation={false}
      />
    </header>
  );
}
