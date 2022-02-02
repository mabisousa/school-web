import React, { useState, useEffect, useCallback, useRef } from "react";
import { Container, Header } from "./style";
import api from "../../service/api";
import { FiChevronLeft } from 'react-icons/fi';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface Aluno{
  id: number,
  nome: string;
}

const ListarAlunos: React.FC = () => {
  const [ alunos, setAluno ] = useState<Aluno[]>([]);

  useEffect(() => {
    api.get("/aluno").then((response) => {
      setAluno(response.data);
    })
  }, [])

  const formRef = useRef<FormHandles>(null)

  const excluir = useCallback(async(id) => { 
    try{
      console.log("id >>>", id);
    await api.delete(`/aluno/${id}`);
    window.location.reload();
    }catch(e) {
      toast.error("Erro ao excluir aluno porque ele está presente" , {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    
  }, [])

  return (
    <>
      <Header>
        <a href="/homeAlunos"><FiChevronLeft size="35px"/></a>
        <h1>Lista de alunos cadastrados</h1>
        <a href="/cadastroAluno"><IoMdAddCircleOutline size="35px"/></a>
      </Header>  
      <ToastContainer/>  
      <Container>
        {alunos.map((aluno) => (
          <Form key={aluno.id} ref={formRef} onSubmit={() => excluir(aluno.id)}>
            <p>{aluno.nome}</p>
            <button type="submit"><RiDeleteBinLine/></button>
          </Form> 		
        ))}
      </Container>
      </>
    )
}

export default ListarAlunos;