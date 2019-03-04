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
});
