#Primer web con Javascript

1. Para crear el primer elemento debemos crear una variable.

```js
var = nombreVariable
const = nombreVariable
```
2. Cuando le hago clic a btn - este debe escuchar cuando doy clic en el botón con la consulta:

```js
 //Con esta dice que escuche la accion Click del botón
 btn_o.addEventListener("click",() => {
    
} );
```
3. Dentro de la consulta que es ta escuchando se agrega la funcion que desea hacer
```js
btn_o.addEventListener("click",() => {
    //En este funcion le digo que tome la variable "body"."clasList" {va hacer una accion en clases} ."Toggle" {accion de activar y desactivar - puede ser "add" o "remove"}(modo-oscuro){Clase anterior mente definida en css}
    body.classList.add("modo-oscuro");
} );
```
4. En caso de no saber si esta escuchando la variable utilizar:
```js
//Desde el navegador, en "Consola" puedes visualizar si tu elemento esta escuchando 
console.log(variable)
//Tambien puedes usar el "alert" para estar seguro que esta realizando la acción en el momento indicado.
alert("HOLAAAAA");
```