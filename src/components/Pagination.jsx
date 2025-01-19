const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
    return (
      <div className="flex justify-center space-x-2 mt-4">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`p-2 rounded ${
              page === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    );
  };
  
  export default Pagination;
  