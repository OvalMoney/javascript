module.exports = {
  extends: [
    './rules/react-a11y.js',
  ].map(require.resolve),
  rules: {}
};
