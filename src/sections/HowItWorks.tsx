import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { animateHowItWorks } from "../animations/scrollAnimations";

const steps = [
  {
    number: "01",
    title: "Create",
    description:
      "Start with an idea and let NOVA AI turn it into something useful.",
  },
  {
    number: "02",
    title: "Automate",
    description:
      "Build intelligent workflows that handle repetitive tasks for you.",
  },
  {
    number: "03",
    title: "Analyze",
    description:
      "Understand your results and make better decisions with AI insights.",
  },
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      animateHowItWorks(sectionRef.current);
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      className="bg-black px-6 py-16 sm:py-16"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-violet-400">
            How It Works
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            From idea to
            <br />
            <span className="text-white/40">
              execution.
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative mt-20 grid gap-12 md:grid-cols-3 md:gap-0">

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="how-step relative"
            >
              {/* Step Number */}
              <div className="flex items-center">

                <div className="how-number flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-sm text-white">
                  {step.number}
                </div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="how-line hidden h-px flex-1 overflow-hidden bg-white/10 md:block">
                    <div className="how-line-progress h-full w-0 bg-violet-400" />
                  </div>
                )}

              </div>

              {/* Content */}
              <div className="mt-7 max-w-xs">
                <h3 className="text-xl font-medium text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/40">
                  {step.description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;