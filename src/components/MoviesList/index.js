import { observer } from "mobx-react";
import React, { Fragment } from "react";
import { useStores } from "../../stores/useStores";
import { FlexContainer } from "../StyledComponents";
import MovieCard from "./MovieCard";

const MoviesList = () => {
    const { moviesStore: { movies, searchTitle } } = useStores();

    return (
        <Fragment>
            <h2>{searchTitle}</h2>
            <FlexContainer wrap="wrap">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </FlexContainer>
        </Fragment>
    )

}

export default observer(MoviesList);