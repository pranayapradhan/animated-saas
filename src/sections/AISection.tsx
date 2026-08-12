import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { animateParallax } from "../animations/scrollAnimations";

const AISection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      animateParallax(sectionRef.current);
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black px-6 py-10 sm:pt-16 sm:pb-16"
    >
      {/* Background Glow */}
      <div className="parallax-background pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Text */}
        <div className="parallax-text mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-violet-400">
            Work Smarter
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Your workflow,
            <br />
            <span className="text-white/40">
              powered by AI.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/40 sm:text-base">
            PRANU AI brings your tools, tasks and ideas together
            so you can focus on what actually matters.
          </p>
        </div>

        {/* Dashboard */}
        <div className="parallax-dashboard mx-auto mt-16 max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl">

            {/* Window Header */}
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />

              <span className="ml-4 text-xs text-white/30">
                pranu.ai
              </span>
            </div>

            {/* Dashboard Content */}
            <div className="grid min-h-[280px] grid-cols-1 gap-4 p-5 sm:grid-cols-3">

              {/* Sidebar */}
              <div className="hidden rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:block">
                <div className="h-2 w-20 rounded bg-white/10" />
                <div className="mt-6 space-y-3">
                  <div className="h-2 w-full rounded bg-white/5" />
                  <div className="h-2 w-4/5 rounded bg-white/5" />
                  <div className="h-2 w-3/5 rounded bg-white/5" />
                </div>
              </div>

              {/* Main */}
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:col-span-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="h-2 w-24 rounded bg-white/10" />
                    <div className="mt-3 h-2 w-40 rounded bg-white/5" />
                  </div>

                  <div className="h-8 w-8 rounded-lg bg-violet-400/10" />
                </div>

                {/* Chart */}
                <div className="mt-10 flex h-28 items-end gap-2">
                  <div className="h-[35%] flex-1 rounded-t bg-white/5" />
                  <div className="h-[55%] flex-1 rounded-t bg-white/5" />
                  <div className="h-[45%] flex-1 rounded-t bg-white/5" />
                  <div className="h-[70%] flex-1 rounded-t bg-white/10" />
                  <div className="h-[60%] flex-1 rounded-t bg-white/10" />
                  <div className="h-[85%] flex-1 rounded-t bg-violet-400/20" />
                  <div className="h-[75%] flex-1 rounded-t bg-violet-400/20" />
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AISection;   