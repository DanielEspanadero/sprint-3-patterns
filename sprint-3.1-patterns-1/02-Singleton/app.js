// TODO Crear diversis jugadors. [x]
// TODO Poder afegir als jugadors a un joc. [x]
// TODO Mostrar un marcador amb les puntuacions i el guanyador.
// TODO Permetre afegir o treure punts a un jugador perquè el marcador canviï.
// TODO La classe marcador ha de implementar un patró singleton.

const Jugador = require('./models/jugador');
const Joc = require('./models/joc');

const jugador = new Jugador();
const jugador1 = jugador.crearJugador('Andres');
const jugador2 = jugador.crearJugador('Maria');


//! Falta corregir que no se puedan insertar jugadores no creados
const joc = new Joc();
joc.afegirAlJoc('andres');
joc.afegirAlJoc(jugador2);
joc.afegirAlJoc('Pepe');


console.log(joc.afegits)