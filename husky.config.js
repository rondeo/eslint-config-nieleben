module.exports = {
  hooks: {
    'pre-commit': 'yarn run lint-staged && yarn run test',
    'pre-push': 'yarn run test',
  },
};
