const callbackheel = require('../callback');

describe('Probando un callback', () => {
    test('Probar callback', (done) => {
        function otherCallback(data) {
            expect(data).toBe('Hola Jscripters.');
            done();
        };

        callbackheel(otherCallback);
    })
});
