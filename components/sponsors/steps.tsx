"use client";

import AnimatedContent from "@/components/AnimatedContent";
import Stepper, { Step } from "@/components/Stepper";
import { scrollToAnchor } from "@/lib/scroll-to-anchor";

const STEPS = [
  {
    title: "Reach out",
    copy: "Email the corporate team. We reply within two days with our sponsorship packet and the semester calendar.",
  },
  {
    title: "Pick your tier",
    copy: "Choose a package above, or tell us your budget and recruiting goals and we'll shape one around them.",
  },
  {
    title: "Make it official",
    copy: "A one-page agreement and an invoice through our university RSO account. No procurement maze.",
  },
  {
    title: "Meet our members",
    copy: "Your logo goes up, your events land on the calendar, and you get a direct line to the chapter.",
  },
];

/**
 * How sponsorship works — a click-through stepper under the magazine-spread
 * outlined numerals: tap a numeral (or the ghost links) to slide between
 * steps; the last step's button hands off to the contact section.
 */
export default function Steps() {
  return (
    <section id="how" className="relative py-20 md:py-28">
      <div className="container-editorial">
        <p className="text-[14px] text-ash">How it works</p>
        <h2 className="mt-4 font-serif text-[clamp(2.2rem,4.6vw,4rem)] leading-[1.3] tracking-[-0.015em] text-ink">
          Four steps, <em className="italic">no maze.</em>
        </h2>

        <AnimatedContent distance={36} duration={1.1} ease="power3.out">
          <div className="mt-10 border-t border-border">
            <Stepper
              className="w-full"
              initialStep={1}
              stepCircleContainerClassName="max-w-3xl !mx-0"
              stepContainerClassName="!px-0 !pt-8 !pb-2"
              contentClassName="!px-0"
              footerClassName="!px-0 !pb-4"
              backButtonText="← Back"
              nextButtonText="Next step →"
              completeButtonText="Start the conversation →"
              onFinalStepCompleted={() => scrollToAnchor("#contact")}
              backButtonProps={{
                className:
                  "cursor-pointer text-[15px] text-slate transition-colors duration-300 hover:text-ink",
              }}
              nextButtonProps={{
                className:
                  "cursor-pointer bg-transparent p-0 text-[15px] font-normal text-ink transition-colors duration-300 hover:text-sase-blue",
              }}
              renderStepIndicator={({ step, currentStep, onStepClick }) => (
                <button
                  type="button"
                  aria-label={`Go to step ${step}`}
                  aria-current={step === currentStep ? "step" : undefined}
                  onClick={() => onStepClick(step)}
                  className="cursor-pointer"
                >
                  <span
                    className={`font-serif text-[clamp(2.6rem,5vw,4rem)] italic leading-none transition-colors duration-300 ${
                      step === currentStep
                        ? "text-sase-blue"
                        : step < currentStep
                          ? "text-ink/60"
                          : "text-outline hover:text-ink/40"
                    }`}
                  >
                    {String(step).padStart(2, "0")}
                  </span>
                </button>
              )}
            >
              {STEPS.map((step) => (
                <Step key={step.title}>
                  <h3 className="text-[19px] text-ink">{step.title}</h3>
                  <p className="mt-2 max-w-xl text-[16px] leading-[1.6] text-slate">
                    {step.copy}
                  </p>
                </Step>
              ))}
            </Stepper>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
