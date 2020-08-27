/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Brasil from './pages/Brasil';
import Mundo from './pages/Mundo';
import Cidades from './pages/Brasil/Cidades';
import Estados from './pages/Brasil/Estados';
import NotFound from './pages/NotFound';
import CidadesPorEstado from './pages/Brasil/CidadesporEstados'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/brasil" exact>
          <Brasil />
        </Route>
        <Route path="/brasil/estados" exact>
          <Estados />
        </Route>
        <Route path="/mundo" exact>
          <Mundo />
        </Route>
        <Route path="/cidadesporestado" exact>
          <CidadesPorEstado />
        </Route>
        <Route path="*" exact>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
