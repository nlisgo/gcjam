const controlledInflation = require('../../round-1b/controlled-inflation/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            controlledInflation.splitInput(`3
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
        expect(controlledInflation.solve('one')).toBe('one');
    });

    test('two', () => {
        expect(controlledInflation.solve('two')).toBe('two');
    });

    test('three', () => {
        expect(controlledInflation.solve('three')).toBe('three');
    });

    test('four', () => {
        expect(controlledInflation.solve('four')).toBe('four');
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            controlledInflation.solveInputs(`3
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
