// Selecciona todos los íconos de favoritos dentro de .nombre-favorito
const iconosFavoritos = document.querySelectorAll('.bxs-heart-circle');

// Función para obtener el array de favoritos desde localStorage
function getFavoritos() {
    return JSON.parse(localStorage.getItem('favoritos')) || [];
}

// Función para guardar el array de favoritos en localStorage
function setFavoritos(favoritos) {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

// Recorre todos los íconos de favoritos encontrados
iconosFavoritos.forEach(icono => {
    // Agrega un event listener a cada ícono para el evento click
    icono.addEventListener('click', () => {
        // Alterna las clases visuales para mostrar si está activo o inactivo
        icono.classList.toggle('favorito-activo');
        icono.classList.toggle('favorito-inactivo');
        
        // Busca el elemento <article> más cercano al ícono (el producto)
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
            // Mantiene solo los favoritos que no coinciden con el id
            favoritos = favoritos.filter(favId => favId !== id);
        }
        // Guarda el array actualizado en localStorage
        setFavoritos(favoritos);
    });
});