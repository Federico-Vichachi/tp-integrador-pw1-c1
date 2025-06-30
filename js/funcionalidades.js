const cambiarModo = document.getElementById("toggleModoOscuro");
const cuerpo = document.getElementById("cuerpo");
const encabezadoPrincipal = document.getElementById("encabezado-principal");
const navegacionCategoria = document.getElementById("navegacion-categoria");
const seccionCategoria = document.getElementById("seccion-categoria");
const footerPrincipal = document.getElementById("footer-principal")

cambiarModo.addEventListener("click", () => {
    encabezadoPrincipal.classList.toggle("dark-theme");
    cuerpo.classList.toggle("dark-theme");
    navegacionCategoria.classList.toggle("dark-theme");
    seccionCategoria.classList.toggle("dark-theme");
    footerPrincipal.classList.toggle("dark-theme");
});