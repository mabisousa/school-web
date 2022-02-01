import styled from "styled-components";

export const Container = styled.div`
  input{
		width: 250px;
		height: 50px;
		background-color: transparent;
		border: 1px solid white;
		border-radius: 15px;
		padding: 16px;

		&::placeholder{
			background-color: transparent;
			color: #fff;
		}

		&:not(:placeholder-shown) {
			color: #fff;
		}
	}
`;