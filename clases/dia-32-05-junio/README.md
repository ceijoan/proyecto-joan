# QuerySelector
Los Query Selector nos devuelven los objetos del tipo "element"  que son referencias a los nodos HTML, o a "null" si no lo encuentra.

```html
    <div class="Contenedor">
        <span class="Caja"><p class="parrafo">parrafo</p></span>
        <span class="Caja"></span>
        <span class="Caja"></span>
    </div>
```
```js
    const textParrafo = querySelector ('p');//Selecciona solo el primer parrafo que encuentra en el HTML
    console.log (textInput);
```

# QuerySelectorAll
Este nos devuelve una lista de nodos  (nodeList) que se comporta como un array incluso una `Lista vacia` si no encuentra ningún elemento.

```js
    const TodosLosSpan = querySelectorALL ('.caja');//Selecciona en un array todos los elementos que tienen la clase Caja
    console.log(TodosLosSpan);

    TodosLosDivs.forEach ( cajaIndividual => {//Funcion que le permite recorrer la misma cantidad de div que exitan y muestre en consola lo que trae ese elemento
        console.log(cajaIndividual);
    })

```


# addEventListener
Agregamos un evento especifico(clic, keyup, input, change, etc) en alguno de nuestros elementos.
## EVENTOS
- INPUT: Se ejecuta cada vez que el valor del campo cambie. Esto incluye escribir, borrar o pegar texto con el raton.

- KEYUP: Cada ve que el ususario suelta la tecla. Es útil por si necesitas detectar cambios en tiempo real mientras el ususario escribe, pero NO se va a ejecutar si el usuario pega texto con el ratón, o borra un texto con el ratón.

- CHANGE: Este evento se ejecuta cuando el elemento pierde el foco y su valor ha cambiado. Es útil si solo necesitamos reaccionar cuando el ususario termina de editar el campo.

- 

```js
    primerTextInput.addEventListener("input", ()=>{
        console.log("Acabo de lioberar una teclas");
    });
    primerTextInput.addEventListener("keyup", ()=>{
        console.log("Acabo de lioberar una teclas");
    });
    primerTextInput.addEventListener("change", ()=>{
        console.log("Acabo de lioberar una teclas");
    });
```
