import { makeAutoObservable, observable } from "mobx";
import TomdbRaiderApi from "../API/index";

class MoviesStore {
	movies = [];
	searchTitle = "Most Recent Movies";
	cart = [];
	queryValue = "";
	loadingMovies = false;
	showCartModal = false;
	currentPage = 1;
	pages = 1;
	searchValue = "";
	sortbyVote = null;
	toast = {
		isOpen: false,
		message: "",
		state: ""
	}

	constructor() {
		makeAutoObservable(this, {
			movies: observable,
			searchTitle: observable,
			cart: observable,
			queryValue: observable,
			loadingMovies: observable,
			showCartModal: observable,
			currentPage: observable,
			pages: observable,
			searchValue: observable,
			sortbyVote: observable,
			toast: observable
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

	setShowCartModal = (state) => {
		this.showCartModal = state;
	}

	setCurrentPage = (page) => {
		this.currentPage = page;
	}

	setPages = (pages) => {
		this.pages = pages;
	}

	setSearchValue = (searchValue) => {
		this.searchValue = searchValue;
	}

	setSortByVote = (type) => {
		this.sortbyVote = type;
	}

	resetToast = () => {
		const toast = {
			isOpen: false,
			message: "",
			state: ""
		}

		this.setToast(toast);
	}

	// FUNCTIONS

	fetchMovies = (searchValue, page=1) => {
		if (searchValue === "") {
			TomdbRaiderApi.getBestMovies(page)
				.then(({ data }) => {
					const { page, results, total_pages } = data;
					this.setCurrentPage(page);
					this.setPages(total_pages);
					this.setMovies(results);
					if(this.sortbyVote){
						this.sortMovies(this.sortbyVote);
					}
					this.setSearchTitle("Most Recent Movies");
					// added a timer here so you have the time to see the loading
					setTimeout(() => {
						this.setLoadingMovies(false);
					}, 5000);
				})
		}
		else {
			TomdbRaiderApi.getMoviesBySearch(searchValue, page)
				.then(({ data }) => {
					const { page, results, total_pages } = data;
					this.setCurrentPage(page);
					this.setPages(total_pages);
					this.setMovies(results);
					if(this.sortbyVote){
						this.sortMovies(this.sortbyVote);
					}
					this.setSearchTitle(`Movies searched by '${searchValue}'`);
					this.setQueryValue(searchValue);
					
					this.setLoadingMovies(false);
				})
		}
	}



	removeFromCart = (id, title) => {
		let cartArray = this.cart.slice();
		cartArray = cartArray.filter((movie) => (movie.id !== id));
		this.setCart(cartArray);
		this.setToast({ isOpen: true, message: `Nooooo!!! Removed '${title}' from the cart`, state: "error" })
	}

	sortMovies = (type) => {
		this.setSortByVote(type);
		const sortedMovies = this.movies.sort((movieA, movieB) => {
            if(type === "highest") {
                return movieB.vote_average - movieA.vote_average;
            }
            else {
                return movieA.vote_average - movieB.vote_average;
            }
		});
		
		this.setMovies(sortedMovies);
	}

}

const moviesStore = new MoviesStore();

export default moviesStore;