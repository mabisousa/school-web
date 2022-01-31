import styled from "styled-components";

export const Icon = styled.a`
  position: realtive;
  float: left;
  margin-top: -100px;
  margin-left: 80px;
`;

export const Container = styled.div`
	height: 70vh;
  display: flex;
  flex-direction: column;
  justify-items: center;  
  align-items: center;
  margin-top: 10%;

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