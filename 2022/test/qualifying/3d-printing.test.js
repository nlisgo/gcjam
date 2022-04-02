const threeDPrinting = require('../../qualifying/3d-printing/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            threeDPrinting.splitInput(`3
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
        expect(threeDPrinting.solve('one')).toBe('one');
    });
    
    test('two', () => {
        expect(threeDPrinting.solve('two')).toBe('two');
    });
    
    test('three', () => {
        expect(threeDPrinting.solve('three')).toBe('three');
    });
    
    test('four', () => {
        expect(threeDPrinting.solve('four')).toBe('four');
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            threeDPrinting.solveInputs(`3
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
