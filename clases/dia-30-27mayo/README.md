## Definisión de funciones

```js
    //Funcion clasica
    function miFuncion(Parametro1, parametro2){
        return valor;
    };
    //Funcion Asignada a variables
    const miFuncion = function(Parametro1, parametro2){
        return valor;
    };

    //Funsion flecha -  arrow function
    //cuando la funcion esta dentro del objeto no es necesario decirle si es una constante o una let
    const miFuncion = (Parametro1, parametro2)=>{
        
        return valor;
    };

    //Funcion flecha simplificada, es  lo mismo que la anterior pero mas simplificado

    const miFuncion = (Parametro1, parametro2)=>valor;
    //divEstadisticas.addEventlistener("Lo que quiero escuchar = (CLICK)", "la funcion que voy a ejecutar cuando escuche - function haceralgo()");
    divEstadisticas.addEventlistener("click",(Parametro1, parametro2) =>{
        //Esta función que se ejecuta dentro de otra función se llaman *callback*
        console.log("Estoy haciendo algo cuando me das clic")
    });
```

[Sitio web de profe tomas para recordar cosas de clase](https://tomascei.github.io/manual-md/)


# Listas o Arrays
Los vectores o arrays son listas de elementos que se pueden guardar en una variable. Se declaran con corchetes [] y los elementos se separan con comas ,. Los elementos pueden ser de cualquier tipo, incluso otros vectores.