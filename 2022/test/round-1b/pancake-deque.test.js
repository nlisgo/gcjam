const pancakeDeque = require('../../round-1b/pancake-deque/index');

describe('splitInput', () => {
    test.only('sample.in', () => {
        expect(
            pancakeDeque.splitInput(`4
2
1 5
4
1 4 2 3
5
10 10 10 10 10
4
7 1 3 1000000`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                [1, 5],
                [1, 4, 2, 3],
                [10, 10, 10, 10, 10],
                [7, 1, 3, 1000000],
            ]
        );
    });
});

describe('solve', () => {
    test('one', () => {
        expect(pancakeDeque.solve('one')).toBe('one');
    });

    test('two', () => {
        expect(pancakeDeque.solve('two')).toBe('two');
    });

    test('three', () => {
        expect(pancakeDeque.solve('three')).toBe('three');
    });

    test('four', () => {
        expect(pancakeDeque.solve('four')).toBe('four');
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            pancakeDeque.solveInputs(`3
one
two
three`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: one',
                'Case #2: two',
                'Case #3: three',
            ]
        );
    });
});
