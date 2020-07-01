import React, { Component } from 'react'
import { GiBrazilFlag, GiEarthAmerica } from 'react-icons/gi'
import { Link }  from 'react-router-dom'

import { Container, Title, Escolha } from './styles'
export default class Main extends Component {

    state = {
    }
    render(){
        return (
            <Container>
                  <Title>
                        <h1>Casos de Covid-19</h1>
                  </Title>
                  <Escolha>
                        <Link to="/brasil" title="Corona Virus no Brasil"> <GiBrazilFlag  size={110}/> </Link> 
                        <Link to="/mundo" title="Corona Virus no Mundo"> <GiEarthAmerica size={90} /> </Link>
                  </Escolha>

            </Container>
        )
    }
}