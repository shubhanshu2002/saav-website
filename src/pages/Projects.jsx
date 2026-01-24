const projects = [
  {
    title: "Confidential Data Centers – Energy Delivery & Build",
    location: "Canada",
    description:
      "Program management for the development of Canada’s largest colocation data centers, including 5–6 facilities across Toronto and Quebec. Scope included energy delivery optimization, innovative data center design, permitting and regulatory coordination, and reliable power procurement from utilities. The facilities were designed to be scalable, energy-efficient, secure, and fully compliant with environmental and regulatory requirements.",
    tags: ["Data Centers", "Energy Delivery", "Program Management", "Canada"],
  },
  {
    title: "Confidential Nuclear Power Generation – Fuel Handling Upgrades",
    location: "Canada",
    description:
      "Delivered expert program management services for a CANDU-style nuclear power generation facility. Oversaw the replacement of major fuel handling components and upgrades to generator and turbine auxiliary systems, ensuring strict compliance with safety and regulatory standards while improving operational reliability and long-term sustainability.",
    tags: ["Nuclear Energy", "Program Management", "Infrastructure", "Canada"],
  },
  {
    title: "250MW Solar Farm – EPC & Grid Integration",
    location: "Bhiwadi, India",
    description:
      "Provided comprehensive Engineering, Procurement, and Construction (EPC) services for a 250MW solar power facility, including design, installation, commissioning, and grid interconnection. The project delivered a high-quality renewable energy asset, supporting investor returns and advancing clean energy adoption in the region.",
    tags: ["Solar Energy", "EPC", "Renewables", "India"],
  },
  {
    title: "Confidential Battery Energy Storage Systems (BESS)",
    location: "USA",
    description:
      "Delivered specialized engineering and source selection consultancy for a confidential Battery Energy Storage System installation. Scope included detailed technical evaluations, system design support, and strategic guidance on technology and vendor selection to ensure a reliable, scalable, and efficient energy storage solution.",
    tags: ["Energy Storage", "BESS", "Engineering", "USA"],
  },
  {
    title: "Community Smart Grid Program",
    location: "Atlantic Canada",
    description:
      "Supported a pioneering community Smart Grid initiative featuring a community solar farm, net-zero building retrofits, and distributed energy resources across approximately 500 homes. The project integrated rooftop solar, battery storage, and smart heating solutions, enhancing grid resilience, reducing emissions, and positioning the community as a leader in sustainable energy.",
    tags: ["Smart Grid", "Renewables", "Community Energy", "Canada"],
  },
  {
    title: "Compressed Air & Nitrogen Gas Systems",
    location: "India",
    description:
      "Delivered a comprehensive industrial utility solution including the design and installation of compressed air systems and nitrogen gas generation infrastructure. Scope included MS, galvanized, and PVC piping networks, ensuring reliable utility distribution, improved efficiency, and long-term operational safety.",
    tags: ["Industrial Utilities", "Compressed Air", "Nitrogen Systems", "India"],
  },
  {
    title: "Oil & Gas Program Management",
    location: "UAE",
    description:
      "Provided end-to-end program management support for a major Oil & Gas client, including project charter development, detailed scheduling, procurement planning, and resource management. Ensured alignment with strategic objectives and regulatory requirements, enabling efficient execution and on-time delivery.",
    tags: ["Oil & Gas", "Program Management", "Infrastructure", "UAE"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#020617] text-slate-300 pt-32 pb-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Projects
          </h1>
          <p className="text-lg leading-relaxed text-slate-400">
            A selection of infrastructure, energy, and industrial projects
            reflecting our experience in delivering complex programs across
            global markets.
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                border border-white/10
                rounded-xl
                p-8
                hover:border-white/20
                transition
              "
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-slate-500 mb-4">
                {project.location}
              </p>

              <p className="text-sm leading-relaxed text-slate-400 mb-6">
                {project.description}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
