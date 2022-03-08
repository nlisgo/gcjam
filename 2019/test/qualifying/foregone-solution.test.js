const foregoneSolution = require('../../qualifying/foregone-solution/index');

describe('solve', () => {
    test('4', () => {
        expect(foregoneSolution.solve('4')).toBe('3 1');
    });
    
    test('940', () => {
        expect(foregoneSolution.solve('940')).toBe('930 10');
    });
    
    test('4444', () => {
        expect(foregoneSolution.solve('4444')).toBe('3333 1111');
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            foregoneSolution.solveInputs(`3
4
940
4444`.split(/\r?\n/))
        )
        .toStrictEqual(
            [
                'Case #1: 3 1',
                'Case #2: 930 10',
                'Case #3: 3333 1111',
            ]
        );
    });
});
