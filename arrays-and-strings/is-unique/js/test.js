const isUnique = require('./isUnique')

test('isUnique function exists', () => {
  expect(typeof isUnique).toEqual('function')
});

test('empty string has all unique characters"', () => {
    expect(isUnique('')).toEqual(true)
  });

test('"abcdefg" has all unique characters"', () => {
  expect(isUnique('abcdefg')).toEqual(true)
});

test('"aa" has repeated characters"', () => {
    expect(isUnique('aa')).toEqual(false)
});

test('"abcda" has repeated characters"', () => {
    expect(isUnique('abcda')).toEqual(false)
});