const cheatingDetection = require('../../qualifying/cheating-detection/index');

describe('solve', () => {
    test('one', () => {
        expect(cheatingDetection.solve('one')).toBe('one');
    });
    
    test('two', () => {
        expect(cheatingDetection.solve('two')).toBe('two');
    });
    
    test('three', () => {
        expect(cheatingDetection.solve('three')).toBe('three');
    });
    
    test('four', () => {
        expect(cheatingDetection.solve('four')).toBe('four');
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            cheatingDetection.solveInputs(`3
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
