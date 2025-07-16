// import { Link } from "react-router-dom";

// const StoryCard = ({ title, excerpt, image, link }) => {
//   return (
//     <div className="story-card bg-black bg-opacity-50 rounded-xl shadow-lg hover:shadow-red-900 transition overflow-hidden">
//       <img
//         src={image}
//         alt="story banner"
//         className="story-card-img"
//       />
//       <div className="p-6">
//         <h3 className="story-card-title">{title}</h3>
//         <p className="story-card-excerpt">{excerpt}</p>
//         <Link
//           to={link}
//           className="story-card-btn"
//         >
//           Read More
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default StoryCard;
// import { Link } from "react-router-dom";

// const StoryCard = ({ title, excerpt, image, link }) => {
//   return (
//     <div className="story-card bg-black bg-opacity-50 rounded-xl shadow-lg hover:shadow-red-900 transition overflow-hidden">
//       <img
//         src={image}
//         alt="story banner"
//         className="story-card-img"
//       />
//       <div className="p-6">
//         <h3 className="story-card-title">{title}</h3>
//         <p className="story-card-excerpt">{excerpt}</p>
//         <Link
//           to={link}
//           className="story-card-btn"
//         >
//           Read More
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default StoryCard;
import { Link } from "react-router-dom";

const StoryCard = ({ title, excerpt, image, link }) => {
  return (
    <div className="story-card bg-black bg-opacity-50 rounded-xl shadow-lg hover:shadow-red-900 transition overflow-hidden">
      <img
        src={image}
        alt="story banner"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-bloodRed mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-4">{excerpt}</p>
        <Link
          to={link}
          className="inline-block bg-bloodRed text-white px-4 py-2 rounded hover:bg-red-800 transition"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default StoryCard;

