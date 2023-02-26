import React, { useState, useEffect } from "react";
import "../styles/MovieDetails.scss";
import {useParams } from "react-router-dom";
import { getMovieById } from "../api/api";
import ExploreMore from "../components/ExploreMore";
import ArrowBack from "./ArrowBack";
import StarMovie from "./StarMovie";

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
        <img src={movie.Poster} alt="movie" />
        <div className="movie-details">

            <div className="movie-header">

          <h1 className="movie-title">
            {movie.Title}
              </h1>
            <StarMovie movie={movie}/>
            </div>
            
          <div className="movie-quick-info">
            <p>{`${movie.Year} | `}</p>
            <p>{`${movie.Runtime} | `}</p>
            <p>{movie.Genre}</p>
          </div>
          <div className="movie-summary">
            <h4>Storyline</h4>
            <p>{movie.Plot}</p>
            <h4>Ratings</h4>

            {/* {movie.Ratings.map((rating, index) => (
              <p key={index}>{`${rating.Source}: ${rating.Value}`}</p>
            ))} */}
            <h4>Actors</h4>
            <p>{movie.Actors}</p>

            <h4>Languages</h4>
            <p>{movie.Language}</p>
            
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
