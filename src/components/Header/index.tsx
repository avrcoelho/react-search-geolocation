import React from 'react';

import { Container, TitleContainer, Title } from './styles';

const Header: React.FC = () => {
  return (
    <Container data-testid="container-header">
      <TitleContainer>
        <Title>Buscar Endereço</Title>
      </TitleContainer>
    </Container>
  );
};

export default Header;
