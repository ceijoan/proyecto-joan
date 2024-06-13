// 1. Declarar variables
const acordeon = document.querySelector(".Acordeon");
const headers = document.querySelectorAll(".Acordeon--header");
const acordeonItems = document.querySelectorAll(".Acordeon--item");

// 2. Crear las funcionesç

headers.forEach(header =>{
    header.addEventListener("click", ()=>{
        const acordeonClic = header.closest(".Acordeon--item");
        //cerrar los contents
        acordeonItems.forEach(elementoNoClic => {
            elementoNoClic.classList.remove("active");
        });
        //Abrir solo el content que dio clic
        acordeonClic.classList.toggle("active");
    });
});






// 3. Ejecutar el código

// acordeonItems[0].classList.add('active'); funcion inicial para revisar
headers[0].clic();
