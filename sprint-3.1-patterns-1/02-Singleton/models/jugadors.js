const Jugador = require('./jugador');

class Jugadors {

    _llista = {};

    constructor () {
        this._llista = {};
    };


    crearJugador(nom = ''){
        const jugador = new Jugador(nom);
        this._llistat[jugador.id] = jugador
    };
};


module.exports = Jugadors;