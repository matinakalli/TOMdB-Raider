import { observer } from "mobx-react";
import React, { useState } from "react";
import styled from "styled-components";
import { useStores } from "../../stores/useStores";

const Search = () => {
    const [searchValue, setCurrentSearchValue] = useState("");
    const { moviesStore: { setLoadingMovies, fetchMovies, setSearchValue, setCurrentPage } } = useStores();

    const handleChange = (value) => {
        setCurrentSearchValue(value);
    }

    const handleEnterPress = (event) => {
        if(event.key === 'Enter'){
            searchMovies();
        }
    }

    const searchMovies = () => {
        setLoadingMovies(true);
        setSearchValue(searchValue);
        setCurrentPage(1);
        fetchMovies(searchValue);
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