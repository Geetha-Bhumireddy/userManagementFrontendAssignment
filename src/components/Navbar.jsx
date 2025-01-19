import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi"; // Import dark mode icons
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme(); 

  return (
    <nav
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-800 text-white"
      } px-6 py-4 flex justify-between items-center`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <FaUser className="text-2xl" />
        <Link to="/" className="text-xl font-bold">
          UserApp
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-4">
        <Link to="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link to="/users" className="hover:text-gray-300">
          Users
        </Link>
      </div>

      {/* Dark Mode Toggle */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleDarkMode}
          className="text-xl p-2 rounded-full hover:bg-gray-700 flex items-center justify-center"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FiMoon className="text-white" /> : <FiSun className="text-yellow-400" />}
        </button>
        <button className="hidden md:flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          <span>Login</span>
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`absolute top-16 left-0 w-full ${
            darkMode ? "bg-gray-900" : "bg-gray-800"
          } text-white flex flex-col items-center space-y-4 py-4 md:hidden`}
        >
          <Link
            to="/"
            className="hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/users"
            className="hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Users
          </Link>
          <button
            className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Login</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
