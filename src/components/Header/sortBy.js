import React from "react";
import Filter from "./Filter";
import "../../styles/_SortBy.scss";

const SortBy = ({ options,call }) => {
  return (
    <div className="sort-by">
      <span className="sort-by__label">Sort By:</span>
      <Filter name="Category" options={options.category} call={call}></Filter>
      <Filter name="Order" options={options.order} call = {call}></Filter>
      <Filter name="Date" options={options.date} call={call}></Filter>
    </div>
  );
};

export default SortBy;
