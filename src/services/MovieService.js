import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

const getMovieById = async (id) => {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?i=${id}&plot=full&apikey=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getSearchMovies = async (searchValue, year) => {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${searchValue}&y=${year}&apikey=${apiKey}`
    );
    return response.data.Search;
  } catch (error) {
    console.log(error);
  }
};

const getPopularMovies = async () => {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?s=popular&apikey=${apiKey}`
    );
    return response.data.Search;
  } catch (error) {
    console.log(error);
  }
};

export { getMovieById, getSearchMovies, getPopularMovies };
