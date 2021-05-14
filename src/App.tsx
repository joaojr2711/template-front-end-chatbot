import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import { themes } from './theme/global';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={themes}>
          <Routes />
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
};

export default App;
