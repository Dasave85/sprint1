
const {suma, resta, multiplicar, dividir} = require('../app/app.js');


describe('comprueba funciones aritmetricas', () =>{
test('suma de 2 + 2 debe dedar 4', () => {
    const resultado = suma(2, 2)
    expect(resultado).toBe(4);
})


test('resta de 3 - 2 debe dar 1', () => {
    const resultado = resta(3, 2)
    expect(resultado).toBe(1);
})

test ('multiplica 3 * 2 debe dar 6', () => {
    const resultado = multiplicar(3, 2)
    expect(resultado).toBe(6);
})

test('dividir 10 / 2 debe dar 5', () => {
    const resultado = dividir(10, 2)
    expect(resultado).toBe(5);
})

});

const { employeeData, double, addDoubles } = require('../../Entrega_1.4_Async_Await.js')

describe('test funcion asincrona employeeData', () =>{
    test('retorna un string con nombre y un salario', async () =>{
        const string = await employeeData(2)

        expect(string).toBe('El empleado Bill Gates, recibe 1000 € mensuales')
    })
})

describe('test Async Await nivel 2 ejercicio 1', () =>{
    test('retorna el doble de un valor despues de dos segundos', async ()=>{
        const result = await double(2)
        expect(result).toBe(4)
    })

    test('suma los valores retornados de la funcion doble', async () =>{
        jest.setTimeout(5000); () => {
            const result = addDoubles(1,2,3)
            expect(result).toBe(12)
        }
    })

})