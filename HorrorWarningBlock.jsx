import { Link } from "react-router-dom";

const HorrorWarningBlock = () => {
  return (
    <div className="horror-warning bg-black bg-opacity-60 p-6 rounded-xl text-center border border-red-700 mt-10">
      {/* <img
        src="/8b5dcd52-8c65-49d2-9bd9-9dbfedd2f751.jpg"
        alt="18+ Warning"
        className="mx-auto w-20 mb-4 animate-pulse"
      /> */}
      <img src={`${process.env.PUBLIC_URL}//8b5dcd52-8c65-49d2-9bd9-9dbfedd2f751.jpg`} alt="18+ Warning"
        className="mx-auto w-20 mb-4 animate-pulse"/>
      <h2 className="text-2xl text-bloodRed font-creepy mb-2">
        ⚠️ Enter At Your Own Risk
      </h2>
      <p className="text-gray-300 text-sm mb-4 max-w-xl mx-auto">
        This section contains **real** horror experiences, visuals, and stories not suitable for children. Viewer discretion is advised. Are you 18+?
      </p>
      <Link
        to="/theage"
        className="bg-bloodRed text-white px-6 py-2 rounded hover:bg-red-800 transition"
      >
        I'm 18+ → Show Me
      </Link>
    </div>
  );
};

export default HorrorWarningBlock;
