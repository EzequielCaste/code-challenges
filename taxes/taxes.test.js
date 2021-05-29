const taxes = require('./taxes');

describe('calculate tax', () => {
  test('should return [52.5] if they send 50 and 5 has arguments', () => {
    const expected = [52.5];
    const result = taxes(50, 5);
    expect(expected).toEqual(result);
  });
  test('should return [0] if they send 0 as the first argument', () => {
    const expected = [0];
    const result = taxes(0, 15);
    expect(expected).toEqual(result);
  });
  test('should return the first argument if they send 0 as the second argument', () => {
    const expected = [25];
    const result = taxes(25, 0);
    expect(expected).toEqual(result);
  });
});
