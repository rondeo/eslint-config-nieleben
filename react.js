module.exports = {
  extends: ['./lib/shared.js', 'airbnb'].map(require.resolve),
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/prefer-stateless-function': [false],
    'jsx-a11y/anchor-is-valid': [false],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./', 'node_modules'],
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
      },
    },
    'import/extensions': ['.js', '.ts', '.mjs', '.jsx', '.tsx'],
  },
};
