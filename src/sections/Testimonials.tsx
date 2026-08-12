import FadeIn from "../components/animations/FadeIn";
import StaggerContainer from "../components/animations/StaggerContainer";
import SlideUp from "../components/animations/SlideUp";
import ScaleIn from "../components/animations/ScaleIn";

const testimonials = [
  {
    quote:
      "PRANU gives us the clarity we need to make better decisions without spending hours analyzing everything manually.",
    name: "Pranaya Pradhan Sainju",
    role: "Founder",
    initials: "PS",
  },
  {
    quote:
      "The workflows are incredibly simple to set up. PRANU helped our team move from ideas to execution much faster.",
    name: "Ashish Ekten Limbu",
    role: "Product Manager",
    initials: "AE",
  },
  {
    quote:
      "PRANU changed how our team works every day. We spend less time on repetitive tasks and more time building.",
    name: "Bibek Neupane",
    role: "Product Designer",
    initials: "BN",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-black px-6 py-10 sm:pt-16 sm:pb-16">
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <FadeIn y={30}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-violet-400">
              Testimonials
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              What people
              <br />
              <span className="text-white/40">
                say about PRANU.
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* Testimonial Cards */}
        <StaggerContainer
          stagger={0.15}
          duration={0.7}
          y={50}
          className="mt-16 grid gap-4 md:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="
                group
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/20
                hover:bg-white/[0.04]
              "
            >
              {/* Quote */}
              <SlideUp delay={0.1}>
                <div>
                  <span className="text-3xl text-violet-400">
                    "
                  </span>

                  <p className="mt-3 text-sm leading-7 text-white/70">
                    {testimonial.quote}
                  </p>
                </div>
              </SlideUp>

              {/* User */}
              <div className="mt-8 flex items-center gap-3">

                {/* Avatar */}
                <ScaleIn delay={0.2}>
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-white/10
                      text-xs
                      font-medium
                      text-white
                    "
                  >
                    {testimonial.initials}
                  </div>
                </ScaleIn>

                {/* User Information */}
                <div>
                  <p className="text-sm font-medium text-white">
                    {testimonial.name}
                  </p>

                  <p className="mt-0.5 text-xs text-white/40">
                    {testimonial.role}
                  </p>
                </div>

              </div>
            </article>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};

export default Testimonials;