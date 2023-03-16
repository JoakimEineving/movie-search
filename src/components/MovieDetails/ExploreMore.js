import "../Main/MovieList.scss";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MovieList } from "../index";

const ExploreMore = () => {
  const { id } = useParams();
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const getSuggestions =
      JSON.parse(localStorage.getItem("lastSearchResults")) || [];
    const filteredSuggestions = getSuggestions.filter(
      (movie) => movie.imdbID !== id
    );
    setSuggestions(filteredSuggestions);
  }, [id]);

  if (suggestions.length === 0) {
    return <div></div>;
  }
  return (
    <div>
      <h2>You may also like... </h2>
      <div>
        <MovieList movies={suggestions} />
      </div>
    </div>
  );
};

export default ExploreMore;
