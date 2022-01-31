import React from 'react'
import { Switch } from 'react-router-dom'
import Route from "./Route"

import Home from "../pages/Home";
import CadastroAluno from "../pages/CadastroAluno";
import ListarAlunos from '../pages/ListarAlunos';
import ExluirAluno from '../pages/ExcluirAlunos';
import EditarAluno from '../pages/EditarAlunos';
import HomeAlunos from '../pages/HomeAlunos';
import HomePresenca from '../pages/HomePresenca';
import ListarPresenca from '../pages/ListarPresenca';
import ExluirPresenca from '../pages/ExcluirPresenca';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={ Home }/>
    <Route path="/homeAlunos" component={ HomeAlunos }/>
    <Route path="/homePresenca" component={ HomePresenca }/>
    <Route path="/cadastroAluno" component={ CadastroAluno }/>
    <Route path="/listarAluno" component={ ListarAlunos }/>
    <Route path="/excluirAluno" component={ ExluirAluno }/>
    <Route path="/editarAluno" component={ EditarAluno }/>
    <Route path="/listarPresenca" component={ ListarPresenca }/>
    <Route path="/excluirPresenca" component={ ExluirPresenca }/>
  </Switch>
);

export default Routes;