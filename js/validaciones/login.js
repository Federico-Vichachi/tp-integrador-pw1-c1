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

let inputContrasenia = document.querySelector("input[name=password]").value;

// que la contraseña tenga al menos 4 caracteres
let contraseniaRegex = /^.{4,}$/; 

    if (inputEmail == "") {
        error = true;
        mensajeError += "<p>Debe ingresar un E-mail.</p>";
    } else if (!emailRegex.test(inputEmail)) {
        error = true;
        mensajeError += "<p>El E-mail ingresado no es válido.</p>";
    }

    if(inputContrasenia == ""){
        error = true;
        mensajeError += "<p>Debe ingresar una contraseña</p>"; 
    } else if (!contraseniaRegex.test(inputContrasenia)){
        error=true;
        mensajeError += "<p>La contraseña debe tener al menos 4 digitos </p>"
    }

    if(error){
        mensajeValidacion.innerHTML= mensajeError;
    } else{
         window.location.href = ".././html/datos-personales.html"
    }
}
