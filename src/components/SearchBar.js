import React from "react";
import "../styles/SearchBar.scss";

const SearchBar = (props) => {
    return (
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search for a movie..."
            value={props.value}
          onChange={(event) => props.setSearchValue(event.target.value)} 
        />
      </div>
    );
  };
  

export default SearchBar;
