"use client";

import Magnet from "@/components/Magnet";
import MagnetLines from "@/components/MagnetLines";
import Footer from "@/components/landing/footer";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28">
      {/* Cursor-bending field lines answer the hero's dither — decorative
          only, so it sits behind the copy and skips small screens */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-4%] top-1/2 z-0 hidden -translate-y-1/2 md:block"
      >
        <MagnetLines
          rows={7}
          columns={7}
          containerSize="min(42vw, 540px)"
          lineColor="rgba(61, 139, 255, 0.35)"
          lineWidth="2px"
          lineHeight="4.5vmin"
          baseAngle={-10}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-paper via-transparent to-transparent" />
      </div>

      <div className="container-editorial relative z-10">
        <p className="text-[14px] text-ash">Get in touch</p>
        <h2 className="mt-4 font-serif text-[clamp(2.4rem,5vw,4.2rem)] leading-[1.28] tracking-[-0.015em] text-ink">
          Ready when <em className="italic">you are.</em>
        </h2>
        <p className="mt-5 max-w-md text-body-lg text-slate">
          One email starts it. Tell us who you&apos;re hoping to meet and
          we&apos;ll take it from there — packet, calendar, and a call with the
          board.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Magnet padding={60} magnetStrength={4}>
            <a
              href="mailto:sase@rso.wisc.edu?subject=Sponsorship%20inquiry"
              className="block rounded-full bg-ink px-6 py-3 text-[16px] text-paper transition-opacity duration-300 hover:opacity-85"
            >
              Email the corporate team
            </a>
          </Magnet>
          <Magnet padding={60} magnetStrength={4}>
            <a
              href="mailto:sase@rso.wisc.edu?subject=Sponsorship%20packet%20request"
              className="block rounded-full border border-ink px-6 py-3 text-[16px] text-ink transition-colors duration-300 hover:bg-mist"
            >
              Request the packet
            </a>
          </Magnet>
        </div>
      </div>

      <Footer />
    </section>
  );
}
