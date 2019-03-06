const rick = require('../rick');
const getCharacter = require('../snapshot');

describe('Testing snapshots', () => {
    test('Es igual', () => {
        expect(getCharacter(rick)).toMatchSnapshot();
    });
});
