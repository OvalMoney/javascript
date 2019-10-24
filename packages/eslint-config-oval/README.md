# eslint-config-oval

> Complete Oval ESlint configuration. Batteries included.

We export 3 ESLint configurations for your usage.

Our default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`, `typescript`, and `eslint-plugin-jsx-a11y`. If you don't need React, see `eslint-config-oval-base`.

## Install

```
yarn add --dev eslint-config-oval
```

## Usage

### eslint-config-oval

Add to your `.eslintrc`
```
{
  "parser": "@typescript-eslint/parser",
  "extends": "oval"
}
```

### eslint-config/oval/hooks

This entry point enables the linting rules for React hooks (requires v16.8+).
To use add to your `.eslintrc`
```
"extends": ["oval", "oval/hooks"]
```

### eslint-config/oval/a11y

This entry point enables the linting rules for React A11y.
To use add to your `.eslintrc`
```
"extends": ["oval", "oval/a11y"]
```

## Develop

You can run tests with `yarn test`.

You can make sure this module lints with itself using `yarn lint`.

