const reversort = require('../../qualifying/reversort-engineering/index');

describe('solve', () => {
    test('4, 6', () => {
        expect(reversort.solve(4, 6)).toStrictEqual([4, 3, 2, 1]);
    });
    
    test('2, 1', () => {
        expect(reversort.solve(2, 1)).toStrictEqual([1, 2]);
    });
    
    test('7, 12', () => {
        expect(reversort.solve(7, 12)).toStrictEqual([7, 6, 5, 4, 3, 2, 1]);
    });
    
    test('7, 2', () => {
        expect(reversort.solve(7, 2)).toStrictEqual(['IMPOSSIBLE']);
    });
    
    test('2, 1000', () => {
        expect(reversort.solve(2, 1000)).toStrictEqual(['IMPOSSIBLE']);
    });

    test('4, 2', () => {
        expect(reversort.solve(4, 2)).toStrictEqual(['IMPOSSIBLE']);
    });

    test('4, 3', () => {
        expect(reversort.solve(4, 3)).toStrictEqual([1, 2, 3, 4]);
    });

    test('4, 4', () => {
        expect(reversort.solve(4, 4)).toStrictEqual([2, 1, 3, 4]);
    });

    test('4, 5', () => {
        expect(reversort.solve(4, 5)).toStrictEqual([3, 2, 1, 4]);
    });

    test('4, 6', () => {
        expect(reversort.solve(4, 6)).toStrictEqual([4, 3, 2, 1]);
    });

    test('4, 7', () => {
        expect(reversort.solve(4, 7)).toStrictEqual([3, 4, 2, 1]);
    });

    test('4, 8', () => {
        expect(reversort.solve(4, 8)).toStrictEqual([2, 3, 4, 1]);
    });

    test('4, 9', () => {
        expect(reversort.solve(4, 9)).toStrictEqual([2, 4, 3, 1]);
    });

    test('4, 10', () => {
        expect(reversort.solve(4, 10)).toStrictEqual(['IMPOSSIBLE']);
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            reversort.solveInputs(`5
4 6
2 1
7 12
7 2
2 1000`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: 4 3 2 1',
                'Case #2: 1 2',
                'Case #3: 7 6 5 4 3 2 1',
                'Case #4: IMPOSSIBLE',
                'Case #5: IMPOSSIBLE',
            ]
        );
    });
});

describe('possible', () => {
    test('4, 6', () => {
        expect(reversort.possible(4, 6)).toBe(true);
    });
    
    test('2, 1', () => {
        expect(reversort.possible(2, 1)).toBe(true);
    });
    
    test('7, 12', () => {
        expect(reversort.possible(7, 12)).toBe(true);
    });
    
    test('7, 2', () => {
        expect(reversort.possible(7, 2)).toBe(false);
    });
    
    test('2, 1000', () => {
        expect(reversort.possible(2, 1000)).toBe(false);
    });
});
