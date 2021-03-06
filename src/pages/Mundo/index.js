import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaSpinner } from 'react-icons/fa';

import axios from 'axios'

import apiMundo from '../../services/api/apiMundo'

import { ContainerTable, Table  } from '../../components/Table/tableComponents'
import { Container, Span } from '../../components/Container/All'
import  InfoContainer  from './InfoContainer'
import { Head, ListTable } from './Table'
import { Conteudo } from '../Brasil/styles'
import { ontemTeste, hojeData } from '../Brasil/datas'


export default class Mundo extends Component {
    state = {
        overflow: false,
        loading: true,
        conteudo: [],
        go: true,
        countries: ['']
    }

    async componentDidMount(){

        var hoje = new Date();
        var hora = hoje.getHours()
        if(hora < 10){
            hora = '0'+hora;
        }
        if(hora >= 23){
            hora = hora - 2
        }

        const response = await axios.get(`https://api.covid19api.com/world?from=${ontemTeste}T${hora}:00:00Z&to=${hojeData}T${hora}:00:00Z`)
        const  { data }  = response
        this.setState({
            conteudo: [ data[data.length - 1] ],

        })

        const responseCountries = await apiMundo()

        const dataCountries = responseCountries.data.data

        this.setState({
            countries: dataCountries,
            overflow: true,
            loading: false,
            go: false,
        })

    }

    render(){
        const { overflow, loading, conteudo,go, countries  } = this.state
        return(
            <Container>
                <Span>
                     <Link
                        to="/"
                        title="voltar"
                          >
                            Voltar a pagina Principal
                          </Link>
                     <h1>Mundo</h1>
                </Span>
                <Conteudo>
                    {conteudo.map( (dd)  => <InfoContainer go={go} key={String(dd)} {...dd} /> )}
                </Conteudo>
                <ContainerTable overflow={overflow}>
                    {loading ? (
                        <FaSpinner size={50} />
                    ) : (
                        <Table border="1" >
                        <Head />
                        <tbody>
                            {countries.map((c) => <ListTable  key={String(c.country)}{...c} />)}
                        </tbody>
                        </Table>

                    )}
        </ContainerTable>
            </Container>

        )
    }
}

