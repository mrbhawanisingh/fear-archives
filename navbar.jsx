import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("userId");

  const handleLogout = () => {
    localStorage.removeItem("userId");
    setIsOpen(false);
    navigate("/");
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-black bg-opacity-70 backdrop-blur-md text-white sticky top-0 z-50 shadow-xl border-b border-red-900">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-creepy text-bloodRed animate-pulse hover:text-red-700 transition"
        >
          ☠️ Fear Archives
        </Link>

        {/* Hamburger icon - mobile */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm font-semibold text-gray-300">
          <Link to="/read" className="hover:text-bloodRed">Read</Link>
          <Link to="/solve" className="hover:text-bloodRed">Solve</Link>
          <Link to="/submit" className="hover:text-bloodRed">Submit Your Story</Link>
          <Link to="/user-stories" className="hover:text-bloodRed">User Stories</Link>

          {!isLoggedIn ? (
            <Link to="/login" className="hover:text-bloodRed">Login</Link>
          ) : (
            <button onClick={handleLogout} className="hover:text-bloodRed">Logout</button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col space-y-3 text-sm font-semibold text-gray-300">
          <Link to="/read" onClick={closeMenu} className="hover:text-bloodRed">Read</Link>
          <Link to="/solve" onClick={closeMenu} className="hover:text-bloodRed">Solve</Link>
          <Link to="/submit" onClick={closeMenu} className="hover:text-bloodRed">Submit</Link>
          <Link to="/user-stories" onClick={closeMenu} className="hover:text-bloodRed">User Stories</Link>

          {!isLoggedIn ? (
            <Link to="/login" onClick={closeMenu} className="hover:text-bloodRed">Login</Link>
          ) : (
            <button onClick={handleLogout} className="text-left hover:text-bloodRed">Logout</button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
