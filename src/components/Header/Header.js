import React from "react";
import "../../styles/_Header.scss";
import Search from "./Search";
import SortBy from "./sortBy";
import { FaBars } from "react-icons/fa";

const Header = ({ options, onClickHandler, toggle }) => {
  return (
    <header className="header">
      <FaBars
        size={26}
        className="header__icon"
        onClick={() => {
          onClickHandler;
        }}
      />
      <Search />
      <nav class="header__sm">
        <span id="burger" class="header__sm__burger" />
      </nav>
      <SortBy
        className={toggle ? "header__sort header" : "header__hidesort"}
        options={options}
      />
    </header>
  );
};

export default Header;
