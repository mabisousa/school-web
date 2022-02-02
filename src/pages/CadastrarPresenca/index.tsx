import React, { useCallback, useEffect, useRef, useState } from "react";
import { Container, Header, Icon } from './style'
import api from "../../service/api"
import { Form } from "@unform/web";
import { AiFillGift } from 'react-icons/ai'
import { FormHandles } from "@unform/core";
import { FiChevronLeft } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
interface Aluno{
	id: number,
	nome: string
}

const CadastroAluno: React.FC = () => {
	const formRef = useRef<FormHandles>(null)
	const [ alunos, setAluno ] = useState<Aluno[]>([]);

	const presenca = {
		presenca: Boolean.valueOf(),
		aluno_id: parseFloat(""),
		data: "",
	}

	useEffect(() => {
		api.get("/aluno").then((response) => {
			setAluno(response.data);  
		})
	}, [])

	const today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const yyyy = today.getFullYear()

    const data = dd + '/' + mm + '/' + yyyy


	const cadastrar = useCallback(async (aluno_id) => {
		presenca.presenca = true;
		presenca.aluno_id = aluno_id;
		presenca.data = data;
		await api.post("/presenca", presenca).then(() =>{
			toast.success("Presença cadastrada", {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			  });
		})
	}, [])
	
	return (
		<>
			<Header>
				<a href="/listarPresenca"><FiChevronLeft size="35px"/></a>
				<h1>Cadastrar Presença</h1> 
			</Header>
			<ToastContainer/>
			<Container>
				{alunos.map((aluno) => (
					<Form key={aluno.id} ref={formRef} onSubmit={() => cadastrar(aluno.id)}>
						<p>{aluno.nome}</p>
						<div id="hold">
							<Icon type="submit"><AiFillGift/></Icon>
						</div>
					</Form> 		
				))}
			</Container>
		</>
	)
}

export default CadastroAluno;