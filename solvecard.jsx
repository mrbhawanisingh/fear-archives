import { Link } from "react-router-dom";

const SolveCard = ({ title, hint, link }) => {
  return (
    <div className="solve-card bg-black border border-red-700 p-4 rounded text-white">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{hint}</p>
      <Link to={link}>
        <button className="solve-btn bg-bloodRed px-4 py-2 rounded hover:bg-red-800">
          Solve Now
        </button>
      </Link>
    </div>
  );
};

export default SolveCard;
