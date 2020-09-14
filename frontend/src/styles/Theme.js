import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    white: '#FFFFFF',
    green: '#5DAD00',
    blue: '#2D9EF7',
    darkBlue: '#0B1325',
    red: '#F50D0D',
  },
  fontSizes: {
    large: 600,
  },
  sizes: {
    'xx-small': '5px',
    'x-small': '10px',
    small: '15px',
    medium: '20px',
    large: '25px',
    'x-large': '30px',
    'xx-large': '35px',
    huge: '40px',
    'x-huge': '45px',
    'xx-huge': '50px',
  },
  fontFamily: {
    card: 'Play, sans-serif',
  },
  boxShadow: {
    card: '0 4px 8px 0px rgba(0, 0, 0, 0.2)',
    'card-hover': '0 8px 16px 0 rgba(0, 0, 0, 0.2)',
  },
  transitions: {
    fast: '0.3s',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Theme;
