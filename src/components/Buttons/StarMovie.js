import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Icons.scss";

const StarMovie = ({ movie }) => {
  const [star, setStar] = useState(false);

  useEffect(() => {
    let movies = JSON.parse(localStorage.getItem("starredMovies")) || [];
    let isStarred = movies.some((m) => m.imdbID === movie.imdbID);
    setStar(isStarred);
  }, [movie.imdbID]);

  const toggleStar = () => {
    if (star) {
      removeMovieFromFavorites(movie);
    } else {
      addMovieToFavorites(movie);
    }
    setStar(!star);
  };

  const addMovieToFavorites = (movie) => {
    let movies = JSON.parse(localStorage.getItem("starredMovies")) || [];
    movies.push(movie);
    localStorage.setItem("starredMovies", JSON.stringify(movies));
  };

  const removeMovieFromFavorites = (movie) => {
    let movies = JSON.parse(localStorage.getItem("starredMovies")) || [];
    movies = movies.filter((m) => m.imdbID !== movie.imdbID);
    localStorage.setItem("starredMovies", JSON.stringify(movies));
  };

  return (
    <div>
      <FontAwesomeIcon
        className={`star hide-star ${star ? "starred" : "unstarred"}`}
        icon={faStar}
        onClick={toggleStar}
        title="Star this movie"
      />
    </div>
  );
};

export default StarMovie;
