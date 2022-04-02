const d1000000 = require('../../qualifying/d1000000/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            d1000000.splitInput(`4
4
6 10 12 8
6
5 4 5 4 4 4
10
10 10 7 6 7 4 4 5 7 4
1
10`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                [6, 10, 12, 8],
                [5, 4, 5, 4, 4, 4],
                [10, 10, 7, 6, 7, 4, 4, 5, 7, 4],
                [10],
            ]
        );
    });
});

describe('solve', () => {
    test('[6, 10, 12, 8]', () => {
        expect(d1000000.solve([6, 10, 12, 8])).toBe(4);
    });

    test('[5, 4, 5, 4, 4, 4]', () => {
        expect(d1000000.solve([5, 4, 5, 4, 4, 4])).toBe(5);
    });

    test('[10, 10, 7, 6, 7, 4, 4, 5, 7, 4]', () => {
        expect(d1000000.solve([10, 10, 7, 6, 7, 4, 4, 5, 7, 4])).toBe(9);
    });

    test('[10]', () => {
        expect(d1000000.solve([10])).toBe(1);
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            d1000000.solveInputs(`4
4
6 10 12 8
6
5 4 5 4 4 4
10
10 10 7 6 7 4 4 5 7 4
1
10`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: 4',
                'Case #2: 5',
                'Case #3: 9',
                'Case #4: 1',
            ]
        );
    });
});
