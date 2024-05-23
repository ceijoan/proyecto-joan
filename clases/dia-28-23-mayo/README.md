# Math
El objeto `Math` nos proporciona propiedades y metodos para realizar operaciones. Los mas comunes son:

- Math.random(): Devuelve un número pseudo-aleatorio entre 0 y 1.
- Math.round(): Devuelve el valor de un número redondeado al entero más cercano.
- math.ceil(): Redondea para arriba.
- Math.floor(): Redondea para abajo. 
- Math.abs(): Devuelve el valor absoluto de un nùmero.

```js
let numero = 3.1416;

let numRedondeado = Math.round(numero); //3
let numRedondeadoAriiba = Math.ceil(numero); //4

(numero * 100)//314.16
Math round(numero * 100) // 314
//Numero de 2 digitos
let numRedondeadoDosDigitos = Math.round(numero*100)/100; //3.14

Math.round( Math.random()*10 );//Esta funcion me saca el numero entero de un valor random
```

## Interpolación de Variables (Template Strings)
Es una forma de concatenar strings y variables de forma legible. Se utiliza el "Acento abierto" o backtick o (` `) Para delimitar el string y `${}` para insertar la variable.

Entre los beneficios tenemos:
- Lectura mucho mas sencilla.
- Uso de Variables en nuestro String.
- Posibilidad de escribir mútiples lineas de texto.
- Realizar operaciones dentro de llaves {} un string.

```js
//Metodo tradicional
let nombre = "juan";

let contenido = `<div class="caja">
                    <h1>Hola, a todos Mi nombre es ${nombre} </h1>
                </div>`;

let mensaje =`Hola, me llamo ${nombre} y voy a cumplir ${edad} años`;


```