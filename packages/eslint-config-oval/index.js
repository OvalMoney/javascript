module.exports = {
  extends: [
    'eslint-config-oval-base',
    './rules/react',
  ].map(require.resolve),
  rules: {}
};
