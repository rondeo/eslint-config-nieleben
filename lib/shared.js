module.exports = {
  extends: ['airbnb-base', 'jest', 'prettier'],
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'test/**',
          'tests/**',
          'spec/**',
          '**/__tests__/**',
          '**/__mocks__/**',
          'test.{js,jsx,ts,tsx}',
          'test-*.{js,jsx,ts,tsx}',
          '**/*{.,_}{test,spec}.{js,jsx,ts,tsx}',
          '**/jest.config.js',
          '**/vue.config.js',
          '**/webpack.config.js',
          '**/webpack.config.*.js',
          '**/rollup.config.js',
          '**/rollup.config.*.js',
          '**/gulpfile.js',
          '**/gulpfile.*.js',
          '**/Gruntfile{,.js}',
          '**/protractor.conf.js',
          '**/protractor.conf.*.js',
          'stories/**',
        ],
        optionalDependencies: false,
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./', 'node_modules'],
      },
    },
  },
};
