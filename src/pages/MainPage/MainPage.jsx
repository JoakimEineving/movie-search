import React, { useState } from "react";
import { MovieList, SearchBar, Navbar } from "../../components";
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
      <Navbar />
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        year={year}
        setYear={setYear}
      />
      {!searchValue &&
        (localStorage.getItem("lastSearchResults") !== null &&
        localStorage.getItem("lastSearchResults") !== "[]" ? (
          <h2>Previous Search</h2>
        ) : (
          <h2>{searchValue ? `Search Results for "${searchValue}"` : null}</h2>
        ))}
      <div>
        <MovieList movies={searchMovies} />
      </div>

      {starredMovies.length > 0 && (
        <div>
          <h2>Starred Movies</h2>
          <MovieList movies={starredMovies} />
        </div>
      )}
      <h2>Most Popular Movies</h2>
      <div>
        <MovieList movies={popularMovies} />
      </div>
    </div>
  );
};

export default LandingPage;
