import styled from "styled-components";

const FlexContainer = styled.div`
    display: flex;
    justify-content: ${props => props.justify || "space-evenly"};
    align-items: ${props => props.align || "center"};
    flex-wrap:  ${props => props.wrap || "nowrap"};
`;

export {
    FlexContainer
}