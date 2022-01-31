import React, { useState, useEffect } from "react";
import { Container, Icon } from "./style";
import api from "../../service/api";
import { FiChevronLeft } from 'react-icons/fi';

interface Presenca{
  id: number,
  presenca: boolean,
  aluno:{
    id: number,
    nome: string
  }
}

const ListarPresenca: React.FC = () => {
  const [ presencas, setPresenca ] = useState<Presenca[]>([]);

  useEffect(() => {
    api.get("/presenca").then((response) => {
        setPresenca(response.data);
    })
  }, [])

  if(presencas.map(presenca => presenca.presenca == true)){
    console.log("verdadeiro")
  }

  return (
    <>
      <Icon href="/homePresenca"><FiChevronLeft color="#f4f5f7" size="35px"/></Icon>
        <Container>
          <h1>Lista de presenças cadastrados</h1>
          {presencas.map((presenca) => (
            <div key={presenca.id}>
              {presenca.presenca == true ? <p>{presenca.aluno.nome} - Presente</p> : <p>{presenca.aluno.nome} - Ausente</p>}
            </div>
          ))}
        </Container>
      </>
    )
}

export default ListarPresenca;