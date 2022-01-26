const data = require('../currency_conversions.json');


class Decorator {
    constructor(producte) {
        this.producte = producte;
    };

    obtenirProducte() {
        return this.producte;
    };

    convertidor(divisa) {
        try {
            const regex = new RegExp(this.obtenirProducte().divisa + '_' + divisa);
            const conversio = this.obtenirProducte().preu * Object.entries(data).find(n => regex.test(n))[1]

            console.log(`\n--- Es farà la conversió de ${this.obtenirProducte().divisa} a ${divisa} ---`);

            console.log(`- ${this.obtenirProducte().nom} ${this.obtenirProducte().model} amb un preu de ${this.obtenirProducte().preu} ${this.obtenirProducte().divisa} costarà ${conversio.toFixed(2)} ${divisa} al canvi de divisa.\n`);
        } catch (error) {
            if(divisa !== 'EUR'){
                console.log('\n--- Per ara la aplicació només fa la conversió a Euros. --- \n');
            }else if(this.obtenirProducte().divisa === 'EUR'){
                console.log('\n La aplicació només està preparada per fer la conversió a Euros, no es poden posar Euros com a divisa inicial. \n')
            }else{
                console.log(`La divisa actual no existeix.`);
            }
        }
    };
}

module.exports = Decorator;