import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/Main'
import Brasil from './pages/Brasil'
import Mundo from './pages/Mundo'
import Cidades from './pages/Brasil/Cidades'
import Estados from './pages/Brasil/Estados'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route  path="/" exact> <Main/> </Route>
                <Route  path="/brasil" exact> <Brasil/> </Route>
                <Route  path="/brasil/cidades" exact> <Cidades/> </Route>
                <Route  path="/brasil/estados" exact> <Estados/> </Route>
                <Route  path="/mundo" exact> <Mundo/></Route>
            </Switch>
        </BrowserRouter>
    )
}