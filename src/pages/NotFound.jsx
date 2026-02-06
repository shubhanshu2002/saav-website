import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom"; // Assuming React Router is used; adjust if needed

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 – Page Not Found | SAAV</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 font-sans">
        {/* Animated 404 */}
        <div className="relative">
          <div className="text-8xl md:text-9xl font-black bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
            404
          </div>
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
        </div>

        <h3 className="mt-6 text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
          Page Not Found
        </h3>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            to="/"
            className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 hover:border-white transition-all duration-300 transform hover:scale-105"
          >
            Go Back
          </button>
        </div>

        <p className="mt-12 text-sm text-gray-500 text-center">
          Need help? <a href="/contact" className="underline hover:text-white transition-colors">Contact us</a>
        </p>
      </div>
    </>
  );
};

export default NotFound;
