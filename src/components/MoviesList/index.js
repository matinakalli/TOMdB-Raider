import { observer } from "mobx-react";
import React, { Fragment } from "react";
import { useStores } from "../../stores/useStores";
import Pages from "../common/Pages";
import Toast from "../common/Toast";
import { withLoading } from "../HOCs/withLoading";
import { FlexContainer } from "../StyledComponents";
import MovieCard from "./MovieCard";

const MoviesList = () => {
    const { moviesStore: { movies, pages, toast: {isOpen} } } = useStores();

    return (
        <Fragment>
            <FlexContainer wrap="wrap">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </FlexContainer>

            {pages > 1 && <Pages/>}
            {isOpen && <Toast />}
        </Fragment>
    )

}

export default withLoading(observer(MoviesList), {
	color: "green",
	position: "inline",
	spinnerStyles: {
		fontSize: "18px",
		width: "20px",
		height: "20px",
	}
});
