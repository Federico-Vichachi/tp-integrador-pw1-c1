// Selecciona todos los íconos de favoritos dentro de .nombre-favorito
const iconosFavoritos = document.querySelectorAll('.bxs-heart-circle');

// Función para obtener el array de favoritos desde localStorage
function getFavoritos() {
    // JSON.parse(): Convierte una cadena de texto JSON en un objeto/array JavaScript
    // localStorage.getItem() devuelve una cadena JSON o null
    // Si devuelve null (no hay favoritos guardados), el operador || devuelve un array vacío []
    return JSON.parse(localStorage.getItem('favoritos')) || [];
}

// Función para guardar el array de favoritos en localStorage
function setFavoritos(favoritos) {
    // JSON.stringify(): Convierte un objeto/array JavaScript en una cadena de texto JSON
    // localStorage solo puede almacenar strings, por eso necesitamos convertir el array
    // Ejemplo: [1,2,3] se convierte en "[1,2,3]"
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

// forEach(): Método de arrays que ejecuta una función para cada elemento del array
// En este caso, iconosFavoritos es una NodeList (similar a un array) de elementos DOM
// La función se ejecuta una vez por cada ícono de favorito encontrado en la página
iconosFavoritos.forEach(icono => {
    // Para cada ícono individual, se ejecuta el código dentro de esta función
    // 'icono' representa el elemento DOM actual en cada iteración
    // Agrega un event listener a cada ícono para el evento click
    icono.addEventListener('click', () => {
        // Alterna las clases visuales para mostrar si está activo o inactivo
        icono.classList.toggle('favorito-activo');
        icono.classList.toggle('favorito-inactivo');
        
        // closest(): Método DOM que busca hacia arriba en el árbol de elementos
        // Busca el primer elemento ancestro (padre, abuelo, etc.) que coincida con el selector
        // En este caso busca el elemento <article> más cercano que contiene al ícono
        // Es útil para encontrar el contenedor del producto desde cualquier elemento interno
        const article = icono.closest('article');
        if (!article) return; // Si no encuentra el article, sale
        
        // Obtiene el id del producto (el id del article)
        const id = article.id;
        // Obtiene el array actual de favoritos
        let favoritos = getFavoritos();
        
        // Si el ícono está activo (marcado como favorito)
        if (icono.classList.contains('favorito-activo')) {
            // Agrega el id al array de favoritos si no está ya
            if (!favoritos.includes(id)) {
                favoritos.push(id);
            }
        } else {
            // Si se desactiva, elimina el id del array de favoritos
            // filter(): Método de arrays que crea un nuevo array con elementos que pasan una condición
            // La función de callback se ejecuta para cada elemento del array
            // Solo mantiene los elementos donde la función devuelve true
            // favId !== id: devuelve true para todos los IDs que NO coinciden con el actual
            // Resultado: un nuevo array sin el ID del producto que se quitó de favoritos
            favoritos = favoritos.filter(favId => favId !== id);
        }
        // Guarda el array actualizado en localStorage
        setFavoritos(favoritos);
    });
});