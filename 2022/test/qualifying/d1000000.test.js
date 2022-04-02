const d1000000 = require('../../qualifying/d1000000/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            d1000000.splitInput(`3
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
        expect(d1000000.solve('one')).toBe('one');
    });

    test('two', () => {
        expect(d1000000.solve('two')).toBe('two');
    });

    test('three', () => {
        expect(d1000000.solve('three')).toBe('three');
    });

    test('four', () => {
        expect(d1000000.solve('four')).toBe('four');
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            d1000000.solveInputs(`3
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
