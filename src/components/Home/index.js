import { observer } from "mobx-react";
import React, { Fragment, useEffect } from "react";
import { useStores } from "../../stores/useStores";
import MoviesList from "../MoviesList";
import styled from "styled-components";
import MoviesNotFound from "./MoviesNotFound";
import CartModal from "../common/Cart/CartModal";
import Header from "./Header";
import Footer from "./Footer";
import { theme } from "../../theme";
import { FlexContainer } from "../StyledComponents";
import SortByVotes from "./SortByVotes";
import Search from "../Search";

const Home = () => {
    const { moviesStore: { searchTitle, movies, loadingMovies, setLoadingMovies, showCartModal, fetchMovies } } = useStores();

    useEffect(() => {
        setLoadingMovies(true);
        fetchMovies("");
    }, [setLoadingMovies, fetchMovies])

    return (
        <Fragment>
            <Header />
            <Container>
            <Search />
            <BlueContainer>
                <CustomWidthContainer justify="space-between">
                    <SearchTitle>{searchTitle}</SearchTitle>
                    <SortByVotes />
                </CustomWidthContainer>
            </BlueContainer>
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


const CustomWidthContainer = styled(FlexContainer)`
    max-width: 1300px;
    margin: 0 auto;
    
    @media(max-width: ${theme.breakpoint}) {
        flex-direction: column;
    }
`;

const SearchTitle = styled.h2`
    @media(max-width: ${theme.breakpoint}) {
        font-size: 18px;
        text-align: center;
    }
`;


const BlueContainer = styled.div`
    font-size: 19px;
    background: ${theme.colors.tomdbBase1};
    padding: 20px;
    color: white;
    margin-bottom: 40px;
    font-weight: 500;

    @media(max-width: ${theme.breakpoint}) {
        width: auto;
        margin-bottom: 0;
    }
`;

