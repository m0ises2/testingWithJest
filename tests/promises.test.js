const { getDataFromApi } = require('../promises');
const url = 'https://jsonplaceholder.typicode.com/todos';
const url_e = 'https://rickandmortyapi.com/api/character';

describe('Probando promeses', () => {
    test('Realizando una petición a una API', done => {
        getDataFromApi(url_e).then(data => {
            expect(data.data.results.length).toBeGreaterThan(0);
            done();
        });
    });

    test('Resuelve hola', () => {
        return expect(Promise.resolve('Hola!')).resolves.toBe('Hola!');
    });

    test('Resuelve con un error', () =>{
        return expect(Promise.reject('Error')).rejects.toBe('Error');
    });

});
