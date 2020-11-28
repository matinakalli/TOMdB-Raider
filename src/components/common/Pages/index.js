import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useStores } from "../../../stores/useStores";
import { FlexContainer } from "../../StyledComponents";

const Pages = () => {
    const { moviesStore: { pages, currentPage, setCurrentPage, searchValue, fetchMovies } } = useStores();
    // The pages will be separated by groups of 5 thus we need to save the first and the last page for the group each tim
    const [arrayFirstPage, setArrayFirstPage] = useState(1);
    const [arrayLastPage, setArrayLastPage] = useState(pages > 5 ? 5 : pages);
    const [groupOfPages, setGroupOfPages] = useState([]);

    const changePage = (page) => {
        if (page > arrayLastPage) {
            nextGroupOfPages();
            setCurrentPage(page);
        }

        if (page < arrayFirstPage) {
            previousGroupOfPages();
            setCurrentPage(page);
        }

        setCurrentPage(page);
        fetchMovies(searchValue, page);
    }

    const nextGroupOfPages = () => {
        setArrayFirstPage(arrayLastPage + 1);
        if (arrayLastPage + 5 > pages) {
            setArrayLastPage(pages);
        }
        else {
            setArrayLastPage(arrayLastPage + 5);
        }
    }

    const previousGroupOfPages = () => {
        setArrayFirstPage(arrayFirstPage - 5);
        setArrayLastPage(arrayFirstPage - 1);
    }


    useEffect(() => {
        if (currentPage < arrayFirstPage) {
            previousGroupOfPages();
        }
        else {
            const pageBoxes = [];
            for (let page = arrayFirstPage; page <= arrayLastPage; page++) {
                pageBoxes.push(<PageBox isCurrent={page === currentPage} onClick={() => changePage(page)} key={page}>{page}</PageBox>)
            }
            setGroupOfPages(pageBoxes);
        }
    }, [currentPage, arrayLastPage, arrayFirstPage])

    return (
        <FlexContainer justify="center" style={{ margin: "20px" }}>
            {arrayFirstPage > 1 && <ArrowIcon isLeft alt="Previous page" src="https://img.icons8.com/plasticine/100/000000/arrow.png" onClick={() => changePage(currentPage - 1)} />}
            {groupOfPages}
            {arrayLastPage < pages && <ArrowIcon alt="Previous page" src="https://img.icons8.com/plasticine/100/000000/arrow.png" onClick={() => changePage(currentPage + 1)} />}
        </FlexContainer>
    )

}

export default observer(Pages);

const PageBox = styled.p`
    padding: 15px;
    font-weight: ${props => props.isCurrent ? "700" : "500"};
    color: ${props => props.isCurrent && "#da3a75"};
    cursor: pointer;
`;

const ArrowIcon = styled.img`
    transform: ${props => props.isLeft && "rotate(180deg)"};
    width: 40px;
    cursor: pointer;
`;