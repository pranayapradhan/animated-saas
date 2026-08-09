import gsap from "gsap";

export const heroEntranceAnimation = ( container: HTMLElement ) => {
  const timeline = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
  });

  timeline
    // Badge
    .from(".hero-badge", {
      y: 20,
      opacity: 0,
      duration: 0.6,
    })

    // Main heading
    .from(
      ".hero-title",
      {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      },
      "-=0.25"
    )

    // Description
    .from(
      ".hero-description",
      {
        y: 30,
        opacity: 0,
        duration: 0.7,
      },
      "-=0.5"
    )

    // Buttons
    .from(
      ".hero-buttons",
      {
        y: 25,
        opacity: 0,
        duration: 0.6,
      },
      "-=0.4"
    )

    // Dashboard
    .from(
      ".hero-dashboard",
      {
        y: 100,
        opacity: 0,
        scale: 0.92,
        duration: 1.1,
        ease: "power3.out",
      },
      "-=0.3"
    )

    // Floating elements
    .from(
      ".hero-float",
      {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.7)",
      },
      "-=0.5"
    );

  return timeline;
};

export const heroFloatingAnimation = () => {
  gsap.to(".hero-float-1", {
    y: -15,
    rotation: 5,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  gsap.to(".hero-float-2", {
    y: 18,
    rotation: -5,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  gsap.to(".hero-float-3", {
    y: -12,
    x: 8,
    duration: 2.8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
};

