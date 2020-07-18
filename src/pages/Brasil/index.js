import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

import { Container, Escolha, Span } from '../../components/Container/All';
import { Conteudo } from './styles';
import  InfoContainer  from './InfoContainer';

export default class Brasil extends Component {
  state ={
    brasil: [''],
    go: true,
    confirmed24: '',
    deaths24: '',
    recovered24:'',
    pegarAtt: [''],
  }

 async componentDidMount(){

   const response = await axios.get(`https://api.covid19api.com/country/brazil?`)
  console.log(response)
  this.setState({
    pegarAtt: [response.data[response.data.length - 2 ], response.data[response.data.length -1 ]],
    brasil: [response.data[response.data.length -1]],
  })

  this.setState({
    confirmed24 : this.state.pegarAtt.reduce( (Confirmed24,prox) => prox.Confirmed - Confirmed24, 0),
    deaths24:this.state.pegarAtt.reduce( (Deaths24, prox) => prox.Deaths - Deaths24, 0) ,
    recovered24:this.state.pegarAtt.reduce( (Recovered24,prox) => prox.Recovered - Recovered24, 0),
    go: false,
  })
  console.log(this.state.pegarAtt)



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
          {brasil.map( brasill => <InfoContainer go ={go} {...brasill} key={brasill} confirmed24={confirmed24} deaths24={deaths24} recovered24={recovered24} />)}
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
