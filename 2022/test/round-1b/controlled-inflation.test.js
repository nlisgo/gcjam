const controlledInflation = require('../../round-1b/controlled-inflation/index');

describe('splitInput', () => {
    test.only('sample.in', () => {
        expect(
            controlledInflation.splitInput(`2
3 3
30 10 40
20 50 60
60 60 50
5 2
1 1000000000
500000000 1000000000
1 1000000000
500000000 1
1 1000000000`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                [
                    [30, 10, 40],
                    [20, 50, 60],
                    [60, 60, 50],
                ],
                [
                    [1, 1000000000],
                    [500000000, 1000000000],
                    [1, 1000000000],
                    [500000000, 1],
                    [1, 1000000000],
                ],
            ]
        );
    });
});

describe('solve', () => {
    test.only('[30, 10, 40], [20, 50, 60], [60, 60, 50]', () => {
        expect(controlledInflation.solve([
            [30, 10, 40],
            [20, 50, 60],
            [60, 60, 50],
        ])).toStrictEqual([
            // [lowest, highest, endPosition]
            [0, 40, 40], // 40
            [20, 60, 60], // 40 + 20 + 40 = 100
            [50, 60, 50], // 100 + 10 = 100
        ]);
    });

    test('[1, 1000000000], [500000000, 1000000000], [1, 1000000000], [500000000, 1], [1, 1000000000]', () => {
        expect(controlledInflation.solve([
            [1, 1000000000],
            [500000000, 1000000000],
            [1, 1000000000],
            [500000000, 1],
            [1, 1000000000],
        ])).toBe(4999999996);
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            controlledInflation.solveInputs(`2
3 3
30 10 40
20 50 60
60 60 50
5 2
1 1000000000
500000000 1000000000
1 1000000000
500000000 1
1 1000000000`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: 110',
                'Case #2: 4999999996',
            ]
        );
    });
});
