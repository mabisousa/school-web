import React, { useState, useEffect } from "react";
import { Container, Icon } from "./style";
import api from "../../service/api";
import { FiChevronLeft } from 'react-icons/fi';

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
      <Icon href="/homeAlunos"><FiChevronLeft color="#f4f5f7" size="35px"/></Icon>
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