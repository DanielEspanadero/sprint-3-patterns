// TODO Crear diversis jugadors. [x]
// TODO Poder afegir als jugadors a un joc.
// TODO Mostrar un marcador amb les puntuacions i el guanyador.
// TODO Permetre afegir o treure punts a un jugador perquè el marcador canviï.
// TODO La classe marcador ha de implementar un patró singleton.

const Jugadors = require('./models/jugadors');

const { inquirerMenu,
        pausa,
        llegirInput
} = require('./helpers/inquirer');


const inici = async ()=>{
    let opt = ''
    const jugadors = new Jugadors();
    
    
    do{
        opt = await inquirerMenu() //Imprime el menu i retorna una opció

        switch(opt){
            case '1': //Crear jugador
                const nom = await llegirInput('Nom del jugador: ');
                jugadors.crearJugador(nom);
            break;
        }

    }while(opt !== '0');

    await pausa();
};

inici()