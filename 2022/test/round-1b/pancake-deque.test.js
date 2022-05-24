const pancakeDeque = require('../../round-1b/pancake-deque/index');

describe('splitInput', () => {
    test('sample.in', () => {
        expect(
            pancakeDeque.splitInput(`3
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
        expect(pancakeDeque.solve('one')).toBe('one');
    });

    test('two', () => {
        expect(pancakeDeque.solve('two')).toBe('two');
    });

    test('three', () => {
        expect(pancakeDeque.solve('three')).toBe('three');
    });

    test('four', () => {
        expect(pancakeDeque.solve('four')).toBe('four');
    });
});

describe('solveInputs', () => {
    test('sample.in', () => {
        expect(
            pancakeDeque.solveInputs(`3
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
