module.exports = {
  extends: ['eslint-config-airbnb', './shared.js', 'eslint-config-prettier/react'].map(
    require.resolve,
  ),
  rules: {
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          'render',
          'getInitialState',
          'getDefaultProps',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
        ],
      },
    ],
    'react/prefer-stateless-function': [false],
    'jsx-a11y/anchor-is-valid': [false],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
  },
};
