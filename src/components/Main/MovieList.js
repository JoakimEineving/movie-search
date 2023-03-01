import React from "react";
import { Link } from "react-router-dom";
import "./MovieList.scss";
import { MapMotion } from "../index";

const MovieList = (props) => {
  if (!props.movies) {
    return <div></div>;
  }

  return (
    <div className="movie-list-container">
      {props.movies.map((movie, index) => (
        <Link to={`/movie/${movie.imdbID}`}>
          <MapMotion index={index}>
            <div className="movie-list-item" key={index}>
              <img src={movie.Poster} alt="movie" />
              <div className="overlay-info">
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
              </div>
            </div>
          </MapMotion>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
