
import './Pagination.css';

export default function Pagination({ usersPerPage, length, handlePagination, currentPage }) {
  const totalPages = Math.ceil(length / usersPerPage);

  const generatePages = () => {
    const pages = [];

    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1); 

    if (currentPage <= 4) {
      pages.push(2, 3, 4);
      pages.push("...");
    } else if (currentPage >= totalPages - 3) {
      pages.push("...");
    } else {
      pages.push("...");
      pages.push(currentPage - 1, currentPage, currentPage + 1);
      pages.push("...");
    }

    pages.push(totalPages - 1, totalPages); 
    return pages;
  };

  const pages = generatePages();

  const handlePrev = () => {
    if (currentPage > 1) {
      handlePagination(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePagination(currentPage + 1);
    }
  };

  return (
    <div className="pagination  justify-content-center">
      <button onClick={handlePrev} disabled={currentPage === 1} className="nav-button">
        Prev
      </button>

      {pages.map((page, index) =>
        page === "..." ? (
          <span key={`dots-${index}`} className="dots">...</span>
        ) : (
          <button
            key={page}
            onClick={() => handlePagination(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </button>
        )
      )}

      <button onClick={handleNext} disabled={currentPage === totalPages} className="nav-button">
        Next
      </button>
    </div>
  );
}













// import React from "react";
// import './Pagination.css'

// export default function Pagination(props) {
//   let { usersPerPage, length, handlePagination, currentPage } = props;
//   const paginationNumbers = [];

//   for (let i = 1; i <= Math.ceil(length / usersPerPage); i++) {
//     paginationNumbers.push(i);
//   }

//   return (
//     <div className="pagination">
//       {paginationNumbers.map((pageNumber) => (
//         <button
//           key={pageNumber}
//           onClick={() => handlePagination(pageNumber)}
//           className={currentPage === pageNumber ? "active" : ""}
//         >
//           {pageNumber}
//         </button>
//       ))}
//     </div>
//   );
// }

