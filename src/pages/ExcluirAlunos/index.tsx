import React, { useCallback, useEffect, useState, useRef } from "react";
import { Container } from './style'
import api from "../../service/api"
import Button from "../../components/Button";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";

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