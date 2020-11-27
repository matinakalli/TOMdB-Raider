import { observer } from "mobx-react";
import React, { Fragment } from "react";
import { useStores } from "../../stores/useStores";
import Toast from "../common/Toast";
import { withLoading } from "../HOCs/withLoading";
import { FlexContainer } from "../StyledComponents";
import MovieCard from "./MovieCard";

const MoviesList = () => {
    const { moviesStore: { movies, toast: {isOpen} } } = useStores();

    return (
        <Fragment>
            <FlexContainer wrap="wrap">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </FlexContainer>
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
