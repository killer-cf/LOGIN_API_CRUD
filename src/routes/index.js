import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login/index';
import Page404 from '../pages/Page404/index';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Register from '../pages/Register';
import Fotos from '../pages/Fotos';

function Rotas() {

  return (
    <Switch>
      <MyRoute exact path="/" component={Alunos} isClosed={false}/>
      <MyRoute exact path="/aluno/:id/edit" component={Aluno} isClosed />
      <MyRoute exact path="/aluno/" component={Aluno} isClosed/>
      <MyRoute exact path="/login" component={Login} isClosed={false}/>
      <MyRoute exact path="/register" component={Register} isClosed={false}/>
      <MyRoute exact path="/fotos/:id" component={Fotos} isClosed/>
      <MyRoute path="*" component={Page404} />

    </Switch>
  );
}

export default Rotas;
