import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import { Container, Escolha, Span } from '../../components/Container/All';
import { Conteudo } from './styles';
import { ontemTeste, ontemDeOntem } from './datas';
import  InfoCotainer  from './InfoCotainer';


export default class Brasil extends Component {
  state ={
    brasil: [''],
    go: true,
    confirmed24: '',
    deaths24: '',
    recovered24:''
  }

 async componentDidMount(){

   const response = await axios.get(`https://api.covid19api.com/country/brazil?from=${ontemDeOntem}T00:00:00Z&to=${ontemTeste}T23:00:00Z`)
  console.log(response)
  this.setState({
    brasil: [response.data[1]],
    confirmed24 : response.data.reduce( (Confirmed24,prox) => prox.Confirmed - Confirmed24, 0),
    deaths24: response.data.reduce( (Deaths24, prox) => prox.Deaths - Deaths24, 0) ,
    recovered24: response.data.reduce( (Recovered24,prox) => prox.Recovered - Recovered24, 0),
    go: false,

  })

  //      minificar o codigo mais tarde, retirando as opções de data
  //    brasil: [response.data[response.data.length - 1]],
//   const testanto = [response.data[response.data.length - 1, response.data.length - 2]]

  }

  render() {

    const { go, brasil,  confirmed24, deaths24, recovered24 } = this.state

    return (
      <Container>
        <Span>
          <Link
            to="/"
            title="voltar"
          >
            Voltar a pagina Principal
          </Link>
          <h1>Brasil</h1>
        </Span>
        <Conteudo go>
          {brasil.map( brasill => <InfoCotainer go ={go} {...brasill} key={brasill} confirmed24={confirmed24} deaths24={deaths24} recovered24={recovered24} />)}
        </Conteudo>
        <Escolha>
        <Link
              to="/cidadesporestado"
            >
              Cidades Por Estado
            </Link>
          {/* <Link to="/brasil/cidades">Cidades</Link> */}
          <Link
            to="/brasil/estados"
            >
              Estados
            </Link>
          </Escolha>
      </Container>
    );
  }
}
