import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import {
  heroEntranceAnimation,
  heroFloatingAnimation,
} from "../animations/heroAnimations";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP( () => {
    heroEntranceAnimation(heroRef.current!);
    heroFloatingAnimation();
  }, { scope: heroRef});

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#050505] pt-28"
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-violet-600/10
          blur-[140px]
        "
      />

      {/* Background Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      {/* Floating Element 1 */}
      <div
        className="
          hero-float
          hero-float-1
          absolute
          left-[8%]
          top-[35%]
          hidden
          text-3xl
          text-violet-400/70
          md:block
        "
      >
        ✦
      </div>

      {/* Floating Element 2 */}
      <div
        className="
          hero-float
          hero-float-2
          absolute
          right-[10%]
          top-[30%]
          hidden
          text-2xl
          text-blue-400/60
          md:block
        "
      >
        ✦
      </div>

      {/* Floating Element 3 */}
      <div
        className="
          hero-float
          hero-float-3
          absolute
          right-[17%]
          top-[65%]
          hidden
          text-xl
          text-purple-400/50
          md:block
        "
      >
        ◇
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* Hero Text */}
        <div className="mx-auto max-w-4xl text-center">

          {/* Badge */}
          <div className="hero-badge mb-6 flex justify-center">
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-4
                py-2
                text-xs
                font-medium
                uppercase
                tracking-[0.2em]
                text-white/60
                backdrop-blur-sm
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />

              AI Productivity
            </div>
          </div>

          {/* Heading */}
          <h1
            className="
              hero-title
              mx-auto
              max-w-4xl
              text-5xl
              font-semibold
              leading-[1.05]
              tracking-[-0.04em]
              text-white
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            Build faster.
            <br />

            <span
              className="
                bg-gradient-to-r
                from-white
                via-white
                to-violet-400
                bg-clip-text
                text-transparent
              "
            >
              Think smarter.
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              hero-description
              mx-auto
              mt-7
              max-w-2xl
              text-base
              leading-7
              text-white/50
              sm:text-lg
              sm:leading-8
            "
          >
            Create, automate and manage your workflow
            using next-generation AI tools designed to
            help your team move faster.
          </p>

          {/* Buttons */}
          <div
            className="
              hero-buttons
              mt-9
              flex
              flex-col
              items-center
              justify-center
              gap-3
              sm:flex-row
            "
          >
            {/* Primary Button */}
            <a
              href="#get-started"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-white
                px-6
                py-3.5
                text-sm
                font-semibold
                text-black
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/90
                hover:shadow-[0_10px_40px_rgba(255,255,255,0.15)]
              "
            >
              Get Started

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>

            {/* Secondary Button */}
            <a
              href="#demo"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-6
                py-3.5
                text-sm
                font-medium
                text-white/80
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/20
                hover:bg-white/[0.07]
                hover:text-white
              "
            >
              See Demo
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Dashboard */}
        <div className="relative mx-auto mt-20 max-w-5xl">

          {/* Glow behind dashboard */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-72
              w-3/4
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-violet-600/10
              blur-[100px]
            "
          />

          {/* Dashboard */}
          <div
            className="
              hero-dashboard
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-[#0b0b0d]
              shadow-[0_30px_100px_rgba(0,0,0,0.6)]
            "
          >
            {/* Dashboard Header */}
            <div
              className="
                flex
                h-14
                items-center
                justify-between
                border-b
                border-white/10
                px-5
              "
            >
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                </div>

                <span className="ml-3 text-xs font-medium text-white/40">
                  PRANU AI
                </span>
              </div>

              <div className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
            </div>

            {/* Dashboard Body */}
            <div className="grid min-h-[400px] grid-cols-1 md:grid-cols-[180px_1fr]">

              {/* Sidebar */}
              <aside className="hidden border-r border-white/10 p-4 md:block">
                <div className="mb-8 text-xs font-semibold text-white/70">
                  Workspace
                </div>

                <div className="space-y-2">
                  {[
                    "Overview",
                    "AI Agents",
                    "Analytics",
                    "Automations",
                    "Settings",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className={`rounded-lg px-3 py-2 text-xs ${
                        index === 0
                          ? "bg-white/[0.07] text-white"
                          : "text-white/35"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </aside>

              {/* Main Dashboard */}
              <div className="p-5 sm:p-7">

                {/* Greeting */}
                <div className="mb-6">
                  <p className="text-xs text-white/30">
                    Tuesday, August 9
                  </p>

                  <h2 className="mt-1 text-lg font-semibold text-white/90">
                    Good morning, Pranaya
                  </h2>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">

                  <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
                    <p className="text-xs text-white/30">
                      Tasks Automated
                    </p>

                    <p className="mt-2 text-2xl font-semibold text-white">
                      84%
                    </p>

                    <p className="mt-1 text-[10px] text-green-400/70">
                      +12.5% this month
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
                    <p className="text-xs text-white/30">
                      AI Tasks
                    </p>

                    <p className="mt-2 text-2xl font-semibold text-white">
                      2.4k
                    </p>

                    <p className="mt-1 text-[10px] text-violet-400/70">
                      +24% this month
                    </p>
                  </div>

                  <div className="hidden rounded-xl border border-white/10 bg-white/[0.025] p-4 lg:block">
                    <p className="text-xs text-white/30">
                      Time Saved
                    </p>

                    <p className="mt-2 text-2xl font-semibold text-white">
                      126h
                    </p>

                    <p className="mt-1 text-[10px] text-blue-400/70">
                      This month
                    </p>
                  </div>
                </div>

                {/* Activity */}
                <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.025] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/30">
                        AI Activity
                      </p>

                      <p className="mt-1 text-sm font-medium text-white/80">
                        Automation performance
                      </p>
                    </div>

                    <span className="rounded-full bg-green-400/10 px-2.5 py-1 text-[10px] text-green-400">
                      Live
                    </span>
                  </div>

                  {/* Fake Chart */}
                  <div className="relative mt-6 h-28 overflow-hidden">

                    {/* Grid Lines */}
                    <div className="absolute inset-x-0 top-0 border-t border-white/5" />
                    <div className="absolute inset-x-0 top-1/2 border-t border-white/5" />
                    <div className="absolute inset-x-0 bottom-0 border-t border-white/5" />

                    {/* Chart */}
                    <svg
                      viewBox="0 0 800 160"
                      className="absolute inset-0 h-full w-full"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id="chartGradient"
                          x1="0"
                          x2="1"
                          y1="0"
                          y2="0"
                        >
                          <stop
                            offset="0%"
                            stopColor="#8b5cf6"
                          />

                          <stop
                            offset="100%"
                            stopColor="#60a5fa"
                          />
                        </linearGradient>
                      </defs>

                      <path
                        d="M0 130 C80 120 90 80 170 95 C250 110 270 60 350 75 C430 90 450 40 530 55 C610 70 650 25 800 35"
                        fill="none"
                        stroke="url(#chartGradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Card - Left */}
          <div
            className="
              hero-float
              hero-float-1
              absolute
              -left-5
              bottom-16
              hidden
              rounded-xl
              border
              border-white/10
              bg-[#111113]
              p-4
              shadow-2xl
              sm:block
              lg:-left-12
            "
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                ✦
              </div>

              <div>
                <p className="text-xs font-medium text-white/80">
                  AI Agent
                </p>

                <p className="text-[10px] text-white/30">
                  Task completed
                </p>
              </div>
            </div>
          </div>

          {/* Floating Card - Right */}
          <div
            className="
              hero-float
              hero-float-2
              absolute
              -right-5
              top-16
              hidden
              rounded-xl
              border
              border-white/10
              bg-[#111113]
              p-4
              shadow-2xl
              sm:block
              lg:-right-12
            "
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                ✓
              </div>

              <div>
                <p className="text-xs font-medium text-white/80">
                  Automation
                </p>

                <p className="text-[10px] text-green-400/60">
                  Running smoothly
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted text */}
        <div className="pb-16 pt-16 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-white/25">
            Trusted by modern teams
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

