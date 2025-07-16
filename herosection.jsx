import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center items-center text-center text-white px-4 overflow-hidden">
      {/* Fog layer */}
      <div className="absolute inset-0 bg-black/90 z-0" />
      <div
        className="absolute inset-0 bg-cover bg-repeat opacity-25 z-0"
        style={{ backgroundImage: 'url("/images/fog.jpg")' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-creepy text-bloodRed mb-6 animate-glitch drop-shadow-xl">
          Step into the Shadows...
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Uncover haunted tales, solve dark riddles, and write your own twisted story.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/read"
            className="bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all"
          >
            Start Reading
          </Link>
          <Link
            to="/submit"
            className="border border-red-700 text-red-500 hover:bg-red-700 hover:text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all"
          >
            Submit Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
