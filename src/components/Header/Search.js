import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import "../../styles/_Search.scss";

const Search = ({ reducer }) => {
  return (
    <div className="search">
      <input
        name="search"
        type="text"
        className="search__input"
        placeholder="search template"
      />
      <span className="search__icon">
        <IoSearchOutline size="1.6rem" />
      </span>
    </div>
  );
};

export default Search;
