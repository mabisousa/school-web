import React, { useCallback, useEffect, useState, useRef } from "react";
import { Container, Icon } from './style'
import api from "../../service/api"
import Button from "../../components/Button";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import Input from "../../components/Input";
import { FiChevronLeft } from 'react-icons/fi';

interface Aluno{
    id: number,
    nome: string;
}

const EditarAluno: React.FC = () => {

    const [ id, setId ] = useState('');
    const [ data, setData ] = useState('');

    const formRef = useRef<FormHandles>(null)

    const aluno = {
		nome: "",
	}

	/*const cadastrar = useCallback(async (data: Aluno) =>{
		aluno.nome = data.nome;
		await api.post("/aluno", aluno)
		window.location.reload();
	}, [])*/

    const editar = useCallback(async(id, data: Aluno) => { 
        aluno.nome = data.nome;
        console.log("id >>>", id);

        await api.put(`/aluno/${id}`, aluno);
        window.location.reload();
    }, [])
    
    
	return (
		<>
            <Icon href="/"><FiChevronLeft color="#f4f5f7" size="35px"/></Icon>
			<Container>
                <h1>Editar Aluno</h1> 
                <input pattern="[0-9]*" placeholder="Informe o id do aluno" onChange={event => setId(event.target.value)}/>
               
                <Form ref={formRef} onSubmit={() => editar}>
                    <input placeholder="Informe o novo nome do aluno" onChange={event => setData(event.target.value)}/>
                    <Button type="submit">Editar</Button>
				</Form> 			
			</Container>
		</>
	)
}

export default EditarAluno;

/*
    <input pattern="[0-9]*" placeholder="Informe o nome" onChange={event => setId(event.target.value)}/>					

*/