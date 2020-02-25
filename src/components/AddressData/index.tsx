import React from 'react';

import { useAddress } from '../../context/useAddress';

import { Container, DataContainer, Address, Title, Details } from './styles';

const AddressData: React.FC = () => {
  const { dataAddress } = useAddress();

  return (
    <Container data-testid="container-address-data">
      {dataAddress && (
        <DataContainer data-testid="dataContainer">
          <Address>
            <Title>{dataAddress.logradouro}</Title>
            <Details>{dataAddress.bairro}</Details>
            <Details>
              {dataAddress.localidade} - {dataAddress.uf}
            </Details>
            <Details>{dataAddress.cep}</Details>
          </Address>
        </DataContainer>
      )}
    </Container>
  );
};

export default AddressData;
