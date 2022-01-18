class Jugador {

    constructor (nom){
        this.nom = nom,
        this.punts = [0]
    }

crearJugador(nom){
    return new Jugador(nom);
}
}


module.exports = Jugador;