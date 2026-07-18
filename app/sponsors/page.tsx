import type { Metadata } from "next";
import Seam from "@/components/landing/seam";
import Shell from "@/components/landing/shell";
import SiteNav from "@/components/landing/site-nav";
import Contact from "@/components/sponsors/contact";
import SponsorsHero from "@/components/sponsors/hero";
import Partners from "@/components/sponsors/partners";
import Steps from "@/components/sponsors/steps";
import Tiers from "@/components/sponsors/tiers";
import Why from "@/components/sponsors/why";

export const metadata: Metadata = {
  title: "Sponsor SASE at UW–Madison",
  description:
    "Partner with the Society of Asian Scientists and Engineers at UW–Madison — sponsorship tiers, benefits, and how to get started.",
};

const NAV_ITEMS = [
  {
    label: "Why us",
    bgColor: "#e3edfc",
    textColor: "#123c7d",
    links: [
      { label: "Why sponsor", href: "#why", ariaLabel: "Why sponsor SASE" },
      { label: "Tiers", href: "#tiers", ariaLabel: "Sponsorship tiers" },
    ],
  },
  {
    label: "Process",
    bgColor: "#f2f2f3",
    textColor: "#17191c",
    links: [
      { label: "How it works", href: "#how", ariaLabel: "How sponsorship works" },
      { label: "Contact", href: "#contact", ariaLabel: "Contact the chapter" },
    ],
  },
  {
    label: "Chapter",
    bgColor: "#17191c",
    textColor: "#ffffff",
    links: [
      { label: "Home", href: "/", ariaLabel: "Back to the landing page" },
      { label: "Join the chapter", href: "/#join", ariaLabel: "Join SASE" },
    ],
  },
];

export default function Page() {
  return (
    <Shell loader={false} washTop="60vh">
      <SiteNav
        items={NAV_ITEMS}
        ctaLabel="Email us"
        ctaHref="mailto:sase@rso.wisc.edu?subject=Sponsorship%20inquiry"
      />
      <main>
        <SponsorsHero />
        <Why />
        <Seam
          primary="Bronze · Silver · Gold · Platinum ·"
          secondary="Partner with SASE at UW–Madison ·"
        />
        <Tiers />
        <Steps />
        <Partners />
        <Contact />
      </main>
    </Shell>
  );
}
