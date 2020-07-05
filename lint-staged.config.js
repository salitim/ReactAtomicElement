module.exports = {
  '**/*.{json,md,yml}': ['prettier --write', 'git add'],
  '**/*.{js, ts, jsx, tsx}': ['prettier --write', 'eslint --cache --fix', 'git add'],
  '.editorconfig': ['prettier --write', 'git add'],
  LICENSE: ['prettier --write', 'git add'],
  'package.json': ['prettier --write', 'yarn format:package', 'git add'],
};
