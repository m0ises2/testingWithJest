const { getDataFromApi } = require('../promises');
const url_e = 'https://rickandmortyapi.com/api/character';
const api_rick = 'https://rickandmortyapi.com/api/character/1';

describe('Probar async/await', () => {
    test('Peticion a API', async () => {
        const data = await getDataFromApi(url_e);
        const rick = await getDataFromApi(api_rick);

        expect(data.data.results.length).toBeGreaterThanOrEqual(0);
        expect(rick.data.name).toBe('Rick Sanchez');
    });

    test('Peticion con error', async () => {
        const api_error = 'http://httpstat.us/500';
        const results = getDataFromApi(api_error);

        await expect(results).rejects.toEqual(Error('Request failed with status code 500'));
    });

    test('Resuelve un hola', async () => {
        await expect(Promise.resolve('hola')).resolves.toBe('hola');
        await expect(Promise.reject('error')).rejects.toBe('error');
    });
});
