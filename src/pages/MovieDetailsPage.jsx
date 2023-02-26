import React from "react";
import MovieDetails from "../components/MovieDetails";
import Navbar from "../components/Navbar";
import "../styles/MovieDetails.scss";

const MovieDetailsPage = () => {
    
  return (
    <div>
        <div className="hide-nav">
        <Navbar />
        </div>
      <MovieDetails />
    </div>
  );
};

export default MovieDetailsPage;
