import React from "react";
import { Container } from "./style";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Home: React.FC = () =>{
	return(
		<Container>
			<Link to="/homeAlunos"><Button type="submit">Alunos</Button></Link>
			<Link to="/homePresenca"><Button type="submit">Presenças</Button></Link>
		</Container>
	)
}

export default Home;