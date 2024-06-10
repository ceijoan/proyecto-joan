## Fecha Date()

El objeto `Date()` devuelve la fecha especifica.

```js
let hoy = new Date();//Devuelve la fecha actual

//Sumar 1 día
const sumarUnDia = new Date(hoy);
//El setDate para actualizar el dia
sumarUnDia.setDate (=hoy.getDate()+1); //La fecha de mañana

//Restar 1 día
const restarUnDia = new Date(hoy);
restarUnDia.setDate (=hoy.getDate()-1); //La fecha de Ayer

//Restar horas
const restarHoras = new Date(hoy);
restarUnDia.setHours (=hoy.getHours()-3); //Resta 3 horas a la fecha de hoy


function cambiarMinutos (fecha, minutos){
    const nuevaFecha = new Date(fecha);
    nuevaFecha.setMinutes(fecha.getMinutes()+minutos);

    return nuevaFecha;
}

    const hoy = new Date();
    const DentroDe5Minutos = cambiarMinutos(fecha, 5);
    const hace15Minutos = cambiarMinutos(fecha, -15); 
```


## Math.random()

Math.random() devuelve  un número decimal entre 0 y 1.
```js
    function numeroRandomEntre (min, max){
        return Math.floor(Math.random()*(max - min +1) + min);
    } 
    
    const min = 2;
    const max = 15;
    const numeroAleatorio = numeroRandomEntre (min, max);
    console.log(`Numero entre ${min} y ${max} es ${numeroAleatorio}`);
```

## BOM y Objeto Widows.

El BOM representa el navegador (chrome, safari, firefox, etc) Windows es el objeto principal del BOM, y contiene metodos que nos permiten interactuar con el.

```js
    //Obtener la altura y el ancho de la ventana
    const altura = window.innerHeight;
    const anchura = window-innerWidth;

    //Obtener la url actual
    const url = window.location.href;

    //Redirigir a otra pagina - De esta manera manejo las url del navegador.
     window.location.href="http://google.com"

    //Recargar la página
    window.location.reload();
    
    //Historial de navegación
    window.history.back();
    window.history.forward();

    //Abrir una ventana nueva
    const NuevaVentana = window.open("https://google.com", "_blanck", "width=600, height=400");

    //Ejecutar una funcion cada vez que se redimenciona la pantalla

    window.addEventListener("resize", () =>{
        const anchura = window.innerwidth;
        console.log ("Cambie el ancho de mi ventana ", anchura );

        if (anchura > 650){
            console.log("Estoy en desktop");
        }   else{
            console.log("Estoy en Mobile");
        }
    });


```
## Crear HTML con JS

```js
    const div = document.createElements('div');//Creo cual quier elemento HTML pero aun no se ve.

    const imagen = document.createElements('img')//crea una imagen

    imagen.src="https://dominio/images/foto1.jpg";//puedo ponerle la direccion de donde esta la imagen 
    imagen.alt="Mi foto de perfil";//le agrega el alt a la imagen que se va a crear.

    //En el div agregar una imagen
    div.appendChild(imagen);
    
    //En el Body agregar un div
    document.body.appendChild(div);
```


# JSON
Es un `STRING`.
Representacion de datos en forma de texto (String) que sigue uan sintaxis especifica , es un formato que facilita la comunicacion entre el backend-frontend, servidores y es fácil de leer para el usuario y fácil de crear para la maquina.


```js
    //OBJETOS JAVASCRIP
    const alumno= {
        edad = 25,
        nombre = "joan",

        saludar: ()=>{alert{"Holaaa"};}
    }

    //JSON
    {
        "edad" = 25,
        "Nombre" = "Joan",
    }
    {"edad" = 25,"Nombre" = "Joan",}

```
- EJEMPLO Convertir de Objeto string de JSON a String de JS
```js
    const jsonString ='{"edad" = 25,"Nombre" = "Joan",}';
    console.log (jsonString);

    const objeto = JSON.parse(jsonString);//Convierto un string de json a un objeto de js.
    console.log(objeto);//todo el objeto
    console.log(objeto.edad);//25
```

- EJEMPLO Convertir de Objeto string de JS a String de JSON
```js
    const jsonString ='{"edad" = 25,"Nombre" = "Joan",}';
    console.log (jsonString);

    const objeto = JSON.stringify(jsonString);//Convierto un string de JS a un objeto de json.
    console.log(objeto);//todo el objeto
    console.log(objeto.edad);//25
```