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
        expect(moonsAndUmbrellas.solve(6, -4, 'J??C')).toBe(-8);
    });
});

describe('prepareMoonsAndUmbrellas', () => {
    test('CJ?CC?, 2, 3', () => {
        expect(moonsAndUmbrellas.prepareMoonsAndUmbrellas('CJ?CC?', 2, 3)).toBe('CJCC');
    });

    test('CJCJ, 4, 2', () => {
        expect(moonsAndUmbrellas.prepareMoonsAndUmbrellas('CJCJ', 4, 2)).toBe('CJCJ');
    });

    test('C?J, 2, 3', () => {
        expect(moonsAndUmbrellas.prepareMoonsAndUmbrellas('C?J', 1, 3)).toBe('CJ');
    });

    test('??J???, 2, 5', () => {
        expect(moonsAndUmbrellas.prepareMoonsAndUmbrellas('??J???', 2, 5)).toBe('J');
    });

    test('??J??, 2, -5', () => {
        expect(moonsAndUmbrellas.prepareMoonsAndUmbrellas('??J??', 2, -5)).toBe('JCJC');
    });

    test('C?C, 2, -5', () => {
        expect(moonsAndUmbrellas.prepareMoonsAndUmbrellas('C?C', 2, -5)).toBe('CJC');
    });

    test('C?C, -5, -3', () => {
        expect(moonsAndUmbrellas.prepareMoonsAndUmbrellas('C?C', -5, -3)).toBe('CJC');
    });

    test('C?C, -1, 2', () => {
        expect(moonsAndUmbrellas.prepareMoonsAndUmbrellas('C?C', -1, 2)).toBe('CC');
    });

    test('J??C, -1, -2', () => {
        expect(moonsAndUmbrellas.prepareMoonsAndUmbrellas('J??C', -1, -2)).toBe('JCJC');
    });

    test('J??C, 6, -1', () => {
        expect(moonsAndUmbrellas.prepareMoonsAndUmbrellas('J??C', 6, -1)).toBe('JC');
    });

    test('J??C, 6, -4', () => {
        expect(moonsAndUmbrellas.prepareMoonsAndUmbrellas('J??C', 6, -4)).toBe('JCJC');
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
