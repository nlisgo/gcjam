const moon_and_umbrellas = require('../../../qualifying/moons-and-umbrellas/index');

describe('solve', () => {
  test('[2, 3, CJ?CC?]', () => {
    expect(moon_and_umbrellas.solve([2, 3, 'CJ?CC?'])).toBe(5);
  });

  test('[4, 2, CJCJ]', () => {
    expect(moon_and_umbrellas.solve([4, 2, 'CJCJ'])).toBe(10);
  });

  test('[4, 2, CJCJ]', () => {
    expect(moon_and_umbrellas.solve([2, 3, 'CJ?CC?'])).toBe(1);
  });

  test('[2 5 ??J???]', () => {
    expect(moon_and_umbrellas.solve([2, 5, '??J???'])).toBe(0);
  });
});

describe('solveInputs', () => {
  test('sample.in', () => {
    expect(
      moon_and_umbrellas.solveInputs(`4
2 3 CJ?CC?
4 2 CJCJ
1 3 C?J
2 5 ??J???`.split(/\r?\n/))
    )
      .toStrictEqual(
        [
          'Case #1: 5',
          'Case #2: 10',
          'Case #3: 1',
          'Case #4: 0'
        ]
      );
  });
});