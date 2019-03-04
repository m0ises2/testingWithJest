const { getDataFromApi } = require('../promises');
const url = 'https://jsonplaceholder.typicode.com/todos';
const url_e = 'https://rickandmortyapi.com/api/character';

describe('Probando promeses', () => {
    test('Realizando una petición a una API', done => {
        getDataFromApi(url_e).then(data => {
            console.log('%o', data);
            expect(data.data.results.length).toBeGreaterThan(0);
            done();
        });
    });
})
