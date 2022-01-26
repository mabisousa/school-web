import React from "react";
import { Container } from "./style";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Home: React.FC = () =>{
	return(
		<Container>
			<Link to="/cadastroAluno"><Button type="submit">Cadastrar Aluno</Button></Link>
			<Link to="/listarAluno"><Button type="submit">Listar Aluno</Button></Link>
			<Link to="/editarAluno"><Button type="submit">Editar Aluno</Button></Link>
			<Link to="/excluirAluno"><Button type="submit">Excluir Aluno</Button></Link>
		</Container>
	)
}

export default Home;