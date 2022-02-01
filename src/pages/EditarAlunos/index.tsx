import React, { useState, useEffect, useCallback, useRef } from "react";
import { Container, Header } from "./style";
import api from "../../service/api";
import { FiChevronLeft } from 'react-icons/fi';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import Input from "../../components/Input";

interface Aluno{
  id: number,
  nome: string;
}

const ListarAlunos: React.FC = () => {
  const [ alunos, setAluno ] = useState<Aluno[]>([]);
  const [ nomeAluno, setNomeAluno ] = useState('');

  const aluno = {
		nome: "",
	}

  useEffect(() => {
    api.get("/aluno").then((response) => {
      setAluno(response.data);
    })
  }, [])

  const formRef = useRef<FormHandles>(null);

  const editar = useCallback(async(id, nomeAluno) => { 
    console.log("id >>>", id);
    aluno.nome = nomeAluno;
    console.log(aluno.nome);
    await api.put(`/aluno/${id}`, aluno);
    window.location.reload();
  }, [])

  return (
    <>
      <Header>
        <a href="/homeAlunos"><FiChevronLeft size="35px"/></a>
        <h1>Editar aluno</h1>
        <a href="/cadastroAluno"><IoMdAddCircleOutline size="35px"/></a>
      </Header>    
      <Container>
        <input placeholder="Nome" onChange={nomeAluno => {setNomeAluno(nomeAluno.target.value)}}/>
        {alunos.map((aluno) => (
          <Form key={aluno.id} ref={formRef} onSubmit={() => editar(aluno.id, nomeAluno)}>
            <button type="submit"><p>{aluno.nome}</p></button>
          </Form> 		
        ))}
      </Container>
      </>
    )
}

export default ListarAlunos;