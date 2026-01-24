import { useEffect, useState } from "react";

const testimonials = [
  {
    company: "Vancity",
    name: "Robin Matthews-Kanhai",
    role: "Director, Operations and Strategic Support",
    quote:
      "Working with SAAV has been excellent. Their communication, focus, and quality of work exceeded my expectations. They provide insightful, goal-aligned solutions and a valuable external perspective, adding long-term value to our organization.",
  },
  {
    company: "Confidential Energy Client",
    name: "Senior Program Manager",
    role: "Infrastructure & Energy Programs",
    quote:
      "The SAAV team demonstrated strong technical depth and an exceptional willingness to learn. Their structured approach and attention to detail translated into reliable delivery across complex, regulated environments.",
  },
  {
    company: "Industrial Infrastructure Client",
    name: "Head of Engineering",
    role: "Capital Projects",
    quote:
      "SAAV brought clarity and discipline to a highly complex program. Their ability to align engineering execution with business objectives made them a trusted partner throughout the project lifecycle.",
  },
];

// Infinite loop clones
const slides = [
  testimonials[testimonials.length - 1],
  ...testimonials,
  testimonials[0],
];

const Testimonials = () => {
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => next(), 8000);
    return () => clearInterval(timer);
  }, [index]);

  const next = () => {
    setTransition(true);
    setIndex((i) => i + 1);
  };

  const prev = () => {
    setTransition(true);
    setIndex((i) => i - 1);
  };

  const handleTransitionEnd = () => {
    if (index === slides.length - 1) {
      setTransition(false);
      setIndex(1);
    }
    if (index === 0) {
      setTransition(false);
      setIndex(slides.length - 2);
    }
  };

  return (
    <section className="bg-[#020617] pt-32 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            What Our Clients Say
          </h1>
        </div>

        {/* SLIDER */}
        <div className="relative flex justify-center items-center">

          {/* TRACK */}
          <div
            onTransitionEnd={handleTransitionEnd}
            className="flex items-center"
            style={{
              transform: `translateX(-${index * 70}%)`,
              transition: transition ? "transform 700ms ease-in-out" : "none",
            }}
          >
            {slides.map((item, i) => {
              const isActive = i === index;

              return (
                <div
                  key={i}
                  className="min-w-[70%] px-6 flex-shrink-0 flex justify-center"
                >
                  <div
                    className={`
                      bg-white
                      rounded-xl
                      p-12
                      border border-gray-200
                      transition-all duration-700
                      ${
                        isActive
                          ? "opacity-100 scale-100"
                          : "opacity-50 scale-[0.96]"
                      }
                    `}
                  >
                    <h3 className="text-3xl font-semibold text-red-500 text-center mb-4">
                      {item.company}
                    </h3>

                    <p className="text-center text-gray-900 font-medium">
                      {item.name}
                    </p>

                    <p className="text-center text-sm text-gray-500 mb-8">
                      {item.role}
                    </p>

                    <p className="text-center text-gray-700 leading-relaxed max-w-2xl">
                      “{item.quote}”
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* LEFT BLUR + ARROW */}
          <div className="absolute left-0 top-0 h-full w-32 z-20 flex items-center justify-center pointer-events-none">
            <div className="" />
            <button
              onClick={prev}
              className="pointer-events-auto relative bg-white hover:bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center shadow transition"
            >
              ❮
            </button>
          </div>

          {/* RIGHT BLUR + ARROW */}
          <div className="absolute right-0 top-0 h-full w-32 z-20 flex items-center justify-center pointer-events-none">
            <div className="" />
            <button
              onClick={next}
              className="pointer-events-auto relative bg-white hover:bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center shadow transition"
            >
              ❯
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
