const Jugador = require('./jugador');

class Joc {

    constructor(){
        this.afegits = [];
    }

    
    afegirAlJoc(jugador){
        if(jugador.nom === undefined){
            return console.log(`El jugador '${jugador}' no existeix, has de registrar-ho per poder jugar.`);
        }else {
            console.log(`El jugador '${jugador.nom}' ha sigut afegit correctament al joc.`)
            return this.afegits.push(jugador);
            
        }
    };
};

module.exports = Joc;