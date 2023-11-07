import React, { useState, useEffect } from "react";
import BootstrapPagination from "react-bootstrap/Pagination";
import { useNavigate } from "react-router-dom";
import styles from "./Pagination.module.css";

const Pagination = ({ active = 1, baseUrl }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const newItems = [];
    for (let number = 1; number <= 5; number++) {
      newItems.push(
        <BootstrapPagination.Item
          key={number}
          active={number === Number(active)}
          id={active ? styles.paginationActive : null}
          onClick={() => {
            navigate(`${baseUrl}?page=${number}`);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          {number}
        </BootstrapPagination.Item>
      );
    }
    setItems(newItems);
  }, [active, baseUrl, navigate]);

  return (
    <div className="d-flex justify-content-center">
      <BootstrapPagination className={styles.pagination}>
        {items}
      </BootstrapPagination>
    </div>
  );
};

export default Pagination;