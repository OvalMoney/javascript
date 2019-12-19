module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.sample.json',
    tsconfigRootDir: __dirname,
  },
  extends: './index.js',
  rules: {
    'comma-dangle': 0
  }
}
