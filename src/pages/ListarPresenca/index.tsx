import React, { useState, useEffect, useCallback, useRef } from "react";
import { Container, Header } from "./style";
import api from "../../service/api";
import { FiChevronLeft } from 'react-icons/fi';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { RiDeleteBinLine } from "react-icons/ri";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";

interface Presenca{
  id: number,
  aluno_id: number,
  presenca: boolean
}

interface Aluno{
  id: number,
  nome: string
}

const ListarPresenca: React.FC = () => {
  const [ presencas, setPresenca ] = useState<Presenca[]>([]);
  const [ alunos, setAluno ] = useState<Aluno[]>([]);

  const formRef = useRef<FormHandles>(null)

  useEffect(() => {
    api.get("/presenca").then((response) => {
        setPresenca(response.data);
    })

    api.get("/aluno").then((response) => {
      setAluno(response.data);
  })
  }, [])

  const excluir = useCallback(async(id) => { 
    console.log("id >>>", id);
    await api.delete(`/presenca/${id}`);
    window.location.reload();
}, [])

  return (
    <>
      <Header>
        <a href="/homePresenca"><FiChevronLeft size="35px"/></a>
        <h1>Lista de presenças cadastrados</h1>
        <a href="/cadastroPresenca"><IoMdAddCircleOutline size="35px"/></a>
      </Header> 
        <Container>
          {presencas.map((presenca) => (
            <Form key={presenca.id} ref={formRef} onSubmit={() => excluir(presenca.id)}>
              {presenca.presenca == true ? 
              <p>Aluno(a): {alunos.map((aluno) => aluno.id == presenca.aluno_id 
                ? aluno.nome : "")} - Presente </p> 
              : <p>Aluno(a): {alunos.map((aluno) => aluno.id == presenca.aluno_id 
                ? aluno.nome : "")} - Ausente</p>}
              <button type="submit"><RiDeleteBinLine/></button>
            </Form> 	
          ))}
        </Container>
      </>
    )
}

export default ListarPresenca;