import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import logo from "../assets/logosaav.png";

const Navbar = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  // SCROLL STATE
  const [scrolled, setScrolled] = useState(false);

  // MOBILE STATES
  const [servicesOpenMobile, setServicesOpenMobile] = useState(false);

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

  /* ---------- DESKTOP HANDLERS ---------- */
  const openServicesDesktop = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
  };

  const openCompanyDesktop = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
  };

  const openCareersDesktop = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
  };

  /* ---------- MOBILE ---------- */
  const closeMobileMenu = () => {
    setIsOpen(false);
    setServicesOpenMobile(false);
  };

  /* ---------- ALWAYS SOLID BG ---------- */
  const alwaysBgPages = [
    "/contact",
    "/industries",
    "/capabilities",
    "/careers",
  ];
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
          <img src={logo} alt="" className="w-[100px]" />

          {/* Saav */}
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
          {/* SERVICES */}
          <li className="relative group">
  {/* Trigger */}
  <span className="relative inline-block text-white cursor-pointer pb-1">
    Services
    {/* underline */}
    <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
  </span>

  {/* DROPDOWN */}
  <div
    className="
      absolute left-1/2 top-full z-50 mt-4 w-56
      -translate-x-1/2
      rounded-xl bg-[#020617]
      border border-white/10
      shadow-xl
      opacity-0 invisible
      translate-y-2 scale-95
      transition-all duration-200 ease-out
      group-hover:visible
      group-hover:opacity-100
      group-hover:translate-y-0
      group-hover:scale-100
    "
  >
    <NavLink
      to="/industries"
      className="
        block px-5 py-3 text-white
        hover:bg-blue-600/10
        transition-colors
        rounded-t-xl
      "
    >
      Industries
    </NavLink>

    <NavLink
      to="/capabilities"
      className="
        block px-5 py-3 text-white
        hover:bg-blue-600/10
        transition-colors
        rounded-b-xl
      "
    >
      Capabilities
    </NavLink>
  </div>
</li>

          {/* COMPANY */}
          <li className="relative group" onMouseEnter={openCompanyDesktop}>
            <NavLink to="/ourcompany" className="text-white">
              Company
            </NavLink>
            <span className="absolute -bottom-1 left-0 h-[2px] bg-blue-600 w-0 group-hover:w-full transition-all duration-300" />
          </li>

          {/* CAREERS */}
          <li className="relative group" onMouseEnter={openCareersDesktop}>
            <NavLink to="/careers" className="text-white">
              Careers
            </NavLink>
            <span className="absolute -bottom-1 left-0 h-[2px] bg-blue-600 w-0 group-hover:w-full transition-all duration-300" />
          </li>

          <li className="relative group">
            <NavLink to="/contact" className="text-white">
              Contact
            </NavLink>
            <span
              className="absolute -bottom-1 left-0 h-[2px] 
            bg-blue-600 w-0 group-hover:w-full transition-all duration-300"
            />
          </li>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white text-3xl"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
          style={{
            position: "absolute",
            right: "14px",
            bottom: "17px",
          }}
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#020617] flex flex-col">
          {/* MOBILE HEADER */}
          <div className="flex items-center justify-between px-6 py-5 bg-[#020617]">
            {/* <span className="text-2xl font-semibold text-white">SAAV.</span> */}
            <img src={logo} alt="" className="w-[100px]" />

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
                }}
              >
                Services
              </button>
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
              <NavLink to="/careers" end onClick={closeMobileMenu}>
                Careers
              </NavLink>

              <NavLink
                to="/ourcompany"
                onClick={closeMobileMenu}
                className="text-white"
              >
                Company
              </NavLink>

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
