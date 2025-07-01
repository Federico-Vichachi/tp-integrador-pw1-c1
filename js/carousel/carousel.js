import items from "../../data/items.json" with { type: 'json' };

// Obtener número aleatorio entre 1 y 60
function numeroAleatorio() {
    return Math.floor(Math.random() * 60) + 1;
}

// Función para obtener 5 portadas aleatorias sin repetir
function obtenerPortadasAleatorias(cantidad = 5) {
    const portadaAleatoria = [];
    const usados = new Set();

    while (portadaAleatoria.length < cantidad) {
        const indice = numeroAleatorio();
        if (!usados.has(indice)) {
            usados.add(indice);
            portadaAleatoria.push(items[indice]);
        }
    }

    return portadaAleatoria;
}

// A continuación, deben agregar el código para "enlazar" 5 portadas aleatorias al carrusel
function cargarCarrusel() {
    const portadas = obtenerPortadasAleatorias();
    const carouselItems = document.querySelectorAll('.carousel-item');

    portadas.forEach((item, i) => {
        const slide = carouselItems[i];
        const img = slide.querySelector('img');
        const title = slide.querySelector('h5');

        img.src = item.Portada;
        img.alt = item.Nombre;
        title.textContent = item.Nombre;
    });
}

// Cargar portadas al iniciar
document.addEventListener("DOMContentLoaded", () => {
    cargarCarrusel();
});