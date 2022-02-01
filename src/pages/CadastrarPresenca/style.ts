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

	Form:nth-child(even){
		background: #009394;
	}

	Form:nth-child(odd){
		background: #84a295;
	}

	Form{
		background: #009394;
		width: 90%;
		height: 40vh;
		display: flex;
		flex-direction: row;
		align-items: center;
		align-content: center;
		justify-content: space-between;
		border-radius: 15px;
		padding: 15px;
		margin: 5px;

		input{
			border: none;
		}

		#hold{
			width: 20vw;
			display: flex;
			justify-content: space-between;
			
			input{
				margin-top: 5px;
			}
		}
	}	
`;

export const Buttons = styled.div`
	width: 100%;
	margin-right: 140px;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;

	button:nth-child(1){
		background: #7e7e7e;
		margin-right: 15px;
	}
`;