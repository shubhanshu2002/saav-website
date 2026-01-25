// import { useEffect, useState } from "react";

// const ScrollToTop = () => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setVisible(window.scrollY > 400);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   if (!visible) return null;

//   return (
//     <button
//       onClick={scrollToTop}
//       aria-label="Scroll to top"
//       className="
//         fixed bottom-6 right-6 z-50
//         h-12 w-12
//         flex items-center justify-center
//         rounded-full
//         bg-blue-500 text-white
//         shadow-lg shadow-blue-500/30
//         transition-all duration-300
//         hover:bg-blue-600 hover:scale-110
//         focus:outline-none
//       "
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-5 w-5"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={2.5}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M5 15l7-7 7 7"
//         />
//       </svg>
//     </button>
//   );
// };

// export default ScrollToTop;

import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 50); // show after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-50
        h-12 w-12
        flex items-center justify-center
        rounded-full
        bg-blue-500 text-white
        shadow-lg shadow-blue-500/30
        transition-opacity duration-300 transform
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
        hover:bg-blue-600 hover:scale-110
        focus:outline-none
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
