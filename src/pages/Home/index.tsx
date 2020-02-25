import React from 'react';

import Header from '../../components/Header';
import Search from '../../components/search';
import AddressData from '../../components/AddressData';
import Map from '../../components/Map';

import AddressProvider from '../../context/useAddress';

import { ContainerAddress } from './styles';

const Home: React.FC = () => {
  return (
    <AddressProvider>
      <Header />
      <ContainerAddress>
        <Search />
        <AddressData />
      </ContainerAddress>
      <Map />
    </AddressProvider>
  );
};

export default Home;
