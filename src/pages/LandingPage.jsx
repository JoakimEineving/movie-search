import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import { getSearchMovies, getPopularMovies } from "../api/api";
import "../styles/LandingPage.scss";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [year, setYear] = useState("");
  const [searchMovies, setSearchMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [starredMovies, setStarredMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const popularMoviesData = await getPopularMovies();
      setPopularMovies(popularMoviesData);

      const starredMoviesData = JSON.parse(localStorage.getItem("starredMovies")) || [];
      setStarredMovies(starredMoviesData);
      console.log(starredMoviesData);
    
      if (!searchValue) {
        const lastSearchResults =
          JSON.parse(localStorage.getItem("lastSearchResults")) || [];
        setSearchMovies(lastSearchResults);
      } else {
        const searchMoviesData = await getSearchMovies(searchValue, year);
        setSearchMovies(searchMoviesData);
        localStorage.setItem(
          "lastSearchResults",
          JSON.stringify(searchMoviesData)
        );
      }
    };
    fetchData();
  }, [searchValue,year]);

  return (
    <div className="wrapper-landing">
      <Navbar />
      
      
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} year={year}setYear={setYear} />
      {!searchValue && localStorage.getItem("lastSearchResults") ? (
        <h2>Previous Search</h2>
      ) : (
        <h2>{searchValue ? `Search Results for "${searchValue}"` : null}</h2>
      )}
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
