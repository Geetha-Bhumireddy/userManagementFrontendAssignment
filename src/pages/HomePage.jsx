import { useState } from "react";
import { FaSearch, FaSort } from "react-icons/fa";
import UserCard from "../components/UserCard";
import Pagination from "../components/Pagination";
import { useFetch } from "../hooks/useFetch";
import { useTheme } from "../context/ThemeContext";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const { isDarkMode } = useTheme();

  const { data: users, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const filteredUsers = users
    .filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  return (
    <div
      className={`p-6 ${
        isDarkMode ? "bg-gray-900 text-gray-200" : "bg-white text-gray-900"
    }`}
  >
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center border p-2 rounded w-full max-w-xs">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search by name"
          className={`w-full outline-none p-3 ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
          }`}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex items-center border p-2 rounded ml-4">
        <FaSort className="text-gray-500 mr-2" />
        <select
          onChange={(e) => setSortOrder(e.target.value)}
          className={`outline-none bg-transparent ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          <option value="asc">Sort A-Z</option>
          <option value="desc">Sort Z-A</option>
        </select>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {paginatedUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>

    <Pagination
      totalItems={filteredUsers.length}
      itemsPerPage={usersPerPage}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
    />
  </div>
);
};

export default HomePage;

