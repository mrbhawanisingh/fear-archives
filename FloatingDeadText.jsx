import { useEffect, useState } from "react";

const quotes = [
  "You’re next...",
  "She’s still watching.",
  "Death doesn’t knock, it whispers...",
  "Don’t turn around...",
  "He never left the room.",
  "The mirror lied.",
  "You weren’t alone last night.",
];

const FloatingDeadText = () => {
  const [floatingQuotes, setFloatingQuotes] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const quote = quotes[Math.floor(Math.random() * quotes.length)];
      const id = Date.now();

      setFloatingQuotes((prev) => [
        ...prev,
        { id, text: quote, top: Math.random() * 90, left: Math.random() * 90 },
      ]);

      // Remove after 10 sec
      setTimeout(() => {
        setFloatingQuotes((prev) => prev.filter((q) => q.id !== id));
      }, 10000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-text-container pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {floatingQuotes.map((quote) => (
        <span
          key={quote.id}
          className="floating-quote text-white text-sm opacity-10 animate-float"
          style={{
            position: "absolute",
            top: `${quote.top}%`,
            left: `${quote.left}%`,
            whiteSpace: "nowrap",
          }}
        >
          {quote.text}
        </span>
      ))}
    </div>
  );
};

export default FloatingDeadText;
