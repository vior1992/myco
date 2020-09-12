module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  overrides: [
    {
      env: {
        jest: true,
      },
    },
  ],
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [0],
    'react/jsx-props-no-spreading': [0],
    'react/jsx-one-expression-per-line': [0],
    'import/prefer-default-export': [0],
    'no-underscore-dangle': ['error', { allow: ['_render'] }],
    'implicit-arrow-linebreak': [0],
    'react/forbid-prop-types': [0],
  },
};
