import { useState, useEffect } from "react";

const useStarMovie = ({ movie }) => {
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
  
    return [star, toggleStar];
  };

export default useStarMovie;
