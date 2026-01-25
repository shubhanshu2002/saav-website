const CareersContent = () => {
  return (
    <section className="bg-white text-slate-900 py-20 px-6 md:px-20 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Join Our Team at SAAV Consulting
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
          At SAAV Consulting, we are building the future of technology, AI, 
          and cloud solutions. We look for passionate, talented individuals 
          ready to innovate and make an impact across industries.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 text-center">
        <div className="p-6 border border-slate-200 rounded-xl hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Growth & Learning</h2>
          <p className="text-slate-600">
            Work on challenging projects, learn from industry experts, and grow your career in a collaborative environment.
          </p>
        </div>
        <div className="p-6 border border-slate-200 rounded-xl hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Innovation & Impact</h2>
          <p className="text-slate-600">
            Contribute to cutting-edge solutions in cloud, data, and AI that make a real difference for our clients worldwide.
          </p>
        </div>
        <div className="p-6 border border-slate-200 rounded-xl hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2">Inclusive Culture</h2>
          <p className="text-slate-600">
            Be part of a team that values diversity, collaboration, and creating an inclusive workplace where everyone can thrive.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg text-slate-700 mb-6">
          Ready to explore opportunities with us? Check our open positions or send your resume to <span className="font-medium text-slate-900">careers@saavconsulting.com</span>.
        </p>
        <a
          href="/careers/openings"
          className="inline-block bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-8 rounded-md transition"
        >
          Explore Openings
        </a>
      </div>
    </section>
  );
};

export default CareersContent;
