import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Home from "../pages/Home";

const About = lazy(() => import("../pages/About"));
const Projects = lazy(() => import("../pages/Projects"));
const Testimonials = lazy(() => import("../pages/Testimonials"));
const Contact = lazy(() => import("../pages/Contact"));
const Services = lazy(() => import("../pages/Services"));
const Industries = lazy(() => import("../pages/Industries"));
const Capabilities = lazy(() => import("../pages/Capabilities"));
const OurCompany = lazy(() => import("../pages/OurCompany"));
const Careers = lazy(() => import("../pages/Careers"));
const NotFound = lazy(() => import("../pages/NotFound"));

const AppRoutes = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/ourcompany" element={<OurCompany />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
