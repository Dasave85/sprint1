//nivel 1, ejercicio 1

//(() => console.log(1 + 2))()
console.log((() => 1 + 2)())

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

class Animal {

    constructor() {
      if (this.constructor == Animal) {
        throw new Error("Abstract classes can't be instantiated.");
      }
    }
}
function createObj(){
function Obj(){
  
};

Obj.prototype = Object.create(Animal.prototype, {constructor : {value : Animal}});

const bird = new Obj()
return bird
}


const bird = createObj()
console.log(bird)
console.log(bird instanceof Animal)