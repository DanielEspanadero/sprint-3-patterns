class Marcador {

    constructor() {
        throw new Error('Fes servir Marcador.puntsTotals(jugador)');
    }


    static puntsTotals(jugador) {

        if (!!jugador.nom) {
            const suma = jugador.puntsAfegits.map(n => n).reduce((a, b) => a + b, 0)
            const resta = jugador.puntsTrets.map(n => n).reduce((a, b) => a - b, 0)
            const total = jugador.puntsTotals.push(suma + resta);

            return new Marcador();
        } else {
            console.log(`${jugador.nom} ja te asignat un marcador`)
        }

    }

};

module.exports = Marcador;