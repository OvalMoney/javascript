module.exports = {
  extends: [
    './rules/best-practices',
    './rules/style',
    './rules/node',
    './rules/errors',
    './rules/es6',
    './rules/typescript',
    './rules/imports',
    './rules/variables',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    strict: 'error',
  },
  env: {
    jest: true,
    browser: true,
    amd: true,
    node: true,
  },
};
