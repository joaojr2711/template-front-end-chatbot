import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { themes } from './theme/global';

const App: React.FC = () => {

  const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.primary};
`;

  return (
    <ThemeProvider theme={themes}>
      <Button>Teste</Button>
    </ThemeProvider>
  )
};

export default App;
