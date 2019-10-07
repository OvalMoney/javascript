
test('all entry points parse', () => {
  expect(require('..')).toBeTruthy();
  expect(require('../hooks')).toBeTruthy();
});
