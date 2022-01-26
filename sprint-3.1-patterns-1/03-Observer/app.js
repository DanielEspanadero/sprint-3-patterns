//TODO Escriu una aplicació que creï diferents objectes Usuari. [x]
//TODO L'aplicació podrà crear diferents Temes i subscriure els usuaris a ells.
//TODO Quan un Usuari afegeixi un missatge a un Tema s'enviarà una alerta per la consola des del Tema.
//TODO També ho mostraran per consola cadascun dels Usuaris que estiguin subscrits al Tema(rebran el missatge).
//TODO Crea un Tema amb un Usuari i un altre amb dos i mostra la recepció dels missatges pels usuaris.Utilitza el mòdul events.

const Usuari = require('./models/usuari');
const Temes = require('./models/temes');

const usuari1 = new Usuari('Pepe', 'Lopez');
const usuari2 = new Usuari('Anna', 'Puig')

Temes.crearTema(usuari2, 'Prueba');

// prueba.afegirMissatge(usuari1, 'Hola')

console.log(Temes.temes)