import React, { useCallback, useRef } from "react";
import { Container, Header } from './style'
import api from "../../service/api"
import { Form } from "@unform/web";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { FormHandles } from "@unform/core";
import { FiChevronLeft } from 'react-icons/fi';

interface AlunoProps{
	nome: string,
}

const CadastroAluno: React.FC = () => {
	const formRef = useRef<FormHandles>(null)
	const aluno = {
		nome: "",
	}

	const cadastrar = useCallback(async (data: AlunoProps) =>{
		aluno.nome = data.nome;
		await api.post("/aluno", aluno)
		window.location.reload();
	}, [])
	
	return (
		<>
			<Header>
				<a href="/listarAluno"><FiChevronLeft size="35px"/></a>
				<h1>Cadastrar Aluno</h1> 
			</Header>
			<Container>
				<Form ref={formRef} onSubmit={cadastrar}>
					<Input name="nome" placeholder="Informe o nome"/>					
					<Button type="submit">Cadastrar</Button>
				</Form> 
			</Container>
		</>
	)
}

export default CadastroAluno;