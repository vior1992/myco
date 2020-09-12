import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    green: '#A9F7BC',
    darkGreen: '#336600',
    blue: '#2D9EF7',
    red: '#F50D0D',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Theme;
