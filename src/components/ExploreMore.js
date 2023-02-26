import React, { useState, useEffect } from "react";
import "../styles/MovieList.scss";
import MovieList from "./MovieList";
import { useParams } from "react-router-dom";

const ExploreMore = () => {
  const { id } = useParams();
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSuggestions =
      JSON.parse(localStorage.getItem("lastSearchResults")) || [];
    const filteredSuggestions = getSuggestions.filter(
      (movie) => movie.imdbID !== id
    );
    setSuggestions(filteredSuggestions);
    setLoading(false);
  }, [id]);

    if (loading) {
    return <div></div>
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
