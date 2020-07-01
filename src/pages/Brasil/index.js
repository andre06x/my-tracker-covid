import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Container } from '../../components/Container'
import { Escolha  } from '../../components/Escolha'
import { Span } from './styled'


export default class Brasil extends Component {
    state ={

    }

    render(){

        return(
            <Container>
                <Span>
                    <Link to="/" title="voltar">Voltar a pagina Principal</Link>
                    <h1>Brasil</h1>
                </Span>
                <Escolha> 
                    <Link to="/brasil/cidades">Cidades</Link>
                    <Link to="/brasil/estados">Estados</Link>

                </Escolha>
            </Container>
        )
    }
}