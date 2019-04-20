import React from "react";

const Pagination = props => {
  return (
    <ul className="pagination">
      <li className="page-item">
        <a href="page1" className="page-link">
          1
        </a>
      </li>
      <li className="page-item">
        <a href="page2" className="page-link">
          2
        </a>
      </li>
      <li className="page-item">
        <a href="page3" className="page-link">
          3
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
