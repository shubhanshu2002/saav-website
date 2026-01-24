import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import heroAI from "../assets/home/hero-ai.png";
import heroCloud from "../assets/home/hero-cloud.png";
import heroPeople from "../assets/home/hero-people.png";

const slides = [
  {
    title: "IT & AI Solutions",
    subtitle: "Building intelligent systems for modern digital environments",
    image: heroAI,
  },
  {
    title: "Cloud & Digital Platforms",
    subtitle: "Scalable, secure infrastructure for real-world applications",
    image: heroCloud,
  },
  {
    title: "Opportunities for People",
    subtitle: "Learn, work, and grow in IT and artificial intelligence",
    image: heroPeople,
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] overflow-hidden flex items-center justify-center">

      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out
            ${index === current ? "opacity-100 scale-105" : "opacity-0 scale-100"}
          `}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl px-6">
        <h1
          key={slides[current].title}
          className="text-4xl md:text-6xl font-bold mb-6 text-blue-400 animate-fadeUp"
        >
          {slides[current].title}
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mb-10 animate-fadeUp delay-100">
          {slides[current].subtitle}
        </p>

        <div className="flex justify-center gap-4 animate-fadeUp delay-200">
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl 
            bg-blue-600 hover:bg-blue-700 
            text-white font-medium transition"
          >
            Get Started
          </Link>

          <Link
            to="/projects"
            className="px-6 py-3 rounded-xl 
            border border-white/40 
            text-white hover:bg-white/10 transition"
          >
            View Projects
          </Link>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 flex gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300
              ${i === current ? "w-6 bg-white" : "w-2 bg-white/40"}
            `}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
