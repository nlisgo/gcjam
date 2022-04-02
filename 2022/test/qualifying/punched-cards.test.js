const punchedCards = require('../../qualifying/punched-cards/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            punchedCards.splitInput(`3
3 4
2 2
2 3`.split(/\r?\n/))
)
        .toStrictEqual(
            [
                [3, 4],
                [2, 2],
                [2, 3],
            ]
        );
    });
});

describe('solve', () => {
    test('[3, 4]', () => {
        expect(punchedCards.solve([3, 4])).toBe([
            '',
            '..+-+-+-+',
            '..|.|.|.|',
            '+-+-+-+-+',
            '|.|.|.|.|',
            '+-+-+-+-+',
            '|.|.|.|.|',
            '+-+-+-+-+',
        ].join("\r\n"));
    });
    
    test('[2, 2]', () => {
        expect(punchedCards.solve(2, 2)).toBe([
            '',
            '..+-+',
            '..|.|',
            '+-+-+',
            '|.|.|',
            '+-+-+',
        ].join("\r\n"));
    });
    
    test('[2, 3]', () => {
        expect(punchedCards.solve(2, 3)).toBe([
            '..+-+-+',
            '..|.|.|',
            '+-+-+-+',
            '|.|.|.|',
            '+-+-+-+',
        ].join("\r\n"));
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            punchedCards.solveInputs(`3
3 4
2 2
2 3`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                [
                    'Case #1:',
                    '..+-+-+-+',
                    '..|.|.|.|',
                    '+-+-+-+-+',
                    '|.|.|.|.|',
                    '+-+-+-+-+',
                    '|.|.|.|.|',
                    '+-+-+-+-+',
                ].join("\r\n"),
                [
                    'Case #2:',
                    '..+-+',
                    '..|.|',
                    '+-+-+',
                    '|.|.|',
                    '+-+-+',
                ].join("\r\n"),
                [
                    'Case #3:',
                    '..+-+-+',
                    '..|.|.|',
                    '+-+-+-+',
                    '|.|.|.|',
                    '+-+-+-+',
                ].join("\r\n"),
            ]
        );
    });
});
