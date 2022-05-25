const doubleOrOneThing = require('../../round-1a/double-or-one-thing/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            doubleOrOneThing.splitInput(`3
PEEL
AAAAAAAAAA
CODEJAMDAY`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'PEEL',
                'AAAAAAAAAA',
                'CODEJAMDAY',
            ]
        );
    });
});

describe('letterPos', () => {
    test('A', () => {
        expect(doubleOrOneThing.letterPos('A')).toBe(0);
    });

    test('N', () => {
        expect(doubleOrOneThing.letterPos('N')).toBe(13);
    });

    test('TT', () => {
        expect(doubleOrOneThing.letterPos('TT')).toBe(19);
    });
});

describe('splitByLetter', () => {
    test('PEEL', () => {
        expect(doubleOrOneThing.splitByLetter('PEEL')).toStrictEqual([
            'P',
            'EE',
            'L',
        ]);
    });

    test('AAAAAAAAAA', () => {
        expect(doubleOrOneThing.splitByLetter('AAAAAAAAAA')).toStrictEqual([
            'AAAAAAAAAA',
        ]);
    });

    test('CODEJAMDAY', () => {
        expect(doubleOrOneThing.splitByLetter('CODEJAMDAY')).toStrictEqual([
            'C',
            'O',
            'D',
            'E',
            'J',
            'A',
            'M',
            'D',
            'A',
            'Y',
        ]);
    });
});

describe('solve', () => {
    test('PEEL', () => {
        expect(doubleOrOneThing.solve('PEEL')).toBe('PEEEEL');
    });

    test('AAAAAAAAAA', () => {
        expect(doubleOrOneThing.solve('AAAAAAAAAA')).toBe('AAAAAAAAAA');
    });

    test('CODEJAMDAY', () => {
        expect(doubleOrOneThing.solve('CODEJAMDAY')).toBe('CCODDEEJAAMDAAY');
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            doubleOrOneThing.solveInputs(`3
PEEL
AAAAAAAAAA
CODEJAMDAY`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: PEEEEL',
                'Case #2: AAAAAAAAAA',
                'Case #3: CCODDEEJAAMDAAY',
            ]
        );
    });
});
