import React from "react";
import {IoSearchOutline} from "react-icons/io5"
import "../../styles/_Search.scss"

const Search = () => {
  return (
      <div className="search">
          <input type="text" className="search__input" placeholder="search template" />
          <span className="search__icon"><IoSearchOutline /></span>
      </div>
  )
};

export default Search;
