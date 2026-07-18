"use client";

import CardNav, { type CardNavItem } from "@/components/CardNav";
import { scrollToAnchor, scrollToTop } from "@/lib/scroll-to-anchor";

/* Default (landing page) card grouping — CardNav renders up to three cards. */
const ITEMS: CardNavItem[] = [
  {
    label: "Chapter",
    bgColor: "#f2f2f3",
    textColor: "#17191c",
    links: [
      { label: "Mission", href: "#mission", ariaLabel: "Go to mission" },
      { label: "Pillars", href: "#pillars", ariaLabel: "Go to pillars" },
    ],
  },
  {
    label: "Happenings",
    bgColor: "#e3edfc",
    textColor: "#123c7d",
    links: [
      { label: "Events", href: "#events", ariaLabel: "Go to events" },
      { label: "Join", href: "#join", ariaLabel: "Go to join" },
    ],
  },
  {
    label: "Sponsors",
    bgColor: "#17191c",
    textColor: "#ffffff",
    links: [
      { label: "Why sponsor", href: "/sponsors", ariaLabel: "Sponsorship page" },
      { label: "Tiers", href: "/sponsors#tiers", ariaLabel: "Sponsorship tiers" },
      { label: "Contact", href: "/sponsors#contact", ariaLabel: "Sponsorship contact" },
    ],
  },
];

export default function SiteNav({
  items = ITEMS,
  ctaLabel = "Join",
  ctaHref = "#join",
}: {
  items?: CardNavItem[];
  ctaLabel?: string;
  ctaHref?: string;
}) {
  // In-page anchors ride the shared Lenis instance and clear the fixed bar;
  // route + mailto hrefs fall through to normal navigation.
  const handleLinkClick = (
    href: string,
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    if (!href.startsWith("#")) return;
    scrollToAnchor(href, e, -96);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <CardNav
        logoNode={
          <span className="font-serif text-[19px] leading-none text-paper">
            S
          </span>
        }
        onLogoClick={scrollToTop}
        items={items}
        baseColor="#17191c"
        menuColor="#ffffff"
        ctaLabel={ctaLabel}
        ctaHref={ctaHref}
        buttonBgColor="#0050bd"
        buttonTextColor="#ffffff"
        onLinkClick={handleLinkClick}
      />
    </header>
  );
}
