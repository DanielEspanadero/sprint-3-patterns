const inquirer = require('inquirer');

const preguntes = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Què vols fer?',
        choices: [
            {
                value: '1',
                name: `${ '1.' } Crear jugador`
            },
            {
                value: '2',
                name: `${ '2.' } Afegir jugadors a un joc`
            },
            {
                value: '3',
                name: `${ '3.' } Afegir o treure punts`
            },
            {
                value: '4',
                name: `${ '4.' } Puntuacions`
            },
            {
                value: '5',
                name: `${ '5.' } Guanyador`
            },
            {
                value: '0',
                name: `${'0.' } Sortir`
            },  
        ]
    }
];

const inquirerMenu = async() => {

    console.clear();
    console.log('==========================');
    console.log('  Seleccioneu una opció');
    console.log('==========================\n');

    const { opcion } = await inquirer.prompt(preguntes);

    return opcion;
}

const pausa = async() => {
    
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Premeu ${ 'enter' } per continuar`
        }
    ];

    console.log('\n');

    await inquirer.prompt(question);
}

const llegirInput = async( message ) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,

            validate( value ) {
                if( value.length === 0 ) {
                    return 'Si us plau introduïu un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
};

module.exports = {
    inquirerMenu,
    pausa,
    llegirInput
}