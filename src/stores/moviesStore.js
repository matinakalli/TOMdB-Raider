import { makeAutoObservable, observable } from "mobx";

class MoviesStore {
	movies=[];
	searchTitle="Most Recent Movies";
	cart=[];
	toast={
		isOpen: false,
		message:"",
		state: "",
	}

	constructor() {
        makeAutoObservable(this, {
			movies: observable,
			searchTitle: observable,
			cart: observable,
			toast: observable
		})
    }

	/* SETTERS */
	setSearchTitle = (title) => {
		this.searchTitle = title;
	}

	setMovies = (movies) => {
		console.log(movies)
		this.movies = movies;
	}

	setCart = (cart) => {
		this.cart = cart;
	}

	setToast = (toast) => {
		this.toast = toast;
	}

}

const moviesStore = new MoviesStore();

export default moviesStore;