const { getFruits, getColors } = require('../arrays');

describe('Comprobaremos que existe un elemento: ', () => {
    test('Contiene una banana?', () => {
        expect(getFruits()).toContain('banana');
    });

    test('No contiene una banana?', () => {
        expect(getFruits()).not.toContain('platano');
    });

    test('Comprobar el tamaño de un arreglo', () => {
        expect(getFruits()).toHaveLength(7);
    });

    test('Contiene una Comprobaremos', () => {
        expect(getColors()).toBeDefined();
    });
});
