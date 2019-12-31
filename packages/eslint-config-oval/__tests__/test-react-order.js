/* eslint-disable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */

const { CLIEngine } = require('eslint');
const eslintrc = require('..');
const reactRules = require('../rules/react');
const reactA11yRules = require('../rules/react-a11y');

const cli = new CLIEngine({
  useEslintrc: false,
  baseConfig: eslintrc,
  rules: {
    // devDependencies in tests.
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    // this doesn't matter for tests
    'lines-between-class-members': 0,
    // Avoid rules that need type info, for now
    '@typescript-eslint/prefer-optional-chain': 0,
  },
});

function lint(text) {
  // @see https://eslint.org/docs/developer-guide/nodejs-api.html#executeonfiles
  // @see https://eslint.org/docs/developer-guide/nodejs-api.html#executeontext
  const linter = cli.executeOnText(text);
  return linter.results[0];
}

function wrapComponent(body) {
  return `
import React from 'react';

export default class MyComponent extends React.Component {
/* eslint no-empty-function: 0, class-methods-use-this: 0 */
${body}
}
`;
}

describe('validate react prop order', () => {
  it('make sure our eslintrc has React and JSX linting dependencies', () => {
    expect(reactRules.plugins).toStrictEqual(['react']);
    expect(reactA11yRules.plugins).toStrictEqual(['jsx-a11y', 'react']);
  });

  it('passes a good component', () => {
    const result = lint(wrapComponent(`
  componentDidMount() {}
  setFoo() {}
  getFoo() {}
  setBar() {}
  someMethod() {}
  renderDogs() {}
  render() { return <div />; }`));

    expect(result.warningCount).not.toBeTruthy();
    expect(result.messages).toStrictEqual([]);
    expect(result.errorCount.length).not.toBeTruthy();
  });

  it('order: when random method is first', () => {
    const result = lint(wrapComponent(`
  someMethod() {}
  componentDidMount() {}
  setFoo() {}
  getFoo() {}
  setBar() {}
  renderDogs() {}
  render() { return <div />; }`));

    expect(result.errorCount).toBeTruthy();
    expect(result.messages.map(msg => msg.ruleId)).toStrictEqual(['react/sort-comp']);
  });

  test('order: when random method after lifecycle methods', () => {
    const result = lint(wrapComponent(`
  componentDidMount() {}
  someMethod() {}
  setFoo() {}
  getFoo() {}
  setBar() {}
  renderDogs() {}
  render() { return <div />; }`));

    expect(result.errorCount).toBeTruthy();
    expect(result.messages.map(msg => msg.ruleId)).toStrictEqual(['react/sort-comp']);
  });
});
