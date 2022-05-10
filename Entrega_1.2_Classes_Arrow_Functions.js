//nivel 1, ejercicio 1

(() => console.log(1 + 2))()

//nivel 2, ejercicio 1

const animal = (color) => {
    const animal = { color: color }
    return animal
}

const perro = animal('negro')
console.log(perro)

//nivel 2, ejercicio 2

class Persona {
    #nom
    constructor(nom) {
        this.nom = nom
    }
    dirNom() {
        console.log(`Em dic ${this.nom}`)
    }
}

const daniel = new Persona('Daniel')
daniel.dirNom()

//nivel 3, ejercicio 1

class People {
    constructor() {
        if (this.constructor == People) {
            throw new Error("Error clase Abstracta.");
        }
    }
    info() {
        throw new Error("Error metodo Abstracto");
    }
}

class Teacher extends People {
    info(rol) {

        console.log(`I am a ${rol} teacher`);
    }
}
function createObj() {
    const teacher = new Teacher()
    return teacher
}
const teacher1 = createObj();
const teacher2 = createObj();
const teacher3 = createObj();
teacher1.info('Math');
teacher1.info('Geography');
teacher1.info('NodeJS');