//Introduccion del evento onload para que cuando haya cargado la pagina llame a la funcion comienzo;
window.onload = comienzo;
function comienzo() {
  var buttonCalcular = document.getElementById("buttonCalcular");
  buttonCalcular.addEventListener("click", clickCalcular); //El metodo addEventListener lo que hace es "escuchar" por asi decir, el click y llama a la funcion clickCalcular;
}
//Esta funcion es utilizada para hacer el calculo de la calculadora 
function clickCalcular() {
    var txtAltura = document.getElementById("txtAltura"); //El metodo getElementById lo que permite es llamar a un elemento del codigo html y asignarlo como una variable;
    var altura = txtAltura.value;

    var txtPeso = document.getElementById("txtPeso");
    var peso = txtPeso.value;
  
    var imc = peso / (altura * altura);
    alert("Su Indice de Masa Corporal es " + Math.round(imc)); // Aqui el metodo math.roud sirve para redondear un numero flotante;
}