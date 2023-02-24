import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import { getSearchMovies, getPopularMovies } from "../api/api";
import "../styles/LandingPage.scss";

const LandingPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchMovies, setSearchMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const popularMoviesData = await getPopularMovies();
      setPopularMovies(popularMoviesData);
      const searchMoviesData = await getSearchMovies(searchValue);
      setSearchMovies(searchMoviesData);
    };
    fetchData();
  }, [searchValue]);
  

  return (
    <div>
      <h3 className="header-text">What do you want to watch?</h3>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      {searchValue && (
        <h4>Search results for "{searchValue}"</h4>
      )}
      <div>
        <MovieList movies={searchMovies} />
      </div>
      <h2>Most Popular Movies</h2>
      <div>
        <MovieList movies={popularMovies} />
      </div>
    </div>
  );
};

export default LandingPage;
