//TODO L'aplicació podrà crear diferents Temes i subscriure els usuaris a ells.
//TODO Quan un Usuari afegeixi un missatge a un Tema s'enviarà una alerta per la consola des del Tema.

const Usuari = require('./usuari');

class Temes {
    
    constructor(){
        this.temes = [];
        this.usuaris = [];
    }

    //! Em falta afegir les notificacions de quan un usuari afegeix un tema.
    //! Mostrar per consola cadasccuns dels usuaris afegits a un tema.
    crearTema(usuari, tema){
        if(usuari.nom === undefined && usuari.cognoms === undefined){
            console.log(`L'usuari ${usuari} no existeix, has de crear l'usuari abans de crear un tema`);
        }else{
            this.temes.push(tema);
            this.usuaris.push(usuari.nom + ' ' + usuari.cognoms);
            console.log(`L'usuari ${usuari.nom} ha creat el tema ${tema}`)
            console.log(this.temes)
            console.log(this.usuaris)
        }
    };

    afegirMissatge(usuari, missatge, tema){

        console.log(`${usuari.nom} ha afegit el missatge ${missatge}`)
    };

};

module.exports = Temes;