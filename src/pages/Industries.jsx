import { useState } from "react";

import fintechImg from "../assets/industries/fintech.webp";
import healthImg from "../assets/industries/health.webp";
import retailImg from "../assets/industries/retail.webp";
import utilitiesImg from "../assets/industries/utilities.webp";
import govImg from "../assets/industries/public.webp";
import saasImg from "../assets/industries/software.webp";

const industries = [
  {
    title: "FinTech & Digital Banking",
    description:
      "Technology platforms supporting digital payments, banking systems, risk and compliance platforms, and AI-driven financial services. Our work focuses on secure, scalable, and cloud-native financial technology environments.",
    image: fintechImg,
  },
  {
    title: "Healthcare & HealthTech",
    description:
      "IT systems and data platforms supporting healthcare delivery, patient data management, analytics, and compliance-driven digital solutions across healthcare organizations.",
    image: healthImg,
  },
  {
    title: "Retail, E-commerce & Digital Commerce",
    description:
      "Digital platforms enabling e-commerce, customer analytics, personalization, and backend integrations supporting modern retail and digital commerce ecosystems.",
    image: retailImg,
  },
  {
    title: "Utilities & Smart Infrastructure",
    description:
      "IT platforms supporting utilities and infrastructure organizations, including monitoring systems, analytics platforms, and secure enterprise IT environments.",
    image: utilitiesImg,
  },
  {
    title: "Public Sector & GovTech",
    description:
      "Large-scale digital platforms and IT systems for public sector and regulated environments, with a focus on security, compliance, and service delivery.",
    image: govImg,
  },
  {
    title: "Technology, SaaS & Digital Platforms",
    description:
      "Technology companies building SaaS products, internal platforms, and scalable digital services using cloud-native, data-driven, and AI-enabled architectures.",
    image: saasImg,
  },
];

const Industries = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = industries[activeIndex];

  return (
    <main className="bg-slate-50 text-slate-900">
      {/* PAGE INTRO */}
      <section className="pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl font-semibold mb-5">
            Industries & Technology Domains
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed">
            SAAV works across AI and IT-driven domains, delivering technology
            solutions in areas such as artificial intelligence, cloud platforms,
            data engineering, and enterprise systems.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          
          {/* INDUSTRY SELECTOR */}
          <ul
            className="
              flex md:block
              gap-3 md:space-y-4
              overflow-x-auto md:overflow-visible
              pb-4 md:pb-0
              -mx-4 px-4 md:mx-0 md:px-0
              snap-x snap-mandatory
            "
          >
            {industries.map((industry, index) => (
              <li key={industry.title} className="shrink-0 md:shrink">
                <button
                  onClick={() => setActiveIndex(index)}
                  className={`whitespace-nowrap md:whitespace-normal
                    w-full text-left
                    px-4 py-3 md:px-5 md:py-4
                    rounded-md border text-sm md:text-base
                    transition-all duration-300 ease-out snap-start
                    ${
                      activeIndex === index
                        ? "bg-white border-blue-600 text-slate-900 shadow-md"
                        : "bg-white/70 border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
                    }
                  `}
                >
                  {industry.title}
                </button>
              </li>
            ))}
          </ul>

          {/* ACTIVE CONTENT */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 min-h-[320px] md:min-h-[360px] transition-all duration-300">
            <div className="mb-6 overflow-hidden rounded-md">
              <img
                src={activeIndustry.image}
                alt={activeIndustry.title}
                className="w-full h-40 md:h-48 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <h2 className="text-xl md:text-2xl font-medium mb-4">
              {activeIndustry.title}
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              {activeIndustry.description}
            </p>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Industries;
