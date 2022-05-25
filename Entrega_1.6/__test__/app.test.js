jest.useFakeTimers();

afterEach(() => {
    jest.useRealTimers();
  });
  
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
    
    test('suma los valores retornados de la funcion doble',  () =>{
         jest.setTimeout(5000); () => {
            const result = addDoubles(1,2,3)
            expect(result).toBe(12)
            }
        })
        
    })
    
    const { getEmployee, getSalary } = require('../../Entrega_1.3_Promises_Callbacks.js')
    
    describe('test Promises & Callbacks nivel 2 ex.3', () =>{
        test('deberia retornar un nombre y un salario?', ()=>{
            getEmployee(2).then(employee => {
                expect(employee.name).toBe('Bill Gates');
                getSalary(employee).then(salary =>{
                expect(salary).toBe(1000)
            })
        })
    })
})


describe('test Async Await nivel 2 ej.1 con Jest Fake Timers', ()=>{
    test('deberia retornar el doble del valor que se le pasa',  () =>{
        
        
        double(2).then(value => expect(value).toBe(4));
        
        
    })
});

    
    
