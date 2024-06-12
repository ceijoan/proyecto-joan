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
// const divCardPeliculas = document.querySelector(".CardsPeliculas");
// const divPopupInfo = document.querySelector(".Popup");

listPelicula.forEach( (datosPeliculas, index) => {
    // const {imagen,titulo} = datosPeliculas;
    console.log(datosPeliculas.titulo);
    console.log(index);
//--------------------------- AQUI INICIA LA VERSION 1 de solucionar
    //    divCardPeliculas.innerHTML +=  `<div onclick="selectPelicula(${index})" class="Pelicula" id="${index}">
    //                                        <img src="${imagen}" alt="${titulo}">
    //                                        <p>${titulo}</p>
    //                                        </div>`;
//--------------------------- AQUI TERMINA LA VERSION 1 de solucionar - con el ONCLIC 
//--------------------------- AQUI INICIA LA VERSION 2 de solucionar
    const divPelicula = document.createElement("div");

    divPelicula.classList.add("Pelicula");
    divPelicula.innerHTML= `
                        <h2>${datosPeliculas.titulo}</h2>
                        <img src="${datosPeliculas.imagen}" alt="${datosPeliculas.titulo}" />
                        `;
    divPelicula.appendChild(divPelicula);
    // console.log(listPelicula.titulo);
    // divCardPeliculas.innerHTML + `<div onclick="selectPelicula(${index})" class="Pelicula" id="${index}">
    //                             <img src="${imagen}" alt="${titulo}">
    //                             <p>${titulo}</p>
    //                         </div>`;
    //divContenedor.appendChild(divCardPeliculas);


//--------------------------- AQUI TERMINA LA VERSION 2 de solucionar - con el ONCLIC 
    });


   function selectPelicula(varIndex){
       console.log("mostrar numero de pelicula", varIndex)
       const datosPeliculas = listPelicula[varIndex];
       divPopupInfo.classList.toggle(".u-Active");
       divPopupInfo.innerHTML =  ` <div class="">
                                       <img src="${datosPeliculas.imagen}" alt="">
                                       <H3>${datosPeliculas.titulo}</H3>
                                       <p>${datosPeliculas.genero}</p>
                                       <p>${datosPeliculas.puntaje}</p>
                                       <p>${datosPeliculas.descripcion}</p>
                                   </div>`;
       console.log(pelicula.imagen);

   }


//const ClicPopup = document.querySelectorAll(".Pelicula");
//ClicPopup.forEach( peliculaEspecifica =>{
//    peliculaEspecifica.addEventListener("click", (event)=>{
//        //const divPelicula = event.target; Con este obtengo el clic de todo lo que le doy clic.
//        //usar  metodo .closest() para encontrar el elemento mas cercano incluso cuando hago clic en un hijo elemento
//        const divPelicula = event.target.closest(".Pelicula");
//        
//       // alert("me hicieron clic", event);
//        divPopupInfo.classList.toggle("u-Active");
//      });
//});
