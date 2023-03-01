import React, { useState } from "react";
import {
  MovieList,
  SearchBar,
  Navbar,
  SearchResultsHeader,
  HeaderMotion,
} from "../../components";
import useMoviesData from "../../hooks/useMoviesData";
import "./MainPage.scss";

const LandingPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [year, setYear] = useState("");
  const { searchMovies, popularMovies, starredMovies } = useMoviesData(
    searchValue,
    year
  );
  return (
    <div className="wrapper-landing">
      <Navbar animate={true} />
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        year={year}
        setYear={setYear}
      />
      <SearchResultsHeader searchValue={searchValue} />
      <h2>{searchValue ? `Search Results for "${searchValue}"` : null}</h2>
      {searchValue ? <MovieList movies={searchMovies} /> : null}

      {starredMovies.length > 0 && (
        <div>
          <HeaderMotion text={"Starred Movies"} />
          <MovieList movies={starredMovies} />
        </div>
      )}
      <HeaderMotion text={"Most Popular Movies"} />
      <MovieList movies={popularMovies} />
    </div>
  );
};

export default LandingPage;
