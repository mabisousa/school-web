import React from 'react'
import { Switch } from 'react-router-dom'
import Route from "./Route"

import Home from "../pages/Home";
import CadastroAluno from "../pages/CadastroAluno";
import ListarAlunos from '../pages/ListarAlunos';
import ExluirAluno from '../pages/ExcluirAlunos';
import EditarAluno from '../pages/EditarAlunos';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={ Home }/>
    <Route path="/cadastroAluno" component={ CadastroAluno }/>
    <Route path="/listarAluno" component={ ListarAlunos }/>
    <Route path="/excluirAluno" component={ ExluirAluno }/>
    <Route path="/editarAluno" component={ EditarAluno }/>
  </Switch>
);

export default Routes;