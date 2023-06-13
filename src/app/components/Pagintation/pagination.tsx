"use client";
import { useState } from "react";
import styles from "./pagination.module.scss";

const Pagination = ({ totalPages, setPageNum, pageNum }: any) => {
  const [currentPage, setCurrentPage] = useState(pageNum);

  const goToPage = (page: any) => {
    setCurrentPage(pageNum);
    setPageNum(page);
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={i === currentPage ? styles.active : ""}
          onClick={() => goToPage(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return <div className={styles.pagination}>{renderPagination()}</div>;
};

export default Pagination;
