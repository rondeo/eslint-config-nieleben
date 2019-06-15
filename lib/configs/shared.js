module.exports = {
  extends: ['eslint-config-airbnb-base', '../rules/import/import.js'],
  plugins: ['eslint-plugin-jest', 'eslint-plugin-prettier'],
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
  },
  rules: {},
};
