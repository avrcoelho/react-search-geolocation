import React from 'react';

import Header from '../../components/Header';
import Search from '../../components/Search';
import AddressData from '../../components/AddressData';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Search />
      <AddressData />
    </>
  );
};

export default Home;
