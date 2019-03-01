// Despues de cada prueba:
afterEach(() => console.info('Despues de la prueba.'));
// Despues de cada prueba:
afterAll(() => console.info('Despues de todas pruebas.'));

// Antes de cada prueba:
beforeEach(() => console.info('Antes de cada prueba.'))
// Antes de todas las pruebas:
beforeAll(() => console.info('Antes de todas las pruebas'));

describe('preparar antes de ejecutar', () => {
    test('es false', () => {
        expect(false).toBeFalsy();
    });

    test('es true', () => {
        expect(true).toBeTruthy();
    });
});
