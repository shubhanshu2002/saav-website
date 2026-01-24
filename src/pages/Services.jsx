import { useEffect } from "react";

const services = [
  {
    title: "Data & AI",
    description:
      "We help organizations unlock value from their data using advanced analytics, machine learning, and AI-driven solutions that support informed decision-making.",
  },
  {
    title: "Advanced Analytics",
    description:
      "From predictive models to real-time dashboards, we design analytics solutions that move beyond reporting to deliver actionable insights.",
  },
  {
    title: "Cloud & Architecture",
    description:
      "We design and implement secure, scalable cloud architectures that support long-term growth, resilience, and operational efficiency.",
  },
  {
    title: "Digital Transformation",
    description:
      "We modernize legacy systems and operating models, enabling organizations to adopt new technologies while minimizing disruption.",
  },
  {
    title: "Energy & Infrastructure",
    description:
      "We provide engineering and program management expertise across energy, utilities, and infrastructure projects in regulated environments.",
  },
  {
    title: "Program & Delivery Management",
    description:
      "We bring structure and clarity to complex initiatives, ensuring alignment between technical execution and business objectives.",
  },
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="
      bg-gradient-to-br
      from-[#020617]
      via-[#0b1220]
      to-[#0f172a]
      text-slate-300
      pt-32
      pb-32
    ">
      <div className="max-w-7xl mx-auto px-6">

        {/* HERO */}
        <div className="max-w-3xl mb-24">
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Our Services
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            We partner with organizations to design, build, and deliver
            technology solutions that are scalable, secure, and aligned with
            long-term business goals.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
          {services.map((service) => (
            <div
              key={service.title}
              className="
                rounded-xl
                p-8
                bg-white/[0.02]
                border border-white/10
                hover:bg-white/[0.04]
                hover:border-white/20
                transition-all duration-300
              "
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* HOW WE WORK */}
        <div className="max-w-4xl mb-32">
          <h2 className="text-2xl font-semibold text-slate-100 mb-8">
            How We Work
          </h2>

          <div className="space-y-6 text-slate-400 leading-relaxed">
            <p>
              We begin by understanding your business context, technical
              constraints, and strategic objectives.
            </p>
            <p>
              Our team designs solutions that balance performance, scalability,
              and operational simplicity, validating decisions early to reduce
              risk.
            </p>
            <p>
              We deliver incrementally and collaboratively, ensuring systems
              are production-ready and adaptable to future needs.
            </p>
          </div>
        </div>

     {/* CTA */}
<div className="mt-32">
  <div
    className="
      max-w-7xl
      mx-auto
      px-8
      py-12
      rounded-2xl
      bg-[#020617]/70
      border border-white/10
      backdrop-blur-sm
      flex
      flex-col
      md:flex-row
      items-start
      md:items-center
      justify-between
      gap-6
    "
  >
    <div>
      <h3 className="text-2xl font-semibold text-white mb-2">
        Let’s work together
      </h3>
      <p className="text-slate-400 text-base">
        Talk to us about your next initiative.
      </p>
    </div>

    <a
      href="/contact"
      className="
        inline-flex
        items-center
        justify-center
        px-8
        py-4
        bg-secondary
        text-black
        font-semibold
        rounded-lg
        hover:opacity-90
        transition
        shrink-0
      "
    >
      Contact Us
    </a>
  </div>
</div>


      </div>
    </section>
  );
};

export default Services;
