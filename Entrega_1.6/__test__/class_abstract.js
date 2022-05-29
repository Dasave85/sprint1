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
module.exports = {Animal, createObj}