import React, { useCallback, useEffect, useState, useRef } from "react";
import { Container, Icon } from './style'
import api from "../../service/api"
import Button from "../../components/Button";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { FiChevronLeft } from 'react-icons/fi';

interface Aluno{
    id: number,
    nome: string;
}

const ExluirAluno: React.FC = () => {

    const [ alunos, setAluno ] = useState<Aluno[]>([]);

    useEffect(() => {
        api.get("/aluno").then((response) => {
            setAluno(response.data);  
        })
    }, [])

    const formRef = useRef<FormHandles>(null)

    const excluir = useCallback(async(id) => { 
        console.log("id >>>", id);
        await api.delete(`/aluno/${id}`);
        window.location.reload();
    }, [])
    
    
	return (
		<>
            <Icon href="/"><FiChevronLeft color="#f4f5f7" size="35px"/></Icon>
			<Container>
                <h1>Exluir Aluno</h1> 
                
                {alunos.map((aluno) => (
                    <Form key={aluno.id} ref={formRef} onSubmit={() => excluir(aluno.id)}>
                        <Button type="submit">{aluno.nome}</Button>
				    </Form> 			
                    
                ))}
			</Container>
		</>
	)
}

export default ExluirAluno;