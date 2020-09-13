import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import Routes from './Routes';
import { Theme } from './styles';

function App() {
  return (
    <ToastProvider>
      <Theme>
        <Routes />
      </Theme>
    </ToastProvider>
  );
}

export default App;
