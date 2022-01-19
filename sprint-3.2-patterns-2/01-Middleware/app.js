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
}


console.log(calculadora('suma', [numeros[1].a, numeros[1].b]))