import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../services/MovieService";
import { ArrowBack, StarMovie, ExploreMore } from "../index";
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
        <StarMovie movie={movie} />

        <img src={movie.Poster} alt="movie" />
        <div className="movie-details">
          <div className="movie-header">
            <h1>{movie.Title}</h1>
          </div>

          <div className="movie-quick-info">
            <p>{`${movie.Year} | `}</p>
            <p>{`${movie.Runtime} | `}</p>
            <p>{movie.Genre}</p>
          </div>
          <div className="movie-summary">
            <h4>Storyline</h4>
            <p>{movie.Plot}</p>
            <h4>Actors</h4>
            <p>{movie.Actors}</p>
            <h4>Awards</h4>
            <p>{movie.Awards}</p>
          </div>
        </div>
      </div>
      <div className="movie-suggestions-container">
        <ExploreMore className="suggestions" />
      </div>
    </div>
  );
};

export default MovieDetails;
