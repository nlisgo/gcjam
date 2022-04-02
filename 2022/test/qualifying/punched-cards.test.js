const punchedCards = require('../../qualifying/punched-cards/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            punchedCards.splitInput(`3
one
two
three`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'one',
                'two',
                'three',
            ]
        );
    });
});

describe('solve', () => {
    test('one', () => {
        expect(punchedCards.solve('one')).toBe('one');
    });
    
    test('two', () => {
        expect(punchedCards.solve('two')).toBe('two');
    });
    
    test('three', () => {
        expect(punchedCards.solve('three')).toBe('three');
    });
    
    test('four', () => {
        expect(punchedCards.solve('four')).toBe('four');
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            punchedCards.solveInputs(`3
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
