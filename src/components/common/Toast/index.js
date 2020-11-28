import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStores } from '../../../stores/useStores';
import { FlexContainer } from '../../StyledComponents';
import "./styles.scss";

const backgrounds = {
    success: "rgba(60,184,129,0.9)",
    error: "rgba(250,37,94,0.9)"
}

const Toast = () => {
    const { moviesStore: {toast: { message, state } }} = useStores();
    const [className, setClassName] = useState("fadeIn");
    
    useEffect(() => {
        setClassName("fadeIn")
        setTimeout(() => { 
			setClassName("fadeOut")
		}, 4000);
    }, [message])

    return (
        <Container className={className} bgcolor={backgrounds[state]}>
            <Message>{message}</Message>
        </Container>
    )
}
export default observer(Toast);

const Container = styled(FlexContainer)`
    position: fixed;
    bottom: 20px;
    background-color: ${props => props.bgcolor};
    border-radius: 3px;
    padding: 20px;
    right: 20px;
    z-index: 1001;

    @media (max-width:768px) {
        left: 5px;
    }
`;

const Message = styled.p`
    color: white;
    margin: 0;
    font-weight: 500;
`;