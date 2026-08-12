import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { prefersReducedMotion } from "../utils/reduceMotion";

gsap.registerPlugin(ScrollTrigger);

export const heroEntranceAnimation = (
  container: HTMLElement
) => {
  const title = container.querySelector(".hero-title");
  const subtitle = container.querySelector(".hero-subtitle");
  const description = container.querySelector(".hero-description");
  const buttons = container.querySelector(".hero-buttons");
  const product = container.querySelector(".hero-product");

  if (prefersReducedMotion()) {
    gsap.set(
      [title, subtitle, description, buttons, product],
      {
        opacity: 1,
        y: 0,
        scale: 1,
      }
    );

    return;
  }

  const tl = gsap.timeline();

  /*
   * HERO ENTRANCE
   */

  if (subtitle) {
    tl.from(subtitle, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power3.out",
    });
  }

  if (title) {
    tl.from(
      title,
      {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.2"
    );
  }

  if (description) {
    tl.from(
      description,
      {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.4"
    );
  }

  if (buttons) {
    tl.from(
      buttons,
      {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power3.out",
      },
      "-=0.3"
    );
  }

  if (product) {
    tl.from(
      product,
      {
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    );
  }
};


/*
 * ADVANCED HERO SCROLL ANIMATION
 */

export const heroScrollAnimation = (
  container: HTMLElement
) => {
  if (prefersReducedMotion()) {
    return;
  }

  const background = container.querySelector(
    ".hero-background"
  );

  const product = container.querySelector(
    ".hero-product"
  );

  const featureText = container.querySelector(
    ".hero-feature-text"
  );

  const icons = container.querySelectorAll(
    ".hero-icon"
  );

  const cta = container.querySelector(
    ".hero-cta"
  );

  if (!background || !product) return;

  const mm = gsap.matchMedia();

  /*
   * DESKTOP
   */

  mm.add("(min-width: 768px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Background parallax
    tl.to(
      background,
      {
        y: 120,
        scale: 1.1,
        ease: "none",
        duration: 1,
      },
      0
    );

    // Product movement
    tl.to(
      product,
      {
        scale: 0.85,
        y: -30,
        rotation: 3,
        ease: "none",
        duration: 1,
      },
      0
    );

    // Feature text
    if (featureText) {
      tl.fromTo(
        featureText,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        0.35
      );
    }

    // Icons
    if (icons.length) {
      tl.fromTo(
        icons,
        {
          opacity: 0,
          scale: 0,
          rotation: -20,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.4,
          stagger: 0.12,
          ease: "back.out(1.7)",
        },
        0.5
      );
    }

    // CTA
    if (cta) {
      tl.fromTo(
        cta,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        0.8
      );
    }

    return () => {
      tl.kill();
    };
  });

  /*
   * MOBILE
   */

  mm.add("(max-width: 767px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Smaller background movement
    tl.to(
      background,
      {
        y: 50,
        scale: 1.05,
        ease: "none",
        duration: 1,
      },
      0
    );

    // Smaller product movement
    tl.to(
      product,
      {
        scale: 0.95,
        y: -10,
        ease: "none",
        duration: 1,
      },
      0
    );

    // Feature text
    if (featureText) {
      tl.fromTo(
        featureText,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        0.3
      );
    }

    // CTA
    if (cta) {
      tl.fromTo(
        cta,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        0.6
      );
    }

    return () => {
      tl.kill();
    };
  });

  return () => {
    mm.revert();
  };
};