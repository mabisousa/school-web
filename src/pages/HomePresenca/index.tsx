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
        <Link to="/cadastroPresenca"><Button type="submit">Cadastrar Presenças</Button></Link>
        <Link to="/listarPresenca"><Button type="submit">Listar Presenças</Button></Link>
        <Link to="/editarAluno"><Button type="submit">Editar Presenças</Button></Link>
        <Link to="/excluirPresenca"><Button type="submit">Excluir Presenças</Button></Link>
      </Container>
    </>
	)
}

export default Home;