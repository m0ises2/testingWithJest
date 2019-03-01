const { isTrue, isNull, isFalse, isUndefined } = require('../true');

describe('Probar resultados nulos: ', () => {
    test('null', () => {
        expect(isNull()).toBeNull();
    })
});

describe('Probar resultados verdaderos: ', () => {
    test('true', () => {
        expect(isTrue()).toBeTruthy();
    })
});

describe('Probar resultados falsos: ', () => {
    test('false', () => {
        expect(isFalse()).toBeFalsy();
    })
});

describe('Probar resultados undefined: ', () => {
    test('', () => {
        expect(isUndefined()).toBeUndefined();
    })
});