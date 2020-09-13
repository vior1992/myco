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
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Theme;
