import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import Routes from './Routes';
import { GlobalStyles, Theme } from './styles';

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <ToastProvider>
        <Routes />
      </ToastProvider>
    </Theme>
  );
}

export default App;
