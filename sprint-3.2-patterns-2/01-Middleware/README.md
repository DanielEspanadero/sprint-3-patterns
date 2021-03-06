# 馃枛馃徎 MIDDLEWARE

## 馃嵖 驴Que es?

Un middleware es un bloque de c贸digo que se ejecuta entre la petici贸n que hace el usuario (request) hasta que la petici贸n llega al servidor.

Una definici贸n mas t茅cnica es que el patr贸n middleware es una serie de unidades que se procesan conectados unos con otros, en donde la salida de una unidad es la entrada de otra. En Nodejs, esto usualmente requiere una serie de funciones en la forma鈥?

```
function(args, next){
    // aqui va el codigo antes del siguiente bloque encadenado
    next(); // error o una salida
}
```

El patr贸n middleware implementa continuidad. La petici贸n proviene de un cliente y una respuesta es enviada de vuelta a este.

```
petici贸n => middleware1 => middleware2 => ruta => respuesta
```

Express tiene un manejador de middlewares de forma que los desarrolladores solo tienen que aplicar el middleware utilizando app.use().

```
const express = require('express');
const app = express();
app.use(middleware1);
app.use(middleware2);
```


## 馃嵖 驴C贸mo se define el orden de ejecuci贸n de los middlewares?

Los middleware son ejecutados en el orden especificado. Por ejemplo podemos capturar los log de una petici贸n antes de pasar dicha petici贸n a traves del procesamiento de esta.

```
const express = require('express');
const app = express();
app.use(logMiddleware);
// resto del codigo
```


## 馃嵖 驴Qu茅 tipos de middleware existen en express?

Existen 2 tipos de middleware en express鈥?

- middlewares de npm como:
```
body-parser app.use(bodyParser.json()).
```
- middlewares personalizados como:
``` 
app.use((req,res,next)).
```

## 馃嵖 驴C贸mo crear un middleware?

Los middleware personalizados son sencillos de crear debido que en realidad solo son una funci贸n.

- Mediante una variable de referencia:

```
const miMiddleware = (req, res, next) => {
    ...
    next();
}

app.use(miMiddleware);
```

- Directamente.

```
app.use((req, res, next) => {
    ...
    next();
});
```