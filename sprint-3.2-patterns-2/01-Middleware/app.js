// TODO Crea en un fitxer inicial una petita aplicació que sumi, resti i multipliqui rebent els paràmetres en un JSON. [X]
//TODO Crea en un fitxer extern una classe que emmagatzemi middlewares(funcions). [x]
//TODO Insereix a la invocació middlewares que facin el quadrat, el cub i la divisió entre 2 dels operands incials en cadascuna de les operacions.
//TODO Invoca les execucions de la suma, la resta i la multiplicació, de manera que es vagin mostrant per la consola les modificacions que es van fent als valors abans del resultat final.
// * FUENTE DE TODO EL EJERCICIO: https://stackoverflow.com/questions/39318027/how-to-write-a-middleware-class-in-node-js

'use strict'

const Middleware = require('./middleware');
const numeros = require('./numeros.json');


const calculadora = (operacio, valors) => {
    let resultat;
    
    switch (operacio) {
        case 'suma': resultat = valors.reduce((a, b) => a + b); break;
        case 'resta': resultat = valors.reduce((a, b) => a - b); break;
        case 'multiplicacio': resultat = valors.reduce((a, b) => a * b); break;
        default: break;
    }
    
    return resultat;
};

// console.log(calculadora('suma', [numeros[0].a, numeros[0].b]))

const middleware = new Middleware();

middleware.use(function (info, next) {
    console.log(`El cuadrat de ${numeros[1].a} es igual a ${Math.pow(numeros[1].a, numeros[2].b)}`); 
    next();
});

middleware.use(function (info, next) {
    console.log(`El cub de ${numeros[1].a} es igual a ${Math.pow(numeros[1].a, numeros[0].a)}`); 
    next();
});

middleware.use(function (info, next) {
    console.log(`La divisió de ${numeros[1].a} entre ${numeros[1].b} es igual a ${numeros[1].a / numeros[1].b}`);
    next();
});

// Run the middleware with initial value
middleware.run(calculadora('suma', [numeros[1].a, numeros[1].b]));