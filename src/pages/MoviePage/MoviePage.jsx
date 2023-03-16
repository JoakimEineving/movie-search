import React from "react";
import { MovieDetails, Navbar } from "../../components/index";
import "./MoviePage.scss";

const MovieDetailsPage = () => {
  return (
    <div>
      <div className="hide-nav">
        <Navbar animate={false} />
      </div>
      <MovieDetails />
    </div>
  );
};

export default MovieDetailsPage;
