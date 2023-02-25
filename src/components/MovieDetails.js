import React, { useState, useEffect } from "react";
import "../styles/MovieDetails.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { getMovie } from "../api/api";
import ExploreMore from "../components/ExploreMore";

const MovieDetails = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();


  useEffect(() => {
    const fetchMovie = async () => {
      const movieData = await getMovie(id);
      setMovie(movieData);
      setLoading(false);
      
      window.scrollTo(0, 0);
    };
    fetchMovie();
  }, [id]);
  
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div className="wrapper">
      <FontAwesomeIcon
        className="back-arrow"
        icon={faArrowLeft}
        onClick={handleBack}
      />
      <div className="movie-details-container">
        <img src={movie.Poster} alt="movie" />
        <div className="movie-details">
          <h2>{movie.Title}</h2>
          <div className="movie-quick-info">
            <p>{`${movie.Year} | `}</p>
            <p>{`${movie.Runtime} | `}</p>
            <p>{movie.Genre}</p>
          </div>
          <div className="movie-summary">
            <h4>Storyline</h4>
            <p>{movie.Plot}</p>
            <h4>Ratings</h4>

            {movie.Ratings.map((rating, index) => (
              <p key={index}>{`${rating.Source}: ${rating.Value}`}</p>
            ))}
            <h4>Cast</h4>
            <p>{movie.Actors}</p>
          </div>
          
        </div>
         
    </div>
      <div className="movie-suggestions-container">

          <ExploreMore className="suggestions" />
      </div>
      </div >
  );
};

export default MovieDetails;
