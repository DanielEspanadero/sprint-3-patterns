// TODO Crear diversis jugadors. [x]
// TODO Poder afegir als jugadors a un joc. [x]
// TODO Permetre afegir o treure punts a un jugador perquè el marcador canviï. [x]
// TODO Mostrar un marcador amb les puntuacions i el guanyador. [x]
// TODO La classe marcador ha de implementar un patró singleton. [x]

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
joc.pujarPunts(jugador1, 100);
joc.pujarPunts(jugador2, 102);
joc.pujarPunts(jugador1, undefined);

// Treure punts a un jugador
joc.treurePunts(jugador1, 25);
joc.treurePunts(jugador1, 25);
joc.treurePunts(jugador1, 'pep');

// Punts totals
joc.puntsTotals(jugador1);
joc.puntsTotals(jugador2);


// Marcador final (El patró singleton está ficat dins de la funció guanyador, es pot passar dues vegades per fer la proba).

const jugadors = (jugador1.puntsTotals.concat(jugador2.puntsTotals))

Marcador.guanyador(jugadors);
Marcador.guanyador(jugadors);

