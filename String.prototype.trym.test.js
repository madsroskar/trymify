/* global test, expect */
require('./index');

test('Trymifies strings', function () {
  expect('This is a string'.trym()).toBe('🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔🥔');
});

test('Allows roasted sweet potato', function () {
  expect('This is a string'.trym('roasted')).toBe('🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠🍠');
});

test('Allows fries', function () {
  expect('This is a string'.trym('fries')).toBe('🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟');
});

test.each`
    case                     | input            | length
    ${'emoji'}               | ${'🥔🍠🎉🎁🎊'} | ${5}
    ${'math'}                | ${'𝐁∆[】℃'}      | ${5}
    ${'letter-like'}         | ${'ℳ'}          | ${1}
    ${'non-English letters'} | ${'咊ñ'}         | ${2}
    ${'misc'}                | ${'✎¶'}          | ${2}
`('supports $case characters ("$input" has $length characters)', function ({ input, length }) {
  expect(input.trym()).toBe('🥔'.repeat(length));
});
