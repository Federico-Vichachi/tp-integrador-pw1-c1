const cuerpo = document.getElementById("cuerpo");


function alternarModo() {
  cuerpo.classList.toggle("dark-theme");
}

document.addEventListener('DOMContentLoaded', () => {
  const modoGuardado = localStorage.getItem("modo");

  if (modoGuardado === "claro" && !cuerpo.classList.contains("light-theme")) {
    alternarModo();
  } else if (modoGuardado === "oscuro" && cuerpo.classList.contains("light-theme")) {
    alternarModo();
  }
})

