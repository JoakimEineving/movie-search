import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../services/MovieService";
import {
  ArrowBack,
  StarMovie,
  ExploreMore,
  MovieSummary,
  MovieHeader,
} from "../index";
import "./MovieDetails.scss";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const movieData = await getMovieById(id);
      setMovie(movieData);
      window.scrollTo(0, 0);
    };
    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div></div>;
  }
  return (
    <div className="wrapper">
      <span className="hide-arrow">
        <ArrowBack />
      </span>

      <div className="movie-details-container">
        <span className="hidden">
          <StarMovie movie={movie} />
        </span>

        <img src={movie.Poster} alt="movie" />
        <div className="movie-details">
          <MovieHeader movie={movie} />
          <MovieSummary movie={movie} />
        </div>
      </div>
      <div className="movie-suggestions-container">
        <ExploreMore className="suggestions" />
      </div>
    </div>
  );
};

export default MovieDetails;