import Events from "@/components/landing/events";
import Gallery from "@/components/landing/gallery";
import Hero from "@/components/landing/hero";
import Join from "@/components/landing/join";
import Mission from "@/components/landing/mission";
import Pillars from "@/components/landing/pillars";
import Seam from "@/components/landing/seam";
import Shell from "@/components/landing/shell";
import SiteNav from "@/components/landing/site-nav";

export default function Page() {
  return (
    <Shell>
      <SiteNav />
      <main>
        <Hero />
        <Gallery />
        <Mission />
        <Seam
          primary="Science · Engineering · Community · Culture ·"
          secondary="Society of Asian Scientists and Engineers ·"
        />
        <Pillars />
        <Events />
        <Join />
      </main>
    </Shell>
  );
}
