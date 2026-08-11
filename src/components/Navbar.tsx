import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const navLinks = [
  { name: "Product", href: "#product" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);

  useGSAP( () => {
    const timeline = gsap.timeline();

    timeline
    .from(".navbar-logo", {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    })
    .from(".navbar-link", {
      y: -20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power3.out",
    }, "-=0.3" )
    .from(".navbar-actions", {
      y: -20,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    }, "-=0.3" );
  }, { scope: navbarRef});

  return (
    <nav
      ref={navbarRef}
      className="fixed left-0 top-0 z-50 w-full bg-black"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#"
          className="navbar-logo text-2xl font-bold tracking-tight text-white"
        >
          PRANU
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="navbar-link group relative text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
            >
              {link.name}

              {/* Hover underline */}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="navbar-actions hidden items-center gap-5 md:flex">
          <a
            href="#login"
            className="text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
          >
            Login
          </a>

          <a
            href="#get-started"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-lg"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 md:hidden"
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-white transition-all duration-300 ${
                isMenuOpen
                  ? "translate-y-2 rotate-45"
                  : ""
              }`}
            />

            <span
              className={`h-px w-full bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`h-px w-full bg-white transition-all duration-300 ${
                isMenuOpen
                  ? "-translate-y-2 -rotate-45"
                  : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-5">

          {/* Mobile Links */}
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-white/10 py-4 text-base font-medium text-white/70 transition-colors duration-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Login */}
          <a
            href="#login"
            onClick={() => setIsMenuOpen(false)}
            className="py-4 text-base font-medium text-white/70 transition-colors duration-300 hover:text-white"
          >
            Login
          </a>

          {/* Mobile CTA */}
          <a
            href="#get-started"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

