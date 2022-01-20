class Joc {

    constructor() {
        this.afegits = [];
    }


    afegirAlJoc(jugador) {
        if (jugador.nom === undefined) {
            return console.log(`El jugador '${jugador}' no existeix, has de registrar-ho per poder jugar.`);
        } else {
            console.log(`El jugador '${jugador.nom}' ha sigut afegit correctament al joc.`)
            return this.afegits.push(jugador);

        }
    };

    pujarPunts(jugador, puntsAfegits) {
        if (puntsAfegits !== Number(puntsAfegits) || puntsAfegits === undefined || puntsAfegits <= 0) {
            return console.log(`La puntuació '${puntsAfegits}' no es correcta, introdueix un nombre més gran que 0 per poder pujar punts a ${jugador.nom}.`);
        } else if (jugador === undefined) {
            return console.log(`El jugador '${jugador}' no existeix, has de registrar-ho per poder jugar.`);
        } else {
            jugador.puntsAfegits.push(puntsAfegits);
            return console.log(`S'han pujat ${puntsAfegits} punts a ${jugador.nom}.`);
        }
    };

    treurePunts(jugador, puntsTrets) {
        if (puntsTrets !== Number(puntsTrets) || puntsTrets === undefined || puntsTrets <= 0) {
            return console.log(`La puntuació '${puntsTrets}' no es correcta, introdueix un nombre més gran que 0 per poder treure punts a ${jugador.nom}.`);
        } else if (jugador === undefined) {
            return console.log(`El jugador '${jugador}' no existeix, has de registrar-ho per poder jugar.`);
        } else {
            jugador.puntsTrets.push(puntsTrets);
            return console.log(`S'han tret ${puntsTrets} punts a ${jugador.nom}.`);
        }
    };

    puntsTotals(jugador) {

        const suma = jugador.puntsAfegits.map(n => n).reduce((a, b) => a + b, 0)
        const resta = jugador.puntsTrets.map(n => n).reduce((a, b) => a - b, 0)
        const total = jugador.puntsTotals.push(suma + resta);
        console.log(`${jugador.nom} te ${jugador.puntsTotals} punts.`)

    }
};

module.exports = Joc;