
const {suma, resta, multiplicar, dividir} = require('../app/app.js');


describe('comprueba funciones aritmetricas', () =>{
test('suma de 2 + 2 debe dedar 4', () => {
    expect(suma(2, 2)).toBe(4);
})


test('resta de 3 - 2 debe dar 1', () => {
    expect(resta(3, 2)).toBe(1);
})

test ('multiplica 3 * 2 debe dar 6', () => {
    expect(multiplicar(3, 2)).toBe(6);
})

test('dividir 10 / 2 debe dar 5', () => {
    expect(dividir(10, 2)).toBe(5);
})

});