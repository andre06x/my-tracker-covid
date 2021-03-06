import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import api from '../../../services/api/apiEstados';

import { Container, Span } from '../../../components/Container/All';

import { ContainerTable, Table } from '../../../components/Table/tableComponents';

import { List, Head } from './List';

export default class Cidades extends Component {
    state ={
        loading:true,
        conteudo: '',
        overflow: false,
        sizeTable: 2,
    }

  async componentDidMount() {
    const response = await api.get();
    const { data } = response.data;

    this.setState({
      loading: false,
      conteudo: data,
      overflow:true
    });
  }

  render() {
    const { loading, overflow, sizeTable } = this.state;
    return (
      <Container>
        <Span>
          <Link
            to="/brasil"
            title="voltar"
          >
            Voltar a seleção
          </Link>
          <h1>Estados</h1>
        </Span>

        <ContainerTable overflow={overflow}>
          {loading ? (
            <FaSpinner size={50} />
          ) : (
            <Table border="1" sizeTable={sizeTable}>
              <Head />
              <tbody>
                {this.state.conteudo.map((c) => <List key={String(c.uid)} {...c} />)}
              </tbody>
            </Table>

          )}
        </ContainerTable>
      </Container>
    );
  }
}
