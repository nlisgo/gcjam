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

describe('checkA', () => {
    test('4', () => {
        expect(foregoneSolution.checkA('4')).toBe('3');
    });

    test('940', () => {
        expect(foregoneSolution.checkA('940')).toBe('930');
    });

    test('4444', () => {
        expect(foregoneSolution.checkA('4444')).toBe('3333');
    });

    test('123567890', () => {
        expect(foregoneSolution.checkA('123567890')).toBe('123567890');
    });
});

describe('checkB', () => {
    test('4', () => {
        expect(foregoneSolution.checkB('4')).toBe('1');
    });

    test('940', () => {
        expect(foregoneSolution.checkB('940')).toBe('10');
    });

    test('4444', () => {
        expect(foregoneSolution.checkB('4444')).toBe('1111');
    });

    test('123567890', () => {
        expect(foregoneSolution.checkB('123567890')).toBe('');
    });
});
