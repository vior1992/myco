import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { BrowserRouter as Router } from 'react-router-dom';
import Theme from '../../Theme';

const getComponentWrapper = (Component, props = {}) => (
  <ToastProvider>
    <Theme>
      <Router>
        <Component {...props} />
      </Router>
    </Theme>
  </ToastProvider>
);

export default getComponentWrapper;
