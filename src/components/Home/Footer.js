import React from "react";
import styled from "styled-components";
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
    background: #31428f;
    padding: 20px;
    color: #f2f0e8;
    font-weight: 500;

    p {
        text-align: right;
        width: 100%;
    }

    a {
        color: #f2f0e8;
        text-decoration: none;
        font-weight: 600;
    }

    @media(max-width: 768px) {
        width: auto;
        font-size: 15px;

        p {
            text-align: center;
        }
    }
`;