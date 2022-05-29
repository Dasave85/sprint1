class Persona {
    #nom
    constructor(nom) {
        this.nom = nom
    }
    dirNom() {
        console.log(`Em dic ${this.nom}`)
    }
}

module.exports = { Persona }