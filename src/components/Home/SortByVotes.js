import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";
import { useStores } from "../../stores/useStores";
import { theme } from "../../theme";
import { FlexContainer } from "../StyledComponents";

/**
* This will sort the movies for **Each page**. The best it to have a `sort_by` param in the api so the results come back sorted.
*/
const SortByVotes = () => {
    const { moviesStore: { sortbyVote, sortMovies } } = useStores();

    return (
        <Container>
            Sort by Votes:
            <SortTypeText isChosen={sortbyVote === "highest"} onClick={() => sortMovies("highest")}>Highest</SortTypeText>
            <span>/</span>
            <SortTypeText isChosen={sortbyVote === "lowest"} onClick={() => sortMovies("lowest")}>Lowest</SortTypeText>
        </Container>
    )
}

export default observer(SortByVotes);

const Container = styled(FlexContainer)`
    font-size: 20px;
    color: ${theme.colors.tomdbLight};
    @media (max-width: ${theme.breakpoint}) {
        font-size: 15px;
        margin-top: 10px;
    }
`;

const SortTypeText = styled.p`
    margin: 0 10px;
    font-weight: ${props => props.isChosen ? "800" : "500"};
    cursor: pointer;
`;