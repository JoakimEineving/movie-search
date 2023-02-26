import axios from 'axios';
const apiKey = process.env.REACT_APP_API_KEY;

const getMovieById = async (id) => {
  const response = await axios.get(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=${apiKey}`);
  return response.data;
};

const getSearchMovies = async (searchValue, year) => {
    const response = await axios.get(`http://www.omdbapi.com/?s=${searchValue}&y=${year}&apikey=${apiKey}`);
    return response.data.Search;
}

const getPopularMovies = async () => {
    const response = await axios.get(`http://www.omdbapi.com/?s=popular&apikey=${apiKey}`);
    return response.data.Search;
}


export { getMovieById, getSearchMovies, getPopularMovies };