const { sumar, holaMundo } = require('./app');

test('suma 2 + 3 debe dar 5', () => {
  expect(sumar(2, 3)).toBe(5);
});

test('holaMundo debe retornar el mensaje correcto', () => {
  expect(holaMundo()).toBe("Hola DevOps");
});
