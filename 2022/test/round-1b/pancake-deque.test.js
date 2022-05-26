const pancakeDeque = require('../../round-1b/pancake-deque/index');

describe('splitInput', () => {
    test('sample.in', () => {
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
    test('[1, 5]', () => {
        expect(pancakeDeque.solve([1, 5])).toBe(2);
    });

    test('[1, 4, 2, 3]', () => {
        expect(pancakeDeque.solve([1, 4, 2, 3])).toBe(3);
    });

    test('[10, 10, 10, 10, 10]', () => {
        expect(pancakeDeque.solve([10, 10, 10, 10, 10])).toBe(5);
    });

    test('[7, 1, 3, 1000000]', () => {
        expect(pancakeDeque.solve([7, 1, 3, 1000000])).toBe(2);
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            pancakeDeque.solveInputs(`4
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
                'Case #1: 2',
                'Case #2: 3',
                'Case #3: 5',
                'Case #4: 2',
            ]
        );
    });
});
