import { type ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StaggerContainerProps {
  children: ReactNode;
  stagger?: number;
  duration?: number;
  y?: number;
  delay?: number;
  className?: string;
}

const StaggerContainer = ({
  children,
  stagger = 0.15,
  duration = 0.7,
  y = 40,
  delay = 0,
  className = "",
}: StaggerContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const items = containerRef.current.children;

      gsap.fromTo(
        items,
        {
          opacity: 0,
          y,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: "power3.out",

          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    {
      scope: containerRef,
    }
  );

  return (
    <div
      ref={containerRef}
      className={className}
    >
      {children}
    </div>
  );
};

export default StaggerContainer;