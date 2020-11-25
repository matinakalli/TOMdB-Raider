import { observer } from "mobx-react";
import React, { useEffect } from "react";
import TomdbRaiderApi from "../../API/index";
import { useStores } from "../../stores/useStores";
import MoviesList from "../MoviesList";
import tomdbLogo from "../../assets/branding/tomdb-logo.png";
import styled from "styled-components";
import Search from "../Search";

const Home = () => {
    const { moviesStore: { setMovies } } = useStores();

    useEffect(() => {
        TomdbRaiderApi.getBestMovies()
            .then(({ data: { results } }) => {
                setMovies(results);
            })
    }, [setMovies])

    return (
        <div>
            <TomdbLogo alt="TOMdB logo" src={tomdbLogo}/>
            <Search />
            <MoviesList />
        </div>
    )

}

export default observer(Home);

const TomdbLogo = styled.img`
    margin: 0 auto;
    max-width: 500px;
    display: block;
`;