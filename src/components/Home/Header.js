import { observer } from "mobx-react";
import React from "react";
import { useStores } from "../../stores/useStores";
import tomdbLogo from "../../assets/branding/tomdb-logo.png";
import styled from "styled-components";
import Search from "../Search";
import Cart from "../common/Cart";
import CartModal from "../common/Cart/CartModal";
import { FlexContainer } from "../StyledComponents";
import SortByVotes from "./SortByVotes";

const Header = () => {
    const { moviesStore: { searchTitle, showCartModal } } = useStores();

    return (
        <div>
            <TomdbLogo alt="TOMdB logo" src={tomdbLogo} />
            <Cart />
            <Search />
            <BlueContainer>
                <CustomWidthContainer justify="space-between">
                    <SearchTitle>{searchTitle}</SearchTitle>
                    <SortByVotes />
                </CustomWidthContainer>
            </BlueContainer>
            {showCartModal && <CartModal />}
        </div>
    )

}

export default observer(Header);

const CustomWidthContainer = styled(FlexContainer)`
    max-width: 1300px;
    margin: 0 auto;
    
    @media(max-width: 768px) {
        flex-direction: column;
    }
`;

const SearchTitle = styled.h2`
    @media(max-width: 768px) {
        font-size: 18px;
        text-align: center;
    }
`;

const TomdbLogo = styled.img`
    margin: 0 auto;
    max-width: 500px;
    display: block;

    @media (max-width: 768px) {
        width: 72%;
        margin-right: auto;
        margin-left: 10px;
        margin-top: 20px;
    }
`;

const BlueContainer = styled.div`
    font-size: 19px;
    background: #31428f;
    padding: 20px;
    color: white;
    margin-bottom: 40px;
    font-weight: 500;

    @media(max-width: 768px) {
        width: auto;
        margin-bottom: 0;
    }
`;