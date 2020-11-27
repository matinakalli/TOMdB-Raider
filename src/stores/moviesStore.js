import { makeAutoObservable, observable } from "mobx";

class MoviesStore {
	movies=[];
	searchTitle="Most Recent Movies";
	queryValue= "";
	cart= [];
	loadingMovies= false;
	toast={
		isOpen: false,
		message:"",
		state: ""
	}

	constructor() {
        makeAutoObservable(this, {
			movies: observable,
			searchTitle: observable,
			cart: observable,
			toast: observable,
			queryValue: observable,
			loadingMovies: observable
		})
    }

	/* SETTERS */
	setSearchTitle = (title) => {
		this.searchTitle = title;
	}

	setQueryValue = (value) => {
		this.queryValue = value;
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

	setLoadingMovies = (loading) => {
		this.loadingMovies = loading;
	}

	get moviesInCartNumber() {
		return this.cart.length;
	}

}

const moviesStore = new MoviesStore();

export default moviesStore;