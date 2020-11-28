import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";
import { useStores } from "../../../stores/useStores";

const emptyCart = "https://img.icons8.com/dusk/64/000000/shopping-cart.png";
const fullCart = "https://img.icons8.com/dusk/64/000000/shopping-cart-loaded.png";

const Cart = () => {
    const { moviesStore: {moviesInCartNumber, setShowCartModal, showCartModal} } = useStores();
    
    return (
        <Container onClick={() => {setShowCartModal(!showCartModal)}}>
            <CartImage alt="cart" src={moviesInCartNumber === 0 ? emptyCart : fullCart} />
            {moviesInCartNumber > 0 && <MovieCounter>{moviesInCartNumber}</MovieCounter>}
        </Container>
    )
}

export default observer(Cart);

const Container = styled.div`
    position: absolute;
    cursor: pointer;
    right: 20px;
    top: 30px;
`;

const CartImage = styled.img`

    @media (max-width: 768px) {
        width: 50px;
    }
`;

const MovieCounter = styled.div`
    background-color: #f9255e;
    color: white;
    width: 20px;
    height: 20px;
    border-radius: 25px;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    position: absolute;
    bottom: 24px;
    right: 19px;
    border: 1px solid;

    @media (max-width: 768px) {
        bottom: 18px;
        right: 12px;
    }
`;
