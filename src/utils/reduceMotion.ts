export const prefersReducedMotion = () => {
  return window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
};