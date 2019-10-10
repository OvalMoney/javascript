# eslint-config-oval-base

> Base config for Oval ESlint - no React

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint`, `eslint-plugin-import`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser` and `typescript`

## Install

```
yarn add --dev eslint-config-oval-base
```

## Usage

### eslint-config-oval-base

Add to your `.eslintrc`
```
"extends": "oval-base"
```

## `parserOptions.project` issue

You may want to add your `tsconfig.json` to the `.eslintrc` parser options but you will likely fall in this issue: https://github.com/typescript-eslint/typescript-eslint/issues/856

If you want to solve the problem you can simply add a `tsconfig.eslint.json` with the `extends` option to your `tsconfig.json` as described here: https://github.com/typescript-eslint/typescript-eslint/issues/890


## Develop

You can run tests with `yarn test`.

You can make sure this module lints with itself using `yarn lint`.
