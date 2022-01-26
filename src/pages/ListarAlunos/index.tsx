import React, { useState, useEffect } from "react";
import { Container } from "./style";
import api from "../../service/api";

interface Aluno{
    nome: string;
}

const ListarAlunos: React.FC = () => {
    const [ alunos, setAluno ] = useState<Aluno[]>([]);

    useEffect(() => {
        api.get("/aluno").then((response) => {
            setAluno(response.data);
        })
    }, [])

    return (
        <>
            <Container>
                <h1>Lista de alunos cadastrados</h1>
                {alunos.map((aluno) => (
                    <div>
                        <p>{aluno.nome}</p>
                    </div>
                ))}
            </Container>
        </>
    )
}

export default ListarAlunos;