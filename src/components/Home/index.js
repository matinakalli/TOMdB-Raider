import { observer } from "mobx-react";
import React, { Fragment, useEffect } from "react";
import { useStores } from "../../stores/useStores";
import MoviesList from "../MoviesList";
import styled from "styled-components";
import MoviesNotFound from "./MoviesNotFound";
import CartModal from "../common/Cart/CartModal";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
    const { moviesStore: { movies, loadingMovies, setLoadingMovies, showCartModal, fetchMovies } } = useStores();

    useEffect(() => {
        setLoadingMovies(true);
        fetchMovies("");
    }, [setLoadingMovies, fetchMovies])

    return (
        <Fragment>
            <Header />
            <Container>
                {movies.length > 0 ? <MoviesList isLoading={loadingMovies} /> : <MoviesNotFound />}
            </Container>
            {showCartModal && <CartModal />}
            <Footer />
        </Fragment>
    )

}

export default observer(Home);

const Container = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    min-height: 100vh;
`;
