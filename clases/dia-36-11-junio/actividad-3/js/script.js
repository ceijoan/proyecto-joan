const dataPeliculas = `[
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
const listPelicula = JSON.parse(dataPeliculas);
const divCardPeliculas = document.querySelector(".cardsPeliculas");
const divPopupInfo = document.querySelector(".popup");


listPelicula.forEach((datosPeliculas,index) => {
    const {imagen,titulo} = datosPeliculas;
    divCardPeliculas.innerHTML +=  `<div class="Pelicula" id="${index}">
                                        <img src="${imagen}" alt="${titulo}">
                                        <p>${titulo}</p>
                                    </div>`
});
const ClicPopup = document.querySelectorAll(".Pelicula");

ClicPopup.forEach( peliculaEspecifica =>{
    peliculaEspecifica.addEventListener("click", (event)=>{
        const divPelicula = event.target;
        console.log(divPelicula);
       // alert("me hicieron clic", event);
        
      });
});
