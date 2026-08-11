import { type ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SlideUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
}

const SlideUp = ({
  children,
  delay = 0,
  duration = 0.7,
  y = 30,
}: SlideUpProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!elementRef.current) return;

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

export default SlideUp;