import { observer } from "mobx-react";
import React, { Fragment, useState } from "react";
import styled from "styled-components";
import TomdbRaiderApi from "../../../API";
import { useStores } from "../../../stores/useStores";
import { theme } from "../../../theme";
import { FlexContainer } from "../../StyledComponents";
import BuyMessage from "./BuyMessage";
import NoMovies from "./NoMovies";

const loadingMessage = {
    text: ["Please wait...", "(Meanwhile you can bake some pop corn)."],
    color: "#633a9d"
}

const successMessage = {
    text: ["Movies successfully bought!! Time to eat those popcorn!!!", "The movies will be removed..."],
    color: "#14996f"
}

const failedMessage = {
    text: ["Oh noo! Something went wrong.","Think your favorite movie quote and try again!"],
    color: "#9d0d2d"
}
const CartModal = () => {
    const { moviesStore: { setShowCartModal, cart, removeFromCart, setCart } } = useStores();
    const [buyMessage, setBuyMessage] = useState(null);
    const [disabledButton, setDisabledButton] = useState(false);

    const buyMovies = () => {
        const moviesIds = cart.map((movie) => { return movie.id })

        const moviesObject = {
            data: {
                movies: moviesIds
            }
        }
        setDisabledButton(true);
        setBuyMessage(loadingMessage);
        TomdbRaiderApi.buyMovies(moviesObject)
            .then((result) => {
                setBuyMessage(successMessage);
                setTimeout(() => {
                    setBuyMessage(null);
                    setDisabledButton(false);
                    setCart([]);
                }, 4000)
            })
            .catch((error) => {
                setBuyMessage(failedMessage);
                setDisabledButton(false);
                throw error;
            });
    }
    
    return (
        <Fragment>
            <Overlay onClick={() => setShowCartModal(false)} />
            <Modal>
                <h1>Cart</h1>
                <CloseIcon alt="close" src="https://img.icons8.com/plasticine/100/000000/close-window.png" onClick={() => setShowCartModal(false)} />
                {cart.length > 0 ?
                    <Fragment>
                        {cart.map((movie) => (
                            <Movie key={movie.id} justify="space-between">
                                <p>{movie.title}</p>
                                <DeleteMovie alt="delete" src="https://img.icons8.com/dusk/64/000000/delete-forever.png" onClick={() => removeFromCart(movie.id, movie.title)} />
                            </Movie>
                        ))}
                        <FlexContainer style={{margin: "30px"}}>
                            {buyMessage && <BuyMessage message={buyMessage} />}
                            <BuyButton disabled={disabledButton} onClick={() => buyMovies()}>Buy Movies</BuyButton>
                        </FlexContainer>
                    </Fragment>
                    : <NoMovies />
                }
            </Modal>
        </Fragment>
    )
}

export default observer(CartModal);

const BuyButton = styled.button`
    display: block;
    padding: 15px 25px;
    font-size: 20px;
    font-weight: 600;
    background-color: rgba(218, 58, 117, 0.85);
    color: ${theme.colors.tomdbLight};
    border: none;
    border-radius: 5px; 
    cursor: pointer;
    border: 2px solid;
    margin-left: auto;

    :disabled {
        opacity: 0.2;
    }

    :hover {
        background-color: ${theme.colors.tomdbBase2};
    }
`;

const CloseIcon = styled.img`
    width: 45px;
    position: absolute;
    top: 20px;
    right: 15px;
    cursor: pointer;
`;

const Modal = styled.div`
    background-color: ${theme.colors.tomdbLight};
    box-shadow: 2px 1px 11px #c6c5bf; 
    z-index: 1001;
    position: fixed;
    top: 200px;
    border-radius: 5px;
    padding: 30px 0;
    width: 100%;
    max-width: 660px;
    left: ${(window.innerWidth - 660) / 2}px;

    h1 {
        text-align: center;
        margin-bottom: 20px;
    }

    @media (max-width: ${theme.breakpoint}) {
        left: 0;
        top: 100px;
    }
`;

const Overlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1000;
    top: 0;
    margin: 0 auto;
    display: block;
    background-color: ${theme.colors.tomdbBase1Faded};
`;

const Movie = styled(FlexContainer)`
    padding: 5px 10px;
    border-bottom: 1px solid rgba(42,18,75, 0.3);

    p {
        font-size: 17px;
        font-weight: 500;
    }
`;

const DeleteMovie = styled.img`
    cursor:pointer;
    width: 50px;
`;