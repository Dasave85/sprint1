const {Persona} = require('../app/class')
jest.mock('../app/class')
beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    Persona.mockClear();
    Animal.mockClear();
  });

describe('comprueba si se intancia la class persona y su metodo', ()=>{
    test('instanciar clase persona', () =>{
        const roy = new Persona()
        expect(Persona).toHaveBeenCalledTimes(1);
    })
    
    test('llamar al metodo de la clase persona', () =>{
        //expect(Persona).not.toHaveBeenCalled();
        const roy = new Persona() 
        roy.dirNom()
        expect(roy.dirNom).toHaveBeenCalledTimes(1)
    }) 
})

const { Animal , createObj } = require('../app/class_abstract')
jest.mock('../app/class_abstract')

describe('comprueba si se intancia la clasa Abstracta Animal', ()=>{
    test('instanciar clase Animal', () =>{
        const perro = createObj()
        expect(createObj).toHaveBeenCalledTimes(1)
        
    })
})