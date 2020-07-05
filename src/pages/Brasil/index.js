import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Escolha, Span } from '../../components/Container/All'


export default class Brasil extends Component {
  state ={

      }

  render() {
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
        <Escolha>
        <Link
              to="/cidadesporestado"
            >
              Cidades Por Estado
            </Link>
          {/* <Link to="/brasil/cidades">Cidades</Link> */}
        </Escolha>
        <div>
          <Escolha>
          <Link
            to="/brasil/estados"
            >
              Estados
            </Link>
          </Escolha>
        </div>
      </Container>
    );
  }
}
