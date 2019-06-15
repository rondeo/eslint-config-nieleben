const allReactExtensions = ['.js', '.jsx'];

module.exports = {
  extends: ['./shared.js', 'eslint-config-airbnb'].map(require.resolve),
  rules: {
    'react/prefer-stateless-function': [false],
    'jsx-a11y/anchor-is-valid': [false],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: allReactExtensions,
      },
    },
    'import/extensions': allReactExtensions,
  },
};
