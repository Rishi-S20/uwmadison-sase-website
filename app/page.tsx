import { FeaturesBentoSection } from "@/components/features-bento-section";
import { FoundingTeamSection } from "@/components/founding-team-section";
import { HeroSection } from "@/components/hero-section";
import { MissionSection } from "@/components/mission-section";
import { PillarsSection } from "@/components/pillars-section";
import { SiteFooter } from "@/components/site-footer";
import { CtaLink } from "@/components/ui/cta-link";

const navLinks = [
  { href: "#mission", label: "Mission" },
  { href: "#offer", label: "What We Offer" },
  { href: "#get-involved", label: "Get Involved" },
];

export default function Home() {
  return (
    <>
      <header className="w-full px-4 md:px-6 py-6">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between">
          <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
            SASE <span className="text-muted-foreground">· UW–Madison</span>
          </span>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <CtaLink href="#get-involved" size="sm">
            Join
          </CtaLink>
        </div>
      </header>
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <MissionSection />
        <PillarsSection />
        <FeaturesBentoSection />
        <FoundingTeamSection />
      </main>
      <SiteFooter />
    </>
  );
}
