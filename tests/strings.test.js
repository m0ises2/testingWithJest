describe('Probando strings: ', () => {
  const text = 'un bonito texto';

  test('debe contener el siguiente texto', () => {
    expect(text).toMatch(/bonito/);
  });

  test('No contiene el texto', () => {
    expect(text).not.toMatch(/es/);
  });

  test('Comprobar tamaño de un texto', () => {
    expect(text).toHaveLength(15)
  });
});
