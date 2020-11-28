import axios from "axios";

const apiKey = "bd5e6c1b1dbfb8a08784437732192d3f"
const apiUrl = "https://api.themoviedb.org/3";


const baseAPI = axios.create({
  baseURL: apiUrl
});

class TomdbRaiderApi {

  getMoviesBySearch = (search, page) => baseAPI.get(`search/movie?api_key=${apiKey}&query=${search}&page=${page}`);

  getBestMovies = (page) => baseAPI.get(`discover/movie?api_key=${apiKey}&year=2020&page=${page}`);

  
  buyMovies = (movies) => baseAPI.post("https://api.mocklets.com/mock68075/",movies, {
		headers: {
      'X-Mocklets-PublicKey': 'txmovies',
      'X-Mocklets-Checksum': '830c7cd4a70be6540a4898441ca02951'
		}
	});

  
}

export default new TomdbRaiderApi();

