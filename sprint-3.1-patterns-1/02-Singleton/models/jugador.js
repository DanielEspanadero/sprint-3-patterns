const { v4: uuidv4 } = require('uuid');

class Jugador {

    punts = '';
    id = '';

    constructor (nom){
        this.id = uuidv4(),
        this.nom = nom,
        this.punts = 0
    }
}


module.exports = Jugador;