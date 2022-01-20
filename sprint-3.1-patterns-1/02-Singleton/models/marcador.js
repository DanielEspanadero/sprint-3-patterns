class Marcador {

    constructor(){
        this.singleton = false
    }


    static guanyador(jugadors) {
        if(!this.singleton){
            let guanyador = Math.max(...jugadors);
            console.log(`Ha guanyat la puntuació ${guanyador}!!!!!`)
            this.singleton = true;
        }else{
            console.log(`Ja s'ha decidit el guanyador, no siguis agonies!!!!`)
        }
    }

};

module.exports = Marcador;