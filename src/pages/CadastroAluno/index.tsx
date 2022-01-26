import React, { useCallback, useRef } from "react";
import { Container, Icon } from './style'
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
			<Icon href="/"><FiChevronLeft color="#f4f5f7" size="35px"/></Icon>
			<Container>
				<h1>Cadastrar Aluno</h1> 
				<Form ref={formRef} onSubmit={cadastrar}>
					<Input name="nome" placeholder="Informe o nome"/>					
					<Button type="submit">Cadastrar</Button>
				</Form> 
			</Container>
		</>
	)
}

export default CadastroAluno;