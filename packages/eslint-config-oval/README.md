[![Build Status](https://travis-ci.org/OvalMoney/javascript.svg?branch=master)](https://travis-ci.org/OvalMoney/javascript) [![npm](https://img.shields.io/npm/v/eslint-config-oval.svg?style=flat)](https://www.npmjs.com/package/eslint-config-oval)

# eslint-config-oval

> Complete Oval ESlint configuration. Batteries included.

We export 3 ESLint configurations for your usage.

Our default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`, `typescript`, and `eslint-plugin-jsx-a11y`. If you don't need React, see `eslint-config-oval-base`.

## Install

First install the dependencies:

```
yarn add --dev eslint eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript eslint-plugin-jsx-a11y
```

Then add our config:

```
yarn add --dev eslint-config-oval
```

## Usage

### eslint-config-oval

Add to your `.eslintrc`
```json
{
  "extends": "oval"
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.eslint.json"
  },
}
```

Create a new `tsconfig.eslint.json` files for overrides the `include` and `exclude` of your main `tsconfig.json`, so that ESLint will be able to lint everything without complaining:
```json
{
  "extends": "./tsconfig.json",
  "exclude": [
    "node_modules"
  ],
  "include": [
    "**/*.js",
    "**/*.ts",
    "**/*.tsx"
  ]
}

```

For more info about why you need this, checkout the [eslint-config-oval-base README](https://github.com/OvalMoney/javascript/tree/master/packages/eslint-config-oval-base).

### eslint-config/oval/hooks

This entry point enables the linting rules for React hooks (requires v16.8+).
To use add to your `.eslintrc`
```json
{
  "extends": ["oval", "oval/hooks"]
  ...
}
```

### eslint-config/oval/a11y

This entry point enables the linting rules for React A11y.
To use add to your `.eslintrc`
```json
{
  "extends": ["oval", "oval/a11y"]
  ...
}
```

## Develop

You can run tests with `yarn test`.

You can make sure this module lints with itself using `yarn lint`.

