import React from "react";
import "../../styles/_Search.scss";
import Search from "./Search";
import SortBy from "./sortBy";

const Header = () => {
  return (
    <header className="header">
      <Search />
      <SortBy />
    </header>
  );
};

export default Header;
