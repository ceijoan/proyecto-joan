let numero1="";
let numero2="";
let resultado=null;

const btnSuma = document.getElementById("suma");
// const btnResta = document.getElementById("resta");
// const btnMultipli = document.getElementById("multiplicacion");
// const btnDivision = document.getElementById("division");
const capturaInput1 = document.getElementById("valores1");
const capturaInput2 = document.getElementById("valores2");
const respuesta = document.querySelector(".respuesta");

function obtenerValores(){
  numero1 = parseFloat(capturaInput1.value);
  numero2 = parseFloat(capturaInput2.value);
}


btnSuma.addEventListener("click", ()=>{
  //alert("me hicieron clic");  
  obtenerValores();
  resultado=numero1+numero2;
  imprimirResultado();
  //valor = parseFloat(inpput.value); 
  //ParseFloat convierte mis numeros en numeros decimales
});

function imprimirResultado(){
    respuesta.innerHTML=resultado;
}