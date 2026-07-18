"use client";

import Link from "next/link";
import AnimatedContent from "@/components/AnimatedContent";

/**
 * Compact bridge to /sponsors — an editorial aside between Events and Join,
 * not a full pitch. The page itself carries the tiers and process.
 */
export default function SponsorsTeaser() {
  return (
    <section id="sponsors" className="relative py-16 md:py-24">
      <div className="container-editorial">
        <AnimatedContent distance={32} duration={1.1} ease="power3.out">
          <div className="grid items-end gap-8 border-t border-border pt-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="text-[14px] text-ash">Partners</p>
              <h2 className="mt-4 font-serif text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.3] tracking-[-0.015em] text-ink">
                Sponsor the <em className="italic">chapter.</em>
              </h2>
              <p className="mt-4 max-w-md text-body text-slate">
                Tiers from $250 to $2,500 put your company in the room — info
                sessions, résumé books, and a direct line to STEM talent.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 lg:items-end">
              <p className="text-[14px] text-ash">
                Bronze · Silver · Gold · Platinum
              </p>
              <Link
                href="/sponsors"
                className="group text-[17px] text-ink transition-colors duration-300 hover:text-sase-blue"
              >
                Explore sponsorship{" "}
                <span className="inline-block transition-transform duration-300 ease-glide group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
