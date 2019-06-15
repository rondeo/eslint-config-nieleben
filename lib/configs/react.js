module.exports = {
  extends: ['eslint-config-airbnb', './shared.js'].map(require.resolve),
  rules: {
    'react/prefer-stateless-function': [false],
    'jsx-a11y/anchor-is-valid': [false],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
  },
};
