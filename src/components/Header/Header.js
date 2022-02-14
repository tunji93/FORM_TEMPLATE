import React from "react";
import "../../styles/_Header.scss";
import Search from "./Search";
import SortBy from "./sortBy";
import { FaBars } from "react-icons/fa";

const Header = ({ options, onClickHandler, toggle, call }) => {
  return (
    <header className="header">
      <FaBars
        size={26}
        className="header__icon"
        onClick={() => {
          onClickHandler();
        }}
      />
      <Search />
      <nav class="header__sm">
        <span id="burger" class="header__sm__burger" />
      </nav>
      <div className={toggle ? "header__open" : "header__sort"}>
        <SortBy
        options={options}
        call = {call}
        />
      </div>
    </header>
  );
};

export default Header;
