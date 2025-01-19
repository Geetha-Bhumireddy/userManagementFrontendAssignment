import React from "react";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";

const UserCard = ({ user }) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105 border ${
        isDarkMode
          ? "bg-gray-800 text-gray-200 border-gray-700"
          : "bg-white text-gray-900 border-gray-200"
      }`}
    >
      <h3 className="text-xl font-semibold">{user.name}</h3>
      <div className="flex items-center mt-2">
        <span className="font-medium">Email:</span>
        <p className="ml-2">{user.email}</p>
      </div>
      <div className="flex items-center mt-2">
        <span className="font-medium">City:</span>
        <p className="ml-2">{user.address.city}</p>
      </div>
      <Link
        to={`/users/${user.id}`}
        className={`mt-4 inline-flex items-center font-medium p-2 rounded-md transition-colors ${
          isDarkMode
            ? "text-indigo-300 bg-gray-700 hover:text-indigo-400"
            : "text-indigo-600 bg-indigo-100 hover:text-indigo-800"
        }`}
      >
        <span>View Details</span>
        <HiArrowRight className="ml-2" />
      </Link>
    </div>
  );
};

export default UserCard;
