import "./MovieSummary.scss";

import React from "react";

const MovieDetails = ({ movie }) => {
  return (
    <div className="movie-summary">
      <div>{movie.Plot}</div>
      <div className="movie-info">
        <div className="movie-info-item">
          <span>Actors</span>
          <span>{movie.Actors}</span>
        </div>
        <div className="movie-info-item">
          <span>Director</span>
          <span>{movie.Director}</span>
        </div>
        <div className="movie-info-item">
          <span>Language</span>
          <span>{movie.Language}</span>
        </div>
        <div className="movie-info-item">
          <span>Awards</span>
          <span>{movie.Awards}</span>
        </div>
        <div className="movie-info-item">
          <span>Rating</span>
          <span>{movie.imdbRating} / 10</span>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
