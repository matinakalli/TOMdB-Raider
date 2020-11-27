import { observer } from "mobx-react";
import React, { useEffect } from "react";
import TomdbRaiderApi from "../../API/index";
import { useStores } from "../../stores/useStores";
import MoviesList from "../MoviesList";
import tomdbLogo from "../../assets/branding/tomdb-logo.png";
import styled from "styled-components";
import Search from "../Search";
import MoviesNotFound from "../MoviesNotFound";
import Cart from "../common/Cart";

const Home = () => {
    const { moviesStore: { movies, setMovies, searchTitle, loadingMovies, setLoadingMovies } } = useStores();

    useEffect(() => {
        setLoadingMovies(true);
        TomdbRaiderApi.getBestMovies()
            .then(({ data: { results } }) => {
                setMovies(results);

                setTimeout(() => {
                    setLoadingMovies(false);
                }, 5000);
            })
    }, [setMovies, setLoadingMovies])

    return (
        <div>
            <TomdbLogo alt="TOMdB logo" src={tomdbLogo}/>
            <Cart />
            <Search />
            <PinkContainer>
                <SearchTitle>{searchTitle}</SearchTitle>
            </PinkContainer>
            {movies.length>0 ? <MoviesList isLoading={loadingMovies} /> : <MoviesNotFound />}
        </div>
    )

}

export default observer(Home);

const SearchTitle = styled.h2`
    @media(max-width: 768px) {
        font-size: 18px;
        text-align: center;
    }
`;

const TomdbLogo = styled.img`
    margin: 0 auto;
    max-width: 500px;
    display: block;

    @media (max-width: 768px) {
        width: 72%;
        margin-right: auto;
        margin-left: 10px;
        margin-top: 20px;
    }
`;

const PinkContainer = styled.div`
    font-size: 19px;
    background: #da3a75;
    padding: 20px;
    color: white;
    width: 100%;
    margin-bottom: 40px;
    font-weight: 500;

    @media(max-width: 768px) {
        width: auto;
    }
`;