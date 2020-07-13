import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GiBrazilFlag, GiEarthAmerica } from 'react-icons/gi';
import { FaSpinner } from 'react-icons/fa';

import apiMundo from '../../services/api/apiMundo'

import { Title, Dados } from './styles';
import { Container,  Escolha } from '../../components/Container/All';
import { Brasil, Mundo } from './List'

export default class Main extends Component {
  state ={
    brasil: [],
    worldFinal: [],
    loading: false,
    loadingImportant: true
  }

  async componentDidMount(){

        const responseMundo = await  apiMundo.get()
        const  { data }  = responseMundo.data

        this.setState({
          worldFinal: [{confirmed: data.reduce( (worldFinal, prox) => worldFinal + prox.confirmed, 0)}],
          brasil:  data.filter( pais => pais.country === "Brazil"),
          loadingImportant: false
        })

  }

  render(){
    const { brasil, worldFinal, loading, loadingImportant } = this.state
    return (
      <Container
        loading={loading}>
        <Title>
          <h1>CASOS DE COVID-19</h1>
        </Title>
        <Escolha>
          <Link
            to="/brasil"
            title="Corona Virus no Brasil">
            <GiBrazilFlag size={120} />
          </Link>
          <Link
            to="/mundo"
            title="Corona Virus no Mundo">
              <GiEarthAmerica size={100} />
          </Link>
        </Escolha>
        <Dados loadingImportant={loadingImportant}>
          { loadingImportant ? (
            <FaSpinner
              size={30}
            />
          ) : (
            <>
              {brasil.map(brasill => <Brasil key={brasill} { ...brasill}/>)}
              {worldFinal.map(worldF => <Mundo key={worldF} {...worldF} />)}
            </>
          )}

        </Dados>

      </Container>
  );
}
}


// var confirmed = 0;
// var deaths = 0;
// var recovered = 0;

// // data.reduce( function(_,next){
//   //     confirmed = confirmed + next.confirmed
//   //     deaths = deaths + next.deaths
//   //     recovered = recovered + next.recovered
//   //   })
