const ListaBotones = document.querySelectorAll(".btn-tab");
const ListaContenidos = document.querySelectorAll(".tabs-Contenido");

ListaBotones.forEach(boton =>{
    boton.addEventListener('click', ()=>{
        //Asi leo el atributo data-tab del html
        //OPCION1: const id = boton.getAttribute("data-tab");
        //OPCION2:
        const id = boton.dataset.tab;
        //alert(id);
        const target = document.getElementById(id);

        //Quito el u-visible de todos
        ListaContenidos.forEach(pagina => {
            pagina.classList.remove("u-visible");
        });
        //Le quito el button-active de todos lo botones
        ListaBotones.forEach(boton => {
            boton.classList.remove("btn-active");
        });

        //Agrego el visible de la seleccionada
        target.classList.add("u-visible");
        //Agrega la clase btn-active al boton
        boton.classList.add("btn-active");

        // OPCIONES QUE SE PUEDEN CAMBAIR - boton.setAttribute("caja","importante");
    });
    
});