// nivel 1, ejercicio 1

function printName(name) {
    console.log(name)
}

printName('Dani')

// nivel 2, ejercicio 1 

const name = 'Dani'
const surname = 'Sanchez'

console.log(`Nombre: ${name}
Apellido: ${surname}`)

// nivel 2, ejercicio 2

const returnValue = (value) => value

console.log(`Este es el ${returnValue('valor a retornar')}`)

// nivel 3, ejercicio 1

const arrayFunctions = new Array(10)

function printNumbers(){
    for (let i = 0; i < 10; i++){
        console.log(i)
    }
}

for (let i = 0; i < arrayFunctions.length; i++){
    arrayFunctions.push(printNumbers())
}
