const reversort = require('../../qualifying/reversort/index');

describe('solve', () => {
    test('[4, 2, 1, 3]', () => {
        expect(reversort.solve([4, 2, 1, 3])).toBe(6);
    });

    test('[4, 3, 2, 1]', () => {
        expect(reversort.solve([4, 2, 1, 3])).toBe(6);
    });
    
    test('[1, 2]', () => {
        expect(reversort.solve([1, 2])).toBe(1);
    });
    
    test('[7, 6, 5, 4, 3, 2, 1]', () => {
        expect(reversort.solve([7, 6, 5, 4, 3, 2, 1])).toBe(12);
    });

    test('[1, 2, 3, 4]', () => {
        expect(reversort.solve([1, 2, 3, 4])).toStrictEqual(3);
    });

    test('[2, 1, 3, 4]', () => {
        expect(reversort.solve([2, 1, 3, 4])).toStrictEqual(4);
    });

    test('[3, 2, 1, 4]', () => {
        expect(reversort.solve([3, 2, 1, 4])).toStrictEqual(5);
    });

    test('[4, 3, 2, 1]', () => {
        expect(reversort.solve([4, 3, 2, 1])).toStrictEqual(6);
    });

    test('[3, 4, 2, 1]', () => {
        expect(reversort.solve([3, 4, 2, 1])).toStrictEqual(7);
    });

    test('[2, 3, 4, 1]', () => {
        expect(reversort.solve([2, 3, 4, 1])).toStrictEqual(8);
    });

    test('[2, 4, 3, 1]', () => {
        expect(reversort.solve([2, 4, 3, 1])).toStrictEqual(9);
    });
});

describe('positionOfMinimum', () => {
    test('[4, 2, 1, 3]', () => {
        expect(reversort.positionOfMinimum([4, 2, 1, 3])).toBe(2);
    });

    test('[2, 4, 3]', () => {
        expect(reversort.positionOfMinimum([2, 4, 3])).toBe(0);
    });

    test('[4, 3]', () => {
        expect(reversort.positionOfMinimum([4, 3])).toBe(1);
    });
});

describe('performReverse', () => {
    test('[4, 2, 1, 3], 0, 2', () => {
        expect(reversort.performReverse([4, 2, 1, 3], 0, 2)).toStrictEqual([1, 2, 4, 3]);
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            reversort.solveInputs(`3
4
4 2 1 3
2
1 2
7
7 6 5 4 3 2 1`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: 6',
                'Case #2: 1',
                'Case #3: 12',
            ]
        );
    });
});
