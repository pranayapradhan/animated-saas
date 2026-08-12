import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import FadeIn from "../components/animations/FadeIn";
import { animateFeatureCards } from "../animations/scrollAnimations";

const features = [
  {
    icon: "✦",
    title: "Automate",
    description:
      "Automate repetitive tasks and let AI handle your workflow.",
    visual: "01",
  },
  {
    icon: "◈",
    title: "Analyze",
    description:
      "Turn complex data into clear insights and better decisions.",
    visual: "02",
  },
  {
    icon: "⚡",
    title: "Create",
    description:
      "Generate ideas, content and solutions faster with AI.",
    visual: "03",
  },
];

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      animateFeatureCards(sectionRef.current);
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      id="features"
      className="bg-black px-6 py-14 sm:pt-16 sm:pb-16"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <FadeIn y={30}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-violet-400">
              Powerful AI Tools
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              Everything you need
              <br />
              <span className="text-white/40">
                to work smarter.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-6 text-white/40 sm:text-base">
              Simple tools designed to help you automate,
              analyze and create without slowing down.
            </p>
          </div>
        </FadeIn>

        {/* Feature Cards */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                feature-card
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/20
                hover:bg-white/[0.04]
              "
            >
              {/* Icon */}
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  text-lg
                  text-violet-400
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="mt-8 text-lg font-medium text-white">
                {feature.title}
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-6 text-white/40">
                {feature.description}
              </p>

              {/* Small Visual */}
              <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-xs text-white/20">
                  PRANU AI
                </span>

                <span className="text-xs text-white/20">
                  {feature.visual}
                </span>
              </div>

              {/* Hover Glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-32
                  w-32
                  rounded-full
                  bg-violet-500/10
                  blur-3xl
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;