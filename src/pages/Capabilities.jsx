import { Helmet } from "react-helmet-async";
import infraImg from "../assets/capabilities/infrastructure.png";
import cloudImg from "../assets/capabilities/cloud.png";
import dataImg from "../assets/capabilities/data.png";
import aiImg from "../assets/capabilities/ai.png";
import pmImg from "../assets/capabilities/project-management.png";

const capabilityGroups = [
  {
    title: "IT Strategy & Transformation",
    description:
      "We partner with organizations to define robust IT strategies that modernize infrastructure, streamline processes, and align technology with business priorities.",
    image: infraImg,
    items: [
      "Technology roadmap development",
      "Enterprise architecture planning",
      "IT governance & risk management",
    ],
  },
  {
    title: "Cloud Consulting & Engineering",
    description:
      "We guide organizations through cloud adoption, migration, and optimization using secure, scalable, and cost-efficient platforms.",
    image: cloudImg,
    items: [
      "Public, private, and hybrid cloud strategies",
      "Cloud architecture & implementation",
      "Migration & modernization services",
    ],
  },
  {
    title: "Data & Analytics",
    description:
      "We help organizations harness data to improve decision-making, performance, and competitive advantage.",
    image: dataImg,
    items: [
      "Data architecture & engineering",
      "Business intelligence & reporting",
      "Data governance & quality frameworks",
    ],
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    description:
      "From strategic planning to operational deployment, we enable organizations to scale intelligent solutions that solve real business problems.",
    image: aiImg,
    items: [
      "AI strategy & readiness assessments",
      "Machine learning model development",
      "Intelligent automation & predictive analytics",
    ],
  },
  {
    title: "Project Management & Delivery",
    description:
      "Structured project and program management services ensuring IT and AI initiatives are planned, governed, and delivered successfully.",
    image: pmImg,
    items: [
      "Project & Program Management",
      "Delivery governance & reporting",
      "Stakeholder & risk management",
      "Agile & hybrid delivery models",
    ],
  },
];

const Capabilities = () => {
  return (
    <main className="bg-slate-50 text-slate-900">
      {/* SEO Metadata */}
      <Helmet>
        <title>SAAV Capabilities | Technology, Cloud, Data, AI, and Delivery</title>
        <meta
          name="description"
          content="Explore SAAV Consulting's technology capabilities, including IT strategy, cloud consulting, data analytics, AI, and project management for business transformation."
        />
      </Helmet>

      {/* PAGE INTRO */}
      <section className="pt-32 pb-20" aria-label="Capabilities Overview">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Our Capabilities
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            SAAV Consulting delivers end-to-end technology capabilities across
            strategy, cloud, data, artificial intelligence, and delivery to
            support business transformation and long-term growth.
          </p>
        </div>
      </section>

      {/* CAPABILITIES GRID */}
      <section className="pb-32" aria-label="Capabilities List">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-10">
          {capabilityGroups.map((group) => (
            <div
              key={group.title}
              className="
                w-full max-w-md
                bg-white border border-slate-200 rounded-xl overflow-hidden
                transition-all duration-300
                hover:shadow-lg hover:-translate-y-1
              "
            >
              {/* IMAGE */}
              <img
                src={group.image}
                alt={group.title}
                className="w-full h-40 object-cover"
                loading="lazy"
              />

              {/* CONTENT */}
              <div className="p-6">
                <h2 className="text-xl font-medium mb-3">{group.title}</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">{group.description}</p>

                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="
                        pl-4 border-l-2 border-slate-300
                        text-slate-600 text-sm
                        transition-all duration-300
                        hover:border-blue-600 hover:text-slate-800
                      "
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Capabilities;
