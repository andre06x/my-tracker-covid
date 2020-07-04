import React from 'react';
import { Link } from 'react-router-dom';
import { BsExclamationCircleFill } from 'react-icons/bs';
import { Container } from '../../components/Container';
import { Title, Span } from './style';

export default function NotFound() {
  return (
    <Container>
      <Title>
        <BsExclamationCircleFill />
        <span>
          Página não encontrada!
        </span>
      </Title>
      <Span>
        <Link
          to="/"
        >
          Voltar para página principal
        </Link>
      </Span>

    </Container>
  );
}
