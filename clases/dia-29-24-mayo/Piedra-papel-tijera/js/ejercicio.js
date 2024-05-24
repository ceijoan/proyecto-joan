/**
 * 1. Se declaran variables
 * 
 */
const txtResultados = document.querySelector("txtResultados");  
const estadisticas = document.querySelector("estadisticas");


//Grafico de Barra
const progressBar = document.querySelector("progressBar"); 
const

const objPuntaje ={
    //Puntajes del Juego
    ganadas:999,
    perdidas:999,
    empates: 999,
    stats:{
        //Estadisticas de AI
        ai_piedra:999,
        ai_papel:999,
        ai_tijeras:999,
        //Estadisticas del jugador
        user_piedra:999,
        user_papel:999,
        user_tijeras:999
    }
}



/**
 * 2. Funciones
 * 
 */
    function jugar (jugador){
        const jugadorAI="piedra";
        let resultado ="";

        if (jugadorAI == jugador){
            resultado="Empate";
        } else if (jugador == "piedra"){
            resultado = (jugadorAI == "papel") ? "Perdiste" : "Ganaste";
        } else if (jugador == "papel"){
            resultado = (jugadorAI == "tijera") ? "Perdiste" : "Ganaste";
        } else if (jugador == "tijera"){
            resultado = (jugadorAI == "piedra") ? "Perdiste" : "Ganaste";
        }

         // actualizar contadores de la AI
        if(jugadorAI == "piedra"){ objPuntaje.stats.ai_piedra++; }
        if(jugadorAI == "papel"){  objPuntaje.stats.ai_papel++; }
        if(jugadorAI == "tijera"){ objPuntaje.stats.ai_tijera++; }

        // actualizar contadores del Jugador
        if(jugador == "piedra"){ objPuntaje.stats.user_piedra++ }
        if(jugador == "papel") { objPuntaje.stats.user_papel++; }
        if(jugador == "tijera"){ objPuntaje.stats.user_tijera++; }
        // actualizar Partidas
        if(resultado=="Perdiste") { 
            //objPuntaje.perdidas = objPuntaje.perdidas +1;
            objPuntaje.perdidas++;
        }
        if(resultado=="Ganaste") { objPuntaje.ganadas++; }
        if(resultado=="Empate") {  objPuntaje.empatadas++; }



        txtResultados.innerHTML=`<h1>${resultado}</h1>
        tu has tirado <b>${jugador}</b> y la AI ha tirado <b>${jugadorAI}</b>`;
    }

   




    //Elije automaticamente la respuetsa del ai
    function elegirAutomaticamente(){
        const opciones=["piedra", "papel", "tijera"];
        // 0-2 (es lo mismo que opciones.length)
        const numero = Math.floor(Math.random() * 3); 
    
        return opciones[numero]; // piedra, papel, tijera
    }
    

    function resetStats(){
        objPuntaje.ganadas=0;
        objPuntaje.perdidas=0;
        objPuntaje.empates=0;

        objPuntaje.stats.ai_piedra=0;
        objPuntaje.stats.ai_papel=0;
        objPuntaje.stats.ai_tijeras=0;
        objPuntaje.stats.user_piedra=0;
        objPuntaje.stats.user_papel=0;
        objPuntaje.stats.user_tijeras=0;
    }
/**
 * 3. Ejecutar variables
 * 
 */
