/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Brasil from './pages/Brasil';
import Mundo from './pages/Mundo';
import Estados from './pages/Brasil/Estados';
import NotFound from './pages/NotFound';
import CidadesPorEstado from './pages/Brasil/CidadesporEstados';
import Cidade from './pages/Brasil/Cidade';

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
        <Route path="/cidade/:city">
          <Cidade/>
        </Route>
        <Route path="*" exact>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
