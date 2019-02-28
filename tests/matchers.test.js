
describe('Usando comparadores comunes: ', () => {
    const user = {
        name: "Moisés",
        lastname: "Alvarado",
    }

    const user2 = {
        name: "Moisés",
        lastname: "Alvarado",
    }

    const otherUser = {
        name: "Oscar",
        lastname: "Castro",
    }

    test('Igualdad de elementos', () => {
        expect(user).toEqual(user2);
    });

    test('No igualdad de elementos', () => {
        expect(user).not.toEqual(otherUser);
    })
});
