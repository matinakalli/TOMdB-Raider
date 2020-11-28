import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";
import { useStores } from "../../stores/useStores";
import { FlexContainer } from "../StyledComponents";
import popcornAdd from "../../assets/icons/popcorn-add.png";
import popcornRemove from "../../assets/icons/popcorn-remove.png";
import defaultPoster from "../../assets/default-poster.png";
import "./styles.scss";

const imageOriginUrl = "https://image.tmdb.org/t/p/w500/";

const MovieCard = ({ movie: { id, title, poster_path, vote_average } }) => {
    const { moviesStore: { cart, setCart, setToast, removeFromCart } } = useStores();

    const isInCart = () => {
        return cart.filter((movie) => (movie.id === id));
    }

    const addToCart = () => {
        let newArray = cart.slice();
        const newMovie = {
            id,
            title
        }
        newArray.push(newMovie);
        setCart(newArray);
        setToast({isOpen: true, message: `Added '${title}' to cart`, state: "success"});
    }
    const poster = poster_path ? `${imageOriginUrl}${poster_path}` : defaultPoster;

    return (
        <Card background={poster}>
            {isInCart().length > 0 && <Overlay align="center" justify="center">
                <InCartTitle>IN CART</InCartTitle>
                <MovieTitle>{title}</MovieTitle>
                </Overlay>}
            <RateCircle>{vote_average}</RateCircle>
            {isInCart().length === 0 && <CartIcon onClick={() => addToCart()} alt="Add Cart" src={popcornAdd} />}
            {isInCart().length > 0 && <CartIcon onClick={() => removeFromCart(id, title)} alt="Add Cart" src={popcornRemove} />}
            <StarImage className="rotate-star" alt="star" src="https://img.icons8.com/plasticine/100/000000/star--v1.png" />
            {!poster_path && <MovieTitle style={{width: "90%", position: "absolute", bottom: "20px"}}>{title}</MovieTitle>}
        </Card>
    )

}

export default observer(MovieCard);

const Card = styled.div`
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    padding: 10px;
    width: 200px;
    height: 300px;
    margin: 10px 0;
    box-shadow: 2px 1px 11px #c6c5bf;
    position: relative;

    @media (max-width: 768px) {
        width: 100%;
        height: 517px;
    }
`;

const Overlay = styled(FlexContainer)`
    background-color: rgba(49, 66, 143, 0.8);
    flex-direction: column;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
`;

const RateCircle = styled(FlexContainer)`
    border-radius:25px;
    border: 2px solid #eae7dc; 
    background-color: rgba(250, 37, 94, 0.8);
    box-shadow: 3px 1px 11px #eae7dc;
    width: 35px;
    height: 35px;
    font-weight: 700;
    color: #eae7dc;
    margin-top: 5px;
`;

const StarImage = styled.img`
    position: absolute;
    top: 1px;
    width: 27px;
    left: 16px;
`;

const CartIcon = styled.img`
    width: 60px;
    height: 60px;
    cursor: pointer;
    position absolute;
    top: 5px;
    right: 5px;
    z-index: 10;
`;

const InCartTitle = styled.h2`
    color: #eae7dc;
    text-align: center;
    font-weight: 600;
`;

const MovieTitle = styled.h3`
    color: #eae7dc;
    text-align: center;
    font-weight: 500;
    font-style: italic;
    padding: 0 5px;
`;