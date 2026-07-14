"use client";

import AnimatedContent from "@/components/AnimatedContent";
import Magnet from "@/components/Magnet";
import { BorderBeam } from "@/components/ui/border-beam";

export default function Join() {
  return (
    <section id="join" className="relative py-20 md:py-32">
      <div className="container-editorial">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-[14px] text-ash">Get involved</p>
            <h2 className="mt-4 font-serif text-[clamp(2.4rem,5vw,4.2rem)] leading-[1.28] tracking-[-0.015em] text-ink">
              Become a <em className="italic">member.</em>
            </h2>
            <p className="mt-5 max-w-md text-body-lg text-slate">
              Every major, every year, everyone welcome. Come to a general
              meeting or reach out — that&apos;s the whole process.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Magnet padding={60} magnetStrength={4}>
                <a
                  href="mailto:sase@rso.wisc.edu"
                  className="block rounded-full bg-ink px-6 py-3 text-[16px] text-paper transition-opacity duration-300 hover:opacity-85"
                >
                  Email the chapter
                </a>
              </Magnet>
              <Magnet padding={60} magnetStrength={4}>
                <a
                  href="https://instagram.com/sase.uwmadison"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-full border border-ink px-6 py-3 text-[16px] text-ink transition-colors duration-300 hover:bg-mist"
                >
                  Instagram
                </a>
              </Magnet>
            </div>
          </div>

          {/* The page's single accent surface — SASE blue wash, deep blue ink */}
          <AnimatedContent distance={36} duration={1.2} ease="power3.out">
            <div className="relative rounded-[24px] bg-sase-wash p-8 md:p-10">
              <BorderBeam
                size={90}
                duration={9}
                borderWidth={1.5}
                colorFrom="#3d8bff"
                colorTo="#f3c3dc"
              />
              <p className="text-[14px] text-sase-deep/70">Our mission</p>
              <p className="mt-4 font-serif text-[clamp(1.4rem,2.4vw,1.9rem)] leading-[1.4] text-sase-deep">
                To prepare scientists and engineers of Asian heritage for
                success in the global professional world — and to make campus
                feel like home while we&apos;re at it.
              </p>
              <p className="mt-6 text-[14px] text-sase-deep">
                SASE — Society of Asian Scientists and Engineers
              </p>
            </div>
          </AnimatedContent>
        </div>
      </div>

      <footer className="container-editorial relative mt-24 border-t border-border pt-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-[14px] text-slate">SASE at UW–Madison</p>
          <a
            href="mailto:sase@rso.wisc.edu"
            className="text-[14px] text-slate transition-colors duration-300 hover:text-ink"
          >
            sase@rso.wisc.edu
          </a>
          <p className="text-[14px] text-slate">
            © {new Date().getFullYear()} — Madison, Wisconsin
          </p>
        </div>
      </footer>
    </section>
  );
}
