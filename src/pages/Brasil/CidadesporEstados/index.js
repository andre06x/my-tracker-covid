import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Container, Span } from '../../../components/Container/All';
import { Estados } from './styles';
import { ContainerTable, Table } from '../../../components/Table/tableComponents';
import { FaSpinner } from 'react-icons/fa';
import { List, Head } from '../Cidades/List'

export default class CidadesPorEstado extends Component {
  state = {
    estados: ['MG','SP', 'RS', 'RJ', 'BA', 'PR', 'DF',  'ES',  'GO', 'MA', 'MT', 'MS', 'AC', 'PA', 'PB', 'CE', 'PE', 'PI', 'AM', 'RN', 'AP',  'RO',  'RR', 'SC', 'SE',  'TO',  'AL'],
    estado: '',
    overflow: false,
    loading: true,
    first: true,
    nonClick: false,
    sizeTable: true,
  }


 chamar = async estado => {

  this.setState({
    first: false,
    nonClick: true,
    click: estado,
    estados: this.state.estados.filter(estados => estados !== estado)
  })

  const response = await  axios.get(`https://brasil.io/api/dataset/covid19/caso/data?is_last=True&state=${estado}`)
  const { results } = response.data
  this.setState( {
    estado: [results, ...this.state.estado],
    overflow: true,
    loading: false,
    nonClick: false,
  })

}

  render() {
    const {
      estados,
      overflow,
      loading,
      estado,
      first,
      nonClick,
      sizeTable
    } = this.state;

    return (
      <Container first={first} loading={loading}>
        <Span>
          <Link
            to="/brasil"
          >
           Voltar a seleção
          </Link>
        </Span>
          <h1>
            Cidades por Estado
          </h1>
          <Estados
            nonClick={nonClick} >
            {estados.map( estado => <div  onClick={() => this.chamar(estado)} key={estado}>{estado}</div>)}
          </Estados>
          { loading ? (
              <FaSpinner size={30} />
          ) : (
                <ContainerTable overflow={overflow}>
            { loading ? (
              ''
            ) : (
                  <Table border="1" sizeTable ={sizeTable}>
                    <Head />
                    <tbody>
                      { estado.map( (estad) => estad.map( est => est.city !== null && <List key={String(est.city)} {...est} />))}
                    </tbody>
                  </Table>
              )


            }
          </ContainerTable>
          )}

      </Container>
    );
  }
}
