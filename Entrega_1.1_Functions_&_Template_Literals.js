// nivel 1, ejercicio 1

function printName(name) {
	console.log(name);
}

printName('Dani');

// nivel 2, ejercicio 1

const name = 'Dani';
const surname = 'Sanchez';
const secondSurname = 'Vela';

console.log(`Nombre: ${name}
Apellidos: ${surname} ${secondSurname}`);

// nivel 2, ejercicio 2

const returnValue = (value) => value;

console.log(`Este es el ${returnValue('valor a retornar')}`);

// nivel 3, ejercicio 1

const arrayFunctions = [];

function printNumbers() {
	for (let i = 0; i < 10; i++) {
		console.log(i);
	}
}

for (let i = 0; i < 10; i++) {
	arrayFunctions.push(printNumbers);
}

arrayFunctions.forEach((element) => {
	element();
});

// nivel 3, ejercicio 2

const nameUser = (function(nameUser) {
	console.log(nameUser);
})('Daniel Sanchez');
