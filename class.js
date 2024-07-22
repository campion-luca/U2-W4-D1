// creo lo " stampino " per la creazione di Users sempre con questo modello
class Users {
    constructor(_firstName, _lastName, _age, _location) {
        this._firstName = _firstName
        this._lastName = _lastName
        this._age = _age
        this._location = _location
    }

    older(user2) {
        if (this._age > user2._age) {

            return `${this._firstName} è più vecchio di ${user2._firstName}`
        } else {
            return `${user2._firstName} è più vecchio di ${this._firstName}`
        }
    }
}



const Luca = new Users("Luca", "Campion", 26, "Rovigo");
console.log(Luca);

const Cristina = new Users("Cristina", "Nenov", 22, "Rovigo");
console.log(Cristina);


console.log("RISULTATO");
console.log(Luca.older(Cristina));