const moonsAndUmbrellas = require('../../qualifying/moons-and-umbrellas/index');

describe('solve', () => {
    test('2, 3, CJ?CC?', () => {
        expect(moonsAndUmbrellas.solve(2, 3, 'CJ?CC?')).toBe(5);
    });

    test('4, 2, CJCJ', () => {
        expect(moonsAndUmbrellas.solve(4, 2, 'CJCJ')).toBe(10);
    });

    test('2, 3, C?J', () => {
        expect(moonsAndUmbrellas.solve(1, 3, 'C?J')).toBe(1);
    });

    test('2, 5, ??J???', () => {
        expect(moonsAndUmbrellas.solve(2, 5, '??J???')).toBe(0);
    });

    test('2, -5, ??J??', () => {
        expect(moonsAndUmbrellas.solve(2, -5, '??J??')).toBe(-8);
    });

    test('4, 3, ?JC?JJJCCCC', () => {
        expect(moonsAndUmbrellas.solve(4, 3, '?JC?JJJCCCC')).toBe(10);
    });

    test('2, -5, C?C', () => {
        expect(moonsAndUmbrellas.solve(2, -5, 'C?C')).toBe(-3);
    });

    test('-5, -3, C?C', () => {
        expect(moonsAndUmbrellas.solve(-5, -3, 'C?C')).toBe(-8);
    });

    test('1, 1, C?C', () => {
        expect(moonsAndUmbrellas.solve(1, 1, 'C?C')).toBe(0);
    });

    test('-1, 2, C?C', () => {
        expect(moonsAndUmbrellas.solve(-1, 2, 'C?C')).toBe(0);
    });

    test('-1, -2, J??C', () => {
        expect(moonsAndUmbrellas.solve(-1, -2, 'J??C')).toBe(-5);
    });

    test('6, -1, J??C', () => {
        expect(moonsAndUmbrellas.solve(6, -1, 'J??C')).toBe(-1);
    });

    test('6, -4, J??C', () => {
        expect(moonsAndUmbrellas.solve(6, -4, 'J??C')).toBe(-4);
    });

    test('-2, -3, ??', () => {
        expect(moonsAndUmbrellas.solve(-2, -3, '??')).toBe(-3);
    });

    test('1, 3, ?????', () => {
        expect(moonsAndUmbrellas.solve(1, 3, '?????')).toBe(0);
    });

    test('-10, 3, ?????', () => {
        expect(moonsAndUmbrellas.solve(-10, 3, '?????')).toBe(-14);
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            moonsAndUmbrellas.solveInputs(`4
2 3 CJ?CC?
4 2 CJCJ
1 3 C?J
2 5 ??J???
2 -5 ??J??`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: 5',
                'Case #2: 10',
                'Case #3: 1',
                'Case #4: 0',
                'Case #5: -8',
            ]
        );
    });
});

describe('optimise moons and umbrellas', () => {
    const optimiseS = (s, costCJ, costJC) => {
        return moonsAndUmbrellas.splitS(s).map(split => moonsAndUmbrellas.cheapestOption(moonsAndUmbrellas.options(split), costCJ, costJC)[0]).join('|').replace(/\|./g, '');
    };

    test('CJ?CC?, 2, 3', () => {
        expect(optimiseS('CJ?CC?', 2, 3)).toBe('CJCCCC');
    });

    test('CJCJ, 4, 2', () => {
        expect(optimiseS('CJCJ', 4, 2)).toBe('CJCJ');
    });

    test('C?J, 2, 3', () => {
        expect(optimiseS('C?J', 1, 3)).toBe('CCJ');
    });

    test('??J???, 2, 5', () => {
        expect(optimiseS('??J???', 2, 5)).toBe('JJJJJJ');
    });

    test('??J??, 2, -5', () => {
        expect(optimiseS('??J??', 2, -5)).toBe('JCJCC');
    });

    test('C?C, 2, -5', () => {
        expect(optimiseS('C?C', 2, -5)).toBe('CJC');
    });

    test('C?C, -5, -3', () => {
        expect(optimiseS('C?C', -5, -3)).toBe('CJC');
    });

    test('C?C, -1, 2', () => {
        expect(optimiseS('C?C', -1, 2)).toBe('CCC');
    });

    test('J??C, -1, -2', () => {
        expect(optimiseS('J??C', -1, -2)).toBe('JCJC');
    });

    test('J??C, 6, -1', () => {
        expect(optimiseS('J??C', 6, -1)).toBe('JCCC');
    });

    test('J??C, 6, -4', () => {
        expect(optimiseS('J??C', 6, -4)).toBe('JCCC');
    });

    test('J??C, 6, -7', () => {
        expect(optimiseS('J??C', 6, -7)).toBe('JCJC');
    });

    test('??, -2, -3', () => {
        expect(optimiseS('??', -2, -3)).toBe('JC');
    });

    test('?????, 1, 3', () => {
        expect(optimiseS('?????', 1, 3)).toBe('CCCCC');
    });

    test('?????, -10, 3', () => {
        expect(optimiseS('?????', -10, 3)).toBe('CJCJC');
    });
});
