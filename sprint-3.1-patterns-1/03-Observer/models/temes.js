//TODO L'aplicació podrà crear diferents Temes i subscriure els usuaris a ells.
//TODO Quan un Usuari afegeixi un missatge a un Tema s'enviarà una alerta per la consola des del Tema.

const Usuari = require('./usuari');

class Temes {
    
    constructor(tema){
        this.tema = tema;
        this.temes = [];
    }

    static crearTema(usuari, tema){
        new Temes(tema);
        console.log(`L'usuari ${usuari.nom} ha creat el tema ${tema}`)
    }
    afegirMissatge(usuari, missatge, tema){
        console.log(`${usuari.nom} ha afegit el missatge ${missatge}`)
    };



};

module.exports = Temes;