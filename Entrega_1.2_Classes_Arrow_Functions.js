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
  
    say() {
      throw new Error("Method 'say()' must be implemented.");
    }
}

function createObj(name, tipo){
    const Obj = function() {
    Animal.apply(this, arguments);
    
};
Obj.prototype = Object.create(Animal.prototype);
Obj.prototype.constructor = Obj;
Obj.prototype.name = name
Obj.prototype.say = function() {
    console.log(tipo);
}
    return Obj
}

const dog = createObj('roy','guau')
console.log(dog.prototype.name)
dog.prototype.say()

const cat = createObj('misha', 'miau')
console.log(cat.prototype.name)
cat.prototype.say()

const bird = createObj('piolin', 'piu piu')
console.log(bird.prototype.name)
bird.prototype.say()