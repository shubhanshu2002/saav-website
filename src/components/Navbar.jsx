import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  // SCROLL STATE
  const [scrolled, setScrolled] = useState(false);

  // DESKTOP STATES
  const [servicesOpenDesktop, setServicesOpenDesktop] = useState(false);
  const [companyOpenDesktop, setCompanyOpenDesktop] = useState(false);
  const [careersOpenDesktop, setCareersOpenDesktop] = useState(false); // NEW

  // MOBILE STATES
  const [servicesOpenMobile, setServicesOpenMobile] = useState(false);
  const [companyOpenMobile, setCompanyOpenMobile] = useState(false);
  const [careersOpenMobile, setCareersOpenMobile] = useState(false); // NEW

  const closeTimeoutRef = useRef(null);

  /* ---------- SCROLL HANDLER ---------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------- LOCK BODY SCROLL (MOBILE) ---------- */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  /* ---------- CLOSE MOBILE MENU ON ROUTE CHANGE ---------- */
  useEffect(() => {
    setIsOpen(false);
    setServicesOpenMobile(false);
    setCompanyOpenMobile(false);
    setCareersOpenMobile(false); // NEW
  }, [location.pathname]);

  /* ---------- DESKTOP HANDLERS ---------- */
  const openServicesDesktop = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setCompanyOpenDesktop(false);
    setCareersOpenDesktop(false);
    setServicesOpenDesktop(true);
  };

  const openCompanyDesktop = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setServicesOpenDesktop(false);
    setCareersOpenDesktop(false);
    setCompanyOpenDesktop(true);
  };

  const openCareersDesktop = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setServicesOpenDesktop(false);
    setCompanyOpenDesktop(false);
    setCareersOpenDesktop(true);
  };

  const closeDesktopMenu = (setter) => {
    closeTimeoutRef.current = setTimeout(() => {
      setter(false);
    }, 250);
  };

  /* ---------- MOBILE ---------- */
  const closeMobileMenu = () => {
    setIsOpen(false);
    setServicesOpenMobile(false);
    setCompanyOpenMobile(false);
    setCareersOpenMobile(false); // NEW
  };

  /* ---------- ALWAYS SOLID BG ---------- */
  const alwaysBgPages = ["/contact", "/industries", "/capabilities", "/careers"];
  const isAlwaysBg = alwaysBgPages.includes(location.pathname);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled || isAlwaysBg ? "bg-black shadow-lg" : "bg-transparent"}`}
    >
      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <NavLink
          to="/"
          end
          className="text-2xl font-semibold text-blue-500"
          onClick={closeMobileMenu}
        >
          SAAV.
        </NavLink>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-12 text-lg font-medium">
          <li className="relative group">
            <NavLink to="/" end className="text-white">
              Home
            </NavLink>
            <span className="absolute -bottom-1 left-0 h-[2px] bg-blue-600 w-0 group-hover:w-full transition-all duration-300" />
          </li>

          {/* SERVICES */}
          <li
            className="relative group"
            onMouseEnter={openServicesDesktop}
            onMouseLeave={() => closeDesktopMenu(setServicesOpenDesktop)}
          >
            <NavLink to="/industries" className="text-white">
              Services
            </NavLink>
            <span className="absolute -bottom-1 left-0 h-[2px] bg-blue-600 w-0 group-hover:w-full transition-all duration-300" />
          </li>

          {/* COMPANY */}
          <li
            className="relative group"
            onMouseEnter={openCompanyDesktop}
            onMouseLeave={() => closeDesktopMenu(setCompanyOpenDesktop)}
          >
            <NavLink to="/ourcompany" className="text-white">
              Company
            </NavLink>
            <span className="absolute -bottom-1 left-0 h-[2px] bg-blue-600 w-0 group-hover:w-full transition-all duration-300" />
          </li>

          {/* CAREERS */}
          <li
            className="relative group"
            onMouseEnter={openCareersDesktop}
            onMouseLeave={() => closeDesktopMenu(setCareersOpenDesktop)}
          >
            <NavLink to="/careers" className="text-white">
              Careers
            </NavLink>
            <span className="absolute -bottom-1 left-0 h-[2px] bg-blue-600 w-0 group-hover:w-full transition-all duration-300" />
          </li>

          <li className="relative group">
            <NavLink to="/contact" className="text-white">
              Contact
            </NavLink>
            <span className="absolute -bottom-1 left-0 h-[2px] 
            bg-blue-600 w-0 group-hover:w-full transition-all duration-300" />
          </li>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white text-3xl"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#020617] flex flex-col">
          {/* MOBILE HEADER */}
          <div className="flex items-center justify-between px-6 py-5 bg-[#020617]">
            <span className="text-2xl font-semibold text-white">SAAV.</span>
            <button
              onClick={closeMobileMenu}
              className="text-3xl text-white"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* MOBILE LINKS */}
          <div className="flex-1 px-6 py-10 overflow-y-auto">
            <ul className="flex flex-col gap-8 text-xl font-medium text-white">
              <NavLink to="/" end onClick={closeMobileMenu}>
                Home
              </NavLink>



              <button
                className="text-left"
                onClick={() => {
                  setServicesOpenMobile(!servicesOpenMobile);
                  setCompanyOpenMobile(false);
                  setCareersOpenMobile(false);
                }}
              >
                Services
              </button>
              <NavLink to="/careers" end onClick={closeMobileMenu}>
                Careers
              </NavLink>
              

              {servicesOpenMobile && (
                <div className="ml-4 flex flex-col gap-3 text-slate-300 text-lg">
                  <NavLink to="/industries" onClick={closeMobileMenu}>
                    Industries
                  </NavLink>
                  <NavLink to="/capabilities" onClick={closeMobileMenu}>
                    Capabilities
                  </NavLink>
                </div>
              )}

              <button
                className="text-left"
                onClick={() => {
                  setCompanyOpenMobile(!companyOpenMobile);
                  setServicesOpenMobile(false);
                  setCareersOpenMobile(false);
                }}
              >
                Company
              </button>

              <button
                className="text-left"
                onClick={() => {
                  setCareersOpenMobile(!careersOpenMobile);
                  setServicesOpenMobile(false);
                  setCompanyOpenMobile(false);
                }}
              >
                Careers
              </button>

              <NavLink to="/contact" onClick={closeMobileMenu}>
                Contact
              </NavLink>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
