import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Span } from '../../components/Span'
import { Container } from '../../components/Container'

export default class Mundo extends Component {
    state = {

    }

    render(){
        return(
            <Container>
                <Span>
                     <Link to="/" title="voltar">Voltar a pagina Principal</Link>
                     <h1>Mundo</h1>
                </Span>
            </Container>

        )
    }
}
