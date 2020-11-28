import React, { Fragment } from "react";
import styled from "styled-components";

const NoMovies = () => {

    return (
        <Fragment>
            <NoMoviesHeader>No movies in the cart.</NoMoviesHeader>
            <NoMoviesInCart>Having problem to decide? You can always search for <b>Tomb Raider</b> movies!!</NoMoviesInCart>
        </Fragment>
    )
}

export default NoMovies;

const NoMoviesInCart = styled.p`
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    padding: 0 10px;
`;

const NoMoviesHeader = styled.h2`
    margin: 10px 0 20px;
    text-align: center;
`;