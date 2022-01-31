import React, { useCallback, useEffect, useState, useRef } from "react";
import { Container, Icon } from './style'
import api from "../../service/api"
import Button from "../../components/Button";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { FiChevronLeft } from 'react-icons/fi';

interface Presenca{
    id: number,
    presenca: boolean,
    aluno:{
        id: number,
        nome: string
    },
  }

const ExluirPresenca: React.FC = () => {

  const [ presencas, setPresenca ] = useState<Presenca[]>([]);

  useEffect(() => {
      api.get("/presenca").then((response) => {
        setPresenca(response.data);  
      })
  }, [])

  const formRef = useRef<FormHandles>(null)

  const excluir = useCallback(async(id) => { 
      console.log("id >>>", id);
      await api.delete(`/presenca/${id}`);
      window.location.reload();
  }, [])
    
	return (
		<>
      <Icon href="/homePresenca"><FiChevronLeft color="#f4f5f7" size="35px"/></Icon>
			<Container>
        <h1>Exluir Presenca</h1> 
          
        {presencas.map((presenca) => (
          <Form key={presenca.id} ref={formRef} onSubmit={() => excluir(presenca.id)}>
            <Button type="submit">{presenca.aluno.nome}</Button>
          </Form> 			
        ))}
			</Container>
		</>
	)
}

export default ExluirPresenca;