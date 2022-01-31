import React from "react";
import { Container, Icon } from "./style";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { FiChevronLeft } from 'react-icons/fi';

const Home: React.FC = () =>{
	return(
    <>
      <Icon href="/"><FiChevronLeft color="#f4f5f7" size="35px"/></Icon>
      <Container>
        <Link to="/cadastroAluno"><Button type="submit">Cadastrar Aluno</Button></Link>
        <Link to="/listarAluno"><Button type="submit">Listar Aluno</Button></Link>
        <Link to="/editarAluno"><Button type="submit">Editar Aluno</Button></Link>
        <Link to="/excluirAluno"><Button type="submit">Excluir Aluno</Button></Link>
      </Container>
    </>
	)
}

export default Home;