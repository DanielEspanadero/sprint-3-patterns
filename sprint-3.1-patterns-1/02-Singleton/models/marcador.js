const Jugador = require('./jugador');
const Joc = require('./joc');

class Marcador {
    constructor(){
        this.jugador = Jugador.nom;
        this.punts = Jugador.punts;
    }

    mostrarPunts(jugador){
        if(!Marcador){
            jugador.punts.push(punts);

            return new Marcador()
        }
        else{
            throw `El jugador ${jugador.nom} ha d'estar ficat dins del joc.`
        }

    }
};

module.exports = Marcador;