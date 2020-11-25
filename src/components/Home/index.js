import { observer } from "mobx-react";
import React, { useEffect } from "react";
import TomdbRaiderApi from "../../API/index";
import { useStores } from "../../stores/useStores";
import MoviesList from "../MoviesList";

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
            <h1>Hello</h1>
            <MoviesList />
        </div>
    )

}

export default observer(Home);