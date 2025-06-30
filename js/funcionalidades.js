const cambiarModo = document.getElementById("toggleModoOscuro");
const cuerpo = document.getElementById("cuerpo");
const encabezadoPrincipal = document.getElementById("encabezado-principal");
const navegacionCategoria = document.getElementById("navegacion-categoria");
const seccionCategoria = document.getElementById("seccion-categoria");
const footerPrincipal = document.getElementById("footer-principal");
const logo = document.getElementById("logo");
const iconoLunaSol = document.getElementById("luna-sol")
const textoModo = document.getElementById("texto-modo")

cambiarModo.addEventListener("click", () => {
    encabezadoPrincipal.classList.toggle("dark-theme");
    cuerpo.classList.toggle("dark-theme");
    navegacionCategoria.classList.toggle("dark-theme");
    seccionCategoria.classList.toggle("dark-theme");
    footerPrincipal.classList.toggle("dark-theme");

    if (cuerpo.classList.contains("dark-theme")) {
    logo.src = "assets/img/logo-dark.png";
    iconoLunaSol.className = "bx bxs-sun"
    textoModo.textContent = "Modo Claro";
  } else {
    logo.src = "assets/img/logo-light.png"; 
    iconoLunaSol.className = "bx bxs-moon"
    textoModo.textContent = "Modo Oscuro";
  }
});