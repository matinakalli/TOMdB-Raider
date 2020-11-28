import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";
import emptyBox from "../../assets/empty.gif";
import { useStores } from "../../stores/useStores";

const MoviesNotFound = () => {
    const { moviesStore: { queryValue }} = useStores();

    return (
        <Container>
            <NoMoviesText>Ooops... No movies found. Try checking the spelling please.</NoMoviesText>
            <StyledGif src={emptyBox} alt="loading..." />
            <NoMoviesText>...or if you want to see the movie <b>'{queryValue}'</b> so much, trying creating it <a href="https://biteable.com/movie-maker/" target="_blank">here</a>.</NoMoviesText>
        </Container>
    )
}

export default observer(MoviesNotFound);

const Container = styled.div`

`;

const NoMoviesText = styled.p`
    text-align: center;
    margin: 20px auto;
    font-size: 20px;
    font-weight: 600;
`;

const StyledGif = styled.img`
    display: block;
    margin: 0 auto;
    border-radius: 50px;
`;