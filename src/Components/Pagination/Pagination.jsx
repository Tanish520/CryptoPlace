import React, { useContext } from "react";
import "../Pagination/Pagination.css";
import { CoinContext } from "../../Context/CoinContext";
const Pagination = () => {
  const { currentPage, setCurrentPage } = useContext(CoinContext);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  return (
    <div className="pagination">
      {Array.from({ length: 6 }, (_, index) => (
        <a
          key={index}
          href="#"
          className={currentPage === index + 1 ? "active" : ""}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </a>
      ))}
    </div>
  );
};

export default Pagination;
