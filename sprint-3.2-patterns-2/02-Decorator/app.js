//TODO Crea un Decorator en un arxiu que retorni una funció.Aquesta funció efectuarà una conversió de moneda a euros multiplicant pel coeficient de conversió del fitxer adjunt currency_conversions.json en funció de la divisa original.
//TODO Crea una petita aplicació que calculi el cost d'uns quants Articles en euros a partir de les seves divises incials, aplicant diferents conversions que usin el Decorator del punt anterior.
// https://stackoverflow.com/questions/48055771/how-do-i-use-and-apply-javascript-decorators

const Producte = require('./models/producte');

const iphone = new Producte('iphone', '6s', 200, '€');

console.log(iphone)