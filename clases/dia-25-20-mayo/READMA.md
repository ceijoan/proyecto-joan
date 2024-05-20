# JavaScript
JavaScript es un lenguaje de programación de alto nivel, interpretado y dinámicamente tipado, que ha evolucionado desde su creación para manipular páginas web hasta convertirse en una herramienta omnipresente en el desarrollo moderno, tanto en el lado del cliente como del servidor.

Es un lenguaje de programacion de alto nivel, interpretado y orientado a objetos, que se utiliza para crear contenido dinámico e interactivo en sitios web.

## Lenguaje de alto nivel: 
Esta diseñado para ser facil de leer y de escribir para los humanos.

## Interpretado:
Se Ejecuta linea por linea en tiempo real, no necesita ser copilado.

```js
let numero =1
console.log("Mi numero vale", numero);//Imprime ek valor de numero = 1

numero = numero+1;
console.log("Mi variable cambio de  valor a ", numero)//Imprimer el valor de numero que es = 2
```

## Orientado a Objetos:
JS utiliza el paradigma otientado a objetos (OOP), lo que significa que organiza el codigo en "objetos". Un objetpo es una coleccion de propiedades y metodos que se pueden leer y manipular.

- Propiedades
    - Colores: cafe, negro, etc... 
    - Nombre: lazy, rodolfo, etc...
    
- Metodos
    - Ladra(): hacer ruido fuerte
    - MoverLaCola(); Mueve la cola demostrando felicidad

    ```js
    
    let Alumnos ={
        nombre = "Lucia",
        edad = 35,
        Saludar: function(){
            console.log("Hola mi nombre es", nombre)
        }
    }
    ```
## Donde Probar / Codificar JS
- En el navegador:
- En la pestaña de consola, escribiendo directamente en la consola del navegador.
- En etiquetas de `<Script>`, se suele poner al final del body (pero dentro).
- Se puede utilizar en un archivo .JS en una capeta o link externo por medio de `<script src="./js/miweb.js"></script>` agregandose al final del body (Pero dentro).
- En sitios Externos como: 
    1. Playcode https://playcode.io/
    2. Linangdata https://linangdata.com/
    3. VisualStudioCode 
    4. CodePen https://codepen.io/
    5. JS Fiddle https://jsfiddle.net/

## Funcionalidades
- Manipulación del DOM (Document object Model): Agregar modifica o eliminar elementos HTML y CSS.
- Procesar Formularios del lado del cliente: Verificar Datos ingresados por el ususario y realizar formularios complejos de multiples secciones.
- Manejo de Animaciones: Manipular los efectos visuales y animacines en nuestra web.
- Manejo de eventos: Responder a las acciones del ususario, como por ejemplo: Hacer clic o desplazarse por la web.
- Comunicacion asincrona con servidores mediante AJAX/FETCH: Enviar y recibir datos de un servidor sin tener que recargar la página. 

## Variables
>Son como Cajas que utilizamos para guardar informacion. Esta información puede ser un número, texto, una lista de cosas y muchos otros tipos más. Nos permite almacenar datos y luego usarlos o modificarlos en diferentes partes de nuestro programa.

Pasos
- Definir una variable:Es como darle un nombre a esta caja con un rotulador para poder encontrarlas más adelante.
- Asignar un valor: Es poner cosas dentro de la caja. Puede ser un número, textop, lista, etc...
- Usar esa variable: abrir la caja, y ver que hay dentro. Podemos ver las cosas y modificarlas.

En JS las variables se declaran *const* y *Let*. Antes se definian con la palabra *var* seguido del nombre de la variabley opcionalmente un valor inicial. 
- CONST: Se utiliza cuando es un valor unico u no va a cambiar.
- LET: Se utiliza para todas aquellas variables que cambiaran en el tiempo.

```JS
Let nombre ="JUAN";
Let Edad = 36;

Const PI=3,1416
```

## Comentarios
- Comentario simple: Se utilíza `//` para comentar uan sola línea de código.
- Comentario simple en la misma linea: Se puede agregar `//` al final de una linea
- Comentario de bloque: Se utiliza `/* ---- */` para hacer comentarios de multiples lineas
- Comentario de documentación: Este se tuliza `/** --- */` Para iniciar un bloque de documentación. Este tipo de comentarios se utiliza para funciones y clases.

```js
//Este es un comentario simple

Let nombre = "juan";//Este es un comentario simple en misma linea

/*
    Soy un comentario 
    Multineal
*/

/** Comentario de documentacion
/*
* @param {number} a - El primer número
* @param {number} b - El primer número
* @param {number}  La suma de los 2 numeros anteriores
*
**/
function sumar(a,b){
    return a+b;
}

/*------------------------------------------------*/
/*         ESTE FUNCIONA COMO SEPARADOR           */
/*------------------------------------------------*/
```
## Tipos de Datos
- Numeros: *Enteros, decimales, positivos, negativos, etc.*
- Cadenas de texto (String): *Textos, palabras, frases, 1 letra*. Debe esta entre comillas simples '',  Dobles "", o backticks ```
- Booleanos: Verdadero o falso (0 - 1)
- Lista de cosas (Arrays): Se escribe con corchetes [] y separado por comas.
- Objetos (Object): Coleccion de propiedades (Caracteristicas) y metodos(Funcionalidades). Y se escriben con { }.

```js
// TIPOS DE VARIABLES
// PRIMITIVOS
let numero = 123;
let decimales = 22.30;
let negativos = -3;

let texto = "Hola Alumnos CEI";
let textoConComillas = 'Hola Estoy bien';
let textoConComillasSimples = "I'm Tomi";
let texto = `Quiero comillas 'Simples' y "dobles" ` //Template String
const PI = 3.1416;
let miNumero = Number("1233")//Sirve para combertir un texto en numero o algun tipo de elemento
let estaPrendido = false;
let isPrimary = true;
let onActive = false;


// REFERENCIA
// Son elementosque vienen tipo ARRAY o caja de elementos

//ARRAY
let alumnosDev = ["Nerea", "David", "Jenny", ...];
const edades = [25, 32, 18, 49];
const listMixta = [1, "Juan", ]

//OBJETOS
 const alumno = {
    nombre:"Mario", 
    edad: 33, 
    isRecibido: false,
    presentarProyecto: function()=>{
        isRecibido=true;
    },
 };
```