const Jugador = require('./jugador');

class Joc {

    constructor(){
        this.afegits = [];
    }
    
    afegirAlJoc(Jugador){
        if(Jugador){
        return this.afegits.push({Jugador})
        } else if (Jugador) {
            console.log(`Si us plau, introdueix les dades correctament`)
        }else {
            console.log(`El jugador ${Jugador} no existeix`)
        }
    };
};

module.exports = Joc;