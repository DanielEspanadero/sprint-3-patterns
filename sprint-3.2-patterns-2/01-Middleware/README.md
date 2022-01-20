# 🖖🏻 MIDDLEWARE

## 🍿 ¿Que es?

Un middleware es un bloque de código que se ejecuta entre la petición que hace el usuario (request) hasta que la petición llega al servidor.

Una definición mas técnica es que el patrón middleware es una serie de unidades que se procesan conectados unos con otros, en donde la salida de una unidad es la entrada de otra. En Nodejs, esto usualmente requiere una serie de funciones en la forma…

```
function(args, next){
    // aqui va el codigo antes del siguiente bloque encadenado
    next(); // error o una salida
}
```

El patrón middleware implementa continuidad. La petición proviene de un cliente y una respuesta es enviada de vuelta a este.

```
petición => middleware1 => middleware2 => ruta => respuesta
```

Express tiene un manejador de middlewares de forma que los desarrolladores solo tienen que aplicar el middleware utilizando app.use().

```
const express = require('express');
const app = express();
app.use(middleware1);
app.use(middleware2);
```


## 🍿 ¿Cómo se define el orden de ejecución de los middlewares?

Los middleware son ejecutados en el orden especificado. Por ejemplo podemos capturar los log de una petición antes de pasar dicha petición a traves del procesamiento de esta.

```
const express = require('express');
const app = express();
app.use(logMiddleware);
// resto del codigo
```


## 🍿 ¿Qué tipos de middleware existen en express?

Existen 2 tipos de middleware en express…

- middlewares de npm como:
```
body-parser app.use(bodyParser.json()).
```
- middlewares personalizados como:
``` 
app.use((req,res,next)).
```

## 🍿 ¿Cómo crear un middleware?

Los middleware personalizados son sencillos de crear debido que en realidad solo son una función.

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