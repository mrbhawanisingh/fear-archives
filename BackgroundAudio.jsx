import { useState, useRef } from "react";

const BackgroundAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} loop>
        <source
          src={`${process.env.PUBLIC_URL}/the_conjuring.mp3`}
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>

      <button
        onClick={toggleAudio}
        className="bg-bloodRed text-white px-4 py-2 rounded shadow-lg hover:bg-red-800 transition"
      >
        {isPlaying ? "🔇 Stop Sound" : "🔊 Play Ambient Horror FX"}
      </button>
    </div>
  );
};

export default BackgroundAudio;
