# Objeto

Ejemplo:
```js
const miObjeto = {
    propiedad1 : "Valor",
    propiedad2 : 2,
    propiedad3 : false,
    metodoSumar : function(num1, num2){
                return num1+num2;
                },
    metodo2 : function(){};
    // N cantidad de opciones
}

```

Podemos acceder a las propiedades del objeto desde susu metodos usando la palabra clave `this` . EL uso de this hace rederencia a el mismo para acceder a sus valores.

```js
//Objetos por que tiene multiples propiedades y valores
const coche = {
    //Variables
    marca: "tesla",
    modelo: "Modelx",
    kmsRecorridos: 7777,
    color: "negro",
    //Metodos
    encender: function() {
                //El Uso de this para acceder a los kms actuales puestos en la variable
                const kms = this.kmsRecorridos;
                console.log(`arrrancar el coche, con ${kms} kms`);
            },
    //otro metodo d
    buscar:function(positionGPS){
        console.log("")
    }
}

//Leer el dato
const kilometros = coche.kmsRecorridos;//Aqui estoy leyendo y guardand en kilometros el valor de kmsRecorridos.
coche.kmsRecorridos=kilometros+5;//actualizo el valor de kmsRecorridos 5 digitos
coche.color="rojo";

//Asi ejecuto los metodos
coche.encender();

```

Cuando una `variables` tiene una funcion dentro esa varible tiene nombre de `METODO`