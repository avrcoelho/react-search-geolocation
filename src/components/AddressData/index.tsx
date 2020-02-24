import React from 'react';

import { Container, DataContainer, Address, Title, Details } from './styles';

const AddressData: React.FC = () => {
  return (
    <Container>
      <DataContainer>
        <Address>
          <Title>Rua Faustina Barbosa Stackfleth</Title>
          <Details>Parque Centenario</Details>
          <Details>Jundiai - SP</Details>
          <Details>13214-773</Details>
        </Address>
      </DataContainer>
    </Container>
  );
};

export default AddressData;
