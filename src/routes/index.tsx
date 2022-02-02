import React from 'react'
import { Switch } from 'react-router-dom'
import Route from "./Route"

import Home from "../pages/Home";
import HomeAlunos from '../pages/HomeAlunos';
import HomePresenca from '../pages/HomePresenca';
import CadastroAluno from "../pages/CadastroAluno";
import ListarAlunos from '../pages/ListarAlunos';
import EditarAluno from '../pages/EditarAlunos';
import CadastroPresenca from '../pages/CadastrarPresenca';
import ListarPresenca from '../pages/ListarPresenca';
import EditarPresenca from '../pages/EditarPresenca';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={ Home }/>
    <Route path="/homeAlunos" component={ HomeAlunos }/>
    <Route path="/homePresenca" component={ HomePresenca }/>
    <Route path="/cadastroAluno" component={ CadastroAluno }/>
    <Route path="/listarAluno" component={ ListarAlunos }/>
    <Route path="/editarAluno" component={ EditarAluno }/>
    <Route path="/listarPresenca" component={ ListarPresenca }/>
    <Route path="/cadastroPresenca" component={ CadastroPresenca }/>
    <Route path="/editarPresenca" component={ EditarPresenca }/>
  </Switch>
);

export default Routes;