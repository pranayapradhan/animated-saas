import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateFeatureCards = (container: HTMLElement) => {
  const cards = container.querySelectorAll<HTMLElement>(".feature-card");

  if (!cards.length) return;

  gsap.fromTo(
    cards,
    {
      y: 60,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.15,

      scrollTrigger: {
        trigger: container,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    }
  );
};

export const animateParallax = (container: HTMLElement) => {
  const background = container.querySelector(".parallax-background");
  const dashboard = container.querySelector(".parallax-dashboard");

  if (!background || !dashboard) return;

  // Background moves slowly
  gsap.to(background, {
    y: 80,

    scrollTrigger: {
      trigger: container,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });

  // Dashboard moves slightly faster
  gsap.to(dashboard, {
    y: -60,

    scrollTrigger: {
      trigger: container,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
};