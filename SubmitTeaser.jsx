import { Link } from "react-router-dom";

const SubmitTeaser = () => {
  return (
    <section className="submit-teaser relative text-center py-20 px-6 overflow-hidden">
      <div className="teaser-bg absolute inset-0 z-0"></div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-creepy text-bloodRed mb-4">
          🗣️ Ever felt the unseen?
        </h2>
        <p className="text-gray-300 mb-6">
          Real horror lives in the shadows... Maybe it’s your turn to expose it.
        </p>
        <Link
          to="/submit"
          className="bg-bloodRed px-6 py-2 rounded text-white hover:bg-red-800 transition"
        >
          Share Your Horror
        </Link>
      </div>
    </section>
  );
};

export default SubmitTeaser;
