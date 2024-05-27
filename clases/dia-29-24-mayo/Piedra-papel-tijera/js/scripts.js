/* --------------------------------
/*  1. Declaramos variable
/* --------------------------------*/
const txtResultado = document.querySelector(".txtResultado");
const txtEstadisticas = document.querySelector(".txtEstadisticas");

const txtGanadas = document.getElementById("ganadas");
const txtPerdidas = document.getElementById("perdidas");
const txtEmpatadas = document.getElementById("empatadas");

// Grafica de Barra
const progressBar = document.querySelector(".progressBar");
const divGanadas = document.querySelector(".progressBar>div:nth-child(1)");
const divPerdidas = document.querySelector(".progressBar>div:nth-child(2)");

// Objeto con las estadísticas de nuestro juego
const objPuntaje= {
    // Puntaje del juego
    ganadas: 999,
    perdidas: 999,
    empatadas: 999,
    stats: {
        // estadisticas de la IA
        ai_piedra: 999,
        ai_papel: 999,
        ai_tijera: 999,
        // estadisticas del jugador
        user_piedra: 999,
        user_papel: 999,
        user_tijera: 999
    }
}


/* --------------------------------
/*  2. Declaramos funciones
/* --------------------------------*/

/**
 * Función que recibe lo que elije el jugador y le indica si gana o pierde
 * 
 * @param {string} jugador  - "piedra", "papel", "tijera"
 * @return {void}
 */
function jugar(jugador){
    const jugadorAI=elegirAutomaticamente(); // tirar automáticamente.
    let resultado="";

    if(jugadorAI == jugador){
        resultado = "Empate";
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


    // imprimir resultados
    txtResultado.innerHTML=`
        <h1>${resultado}</h1>
        Tu has tirado <b>${jugador}</b> y la AI ha tirado <b>${jugadorAI}</b>
    `;

    mostrarEstadisticas();
}

function elegirAutomaticamente(){
    const opciones=["piedra", "papel", "tijera"];
    // 0-2 (3 es lo mismo que opciones.length)
    const numero = Math.floor(Math.random() * 3); 

    return opciones[numero]; // piedra, papel, tijera
}

function mostrarEstadisticas(){
    // mostrar estadísticas de los jugadores
    txtGanadas.innerText = objPuntaje.ganadas;
    txtPerdidas.innerText = objPuntaje.perdidas;
    txtEmpatadas.innerText = objPuntaje.empatadas;

    // graficar Barra
    graficarBarra();
}

function graficarBarra(){
    const total = objPuntaje.ganadas + objPuntaje.perdidas; // + objPuntaje.empatadas;
    let porcentajeGanadas = Math.round((objPuntaje.ganadas/total)*100);
    let porcentajePerdidas = Math.round((objPuntaje.perdidas/total)*100);

    divGanadas.innerHTML=`Ganadas <br> ${porcentajeGanadas} %`;
    divPerdidas.innerHTML=`Perdidas <br> ${porcentajePerdidas} %`;
    divGanadas.style.width=porcentajeGanadas+"%";
    divPerdidas.style.width=porcentajePerdidas+"%";
}

// vaciar todas las estadísticas
function resetStats(){
    objPuntaje.ganadas = 0;
    objPuntaje.perdidas = 0;
    objPuntaje.empatadas = 0;

    objPuntaje.stats.ai_piedra = 0;
    objPuntaje.stats.ai_papel = 0;
    objPuntaje.stats.ai_tijera = 0;
    objPuntaje.stats.user_piedra = 0;
    objPuntaje.stats.user_papel = 0;
    objPuntaje.stats.user_tijera = 0;
}

/* --------------------------------
/*  3. Ejecutamos Nuestro Código
/* --------------------------------*/

resetStats();