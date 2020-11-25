import { observer } from "mobx-react";
import React, { Fragment, useState } from "react";
import styled from "styled-components";
import TomdbRaiderApi from "../../API/index";
import { useStores } from "../../stores/useStores";

const Search = () => {
    const [searchValue, setSearchValue] = useState("");
    const { moviesStore: { setMovies, setSearchTitle } } = useStores();

    const handleChange = (value) => {
        setSearchValue(value);
    }

    const handleEnterPress = (event) => {
        if(event.key === 'Enter'){
            searchMovies();
        }
    }

    const searchMovies = () => {
        if (searchValue === "") {
            TomdbRaiderApi.getBestMovies()
                .then(({ data }) => {
                    const { page, results, total_pages } = data;
                    setMovies(results);
                    setSearchTitle("Most Recent Movies")
                })
        }
        else {
            TomdbRaiderApi.getMoviesBySearch(searchValue)
                .then(({ data }) => {
                    const { page, results, total_pages } = data;
                    setMovies(results);
                    setSearchTitle(`Movies searched by '${searchValue}'`)
                })
        }
    }

    return (
        <Fragment>
            <Input type="text" placeholder="Search for a movie..." onChange={(e) => handleChange(e.target.value)} value={searchValue} onKeyDown={handleEnterPress} ></Input>
            <SearchButton onClick={searchMovies} >Search</SearchButton>
        </Fragment>
    )
}

export default observer(Search);

const Input = styled.input`
    width: 97%;
    height: 30px;
    font-size: 25px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    border-bottom: 2px solid #dbdbdb;
    border-right: 2px solid #dbdbdb;

    :focus {
        outline: none;
    }
`;

const SearchButton = styled.button`

`;