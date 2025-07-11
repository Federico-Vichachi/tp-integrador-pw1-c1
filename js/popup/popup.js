import items from "../../data/items.json" with { type: 'json' };

const popup = document.getElementById("popup");
const cerrar = document.getElementById("cerrar");

// Elementos del popup a llenar
const popupImagen = document.getElementById("popup-imagen");
const popupNombre = document.getElementById("popup-nombre");
const popupAutor = document.getElementById("popup-autor");
const popupDescripcion = document.getElementById("popup-descripcion");


// Seleccionar todas las imágenes
const imagenes = document.querySelectorAll(".item-valor-portada");

imagenes.forEach(imagen => {
    imagen.addEventListener("click", () => {
        const articulo = imagen.closest(".articulo-categoria");
        const id = articulo.id;

        // Buscar el item correspondiente
        const item = items.find(item => item.Id === id);

        if (!item) return;

        // Llenar los campos
        popupImagen.src = item.Portada;
        popupImagen.alt = item.Nombre;
        popupNombre.textContent = item.Nombre;
        popupAutor.innerHTML = `<strong>Autor:</strong> ${item.Autor}`;
        popupDescripcion.innerHTML =`<strong>Descripción:</strong> ${item.Descripcion}`;
        document.getElementById("popup-personalizado-1").innerHTML = `<strong>Precio:</strong> ${item["personalizado_1.Precio"]}`;
        document.getElementById("popup-personalizado-2").innerHTML = `<strong>Stock:</strong> ${item["personalizado_2.Stock"]}`;
        document.getElementById("popup-personalizado-3").innerHTML = `<strong>Color:</strong> ${item["personalizado_3.Color"]}`;
        document.getElementById("popup-personalizado-4").innerHTML = `<strong>Origen:</strong> ${item["personalizado_4.Origen"]}`;
        document.getElementById("popup-personalizado-5").innerHTML = `<strong>Datos:</strong> ${item["personalizado_5.Datos"]}`;

        // Mostrar el popup
        popup.classList.remove("d-none");
    });
});

// Botón para cerrar el popup
cerrar.addEventListener("click", () => {
    popup.classList.add("d-none");
});