
// creo lo " stampino " per la creazione di Users sempre con questo modello
class Users {
    constructor(_firstName, _lastName, _age, _location) {
        this._firstName = _firstName
        this._lastName = _lastName
        this._age = _age
        this._location = _location
    }
    
    older = function(par1) {
        if (this._age >= par1[2]) {
            console.log("Funziona_1")
        } else {
            console.log("Funziona_2")
        }
    }
}

const Luca = new Users("Luca", "Campion", 26, "Rovigo");
console.log(Luca);

const Cristina = new Users("Cristina", "Nenov", 22, "Rovigo");
console.log(Cristina);

older(Users[2]);