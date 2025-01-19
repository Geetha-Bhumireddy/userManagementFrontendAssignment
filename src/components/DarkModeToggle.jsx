import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const DarkModeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      className="p-2 rounded-full focus:outline-none transition-colors duration-300"
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
    >
      {isDarkMode ? (
        <FaSun className="text-yellow-400 text-2xl" />
      ) : (
        <FaMoon className="text-gray-600 text-2xl" />
      )}
    </button>
  );
};

export default DarkModeToggle;
