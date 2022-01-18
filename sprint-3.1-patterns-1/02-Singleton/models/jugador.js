class Jugador {

    constructor(nom) {
        this.nom = nom,
        this.punts = 0
    }

    crearJugador(nom) {
        if (nom === undefined || nom === '' || nom === Number(nom)) {
            return `has d'introduïr un nom pel jugador`
        } else {
            return new Jugador(nom);
        }
    }
}


module.exports = Jugador;