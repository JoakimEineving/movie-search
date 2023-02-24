import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import axios from "axios";
import SearchBar from "../components/SearchBar";

const LandingPage = () => {
  const [movies, setMovies] = useState([
    {
      Title: "Iron Man",
      Year: "2008",
      imdbID: "tt0371746",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
    },
    {
      Title: "Iron Man 3",
      Year: "2013",
      imdbID: "tt1300854",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Iron Man 2",
      Year: "2010",
      imdbID: "tt1228705",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg",
    },
    {
      Title: "The Man in the Iron Mask",
      Year: "1998",
      imdbID: "tt0120744",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjM2YzcxMmQtOTc2Mi00YjdhLWFlZjUtNmFmMDQzYzU2YTk5L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "The Man with the Iron Fists",
      Year: "2012",
      imdbID: "tt1258972",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTg5ODI3ODkzOV5BMl5BanBnXkFtZTcwMTQxNjUwOA@@._V1_SX300.jpg",
    },
    {
      Title: "Tetsuo: The Iron Man",
      Year: "1989",
      imdbID: "tt0096251",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODYxZTIwMWQtZTdiMS00ODRmLThlODEtNjkwNmE1ZTY1ZjM1XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg",
    },
    {
      Title: "The Man with the Iron Heart",
      Year: "2017",
      imdbID: "tt3296908",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNWY2ZGMxYTQtOGY1Mi00N2ZhLThkYzgtNDhlZjhlNzg4MWU0XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg",
    },
  ]);
  const [popularMovies, setPopularMovies] = useState([
    {
      Title: "Iron Man",
      Year: "2008",
      imdbID: "tt0371746",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
    },
    {
      Title: "Iron Man 3",
      Year: "2013",
      imdbID: "tt1300854",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Iron Man 2",
      Year: "2010",
      imdbID: "tt1228705",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg",
    },
    {
      Title: "The Man in the Iron Mask",
      Year: "1998",
      imdbID: "tt0120744",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjM2YzcxMmQtOTc2Mi00YjdhLWFlZjUtNmFmMDQzYzU2YTk5L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "The Man with the Iron Fists",
      Year: "2012",
      imdbID: "tt1258972",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTg5ODI3ODkzOV5BMl5BanBnXkFtZTcwMTQxNjUwOA@@._V1_SX300.jpg",
    },
    {
      Title: "Tetsuo: The Iron Man",
      Year: "1989",
      imdbID: "tt0096251",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODYxZTIwMWQtZTdiMS00ODRmLThlODEtNjkwNmE1ZTY1ZjM1XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg",
    },
    {
      Title: "The Man with the Iron Heart",
      Year: "2017",
      imdbID: "tt3296908",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNWY2ZGMxYTQtOGY1Mi00N2ZhLThkYzgtNDhlZjhlNzg4MWU0XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg",
    },
  ]);

  return (
    <div>
      <h3>What do you want to watch?</h3>
      <SearchBar />
      <div>
        <MovieList movies={movies} />
      </div>
      <h2>Most Popular Movies</h2>
      <div>
        <MovieList movies={popularMovies} />
      </div>
    </div>
  );
};

export default LandingPage;
