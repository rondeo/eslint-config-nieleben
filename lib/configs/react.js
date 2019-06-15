module.exports = {
  extends: ['./shared.js', 'eslint-config-prettier/react'].map(require.resolve),
  rules: {
    'react/prefer-stateless-function': [false],
    'jsx-a11y/anchor-is-valid': [false],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
  },
};
