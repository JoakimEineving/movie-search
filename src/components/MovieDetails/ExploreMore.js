import React, { useState, useEffect } from "react";
import { MovieList } from "../index";
import { useParams } from "react-router-dom";
import "../Main/MovieList.scss";

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
