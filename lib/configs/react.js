module.exports = {
  extends: ['./shared.js', '../rules/import/react.js', 'eslint-config-airbnb'],
  rules: {
    'react/prefer-stateless-function': [false],
    'jsx-a11y/anchor-is-valid': [false],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
  },
};
