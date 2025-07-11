// Importa los datos de productos desde el archivo JSON
import items from "../../data/items.json" with { type: 'json' };

// Variables para el cambio de tema - Selecciona elementos del DOM que cambiarán de apariencia
const cuerpo = document.getElementById("cuerpo"); // Elemento body principal
const encabezadoPrincipal = document.getElementById("encabezado-principal"); // Header de la página
const seccionFavoritos = document.getElementById("seccion-favoritos"); // Sección donde se muestran los favoritos
const footerPrincipal = document.getElementById("footer-principal"); // Footer de la página
const toggleModoOscuro = document.getElementById("toggleModoOscuro"); // Botón para cambiar tema
const lunaSol = document.getElementById("luna-sol"); // Icono de luna/sol del botón de tema
const textoModo = document.getElementById("texto-modo"); // Texto del botón de cambio de tema
const logo = document.getElementById("logo"); // Logo que cambia según el tema

// Función para alternar entre modo oscuro y claro
function alternarModo() {
    // Alterna la clase 'dark-theme' en el elemento body
    cuerpo.classList.toggle("dark-theme");
    // Alterna la clase 'dark-theme' en el header
    encabezadoPrincipal.classList.toggle("dark-theme");
    // Alterna la clase 'dark-theme' en la sección de favoritos
    seccionFavoritos.classList.toggle("dark-theme");
    // Alterna la clase 'dark-theme' en el footer
    footerPrincipal.classList.toggle("dark-theme");

    // Verifica si el body tiene la clase 'dark-theme' para determinar el modo actual
    if (cuerpo.classList.contains("dark-theme")) {
        // Si está en modo oscuro, cambia el icono de luna a sol
        lunaSol.classList.remove("bxs-moon");
        lunaSol.classList.add("bxs-sun");
        // Cambia el texto del botón a "Modo Claro"
        textoModo.innerText = "Modo Claro";
        // Cambia el logo a la versión oscura
        logo.src = "/assets/img/logo-dark.png";
        // Guarda la preferencia en localStorage
        localStorage.setItem("modo", "oscuro");
    } else {
        // Si está en modo claro, cambia el icono de sol a luna
        lunaSol.classList.remove("bxs-sun");
        lunaSol.classList.add("bxs-moon");
        // Cambia el texto del botón a "Modo Oscuro"
        textoModo.innerText = "Modo Oscuro";
        // Cambia el logo a la versión clara
        logo.src = "/assets/img/logo-light.png";
        // Guarda la preferencia en localStorage
        localStorage.setItem("modo", "claro");
    }
}

// Función para obtener el array de favoritos almacenado en localStorage
function getFavoritos() {
    // Intenta obtener el item 'favoritos' del localStorage y parsearlo como JSON
    // Si no existe o hay error, retorna un array vacío como valor por defecto
    return JSON.parse(localStorage.getItem('favoritos')) || [];
}

// Función para crear una card (tarjeta) de producto con todos sus elementos HTML
function crearCardProducto(item) {
    // Desestructura las propiedades principales del objeto item
    const { Id, Nombre, Autor, Portada, Descripcion, Rating } = item;
    
    // Crea un nuevo elemento HTML 'article' que contendrá la card
    const article = document.createElement('article');
    // Asigna el ID del producto al elemento article
    article.id = Id;
    // Asigna la clase CSS para el estilo de las cards
    article.className = 'articulo-categoria';
    
    // Filtra las propiedades del item para obtener solo los campos personalizados
    // Los campos personalizados tienen nombres que comienzan con "personalizado_"
    const personalizados = Object.keys(item).filter(key => key.startsWith("personalizado_"));
    
    // Crea el HTML interno de la card usando template literals
    // La estructura sigue el mismo patrón que las cards del index.html
    article.innerHTML = `
        <header class="header-articulo">
            <div class="encabezado-carta">
                <div class="nombre-favorito">
                    <!-- Muestra el nombre del producto con formato de texto en negrita -->
                    <p class="item-valor-nombre"> ${Nombre}</p>
                    <!-- Icono de corazón marcado como favorito activo (ya que está en favoritos) -->
                    <i class='bx bxs-heart-circle favorito-activo'></i> 
                </div>
                <!-- Muestra el autor/marca del producto -->
                <p class="item-valor-autor"> ${Autor}</p>
            </div>
            <!-- Imagen del producto con src dinámico y alt descriptivo -->
            <img class="item-valor-portada" src='${Portada}' alt='${Nombre}'>
            <!-- Descripción del producto -->
            <p class="item-valor-descripcion"> ${Descripcion}</p>
            <div class="rating">
                <!-- Rating numérico del producto -->
                <p class="item-valor-rating"> ${Rating}</p>
                <i class='bx bxs-star'></i>
            </div>
        </header>
        <div class="detalle-articulo">
            <div class="precio">
                <!-- Campo personalizado 1 (generalmente precio) -->
                <!-- Si existe el campo personalizado, usa su nombre (parte después del punto) -->
                <!-- Si no existe, usa un nombre por defecto -->
                <h4 class="item-campo-personalizado_1">${personalizados[0] ? personalizados[0].split('.')[1] : 'Campo 1'}</h4>
                <!-- Valor del campo personalizado 1 -->
                <p class="item-valor-personalizado_1">${personalizados[0] ? item[personalizados[0]] : 'Valor 1'}</p>
            </div>
            <div class="stock">
                <!-- Campo personalizado 2 (generalmente stock) -->
                <h4 class="item-campo-personalizado_2">${personalizados[1] ? personalizados[1].split('.')[1] : 'Campo 2'}</h4>
                <p class="item-valor-personalizado_2">${personalizados[1] ? item[personalizados[1]] : 'Valor 2'}</p>
            </div>
            <div class="color">
                <!-- Campo personalizado 3 (generalmente color) -->
                <h4 class="item-campo-personalizado_3">${personalizados[2] ? personalizados[2].split('.')[1] : 'Campo 3'}</h4>
                <p class="item-valor-personalizado_3">${personalizados[2] ? item[personalizados[2]] : 'Valor 3'}</p>
            </div>
        </div>
        <div class="footer-articulo" style="line-height: 1em;">
            <div class="datos">
                <!-- Campo personalizado 5 (generalmente datos adicionales) -->
                <h4 class="item-campo-personalizado_5">${personalizados[4] ? personalizados[4].split('.')[1] : 'Campo 5'}</h4>
                <p class="item-valor-personalizado_5">${personalizados[4] ? item[personalizados[4]] : 'Valor 5'}</p>
            </div>
            <div class="origen">
                <!-- Campo personalizado 4 (generalmente origen del producto) -->
                <h4 class="item-campo-personalizado_4">${personalizados[3] ? personalizados[3].split('.')[1] : 'Campo 4'}</h4>
                <p class="item-valor-personalizado_4">${personalizados[3] ? item[personalizados[3]] : 'Valor 4'}</p>
            </div>
        </div>
    `;
    
    // Retorna el elemento article completo con todo su contenido HTML
    return article;
}

// Función para mostrar un mensaje cuando el usuario no tiene productos favoritos
function mostrarSinFavoritos() {
    // Obtiene la referencia al elemento de la sección de favoritos
    const seccionFavoritos = document.getElementById('seccion-favoritos');
    // Cambia el display de grid a block para mostrar el mensaje centrado
    seccionFavoritos.style.display = 'block';
    // Inserta el HTML del mensaje informativo con un botón para volver al inicio
    seccionFavoritos.innerHTML = `
        <div class="sin-favoritos">
            <h2>No tienes productos favoritos</h2>
            <p>¡Explora nuestro catálogo y marca tus productos favoritos!</p>
            <a href="../index.html" class="boton-volver-home">Volver al inicio</a>
        </div>
    `;
}

// Función principal para mostrar todos los productos favoritos del usuario
function mostrarFavoritos() {
    // Obtiene el array de IDs de productos favoritos desde localStorage
    const favoritos = getFavoritos();
    // Obtiene la referencia al elemento donde se mostrarán las cards
    const seccionFavoritos = document.getElementById('seccion-favoritos');
    
    // Si no hay favoritos, muestra el mensaje informativo y termina la función
    if (favoritos.length === 0) {
        mostrarSinFavoritos();
        return;
    }
    
    // Si hay favoritos, restablece el display grid para mostrar las cards en cuadrícula
    seccionFavoritos.style.display = 'grid';
    
    // Limpia cualquier contenido previo de la sección de favoritos
    seccionFavoritos.innerHTML = '';
    
    // Filtra el array de items para obtener solo los productos que están en favoritos
    // Compara el ID de cada item con los IDs almacenados en favoritos
    const itemsFavoritos = items.filter(item => favoritos.includes(item.Id));
    
    // Itera sobre cada producto favorito y crea su card correspondiente
    itemsFavoritos.forEach(item => {
        // Crea la card del producto llamando a la función crearCardProducto
        const card = crearCardProducto(item);
        // Agrega la card al DOM dentro de la sección de favoritos
        seccionFavoritos.appendChild(card);
    });
    
    // Después de crear todas las cards, agrega los event listeners para los iconos de corazón
    agregarEventListenersFavoritos();
}

// Función para agregar event listeners (eventos de clic) a todos los iconos de favoritos
function agregarEventListenersFavoritos() {
    // Selecciona todos los elementos con clase 'bxs-heart-circle' (iconos de corazón)
    const iconosFavoritos = document.querySelectorAll('.bxs-heart-circle');
    
    // Itera sobre cada icono de favorito encontrado
    iconosFavoritos.forEach(icono => {
        // Agrega un event listener para el evento 'click' a cada icono
        icono.addEventListener('click', () => {
            // Alterna entre las clases 'favorito-activo' e 'favorito-inactivo'
            // para cambiar la apariencia visual del icono
            icono.classList.toggle('favorito-activo');
            icono.classList.toggle('favorito-inactivo');
            
            // Busca el elemento 'article' más cercano (el contenedor de la card)
            // utilizando el método closest() que navega hacia arriba en el DOM
            const article = icono.closest('article');
            // Si no encuentra el article, termina la función
            if (!article) return;
            
            // Obtiene el ID del producto desde el atributo id del article
            const id = article.id;
            // Obtiene el array actual de favoritos desde localStorage
            let favoritos = getFavoritos();
            
            // Verifica si el icono ahora tiene la clase 'favorito-inactivo'
            // (esto significa que se desmarcó como favorito)
            if (icono.classList.contains('favorito-inactivo')) {
                // Filtra el array de favoritos para remover el ID del producto actual
                // Mantiene solo los IDs que no coinciden con el producto desmarcado
                favoritos = favoritos.filter(favId => favId !== id);
                // Guarda el array actualizado en localStorage
                localStorage.setItem('favoritos', JSON.stringify(favoritos));
                
                // Remueve la card del DOM inmediatamente
                article.remove();
                // Verifica si quedan cards de favoritos en la página
                // Si no quedan, muestra el mensaje de "sin favoritos"
                if (document.querySelectorAll('#seccion-favoritos article').length === 0) {
                    mostrarSinFavoritos();
                }
            }
        });
    });
}

// Event listener que se ejecuta cuando todo el contenido del DOM ha sido cargado
document.addEventListener('DOMContentLoaded', () => {
    // Obtiene la preferencia de tema guardada en localStorage
    const modoGuardado = localStorage.getItem("modo");
    // Si el modo guardado es "oscuro" y el body no tiene la clase 'dark-theme'
    // entonces aplica el modo oscuro
    if (modoGuardado === "oscuro" && !cuerpo.classList.contains("dark-theme")) {
        alternarModo();
    }

    // Agrega un event listener al botón de cambio de modo
    // para que ejecute la función alternarModo cuando se haga clic
    toggleModoOscuro.addEventListener("click", alternarModo);

    // Llama a la función principal para cargar y mostrar los productos favoritos
    mostrarFavoritos();
});
