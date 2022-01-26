//TODO L'aplicació podrà crear diferents Temes i subscriure els usuaris a ells.
//TODO Quan un Usuari afegeixi un missatge a un Tema s'enviarà una alerta per la consola des del Tema.

const Usuari = require('./usuari');

class Temes {
    
    constructor(){
        this.temes = [];
        this.usuaris = [];
    }

    crearTema(usuari, tema){
        this.temes.push(tema);
        this.usuaris.push(usuari.nom + ' ' + usuari.cognoms);
        console.log(`L'usuari ${usuari.nom} ha creat el tema ${tema}`)
        console.log(this.temes)
        console.log(this.usuaris)
    }

    afegirMissatge(usuari, missatge, tema){
        console.log(`${usuari.nom} ha afegit el missatge ${missatge}`)
    };

};

module.exports = Temes;