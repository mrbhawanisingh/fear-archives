const AgeGate = ({ onConfirm }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg bg-zinc-900 rounded-2xl border border-red-700 p-6 text-center shadow-2xl animate-fade-in">
        <img
          src={`${process.env.PUBLIC_URL}/images/pop.png`}
          alt="18+ warning"
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
          18+ Content Warning
        </h1>
        <p className="text-white mb-6 text-base leading-relaxed">
          This site contains mature horror visuals, nudity, and disturbing content.
          Viewer discretion is strongly advised.
        </p>
        <button
          onClick={onConfirm}
          className="bg-red-700 hover:bg-red-800 text-white font-medium px-6 py-3 rounded-xl transition-all"
        >
          I Am 18+ — Enter if You Dare
        </button>
      </div>
    </div>
  );
};

export default AgeGate;
