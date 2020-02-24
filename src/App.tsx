import React from 'react';

import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import './styles/Animations.css';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
};

export default App;
