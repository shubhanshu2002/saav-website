import missionImg from "../assets/company/mission.webp";
import approachImg from "../assets/company/approach.webp";
import ourCompanyImg from "../assets/company/ourcompany.png";

const OurCompany = () => {
  return (
    <main className="bg-slate-50 text-slate-900">

    {/* HERO */}
<section className="relative w-full">
  <div
    className="
      relative w-full
      h-[60vh] md:h-[70vh] lg:h-[75vh]
      bg-cover bg-center
      flex items-center
    "
    style={{
      backgroundImage: `url(${ourCompanyImg})`,
      backgroundPosition: "center right", // 🔥 key fix
    }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-slate-900/65" />

    {/* Content */}
    <div className="relative z-10 max-w-6xl mx-auto px-6">
      <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
        Our Company
      </h1>

      <p className="text-lg md:text-xl text-slate-200 max-w-3xl leading-relaxed">
        SAAV Consulting is a technology consulting firm committed to helping
        organizations modernize, innovate, and grow through thoughtful use
        of IT, data, cloud, and artificial intelligence.
      </p>
    </div>
  </div>
</section>

      {/* OUR MISSION */}
      <section id="mission" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-medium mb-6">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Our mission is to deliver consulting and engineering services that
              help organizations unlock value from their technology investments.
              We focus on aligning technology with business priorities to drive
              measurable outcomes and long-term growth.
            </p>
          </div>

          <img
            src={missionImg}
            alt="Technology strategy and mission"
            className="rounded-xl border border-slate-200 w-full"
          />
        </div>
      </section>

      {/* OUR APPROACH */}
      <section id="approach" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <img
            src={approachImg}
            alt="Consulting approach"
            className="rounded-xl border border-slate-200 w-full"
          />

          <div>
            <h2 className="text-3xl font-medium mb-10">Our Approach</h2>

            <ul className="space-y-4">
              {[
                "Assess business objectives, technology landscape, and constraints",
                "Design scalable and practical solutions aligned with strategy",
                "Deliver solutions using disciplined engineering practices",
                "Continuously optimize systems for long-term success",
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
      </section>

      {/* WHY CHOOSE SAAV */}
      <section id="why" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-medium mb-12">Why Choose SAAV</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-lg font-medium mb-2">Client-Centric Expertise</h3>
              <p className="text-slate-600 leading-relaxed">
                We work closely with stakeholders to understand challenges and
                deliver tailored solutions with measurable impact.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Innovation with Purpose</h3>
              <p className="text-slate-600 leading-relaxed">
                We apply modern technologies responsibly, ensuring solutions are
                practical, secure, and scalable.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">End-to-End Delivery</h3>
              <p className="text-slate-600 leading-relaxed">
                From strategy through execution, we remain engaged to ensure
                outcomes are delivered and sustained.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PEOPLE */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-medium mb-6">Our People</h2>
          <p className="text-slate-600 leading-relaxed text-lg max-w-4xl">
            Our team brings together consultants, engineers, and technologists
            with experience across IT strategy, cloud platforms, data systems,
            and artificial intelligence.
          </p>
        </div>
      </section>

      {/* PRESENCE */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-medium mb-6">Our Presence</h2>
          <p className="text-slate-600 leading-relaxed text-lg max-w-4xl">
            SAAV Consulting operates with a flexible delivery model, working with
            clients across locations through a mix of on-site and remote
            collaboration.
          </p>
        </div>
      </section>

    </main>
  );
};

export default OurCompany;
