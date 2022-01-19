// TODO Crear diversis jugadors. [x]
// TODO Poder afegir als jugadors a un joc. [x]
// TODO Permetre afegir o treure punts a un jugador perquè el marcador canviï. [x]
// TODO Mostrar un marcador amb les puntuacions i el guanyador.
// TODO La classe marcador ha de implementar un patró singleton.

const Jugador = require('./models/jugador');
const Joc = require('./models/joc');
const Marcador = require('./models/marcador');



// Crear Jugadors (No es permetren numeros ni strings vuits).
const jugador = new Jugador();

const jugador1 = jugador.crearJugador('Lucas');
const jugador2 = jugador.crearJugador('Maria');


// Afegir jugadors a un joc (no es poden inserir jugadors no creats).
const joc = new Joc();

joc.afegirAlJoc(jugador1);
joc.afegirAlJoc(jugador2);
joc.afegirAlJoc('Pepe');

// Pujar punts a un jugador (Nomes es poden afegir nombres mes grans que 0).

joc.pujarPunts(jugador1, 10);
joc.pujarPunts(jugador2, 102);
joc.pujarPunts(jugador1, undefined);

// Treure punts a un jugador
joc.treurePunts(jugador1, 25);
joc.treurePunts(jugador1, 25);
joc.treurePunts(jugador1, 'pep');

// Marcador.

Marcador.puntsTotals(jugador1);
// Marcador.puntsTotals(jugador1);
Marcador.puntsTotals(jugador2);

// Mostrar marcador
// const marcador = new Marcador(0);
// marcador.afegirPunts(jugador2, 10);


console.log(jugador1, jugador2);