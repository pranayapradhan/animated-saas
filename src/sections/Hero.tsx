import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import {
  heroEntranceAnimation,
  heroScrollAnimation,
} from "../animations/heroAnimations";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!heroRef.current) return;

      heroEntranceAnimation(heroRef.current);

      heroScrollAnimation(heroRef.current);
    },
    {
      scope: heroRef,
    }
  );

  return (
    <section
      ref={heroRef}
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        px-6
        pt-20
        pb-20
        sm:pt-20
        sm:pb-20
      "
    >
      <div
        className="
          hero-background
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[400px]
          w-[400px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-500/10
          blur-[120px]
          sm:h-[600px]
          sm:w-[600px]
        "
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="
              hero-subtitle
              text-xs
              uppercase
              tracking-[0.2em]
              text-violet-400
            "
          >
            AI Productivity
          </p>
          <h1
            className="
              hero-title
              mt-5
              text-4xl
              font-semibold
              leading-tight
              tracking-tight
              text-white
              sm:text-6xl
              md:text-7xl
            "
          >
            Build faster.
            <br />

            <span className="text-white/40">
              Think smarter.
            </span>
          </h1>
          <p
            className="
              hero-description
              mx-auto
              mt-6
              max-w-xl
              text-sm
              leading-6
              text-white/40
              sm:text-base
              sm:leading-7
            "
          >
            Create, automate and manage your workflow
            using next-generation AI.
          </p>
          <div
            className="
              hero-buttons
              mt-8
              flex
              flex-col
              items-center
              justify-center
              gap-3
              sm:flex-row
            "
          >
            <button
              className="
                w-full
                rounded-full
                bg-white
                px-6
                py-3
                text-sm
                font-medium
                text-black
                transition-transform
                duration-300
                hover:scale-[1.03]
                sm:w-auto
              "
            >
              Get Started
            </button>

            <button
              className="
                w-full
                rounded-full
                border
                border-white/10
                px-6
                py-3
                text-sm
                font-medium
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/20
                sm:w-auto
              "
            >
              See Demo
            </button>
          </div>
        </div>
        <div className="relative mx-auto mt-16 max-w-4xl sm:mt-20">

          <div className="hero-product">

            <div
              className="
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                shadow-2xl
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-2
                  border-b
                  border-white/10
                  px-4
                  py-3
                  sm:px-5
                  sm:py-4
                "
              >
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />

                <span className="ml-3 text-xs text-white/30">
                  PRANU AI
                </span>
              </div>
              <div
                className="
                  grid
                  min-h-[240px]
                  gap-4
                  p-4
                  sm:min-h-[320px]
                  sm:grid-cols-3
                  sm:p-5
                "
              >
                <div
                  className="
                    hidden
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.02]
                    p-5
                    sm:block
                  "
                >
                  <div className="h-2 w-20 rounded bg-white/10" />

                  <div className="mt-8 space-y-3">
                    <div className="h-2 w-full rounded bg-white/5" />
                    <div className="h-2 w-4/5 rounded bg-white/5" />
                    <div className="h-2 w-3/5 rounded bg-white/5" />
                  </div>
                </div>
                <div
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.02]
                    p-4
                    sm:col-span-2
                    sm:p-5
                  "
                >

                  <div className="flex items-center justify-between">

                    <div>
                      <div className="h-2 w-24 rounded bg-white/10" />

                      <div className="mt-3 h-2 w-40 rounded bg-white/5" />
                    </div>
                    <div
                      className="
                        hero-icon
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-lg
                        bg-violet-400/10
                        text-violet-400
                      "
                    >
                      ✦
                    </div>

                  </div>
                  <div
                    className="
                      mt-8
                      flex
                      h-28
                      items-end
                      gap-2
                      sm:mt-10
                      sm:h-32
                    "
                  >
                    <div
                      className="
                        hero-icon
                        h-[30%]
                        flex-1
                        rounded-t
                        bg-white/5
                      "
                    />

                    <div
                      className="
                        hero-icon
                        h-[45%]
                        flex-1
                        rounded-t
                        bg-white/5
                      "
                    />

                    <div
                      className="
                        hero-icon
                        h-[55%]
                        flex-1
                        rounded-t
                        bg-white/5
                      "
                    />

                    <div
                      className="
                        hero-icon
                        h-[70%]
                        flex-1
                        rounded-t
                        bg-white/10
                      "
                    />

                    <div
                      className="
                        hero-icon
                        h-[60%]
                        flex-1
                        rounded-t
                        bg-white/10
                      "
                    />

                    <div
                      className="
                        hero-icon
                        h-[85%]
                        flex-1
                        rounded-t
                        bg-violet-400/20
                      "
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="
            hero-feature-text
            mx-auto
            mt-12
            max-w-xl
            text-center
          "
        >
          <p className="text-sm text-white/40">
            One intelligent workspace for your entire workflow.
          </p>
        </div>
        <div
          className="
            hero-cta
            mt-8
            flex
            justify-center
          "
        >
          <button
            className="
              rounded-full
              border
              border-white/10
              px-6
              py-3
              text-sm
              font-medium
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-white/20
            "
          >
            Explore PRANU
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;