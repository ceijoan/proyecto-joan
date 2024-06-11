const dataMenu= `{
    "menu": [
        {
            "nombre": "Bebidas",
            "items": [
                {
                    "nombre": "Coca-Cola",
                    "precio": 2.5
                },
                {
                    "nombre": "Jugo de Naranja",
                    "precio": 3
                },
                {
                    "nombre": "Agua Mineral",
                    "precio": 1.5
                }
            ]
        },
        {
            "nombre": "Platos Principales",
            "items": [
                {
                    "nombre": "Hamburguesa",
                    "precio": 8
                },
                {
                    "nombre": "Pizza",
                    "precio": 10
                },
                {
                    "nombre": "Ensalada César",
                    "precio": 6.5
                }
            ]
        },
        {
            "nombre": "Postres",
            "items": [
                {
                    "nombre": "Tiramisú",
                    "precio": 4.5
                },
                {
                    "nombre": "Cheesecake",
                    "precio": 5
                },
                {
                    "nombre": "Helado",
                    "precio": 3
                }
            ]
        }
    ]
}`

const listmenu = JSON.parse(dataMenu);
const divMenu = document.querySelector(".Menu-rest");

listmenu.menu.forEach(listObjetos => {
    //Se crea las variables internas donde traen los datos y se agregan a ususarios
    const {nombre} = listObjetos;
    let ProductosHTML ="";
    
    listObjetos.items.forEach(datosPorTitutlo =>{
        const {nombre, precio} = datosPorTitutlo;
        ProductosHTML += `<p>Producto:${nombre}.................(${precio}€) </p>`
        });
    divMenu.innerHTML+=`<div class="caja">
                            <h2>${nombre}</h2>
                            ${ProductosHTML}
                        </div>`
});