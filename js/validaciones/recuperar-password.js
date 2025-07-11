let formulario = document.querySelector("form");

let mensajeValidacion = document.getElementById("mensajeValidacion");

formulario.addEventListener("submit" , function(e) {
e.preventDefault();
validarFormulario();
})
function validarFormulario(){

let error = false;
let mensajeError = "";
let inputEmail = document.querySelector("input[name=email]").value;

//que el texto tenga al menos un carácter antes del @, al menos uno después, un punto (.) y al menos un carácter más al final
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (inputEmail == "") {
        error = true;
        mensajeError += "<p>Debe ingresar un E-mail.</p>";
    } else if (!emailRegex.test(inputEmail)) {
        error = true;
        mensajeError += "<p>El E-mail ingresado no es válido.</p>";
    }


    if(error){
        mensajeValidacion.innerHTML= mensajeError;
    } else{
         mensajeValidacion.innerHTML = "<p>Email Enviado</p>"
    }
}