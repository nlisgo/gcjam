const threeDPrinting = require('../../qualifying/3d-printing/index');

describe('splitInput', () => {
    test.only('sample.in', () => {
        expect(
            threeDPrinting.splitInput(`3
300000 200000 300000 500000
300000 200000 500000 300000
300000 500000 300000 200000
1000000 1000000 0 0
0 1000000 1000000 1000000
999999 999999 999999 999999
768763 148041 178147 984173
699508 515362 534729 714381
949704 625054 946212 951187`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                [
                    [
                        300000,
                        200000,
                        300000,
                        500000,
                    ],
                    [
                        300000,
                        200000,
                        500000,
                        300000,
                    ],
                    [
                        300000,
                        500000,
                        300000,
                        200000,
                    ],
                ],
                [
                    [
                        1000000,
                        1000000,
                        0,
                        0,
                    ],
                    [
                        0,
                        1000000,
                        1000000,
                        1000000,
                    ],
                    [
                        999999,
                        999999,
                        999999,
                        999999,
                    ],
                ],
                [
                    [
                        768763,
                        148041,
                        178147,
                        984173,
                    ],
                    [
                        699508,
                        515362,
                        534729,
                        714381,
                    ],
                    [
                        949704,
                        625054,
                        946212,
                        951187,
                    ],
                ],
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
