import React from "react";
import styled from "styled-components";

const BuyMessage = ({message: {color, text}}) => (
        <Container>
            <Message color={color}>{text[0]}</Message>
            <Message color={color} weight="500">{text[1]}</Message>
        </Container>
    )

export default BuyMessage;

const Container = styled.div`
    width: 300px;
`;

const Message = styled.p`
    text-align: center;
    font-weight: ${props => props.weight || "600"};
    color: ${props => props.color};
`;