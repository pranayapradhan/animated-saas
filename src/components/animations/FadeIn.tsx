import {  type ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { prefersReducedMotion } from "../../utils/reduceMotion";

gsap.registerPlugin(ScrollTrigger);

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
}

const FadeIn = ({
  children,
  delay = 0,
  duration = 0.8,
  y = 20,
}: FadeInProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!elementRef.current) return;

    if (prefersReducedMotion()) {
      gsap.set(elementRef.current, {
        opacity: 1,
        y: 0,
      });

      return;
    }

    gsap.fromTo(
      elementRef.current,
      {
        opacity: 0,
        y,
      },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  return <div ref={elementRef}>{children}</div>;
};

export default FadeIn;