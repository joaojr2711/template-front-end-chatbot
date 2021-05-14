import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ChatProvider } from './hooks/ChatContext';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import { themes } from './theme/global';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ChatProvider>
        <ThemeProvider theme={themes}>
          <Routes />
        </ThemeProvider>
      </ChatProvider>
    </BrowserRouter>
  )
};

export default App;
