const { sumar, restar, multiplicar, dividir } = require('../maths');

describe('Cálculos matemáticos: ', () => {
    test('Pruebas de sumas: ', () => {
        expect(sumar(1, 1)).toBe(2);
    });
    
    test('Pruebas de multiplicaciones: ', () => {
        expect(multiplicar(3, 6)).toBe(18);
    });

    test('Pruebas de divisiones: ', () => {
        expect(dividir(10, 5)).toBe(2);
    });

    test('Pruebas de restas: ', () => {
        expect(restar(2, 2)).toBe(0)
    });
});
