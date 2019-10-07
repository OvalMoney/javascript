module.exports = {
  extends: [
    './rules/best-practices',
    './rules/node',
    './rules/errors',
    './rules/es6',
    './rules/typescript',
    './rules/imports',
    './rules/style',
    './rules/variables',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};
