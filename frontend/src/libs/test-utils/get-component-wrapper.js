import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { GlobalStyles, Theme } from '../../styles';

const getComponentWrapper = ({
  Component,
  mockedProps = {},
  initialRoute = '/',
}) => {
  const history = createMemoryHistory({ initialEntries: [initialRoute] });

  return (
    <Theme>
      <GlobalStyles />
      <ToastProvider>
        <Router history={history}>
          <Component {...mockedProps} />
        </Router>
      </ToastProvider>
    </Theme>
  );
};

export default getComponentWrapper;
