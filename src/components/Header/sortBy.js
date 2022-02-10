import React from "react";
import Filter from "./Filter";
import "../../styles/_SortBy.scss";

const SortBy = () => {
  const options = {
    category: [
      { name: "All", value: "all", action: null },
      { name: "Education", value: "education", action: null },
      { name: "E-commerce", value: "e-commerce", action: null },
      { name: "Health", value: "health", action: null },
    ],
    order: [
      { name: "Default", value: "default", action: null },
      { name: "Ascending", value: "ascending", action: null },
      { name: "Descending", value: "descending", action: null },
    ],
    date: [
      { name: "Default", value: "default", action: null },
      { name: "Ascending", value: "ascending", action: null },
      { name: "Descending", value: "descending", action: null },
    ],
  };
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
