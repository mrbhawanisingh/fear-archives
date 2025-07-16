import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-90 text-gray-400 py-10 px-6 border-t border-red-900 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* LOGO + TAGLINE */}
        <div>
          <h2 className="text-2xl font-creepy text-bloodRed mb-2">☠️ Fear Archives</h2>
          <p className="text-sm italic">
            Where darkness lives and stories never die.
          </p>
        </div>

        {/* MAIN LINKS */}
        <div>
          <h3 className="text-lg text-white mb-2">Explore</h3>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:text-bloodRed">Home</Link></li>
            <li><Link to="/read" className="hover:text-bloodRed">Read Stories</Link></li>
            <li><Link to="/solve" className="hover:text-bloodRed">Solve Mysteries</Link></li>
            <li><Link to="/submit" className="hover:text-bloodRed">Submit Story</Link></li>
            <li><Link to="/login" className="hover:text-bloodRed">Login</Link></li>
          </ul>
        </div>

        {/* LEGAL LINKS */}
        <div>
          <h3 className="text-lg text-white mb-2">Info</h3>
          <ul className="space-y-1">
            <li><Link to="/about" className="hover:text-bloodRed">About Us</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-bloodRed">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-bloodRed">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT LINE */}
      <div className="mt-10 text-center text-xs text-gray-600 border-t border-red-900 pt-4">
        <p>© {new Date().getFullYear()} Fear Archives. All rights reserved. 👁 Beware what you read...</p>
      </div>
    </footer>
  );
};

export default Footer;
