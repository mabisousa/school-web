import React, { useCallback, useEffect, useRef, useState } from "react";
import { Container, Icon, Buttons } from './style'
import api from "../../service/api"
import { Form } from "@unform/web";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { FormHandles } from "@unform/core";
import { FiChevronLeft } from 'react-icons/fi';

interface PresencProps{
	presenca: boolean,
	data: string,
	aluno: {
		id: number,
		nome: string
	}
}

interface Aluno{
	id: number,
	nome: string;
  }

const CadastroAluno: React.FC = () => {
	const formRef = useRef<FormHandles>(null)
	const [presente, setPresente] = useState("");
	const presenca = {
		presenca: Boolean.valueOf(),
		data: "",
		aluno: {
			id: parseFloat(""),
			nome: ""
		}
	}

	const [ alunos, setAluno ] = useState<Aluno[]>([]);

	useEffect(() => {
		api.get("/aluno").then((response) => {
			setAluno(response.data);  
		})
	}, [])
	
	const handleChange = useCallback((status: string) => {
		setPresente(status);
	}, []);

	const cadastrar = useCallback(async (data: PresencProps) =>{
		if(presente == "true"){
			presenca.presenca = true;
			console.log(presenca.presenca)
		}
		presenca.data = data.data;
		presenca.aluno.id = data.aluno.id;
		presenca.aluno.nome = data.aluno.nome;
		await api.post("/presenca", presenca)
		window.location.reload();
	}, [])
	
	return (
		<>
			<Icon href="/homePresenca"><FiChevronLeft color="#f4f5f7" size="35px"/></Icon>
			<Container>
				<h1>Cadastrar Presença</h1> 
				{alunos.map((aluno) => (
					<Form key={aluno.id} ref={formRef} onSubmit={() => cadastrar}>
						<p>{aluno.nome}</p>
						<Input type={"date"} name="data"/>	
						<div id="hold">
							<input type="radio" id="1" name="fav_language" onChange={() => handleChange("true")}/>
							<label htmlFor="1">Presente</label><br/>
							<input type="radio" id="2" name="fav_language" onChange={() => handleChange("false")}/>
							<label htmlFor="2">Ausente</label><br/>
						</div>
					</Form> 		
				))}
				<Buttons>
					<Button>Cancelar</Button>
					<Button type="submit">Cadastrar</Button>
				</Buttons>
			</Container>
		</>
	)
}

export default CadastroAluno;