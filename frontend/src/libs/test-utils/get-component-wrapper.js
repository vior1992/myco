import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Theme } from '../../styles';

const getComponentWrapper = ({
  Component,
  mockedProps = {},
  initialRoute = '/',
}) => {
  const history = createMemoryHistory({ initialEntries: [initialRoute] });

  return (
    <ToastProvider>
      <Theme>
        <Router history={history}>
          <Component {...mockedProps} />
        </Router>
      </Theme>
    </ToastProvider>
  );
};

export default getComponentWrapper;
