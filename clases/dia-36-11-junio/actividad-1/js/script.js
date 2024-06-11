//este objeto devuelve una Lista por que comienza y termina con [ ]
const dataUsuarios= `[{
    "nombre": "Juan Pérez",
    "edad": 28,
    "correo": "juan.perez@example.com"
  },
  {
    "nombre": "Ana Gómez",
    "edad": 34,
    "correo": "ana.gomez@example.com"
  },
  {
    "nombre": "Luis Torres",
    "edad": 23,
    "correo": "luis.torres@example.com"
  }]`;
//Convierto el Json a objeto JS.
listUsuarios = JSON.parse(dataUsuarios);
//console.log (listUsuarios);
//console.log (listUsuarios[1].nombre);

const divContenedor = document.querySelector(".contenedor");

  
listUsuarios.forEach(usuario => {
    //Se crea las variables internas donde traen los datos y se agregan a ususarios
    const {nombre, edad, correo} = usuario;

    divContenedor.innerHTML += `<div class="tarjeta">
                        <h3>${nombre}</h3>
                        <p>Edad: ${edad}</p>
                        <p>Correo: ${correo}</p>
                    </div>`;
});
//ESTO ANTERIOR HACE LO MISMO QUE LO SIGUIENTE


// divContenedor.innerHTML += `<div class="tarjeta">
//                         <h3>${usuario.nombre}</h3>
//                         <p>Edad: ${usuario.edad}</p>
//                         <p>Correo: ${usuario.correo}</p>
//                     </div>`;
// });