import styled from "styled-components";
import "./styles.scss";
import laraSearching from "../../../assets/lara-searching.gif";
import { FlexContainer } from "../../StyledComponents";


const LaraIsSearching = () => {

	return (
		<Container justify="center"	>
			<LaraImage alt="lara is searching" src={laraSearching}/>
			<div>
				<LoadingText>Lara is searching for movies...</LoadingText>
				<Quote style={{fontStyle:"italic"}}>“Everything lost is meant to be found.“ ― Lara Croft</Quote>
			</div>
		</Container>
	);
};

export default LaraIsSearching; 

const LaraImage = styled.img`
	width: 200px;

	@media (max-width: 768px) {
		width: 100px;
	}
`;

const Quote = styled.p`
	font-size: 14px;
  	margin-top: 35px;
  	font-weight: 500;
	margin-left: 20px;
	font-style: italic;
	text-align: right;
`;


const LoadingText = styled.p`
	font-size: 18px;
	margin-top: 35px;
	font-weight: 500;
	margin-left: 20px;
`;

const Container = styled(FlexContainer)`
	background-color: #ffffff;
	max-width: 500px;
	padding: 30px;
    margin: 0 auto;
    border-radius: 20px;
    border-right: 2px solid #dbdbdb;
    border-bottom: 2px solid #dbdbdb;
`;