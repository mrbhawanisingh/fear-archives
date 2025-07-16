import { useState } from "react";
import { Link } from "react-router-dom";

const galleryImages = [
  `${process.env.PUBLIC_URL}/horror.jpg`,
  `${process.env.PUBLIC_URL}/60e2776a-9f39-48ee-b6b5-49ccd1f98bf1.jpg`,
  `${process.env.PUBLIC_URL}/dark1.jpg`,
  `${process.env.PUBLIC_URL}/dark2.jpg`,
  `${process.env.PUBLIC_URL}/dark3.jpg`,
  `${process.env.PUBLIC_URL}/dark4.jpg`,
];


const GallerySection = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="gallery-section py-16 px-6 bg-black bg-opacity-80 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-creepy text-bloodRed mb-4">📸 Gallery of Shadows</h2>
      <p className="text-gray-300 mb-8 max-w-xl mx-auto italic">Real cursed visuals — some user submitted, some... unknown.</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Shadow ${index + 1}`}
            className="rounded-lg shadow-lg cursor-pointer hover:scale-105 transition"
            onClick={() => setActiveImage(src)}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setActiveImage(null)}
        >
          <img src={activeImage} alt="Zoom" className="max-h-[80vh] max-w-[90vw] rounded shadow-2xl" />
        </div>
      )}

      <Link
        to="/gallery"
        className="inline-block mt-8 bg-bloodRed px-6 py-2 text-white rounded hover:bg-red-800 transition"
      >
        See More Darkness
      </Link>
    </section>
  );
};

export default GallerySection;
