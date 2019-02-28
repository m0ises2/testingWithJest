const numbers = require('../numbers');

describe('Probando numbers: ', () => {
    test('Mayor que: ', () => {
        expect(numbers(2, 2)).toBeGreaterThan(2);
    });

    test('Mayor que o igual: ', () => {
        expect(numbers(2, 3)).toBeGreaterThanOrEqual(5);
    });

    test('Menor que: ', () => {
        expect(numbers(1, 8)).toBeLessThan(10);
    });

    test('Menor que o igual: ', () => {
        expect(numbers(1, 8)).toBeLessThanOrEqual(9);
    });

    test('Numeros flotantes: ', () => {
        expect(numbers(1.2, 5.3)).toBeCloseTo(6.5, 2);
    });
})
