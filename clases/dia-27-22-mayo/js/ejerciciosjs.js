/**
 * Ejercicio 1: Crear una función que reciba un número y devuelva si es `par` o `impar`.
 * 
 */
let numero = 0;

function NumeroParoImpar(numero){
    if(numero % 2 === 0){
        console.log("El número es PAR");
    }else{
        console.log("El número es IMPAR");
    }
}

NumeroParoImpar(20);
NumeroParoImpar(21);

/**
 * Ejercicio 2: Crear una función que reciba un número y devuelva si es `positivo` o `negativo` o `cero`.
 */
function NumeroMasCeroMenos(numero){
    if(numero == 0 ){
        console.log("El número es Cero");
    }
    if (numero>0){
        console.log("El número es positivo");
    }
    if (numero<0){
        console.log("El número es negativo");
    }
    return "error";

}
NumeroMasCeroMenos(10);
NumeroMasCeroMenos(0);
NumeroMasCeroMenos(-20);

/**
 * Ejercicio 3: Crear una función que me indique si es `mayor` o `menor` de edad.
 */
let edad = 16;
let nombre = "";
function edadMayoMenor (edad,nombre ){
    if(edad >= 18 ){
        console.log(nombre + " es mayor de edad con " + edad +" años puede entrar al bar." );
    }else{
        console.log(nombre + " es menor de edad y no puede entrar al bar con " + edad + " años.");
    }
}
edadMayoMenor(24, "Maria");
edadMayoMenor(15, "Jose");

/**
 * Ejercicio 4: Crear un función a la que si le indico el día de la semana me devuelve si es laboral o no.
 */
let dia = "";
function noLaboral (dia){
    if(dia === "Domingo" || dia === "Sabado"){
        console.log(dia + " Es un dia festivo, puedes descansar");
    }
    if (dia === "Lunes" || dia === "Martes" || dia === "Miercoles" || dia === "Jueves" || dia === "Viernes") {
        console.log("Lo siento hoy es "+ dia + " hay que trabajar");
    }else{
        console.log("Lo siento, no se que dia es: " + dia);
    }
}
noLaboral("Domingo");
noLaboral("Sabado");
noLaboral("Miercoles");

/**
 * Ejercicio 5: Crear un función donde sus parametros sean jugador1 y jugador2 y vuelve si el jugador1 le gana a el jugador2 en un juego de `piedra` `papel` o `tijera`.
 */
let jugador1 = "";
let jugador2 = "";
const piedra = "piedra";
const papel = "papel";
const tijera = "tijera";


function jugar (jugador1, jugador2){
    if(jugador1 == piedra && jugador2 == tijera || jugador1 == papel && jugador2 == piedra || jugador1 == tijera && jugador2 ==papel ){
        console.log("Gana el jugador 1");
    }
    if (jugador2 == piedra && jugador1 == tijera || jugador2 == papel && jugador1== piedra || jugador2 == tijera && jugador1 ==papel ) {
        console.log("Gana el jugador 2");
    }
    if (jugador2 == piedra && jugador1 == piedra || jugador2 == papel && jugador1== papel || jugador2 == tijera && jugador1 ==tijera ) {
        console.log("Es empate vuelve a jugar");
    }
    return;
}
jugar("papel", "piedra");
jugar("piedra", "papel");
jugar("piedra", "piedra");