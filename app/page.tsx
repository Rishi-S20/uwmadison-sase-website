import Events from "@/components/landing/events";
import Gallery from "@/components/landing/gallery";
import Hero from "@/components/landing/hero";
import Join from "@/components/landing/join";
import Mission from "@/components/landing/mission";
import Pillars from "@/components/landing/pillars";
import Seam from "@/components/landing/seam";
import Shell from "@/components/landing/shell";
import SiteNav from "@/components/landing/site-nav";
import SponsorsTeaser from "@/components/landing/sponsors-teaser";

export default function Page() {
  return (
    <Shell>
      <SiteNav />
      <main>
        <Hero />
        <Mission />
        <Gallery />
        <Seam
          primary="Science · Engineering · Community · Culture ·"
          secondary="Society of Asian Scientists and Engineers ·"
        />
        <Pillars />
        <Events />
        <SponsorsTeaser />
        <Join />
      </main>
    </Shell>
  );
}
