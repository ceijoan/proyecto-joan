const JsonPeliculas = `[
    {
        "titulo": "Inception",
        "genero": "Ciencia Ficción",
        "puntaje": 8.8,
        "descripcion": "Un ladrón que roba secretos corporativos a través del uso de tecnología de sueños es dado la tarea inversa de plantar una idea en la mente de un CEO.",
        "imagen": "./img/inception.jpeg"
    },
    {
        "titulo": "The Dark Knight",
        "genero": "Acción",
        "puntaje": 9,
        "descripcion": "Cuando el Joker emerge como el nuevo villano del caos, Batman debe aceptar uno de los mayores desafíos psicológicos y físicos para combatir la injusticia.",
        "imagen": "./img/darkknight.jpeg"
    },
    {
        "titulo": "Interstellar",
        "genero": "Aventura",
        "puntaje": 8.6,
        "descripcion": "Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de asegurar la supervivencia de la humanidad.",
        "imagen": "./img/interstellar.jpeg"
    }
]`

const listPeliculas = JSON.parse(JsonPeliculas);
// 1.Definir variables
const divPelisContainer = document.querySelector(".pelisContainer");
const inputTitulo = document.querySelector("#inputTitulo");
//Botones
const btnTodos = document.querySelector("#todos");
const btnCienciaF = document.querySelector("#cienciaF");
const btnAccion = document.querySelector("#accion");
const btnAventura = document.querySelector("#aventura");

//Agregar eventListeners
inputTitulo.addEventListener("input", () =>{
    const texto = inputTitulo.value.toLowerCase();
    console.log(texto);
    const pelisFiltradas = listPeliculas.filter (peli => peli.titulo.toLowerCase().includes(texto)   );

    console.log(pelisFiltradas);
    listarPeliculas(pelisFiltradas);
});

btnTodos.addEventListener("click", ()=>{
    inputTitulo.value ="";
    listarPeliculas(listPeliculas);
});

btnCienciaF.addEventListener("click", ()=> filtrarPorGenero("Ciencia Ficción") );
btnAccion.addEventListener("click", ()=> filtrarPorGenero("Acción") );
btnAventura.addEventListener("click", ()=> filtrarPorGenero("Aventura") );


// 2.Funciones 
function listarPeliculas(lista){
    //Mostrar las peliculas con templateString
    divPelisContainer.innerHTML="";
    lista.forEach(peli =>{

    divPelisContainer.innerHTML+=`  <div class="Pelicula">  
                                        <img src="${peli.imagen}" alt="${peli.titulo}">
                                        <div>
                                            <h2>${peli.titulo}</h2>
                                            <p><strong>Genero: </strong>${peli.genero}</p>
                                            <p><strong>Puntaje: </strong>${peli.puntaje}</p>
                                            <p>${peli.descripcion}</p>
                                        </div>
                                    </div>
    `
    })
};

function filtrarPorGenero(){
    const pelisFiltradas = listPeliculas.filter( peli => peli.genero === genero);
    listarPeliculas(pelisFiltradas);
};



// 3. Ejecutar codigo
listarPeliculas(listPeliculas);