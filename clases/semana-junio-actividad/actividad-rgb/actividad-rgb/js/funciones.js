/**
 * @cuadros Variable que lee todos los elementos que tienen la clase .cuadro
 * @controles Variable que lee todos los selectores input
 * @codigoColor variable que lee un parrafo
 * 
 */
const cuadros = document.querySelectorAll(".cuadro");
const controles = document.querySelectorAll("input");
const codigoColor = document.querySelector("p");

//Se crea la funcion hexadecimal la cual recibira 3 valores

function hexadecimal(r,g,b){
    let codigo = [];
    //Bucle FOR que dice cuantas veces se debe repetir... crea la variable i en 0 la cantidad de repeticiones lo define con arguments.length lo que hace es contar la cantidad de caractares que recive ese numero (EJ: 255 - el length = 3)
    for(let i = 0; i < arguments.length; i++){
         
        codigo.push((Number(arguments[i]) < 16 ? "0" : "") + Number(arguments[i]).toString(16));
        // console.log(arguments[i]+"Este es indice que aumenta");
        // console.log(Number(arguments[i]) < 16? "0":  "" ); //Este dice que mientras sea menor a 16 le asigne el valor 0 pero cuando cuanmente deje el campo vacio.
        // console.log(Number(arguments[i]).toString(16)); //Esta parte cambia el numero a string

        
    }
    //Devuelve la cadena de elementos en una sola linea.
    return `#${codigo.join("")}`;

}


controles.forEach(function(control,indice){
    control.addEventListener("input",function(){
        //Este imprime en e background el color en hexadecimal generado
        cuadros[0].style.backgroundColor = hexadecimal(controles[0].value,controles[1].value,controles[2].value);
        //Este agrega en html el texto del Hexadecimal generado
        codigoColor.innerHTML = hexadecimal(controles[0].value,controles[1].value,controles[2].value);
        //Este separa los indices del array y los pone en hexadecimal par que se vea en el fondo de cada cuadro
        cuadros[indice + 1].style.backgroundColor = hexadecimal(indice == 0 ? control.value : 0,indice == 1 ? control.value : 0,indice == 2 ? control.value : 0);
    });
});




