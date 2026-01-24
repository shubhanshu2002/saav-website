import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import heroImg from "../assets/about/hero.png";
import missionImg from "../assets/about/mission.png";
import approachImg from "../assets/about/approach.png";

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <main className="bg-slate-50 text-slate-900">
      {/* SEO Metadata */}
      <Helmet>
        <title>About SAAV Consulting | Technology & AI Consulting</title>
        <meta
          name="description"
          content="Learn about SAAV Consulting, our mission, approach, and why organizations choose us for technology, cloud, and AI solutions."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden" aria-label="About SAAV Consulting">
        <img
          src={heroImg}
          alt="About SAAV Consulting"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-slate-900/70" />

        <div
          className={`relative max-w-6xl mx-auto px-6 transition-all duration-1000
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            About SAAV Consulting
          </h1>
          <p className="text-lg text-slate-200 max-w-3xl leading-relaxed">
            SAAV Consulting is a technology consulting firm focused on enabling
            organizations to modernize, innovate, and grow through IT, data,
            cloud, and artificial intelligence solutions.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-32" aria-label="About SAAV Content">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {/* MISSION */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-1000 delay-100
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
            >
              <h2 className="text-3xl font-medium mb-6">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Our mission is to help organizations unlock value from their
                technology investments. We deliver consulting and engineering
                services that align technology with business goals, improve
                performance, and support long-term growth.
              </p>
            </div>

            <img
              src={missionImg}
              alt="Technology strategy and planning"
              className="rounded-xl border border-slate-200"
              loading="lazy"
            />
          </div>

          {/* WHY SAAV */}
          <div className="bg-white border border-slate-200 rounded-xl p-12">
            <h2 className="text-3xl font-medium mb-10">Why Choose SAAV Consulting</h2>
            <div className="grid md:grid-cols-3 gap-10 text-slate-600">
              <div>
                <h3 className="font-medium text-lg mb-2">Client-Centric Expertise</h3>
                <p>
                  We work closely with stakeholders to understand unique
                  challenges and deliver solutions that create measurable
                  impact.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Innovation-Driven Solutions</h3>
                <p>
                  From cloud and data platforms to AI and automation, we apply
                  modern technologies responsibly and effectively.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">End-to-End Delivery</h3>
                <p>
                  We support clients from strategy and planning through
                  implementation and ongoing optimization.
                </p>
              </div>
            </div>
          </div>

          {/* APPROACH */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <img
              src={approachImg}
              alt="Consulting approach"
              className="rounded-xl border border-slate-200"
              loading="lazy"
            />
            <div
              className={`transition-all duration-1000 delay-200
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
            >
              <h2 className="text-3xl font-medium mb-6">Our Approach</h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                We follow a structured and collaborative approach to consulting,
                combining strategic insight with hands-on delivery.
              </p>

              <ul className="space-y-4">
                {[
                  "Assess and understand business and technology context",
                  "Design scalable and practical solutions",
                  "Deliver with engineering discipline and clarity",
                  "Optimize continuously for long-term success",
                ].map((item) => (
                  <li
                    key={item}
                    className="
                      pl-4 border-l-2 border-slate-300
                      text-slate-600 leading-relaxed
                      transition-all duration-300
                      hover:border-blue-600
                      hover:text-slate-800
                    "
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
