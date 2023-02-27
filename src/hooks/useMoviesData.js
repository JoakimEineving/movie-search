import { useEffect, useState } from "react";
import { getSearchMovies, getPopularMovies } from "../services/MovieService";

const useMoviesData = (searchValue, year) => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [starredMovies, setStarredMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const popularMoviesData = await getPopularMovies();
      setPopularMovies(popularMoviesData);

      const starredMoviesData =
        JSON.parse(localStorage.getItem("starredMovies")) || [];
      setStarredMovies(starredMoviesData);

      if (!searchValue) {
        const lastSearchResults =
          JSON.parse(localStorage.getItem("lastSearchResults")) || [];
        setSearchMovies(lastSearchResults);
      } else {
        const searchMoviesData = await getSearchMovies(searchValue, year);
        setSearchMovies(searchMoviesData);
        localStorage.setItem(
          "lastSearchResults",
          JSON.stringify(searchMoviesData || [])
        );
      }
    };
    fetchData();
  }, [searchValue, year]);

  return { searchMovies, popularMovies, starredMovies };
};

export default useMoviesData;
