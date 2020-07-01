import React, { Component} from 'react'
import { Link } from 'react-router-dom'

import { Container } from '../../../components/Container'
import { Span } from '../../../components/Span'

import api from '../../../services/api/apiCidades'

export default class Cidades extends Component{
    state ={}

    async componentDidMount(){
        const response = await api.get()
        const { results } = response.data
        
        console.log(results)
    }
    render(){

        return(
            <Container>
                <Span>
                    <Link to="/brasil" title="voltar">Voltar a seleção</Link>
                    <h1>Cidades</h1>
                </Span>
            </Container>
        )
    }
}