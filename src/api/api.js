import axios from 'axios';
const apiKey = process.env.REACT_APP_API_KEY;
const getMovie = async (id) => {
  const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
  return response.data;
};

const getSearchMovies = async (searchValue) => {
    const response = await axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=${apiKey}`);
    return response.data.Search;
}

const getPopularMovies = async () => {
    const response = await axios.get(`http://www.omdbapi.com/?s=popular&apikey=${apiKey}`);
    return response.data.Search;
}


export { getMovie, getSearchMovies, getPopularMovies };