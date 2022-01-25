//TODO Crea un Decorator en un arxiu que retorni una funció.Aquesta funció efectuarà una conversió de moneda a euros multiplicant pel coeficient de conversió del fitxer adjunt currency_conversions.json en funció de la divisa original.
//TODO Crea una petita aplicació que calculi el cost d'uns quants Articles en euros a partir de les seves divises incials, aplicant diferents conversions que usin el Decorator del punt anterior. [x]

const Producte = require('./models/producte');
const Decorator = require('./models/decorator');


//* Introducció de productes a la llista. Els parametres son (nom, model, preu, divisa).
const iphone = new Producte('iphone', '6s', 200, 'USD');
const samsung = new Producte('samsung', 's10', 190, 'GBP');
const huawei = new Producte('huawei', 'p30 pro', 1000, 'CAD');

//! Comprovació d'errors: Si es passan Euros com a divisa inicial, ens posará un missatge de que això no es pot fer.
const nokia = new Producte('nokia', '3310', 100, 'EUR');

//* Decorator: tenim el métode base que es diu obtenirProducte(). El métode decorator es convertidor(divisa);
const iPhone6s = new Decorator(iphone);
const samsungS10 = new Decorator(samsung);
const huaweiP30Pro = new Decorator(huawei);
const nokia3310 = new Decorator(nokia);

//* El métode convertidor() en fa poder fer la conversió desde qualsevol de les divises del .json sense la necessitat de crear herències.
iPhone6s.convertidor('EUR');
samsungS10.convertidor('EUR');
huaweiP30Pro.convertidor('EUR');

//! Comprobació d'errors: No es pot passar altre divisa que no siguin Euros, si això passa, sortirà un missatge.
nokia3310.convertidor('USD');


