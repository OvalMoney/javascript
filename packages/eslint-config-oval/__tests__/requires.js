/* eslint-disable @typescript-eslint/no-var-requires, global-require */

test('all entry points parse', () => {
  expect(require('..')).toBeTruthy();
  expect(require('../hooks')).toBeTruthy();
  expect(require('../a11y')).toBeTruthy();
});
