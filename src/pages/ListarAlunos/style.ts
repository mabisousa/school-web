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
  svg{
    color: #f4f5f7;
  }
`;

export const Container = styled.div`
  width: 90%;
  display: flex;
  margin-top: 37px;
  margin-left: 90px;
  flex-direction: column;
  justify-items: center;  
  justify-content: space-between;

  Form{
		display: flex;
		flex-direction: row;
    justify-items: center;  
    justify-content: space-between;
		border-radius: 15px;
		padding: 15px;
		margin: 5px;

		button{
			border: none;
      background: transparent;
      color: #fff;
		}
	}	

  Form:nth-child(even){
		background: #009394;
	}

	Form:nth-child(odd){
		background: #84a295;
	}

  div{
    p{
      color: #dee3e0;
      margin-top: 15px;
    }
  }
`