import React, { useState, useEffect, useCallback, useRef } from "react";
import { Container, Header } from "./style";
import api from "../../service/api";
import { FiChevronLeft } from 'react-icons/fi';
import { IoMdAddCircleOutline } from 'react-icons/io';
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

const EditarPresenca: React.FC = () => {
  
  const formRef = useRef<FormHandles>(null)
	const [ presencas, setPresenca ] = useState<Presenca[]>([]);
  const [ alunos, setAluno ] = useState<Aluno[]>([]);

  const presenca = {
		presenca: Boolean.valueOf(),
		aluno_id: parseFloat(""),
		data: "",
	}

	useEffect(() => {
    api.get("/presenca").then((response) => {
        setPresenca(response.data);
    })

    api.get("/aluno").then((response) => {
      setAluno(response.data);
  })
  }, [])

	const today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const yyyy = today.getFullYear()

    const data = dd + '/' + mm + '/' + yyyy


	const editar = useCallback(async (id, aluno_id) => {
		presenca.presenca = false;
    console.log(presenca.presenca)
		presenca.aluno_id = aluno_id;
    console.log(presenca.aluno_id)
		presenca.data = data;
    console.log(presenca.data)
    console.log(id)
		await api.put(`/presenca/${id}`, presenca)
    window.location.reload();
	}, [])

  return (
    <>
      <Header>
        <a href="/homePresenca"><FiChevronLeft size="35px"/></a>
        <h1>Editar presença</h1>
        <a href="/cadastroPresenca"><IoMdAddCircleOutline size="35px"/></a>
      </Header>    
      <Container>
        {presencas.map((presenca) => (
            <Form key={presenca.id} ref={formRef} onSubmit={() => editar(presenca.id, presenca.aluno_id)}>
              <button type="submit">
                {presenca.presenca == true ? 
                  <p>Aluno(a): {alunos.map((aluno) => aluno.id == presenca.aluno_id 
                  ? aluno.nome : "")} - Presente </p> 
                : <p>Aluno(a): {alunos.map((aluno) => aluno.id == presenca.aluno_id 
                  ? aluno.nome : "")} - Ausente</p>}
              </button>
            </Form> 	
          ))}
      </Container>
      </>
    )
}

export default EditarPresenca;