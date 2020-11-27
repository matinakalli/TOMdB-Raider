import { observer } from "mobx-react";
import React, { useState } from "react";
import styled from "styled-components";
import TomdbRaiderApi from "../../API/index";
import { useStores } from "../../stores/useStores";

const Search = () => {
    const [searchValue, setSearchValue] = useState("");
    const { moviesStore: { setLoadingMovies, setMovies, setSearchTitle, setQueryValue } } = useStores();

    const handleChange = (value) => {
        setSearchValue(value);
    }

    const handleEnterPress = (event) => {
        if(event.key === 'Enter'){
            searchMovies();
        }
    }

    const searchMovies = () => {
        setLoadingMovies(true)
        if (searchValue === "") {
            TomdbRaiderApi.getBestMovies()
                .then(({ data }) => {
                    const { page, results, total_pages } = data;
                    setMovies(results);
                    setSearchTitle("Most Recent Movies");
                    setLoadingMovies(false);
                })
        }
        else {
            TomdbRaiderApi.getMoviesBySearch(searchValue)
                .then(({ data }) => {
                    const { page, results, total_pages } = data;
                    setMovies(results);
                    setSearchTitle(`Movies searched by '${searchValue}'`);
                    setQueryValue(searchValue);
                    setTimeout(() => {
                        setLoadingMovies(false);
                    }, 5000);
                })
        }
    }

    return (
        <Container>
            <Input type="text" placeholder="Search for a movie..." onChange={(e) => handleChange(e.target.value)} value={searchValue} onKeyDown={handleEnterPress} ></Input>
            <SearchButton alt="search" onClick={searchMovies} src="https://img.icons8.com/dusk/64/000000/search.png"/>
        </Container>
    )
}

export default observer(Search);

const Container = styled.div`
    position: relative;
    width: 70%;
    margin: 30px auto;

    @media (max-width: 768px) {   
        width: 100%;
    }
`;

const SearchButton = styled.img`
    position: absolute;
    top: 7px;
    right: 13px;
    width: 40px;
    cursor: pointer;  
`;

const Input = styled.input`
    width: 100%;
    font-size: 25px;
    height: 60px;
    padding-left: 20px;
    border: none;
    border-radius: 10px;
    border-bottom: 2px solid #dbdbdb;
    border-right: 2px solid #dbdbdb;
    box-sizing: border-box;

    :focus {
        outline: none;
    }
`;