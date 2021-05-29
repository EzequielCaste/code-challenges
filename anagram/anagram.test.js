const anagram = require('./anagram');

describe('takes two words as an argument and returns true if they are anagrams and false otherwise', () => {
  test('should return true if both words are anagrams', () => {
    const expected = true;
    const result = anagram('listen', 'silent');
    expect(expected).toBe(result);
  });
  test('should return false when strings are different length', () => {
    const expected = false;
    const result = anagram('lis', 'silent');
    expect(expected).toBe(result);
  });
  test('should return false when strings are not anagrams', () => {
    const expected = false;
    const result = anagram('lizten', 'silent');
    expect(expected).toBe(result);
  });
});
