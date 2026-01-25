import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-slate-400 border-t border-white/10">
      {/* <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SAAV",
              "url": "https://www.saav.com",
              "logo": "https://www.saav.com/logo.png",
              "sameAs": [
                "https://www.linkedin.com/company/saav",
                "https://twitter.com/saav"
              ]
            }
          `}
        </script>
      </Helmet> */}

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* BRAND */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold text-white tracking-wide">
            SAAV.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed">
            We help businesses transform through modern technology, scalable
            systems, and strategic engineering solutions.
          </p>
        </div>

        {/* NAVIGATION */}
        <nav aria-label="Company Navigation">
          <h3 className="text-white font-medium mb-4 text-sm uppercase tracking-wide">
            Company
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/ourcompany" className="hover:text-white transition">
                Our Company
              </Link>
            </li>
            {/* <li>
              <Link to="/careers" className="hover:text-white transition">
                Careers
              </Link>
            </li> */}
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* SERVICES */}
        <nav aria-label="Services Navigation">
          <h3 className="text-white font-medium mb-4 text-sm uppercase tracking-wide">
            Services
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/industries" className="hover:text-white transition">
                Industries
              </Link>
            </li>
            <li>
              <Link to="/capabilities" className="hover:text-white transition">
                Capabilities
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6">
        <p className="text-center text-xs text-slate-500">
          © {new Date().getFullYear()} SAAV. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
