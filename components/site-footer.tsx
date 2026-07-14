"use client";

import Orb from "@/components/Orb";
import { GhostPill } from "@/components/ui/ghost-pill";

export function SiteFooter() {
  return (
    <footer id="join" className="pb-16">
      <div className="relative h-[480px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Orb hue={230} hoverIntensity={0.5} rotateOnHover />
        </div>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-8 px-6 text-center">
          <h2 className="max-w-[16ch] text-[clamp(30px,5vw,54px)] font-normal leading-[1.2] text-paper">
            Be first. Join the founding chapter.
          </h2>
          <div className="pointer-events-auto">
            <GhostPill href="mailto:sase@rso.wisc.edu" surface="dark">
              Join the chapter
            </GhostPill>
          </div>
        </div>
      </div>

      <div className="container-editorial">
        <div className="mt-24 grid gap-10 border-t border-white/10 pt-12 sm:grid-cols-3">
          <div className="text-[11px] leading-[1.36] text-felt-gray">
            <p className="text-paper">SASE at UW–Madison</p>
            <p className="mt-2">Founding chapter</p>
            <p className="mt-2">Madison, Wisconsin</p>
          </div>
          <div className="text-[11px] leading-[1.36] text-felt-gray">
            <p className="text-paper">Contact</p>
            <p className="mt-2">
              <a
                href="mailto:sase@rso.wisc.edu"
                className="cursor-target transition-colors duration-400 hover:text-sase-blue-bright"
              >
                sase@rso.wisc.edu
              </a>
            </p>
          </div>
          <div className="text-[11px] leading-[1.36] text-felt-gray">
            <p className="text-paper">Elsewhere</p>
            <p className="mt-2">
              <a
                href="https://www.instagram.com/sase.uwmadison"
                className="cursor-target transition-colors duration-400 hover:text-sase-blue-bright"
              >
                Instagram
              </a>
            </p>
            <p className="mt-2">
              <a
                href="https://www.saseconnect.org"
                className="cursor-target transition-colors duration-400 hover:text-sase-blue-bright"
              >
                SASE National
              </a>
            </p>
          </div>
        </div>

        <p className="mt-16 text-[9px] leading-[1.32] text-ash-mist">
          © 2026 Society of Asian Scientists and Engineers, UW–Madison chapter.
        </p>
      </div>
    </footer>
  );
}
