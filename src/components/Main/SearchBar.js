import "./SearchBar.scss";

import React from "react";

import { SearchBarMotion } from "../index";

const SearchBar = (props) => {
  return (
    <SearchBarMotion>
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={props.value}
          onChange={(event) => props.setSearchValue(event.target.value)}
        />
        <input
          type="number"
          placeholder="Year"
          value={props.year}
          onChange={(event) => props.setYear(event.target.value)}
        />
      </div>
    </SearchBarMotion>
  );
};

export default SearchBar;
