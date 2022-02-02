import styled, { css } from "styled-components";



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
	  width: 62%;
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
	margin-top: 37px;

	Form:nth-child(even){
		background: #009394;
	}

	Form:nth-child(odd){
		background: #84a295;
	}

	Form{
		width: 90%;
		display: flex;
		flex-direction: row;
		align-items: center;
		align-content: center;
		justify-content: space-between;
		border-radius: 15px;
		padding: 15px;
		margin: 5px;

		p{
			width: 50%;
		}

		input{
			border: none;
		}

		#hold{
			margin-right: 15px;
			display: flex;
			justify-content: space-between;
		}
	}	
`;

export const Icon = styled.button`
	background: transparent;
	border: none;
	color: #fff;
`;