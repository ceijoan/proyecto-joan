# Contenido Asincrono

- Sincronía
- Asincronia
- callbacks
- Promesas
- Async/Await

## Conceptos
- La `Sincronia` es la ejecución de tareas en un orden secuencial, es decir una tarea se ejecuta despues de que la anterior haya terminado.

```js
    console.log("Paso 1");

    traerdatos();
    console.log("Paso 3");

    function traerdatos(){
        //Espera de 3 seg
        Console.log("Paso 2");
    }


    //
    function esperar (milisegundos){
        const start = new Date().getTime();
        while (new.Date().getTime() - start < milisegundos);
    }

    //LA RESPUESTA DE ESTE ES ASI: 
    //Paso 1
    //Paso 2
    //Paso 3
```
- La `Asincronía` es la ejecución de tareas en orden no secuencial, es decir, una tarea se puede ejecutar antes que la anterior haya terminado.

La optención de datos asicronos se utiliza para:
- Tarer información de la BD
- Traer información de un API
- Manipulacion de nuestros propios archivos.
```js
    console.log("Paso 1");

    traerdatos();
    console.log("Paso 3");

    function traerdatos(){
        //Espera de 3 seg
        setTimeOut(()=>{
            Console.log("Paso 2");
        }, 3000); 
    }
    //LA RESPUESTA DE ESTE ES ASI: 
    //Paso 1
    //Paso 3
    //Paso 2
```
- Funciones `callBacks` Como debemos esperar a que una tarea termine para poder continuar con la siguiente, se utilizan los callbacks para realizar una accion despues de que la tarea asincrona ha terminado.
```js
let datos= "";
    console.log("Paso 1");
    //Con esta funcion decimos que funcion es la que se quiere ejecutar.
    traerdatos(imprimirDatos);
    console.log("Paso 3");

    function traerdatos(imprimirDatos){
        //Espera de 3 seg
        setTimeOut(()=>{
            Console.log("Paso 2");
            datos=("Ejemplo 1, 2 , 3");
            imprimirDatos(datos);
        }, 3000); 
    }
    //Funcion que voy a ejecutar luego de traer datos
    function imprimirDatos (datos){
        console.log ("paso 4: imprimiendo: ", datos);
    }

    //LA RESPUESTA DE ESTE ES ASI: 
    //Paso 1, " "
    //Paso 3, " "
    //Paso 2
    //paso 4: imprimiendo: Ejemplo 1, 2 , 3
```

- Ejecicio: crear un código donde se muestre por consola la siguiente secuencia:
    1) un comensal solicita a un camarero un entrante.
    2) El camarero va a buscar el plato solicitado. (Asíncrona)
    3) La persona toma un vaso de agua mientras espera.
    4) El camarero lleva el plato a la mesa.
    5) La persona se come el plato de comida.

```js
let plato = "enslada";
console.log("Paso 1: Solicita al camarero un entrante: ", plato);

hacerPedido(plato, () =>{
    console.log("Paso 4: El camarero lleva el plato a la mesa:");
    console.log("Paso 5: La persona se puede comer el plato", plato);
});

console.log("Paso 3: La persona se toma el vaso de agua");

function hacerPedido(plato, callback){
    console.log("Paso 2: El camarero va a buscar el plato de comida");
    setTimeout(()=>{
        callback();
    },3000);
}
//LA RESPUESTA DE ESTE ES ASI:
//Paso 1: Solicita al camarero un entrante:  enslada
//Paso 2: El camarero va a buscar el plato de comida
//Paso 3: La persona se toma el vaso de agua
//undefined
//Paso 4: El camarero lleva el plato a la mesa:
//Paso 5: La persona se puede comer el plato enslada
```

- La gran desventaja de los callbacks es que se pueden anidar y se vuelven dificiles de leer y manbtener a esto se le llama `Callback Hell` por eso se han creado las `Promesas` Una promesa es el objketo que representa la `terminación` o el `fracaso` de una operacion asincrona.

```js
    const promesa = new Promise( (resolve, reject) =>{
    console.log("Ejecuto lo que le prometi")

        setTimeout(()=>{
            //Pude cumplir con la promesa
            resolve("EXITO!");

            //Rechaza la promesa
        }, 3000)
    } );
    // THEn:  es la palabra que se utiliza cuando resuelve la promera
    miPromesa.then(result =>console.log(result)  );
    //CATCH:  Es la respuesta que se da cuando no resuelve la promesa
    miPromesa.catch(error =>console.log("Tuve un error", error)  );
```
Las Promesas se pueden encadenar

```js
    const promesa = new Promise( (resolve, reject) =>{
    console.log("Ejecuto lo que le prometi")
        setTimeout(()=>{
            //Pude cumplir con la promesa
            resolve("EXITO!");

            //Rechaza la promesa
        }, 3000)
    } );
    miPromesa.then(result =>{
                console.log(result);
                return "Exito 2!";
                }).then (result =>{
                console.log(result);
                return "Exito 3!";
                }).then (result =>{
                console.log(result);
                return "Exito 4!";
                }).then (result =>{
                console.log(result);
                }).catch(error => console.log("Tuve un Error", error));
```

## Fetch API con .then() y .Catch()
Uno de los usos fundamentales de las promesas , es el uso de la fetch API para realizar `Peticiones http` a otros servidores.

la funcion `Fetch()` nos permite hacer peticiones a otros servidores, y nos devuelve una promesa.

```js
    fetch("https://jsonplaceholder.typicode.com/posts/")
        //Esta opcion es la misma de abajo pero mas larga.
        //.then(response =>{
        //   return JSON.parse(response);
        //})
        .then(response => response.json())//Convierte nuestro json en objeto JS
        .then(datos =>{
            console.log(datos.title);
        })
        .catch (error=> console.error("tuvimos un error", error));
```

## Async/Await (Uso para proyecto final o propios)
La desventaja de las promesas es que se vuelven dificiles de entender cuando se anidan. Por eso se han creado las funciones `Async` y `Await`.

```js
    //Con la palabra async, decimos que esta funcion va a ser Asincrona
let ListaUsuarios
async function traerDatos(){
    try{
        //con la palabra await le decimos al sistema cual es el elemento que se va a demorar
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const datos = await response.json();//convierte los datos a datos js

        console.log(datos);
        console.log(datos[1].name);
        return datos;
    } catch(error){
        console.error("Tuve un error ", error);
    }
}

ListaUsuarios=traerDatos();
```

EJEMPLO RESTAURANTE
```js
let plato ="Ensalada";
console.log("Paso 1: Solicita aun camararo el plato", plato);

Console.log("paso 2: El camarero va a buscar el plato de comida");
buscarPlato();


async function buscarPlato(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/api/Traerplato");
        const datosJS = await response.json();
        // Que hacer con los datos....
        console.log("Paso 4: El camarero lleva el plato de: ", datosJS.plato);
        console.log("Paso 5: El comensal se come su comida");
    }catch(error){
        console.log("Mierror fue", error);
    }
}
console.log("Paso 3: La persona se toma el vaso de agua");

```


Ejercicio obetner los 10 usuarios  de JsonPlaceHolder y mostrarlos en pantalla.
