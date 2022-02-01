import styled from "styled-components";

export const Header = styled.div`
  width: 90%;
  height: 5vh;
  display: flex;
  margin-top: 37px;
  margin-left: 80px;
  flex-direction: row;
  justify-items: center;  
  justify-content: space-between;
  h1{
	  width: 61%;
  }
  svg{
    color: #f4f5f7;
  }
`;

export const Container = styled.div`
	height: 70vh;
	display: flex;
	flex-direction: column;
	justify-items: center;  
	align-items: center;

	Form{
		height: 50vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		align-content: center;
		margin: 10%;

		input{
			margin-bottom: 25px;
		}
	}	
`;