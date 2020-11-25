import axios from "axios";

const apiKey = "bd5e6c1b1dbfb8a08784437732192d3f"
const apiUrl = "https://api.themoviedb.org/3";


const baseAPI = axios.create({
  baseURL: apiUrl
});

class TomdbRaiderApi {

  getMoviesBySearch = (search) => baseAPI.get(`search/movie?api_key=${apiKey}&query=${search}`);

  getBestMovies = () => baseAPI.get(`discover/movie?api_key=${apiKey}&year=2020`)
  
}

export default new TomdbRaiderApi();

