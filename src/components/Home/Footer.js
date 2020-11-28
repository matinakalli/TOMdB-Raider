import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import { FlexContainer } from "../StyledComponents";

const Footer = () => (
    <BlueContainer>
        <CustomWidthContainer justify="space-between">
            <p>Developed by <a href="https://www.linkedin.com/in/matina-kallivoka-07642b145/" rel="noreferrer" target="_blank">Matina Kallivoka</a></p>
        </CustomWidthContainer>
    </BlueContainer>
)

export default Footer;

const CustomWidthContainer = styled(FlexContainer)`
    max-width: 1300px;
    margin: 0 auto;
`;


const BlueContainer = styled.div`
    font-size: 19px;
    background: ${theme.colors.tomdbBase1};
    padding: 20px;
    color: ${theme.colors.tomdbLight};
    font-weight: 500;
    border-top: 1px solid ${theme.colors.tomdbLightFaded};

    p {
        text-align: right;
        width: 100%;
    }

    a {
        color: ${theme.colors.tomdbLight};
        text-decoration: none;
        font-weight: 600;
    }

    @media(max-width: ${theme.breakpoint}) {
        width: auto;
        font-size: 15px;

        p {
            text-align: center;
        }
    }
`;