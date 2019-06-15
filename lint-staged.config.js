module.exports = {
  '*.{ts,tsx,js}': ['eslint --fix', 'prettier --write', 'git add'],
  '*.json': ['prettier --write', 'git add'],
  '*.yml': ['prettier --write', 'git add'],
};
