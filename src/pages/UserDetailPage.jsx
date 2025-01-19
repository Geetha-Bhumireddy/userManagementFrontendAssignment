import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useTheme } from "../context/ThemeContext";

const UserDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const { data: user, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin border-indigo-600 rounded-full w-16 h-16 border-t-4 border-transparent"></div>
      </div>
    );
  }

  if (error)
    return <p className="text-center text-red-600">Error: {error}</p>;

  return (
    <div
      className={`max-w-4xl mx-auto p-6 shadow-lg rounded-lg space-y-6 mt-5 ${
        isDarkMode
          ? "bg-gray-800 text-gray-200"
          : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-3xl font-semibold">{user.name}</h2>
      <p className="text-lg">
        <span className="font-medium">Email: </span>
        {user.email}
      </p>
      <p className="text-lg">
        <span className="font-medium">Phone: </span>
        {user.phone}
      </p>
      <p className="text-lg">
        <span className="font-medium">Company: </span>
        {user.company.name}
      </p>
      <p className="text-lg">
        <span className="font-medium">Website: </span>
        {user.website}
      </p>

      <button
        className={`py-2 px-3 rounded-lg shadow-md mt-8 ${
          isDarkMode
            ? "bg-indigo-500 hover:bg-indigo-600 text-gray-200"
            : "bg-indigo-600 hover:bg-indigo-700 text-white"
        }`}
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
};

export default UserDetailPage;
