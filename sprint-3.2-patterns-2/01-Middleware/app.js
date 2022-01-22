const Middleware = require('./middleware');
const numeros = require('./numeros.json');
const app = new Middleware(calculadora);


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

app.use((req, next) => {
    number1 = req[0].a;
    number2 = req[1].b;
    console.log(`divisio entre ${number1} i ${number2}: ` + number1 / number2);
    next();
});