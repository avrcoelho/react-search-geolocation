import React from 'react';

import Header from '../../components/Header';
import Search from '../../components/Search';
import AddressData from '../../components/AddressData';

import AddressProvider from '../../context/useAddress';

const Home: React.FC = () => {
  return (
    <AddressProvider>
      <Header />
      <Search />
      <AddressData />
    </AddressProvider>
  );
};

export default Home;
