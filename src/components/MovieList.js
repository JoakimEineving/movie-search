import React from "react";
import "../styles/MovieList.scss"



const MovieList = (props) => {
    
  return (
    <div className="movie-list-container">
      {props.movies.map((movie, index) => (
          <div key={index} className="movie-list-item">
        <img src={movie.Poster} alt="movie" />
      </div>
      ))}
    </div>
  );
};

export default MovieList;
