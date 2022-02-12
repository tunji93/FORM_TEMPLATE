import React from "react";
import Filter from "./Filter";
import "../../styles/_SortBy.scss";

const SortBy = ({ options }) => {
  return (
    <div className="sort-by">
      <span className="sort-by__label">Sort By:</span>
      <Filter name="Category" options={options.category}></Filter>
      <Filter name="Order" options={options.order}></Filter>
      <Filter name="Date" options={options.date}></Filter>
    </div>
  );
};

export default SortBy;
