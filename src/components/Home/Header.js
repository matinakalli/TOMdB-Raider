import { observer } from "mobx-react";
import React from "react";
import { useStores } from "../../stores/useStores";
import tomdbLogo from "../../assets/branding/tomdb-logo.png";
import styled from "styled-components";
import Cart from "../common/Cart";
import CartModal from "../common/Cart/CartModal";
import { theme } from "../../theme";

const Header = () => {
    const { moviesStore: { showCartModal } } = useStores();

    return (
        <div style={{backgroundColor: theme.colors.tomdbLight}}>
            <TomdbLogo alt="TOMdB logo" src={tomdbLogo} />
            <Cart />
            {showCartModal && <CartModal />}
        </div>
    )

}

export default observer(Header);

const TomdbLogo = styled.img`
    margin: 0 auto;
    max-width: 500px;
    display: block;

    @media (max-width: ${theme.breakpoint}) {
        width: 72%;
        margin-right: auto;
        margin-left: 10px;
        margin-top: 20px;
    }
`;
