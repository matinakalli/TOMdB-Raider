import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";
import { useStores } from "../../stores/useStores";
import { FlexContainer } from "../StyledComponents";
import "./styles.scss";

const imageOriginUrl = "https://image.tmdb.org/t/p/w500/";

const MovieCard = ({ movie: { id, title, poster_path, vote_average } }) => {
    const { moviesStore: { cart, setCart } } = useStores();
 
    const isInCart = () => {
        return cart.filter((movieId) => (movieId === id));
    }

    const addToCart = () => {
        let newArray = cart.slice();
        console.log(newArray);
        newArray.push(id);
        setCart(newArray);
    }

    const removeFromCart = () => {
        let newArray = cart.slice();
        const rr = newArray.filter((movieId) => (movieId !== id));
        // newArray.remove(id);
        console.log(rr)
        setCart(newArray);
    }

    return (
        <Card background={`${imageOriginUrl}${poster_path}`}>
            <RateCircle>{vote_average}</RateCircle>
            {isInCart().length===0 && <AddToCart onClick={() => addToCart()} alt="Add Cart" src="https://img.icons8.com/flat_round/64/000000/add-tag--v1.png" />}
            {isInCart().length>0 && <RemoveFromCart onClick={() => removeFromCart()} alt="Add Cart" src="https://img.icons8.com/flat_round/64/000000/remove-tag--v1.png" />}
            <StarImage className="rotate-star" alt="star" src="https://img.icons8.com/plasticine/100/000000/star--v1.png" />
        </Card>
    )

}

export default observer(MovieCard);

const Card = styled.div`
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 2px;
    padding: 10px;
    width: 200px;
    height: 300px;
    margin: 10px 0;
    box-shadow: 2px 1px 11px #c6c5bf;
    position: relative;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const RateCircle = styled(FlexContainer)`
    border-radius:25px;
    border: 2px solid #eae7dc; 
    background-color: rgba(232, 90, 79, 0.8);
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

const AddToCart = styled.img`
    width: 40px;
    height: 40px;
    cursor: pointer;
    position absolute;
    top: 10px;
    right: 10px;

`;

const RemoveFromCart = styled.img`
    width: 40px;
    height: 40px;
    cursor: pointer;
    position absolute;
    top: 10px;
    right: 10px;

`;