//Como mover el script de la parte baja del html
// SI EN HTML ESTA LA PALABRA "DEFER" ESTA EN EL SCRIPT SE PUEDE QUITAR EL DOMCONTENTLOADED
document.addEventListener("DOMContentLoaded", function (){
    //const bodyID = document.querySelector("body"); --- este funciona igual abajo
    const bodyID = document.body.id;


    switch (bodyID){
    case "home":
        iniHome();
        break;
    
    case "galeria":
        iniGaleria();
        break;
    
    case "contacto":
        iniContacto();
        break;
    }

});

function iniHome(){
    console.log("ESTOY EN EL HOME");
    //ejecuto lo que quiero solo en el Home
}
async function iniGaleria(){
    //ejecuto lo que quiero solo en el Galeria
    console.log("ESTOY EN EL GALERIA");
    //PARTE 1: Generar variables
    const divGaleria = document.querySelector(".Galeria-container");
    let listaGaleria

    //PARTE 2: Funciones
        async function traerDatos(){
            try{
                const jsonUser = await fetch("https://jsonplaceholder.typicode.com/users");
                const jslistUser = await jsonUser.json();
                console.log(jslistUser);
   
                imprimirdatos(jslistUser);


            } catch(error){
                console.error("Tuve un error ", error);
                return[];
            }
        }
        function imprimirdatos(jslistUser){
            // jslistUser.forEach(usuario => {
            //     const li = document.createElement("div");
            //     li.textContent= usuario.name;
            //     li.classList= "listaEstilos";
            //     divGaleria.appendChild(li);                
            // });

            const miGaleriaHTML = jslistUser.map( usuario =>{
                return  `<div class="user-card">
                            <h3>${usuario.name}</h3>
                            <a href="${usuario.email}" targuet="_blank">${usuario.email}</a>
                        </div>`
            }).join(" ");
            
            divGaleria.innerHTML = miGaleriaHTML;
        };
        
        
    //PARTE 3: Ejecutar codigo
        listaGaleria = await traerDatos();
        imprimirdatos();
        







}
function iniContacto(){
    console.log("ESTOY EN EL CONTACTO");
    //ejecuto lo que quiero solo en el Contacto
}





