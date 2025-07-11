let formMiUsuario = document.getElementById("formMiUsuario");
let formDatos = document.getElementById("formDatos");
let mensajeValidacionUsuario = document.getElementById("mensajeValidacionUsuario");
let mensajeValidacionDatos = document.getElementById("mensajeValidacionDatos");
formMiUsuario.addEventListener("submit" , function(e) {
e.preventDefault();
validarFormUsuario();
})
formDatos.addEventListener("submit" , function(e) {
e.preventDefault();
validarFormDatos();
})
function validarFormUsuario(){


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
        mensajeValidacionUsuario.innerHTML = mensajeError;
    } else{
        mensajeValidacionUsuario.innerHTML = "<p>Cambios Guardados</p>";
    }
}
function validarFormDatos() {
  let error =false;
  let mensajeError ="";

  const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const soloLetras= /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

  let nombre = document.querySelector("input[name='nombre']").value;
  let apellido = document.querySelector("input[name='apellido']").value;
  
    if (nombre == "") {
      error = true;
      mensajeError += "<p>Debe ingresar un nombre</p>";
    }else if (!soloLetras.test(nombre)){
        error=true;
        mensajeError += "<p>Solo se admiten letras</p>"
    }
  
    if (apellido == "" || !soloLetras.test(apellido)) {
      error = true;
      mensajeError += "<p>Debe ingresar un apellido</p>";
    }else if (!soloLetras.test(nombre)){
        error=true;
        mensajeError += "<p>Solo se admiten letras</p>"
    }

  let nroDoc = document.querySelector("input[name='nro-de-documento']").value;
  
    if (nroDoc == "") {
      error = true;
      mensajeError += "<p>Debe ingresar un número de documento</p>";
    }else if(isNaN(nroDoc)){
      error = true;
      mensajeError += "<p>Solo se admiten numeros</p>";
    }
  let celular = document.querySelector("input[name='nro-de-celular']").value.trim();
  
    if (celular =="") {
        error = true;
        mensajeError += "<p>Debe ingresar un numero de celular</p>";
    }else if(isNaN(celular)){
        error = true;
        mensajeError += "<p>Solo se admiten numeros</p>";
    }else if(celular.length < 10){
        error = true;
        mensajeError += "<p>Debe ingresar un celular válido (mínimo 10 dígitos).</p>";
    }
  
  let fechaNacimiento = document.querySelector("input[name='fecha']").value;
  
    if (fechaNacimiento == "") {
        error = true;
        mensajeError += "<p>Debe ingresar una fecha de nacimiento.</p>";
    }
  
  let emailSecundario = document.querySelector("input[name='email-secundario']").value.trim();

  
    if (emailSecundario == "") {
            error = true;
            mensajeError += "<p>Debe ingresar un E-mail.</p>";
    } else if (!emailRegex.test(emailSecundario)) {
            error = true;
            mensajeError += "<p>El E-mail ingresado no es válido.</p>";
    }
  

  if (error) {
    mensajeValidacionDatos.innerHTML = mensajeError;
  } else {
    mensajeValidacionDatos.innerHTML = "<p>Cambios Guardados</p>";
   
  }
}