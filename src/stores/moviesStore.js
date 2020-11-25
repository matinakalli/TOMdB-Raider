import { makeAutoObservable, observable } from "mobx";

class MoviesStore {
	movies=[];
	searchTitle="Most Recent Movies";
	cart=[];

	constructor() {
        makeAutoObservable(this, {
			movies: observable,
			searchTitle: observable,
			cart: observable
		})
    }


	/* SETTERS */
	setMovies = (movies) => {
		console.log(movies)
		this.movies = movies;
	}

	setCart = (cart) => {
		this.cart = cart;
	}

}

const moviesStore = new MoviesStore();

export default moviesStore;