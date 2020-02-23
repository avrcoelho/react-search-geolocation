import React from 'react';

import { Container, TitleContainer, Title } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Buscar Endereço</Title>
      </TitleContainer>
    </Container>
  );
};

export default Header;
