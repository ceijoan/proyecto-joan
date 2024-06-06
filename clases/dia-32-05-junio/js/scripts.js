let numero1="";
let numero2="";
let resultado=null;

const btnSuma = document.getElementById("suma");
// const btnResta = document.getElementById("resta");
// const btnMultipli = document.getElementById("multiplicacion");
// const btnDivision = document.getElementById("division");
const capturaInput1 = document.getElementById("valores");
//const capturaInput2 = document.getElementById("valores2");
const respuesta = document.querySelector("#respuesta");

// function obtenerValor1(){
//   numero1 = parseFloat(capturaInput1.value);
//   capturaInput1.value="";
// }
// function obtenerValor2(){
//   numero2 = parseFloat(capturaInput1.value);
//   capturaInput1.value="";
// }



function obtenerValor(){
    const num = parseFloat(capturaInput1.value);
    capturaInput1.value="";

    return num;
  }



btnSuma.addEventListener("click", ()=>{
  //alert("me hicieron clic");  
  numero1 = obtenerValor();
  
  // resultado=numero1+numero2;
  //valor = parseFloat(inpput.value); 
  //ParseFloat convierte mis numeros en numeros decimales
});

respuesta.addEventListener("click", ()=>{
  alert("me hicieron clic");
  numero2 = obtenerValor();
  resultado = numero1+numero2;
  imprimirResultado();
});


function imprimirResultado(){
    capturaInput1.value=resultado;
}

