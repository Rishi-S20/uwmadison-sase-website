import { Chapter } from "@/components/chapter";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { InteractiveShell } from "@/components/interactive-shell";
import { Manifesto } from "@/components/manifesto";
import { Marquee } from "@/components/marquee";
import { Moments } from "@/components/moments";
import { PageTexture } from "@/components/page-texture";
import { Pillars } from "@/components/pillars";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { Team } from "@/components/team";

export default function Home() {
  return (
    <InteractiveShell>
      <PageTexture />
      <SiteNav />
      <main className="relative z-10">
        <Hero />
        <Manifesto />
        <Marquee />
        <Pillars />
        <Moments />
        <Chapter />
        <Gallery />
        <Team />
      </main>
      <div className="relative z-10">
        <SiteFooter />
      </div>
    </InteractiveShell>
  );
}
