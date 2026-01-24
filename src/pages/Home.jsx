import { useState } from "react";
import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";

import whatProject from "../assets/home/what-project.png";
import whatAI from "../assets/home/what-ai.png";
import whatCloud from "../assets/home/what-cloud.png";
import whatData from "../assets/home/what-data.png";
import peopleImg from "../assets/home/people.png";

const Home = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const whatWeDo = [
    {
      img: whatAI,
      title: "AI & Intelligent Systems",
      desc:
        "We design and implement artificial intelligence and machine learning systems that integrate into applications and workflows.",
    },
    {
      img: whatCloud,
      title: "Cloud & IT Platforms",
      desc:
        "We build scalable cloud-based and enterprise IT platforms supporting secure digital operations.",
    },
    {
      img: whatData,
      title: "Data & Software Systems",
      desc:
        "We develop data platforms and software systems enabling analytics, automation, and digital services.",
    },
    {
      img: whatProject,
      title: "Project Management Services",
      desc:
        "We provide structured project and program management services to ensure IT and AI initiatives are planned, governed, and delivered successfully.",
    },
  ];

  return (
    <main className="bg-slate-50 text-slate-900">
      {/* HERO (DO NOT TOUCH) */}
      <HeroSlider />

      {/* HERO TEXT */}
      <section className="pt-36 pb-28">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
            Building IT & AI Solutions for
            <span className="block">Modern Digital Systems</span>
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed">
            SAAV is an IT and AI-focused technology company working across cloud,
            data, artificial intelligence, and enterprise software. We build
            intelligent systems and create opportunities for people to work on
            real-world technology projects.
          </p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-14 max-w-3xl">
            What We Do
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {whatWeDo.map((item, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <div
                  key={item.title}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden transition hover:shadow-lg"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-44 w-full object-cover"
                  />

                  <div className="p-8">
                    <h3 className="text-xl font-medium mb-3">
                      {item.title}
                    </h3>

                    <p
                      className={`text-slate-600 leading-relaxed transition-all duration-300 ${
                        isExpanded ? "" : "line-clamp-3"
                      }`}
                    >
                      {item.desc}
                    </p>

                    <button
                      onClick={() =>
                        setExpandedIndex(isExpanded ? null : index)
                      }
                      className="mt-3 text-sm font-medium text-blue-600 hover:underline"
                    >
                      {isExpanded ? "Show less" : "Read more"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES & CAPABILITIES */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-medium mb-4">
              Industries We Work In
            </h3>
            <p className="text-slate-600 leading-relaxed mb-5 line-clamp-3">
              Our work spans AI and IT-driven domains including cloud
              infrastructure, data engineering, and enterprise technology.
            </p>
            <Link
              to="/industries"
              className="text-blue-600 font-medium hover:underline"
            >
              View Industries →
            </Link>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-4">
              Our Capabilities
            </h3>
            <p className="text-slate-600 leading-relaxed mb-5 line-clamp-3">
              We provide hands-on IT and AI capabilities across strategy,
              infrastructure, platforms, and operations.
            </p>
            <Link
              to="/capabilities"
              className="text-blue-600 font-medium hover:underline"
            >
              View Capabilities →
            </Link>
          </div>
        </div>
      </section>

      {/* PEOPLE */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold mb-5">
              Opportunities for People in IT & AI
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We create opportunities for people to work on real-world IT and AI
              projects involving cloud platforms, data systems, and enterprise
              software.
            </p>
          </div>

          <img
            src={peopleImg}
            alt="People working in IT and AI"
            className="rounded-xl border border-slate-200"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-slate-200 rounded-xl p-10 text-center">
            <h3 className="text-2xl font-medium mb-3">
              Get Started with SAAV
            </h3>
            <p className="text-slate-600 mb-6">
              Whether you’re interested in technology solutions or opportunities
              to grow in IT and AI, we’d love to hear from you.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-slate-900 text-white rounded-md font-medium hover:bg-slate-800 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
