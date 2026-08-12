import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        fixed
        left-0
        top-0
        z-50
        w-full
        transition-all
        duration-300
        ${
          scrolled
            ? "border-b border-white/10 bg-black/70 backdrop-blur-xl"
            : "bg-transparent"
        }
      `}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-white"
        >
          PRANU
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#"
            className="text-sm text-white/50 transition-colors hover:text-white"
          >
            Product
          </a>

          <a
            href="#features"
            className="text-sm text-white/50 transition-colors hover:text-white"
          >
            Features
          </a>

          <a
            href="#pricing"
            className="text-sm text-white/50 transition-colors hover:text-white"
          >
            Pricing
          </a>

          <a
            href="#"
            className="text-sm text-white/50 transition-colors hover:text-white"
          >
            Login
          </a>

          <button
            className="
              rounded-full
              bg-white
              px-5
              py-2.5
              text-sm
              font-medium
              text-black
              transition-transform
              duration-300
              hover:scale-[1.03]
            "
          >
            Get Started
          </button>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-6 md:hidden">

          <div className="flex flex-col gap-5">

            <a
              href="#"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-white/60"
            >
              Product
            </a>

            <a
              href="#features"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-white/60"
            >
              Features
            </a>

            <a
              href="#pricing"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-white/60"
            >
              Pricing
            </a>

            <a
              href="#"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-white/60"
            >
              Login
            </a>

            <button
              className="
                mt-2
                w-full
                rounded-full
                bg-white
                px-5
                py-3
                text-sm
                font-medium
                text-black
              "
            >
              Get Started
            </button>

          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;