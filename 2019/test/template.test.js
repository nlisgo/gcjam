const template = require('../template/index');

describe('solve', () => {
    test('one', () => {
        expect(template.solve('one')).toBe('one');
    });
    
    test('two', () => {
        expect(template.solve('two')).toBe('two');
    });
    
    test('three', () => {
        expect(template.solve('three')).toBe('three');
    });
    
    test('four', () => {
        expect(template.solve('four')).toBe('four');
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            template.solveInputs(`3
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
