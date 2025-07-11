// import items from "../../data/items.json" with { type: 'json' };
import items from "../data/items.json" with { type: 'json' };
// import configuracion from "../../config/configuracion.json" with { type: 'json' };
import configuracion from "../config/configuracion.json" with { type: 'json' };

const tabCategoria1 = document.getElementById("tab-categoria-1");
let buscador = document.querySelector(".buscador");

let linksCategorias = document.querySelectorAll("a.tab-categoria");

linksCategorias.forEach((linkCategoria) => {
   linkCategoria.addEventListener("click", () => {
      buscador.value = "";

      document.querySelectorAll(".articulo-categoria").forEach(articulo => {
         articulo.style.display = "block";
      });

      items.forEach((item) => {
         const { Categoria, Id, Nombre, Autor, Portada, Descripcion, Rating } = item;

         if (linkCategoria.innerText != Categoria) return;
         const articuloContenedor = document.querySelector("article." + Id.split("-")[1])

         articuloContenedor.getElementsByClassName("item-valor-nombre")[0].innerText = Nombre;
         articuloContenedor.getElementsByClassName("item-valor-autor")[0].innerText = Autor;
         articuloContenedor.getElementsByClassName("item-valor-portada")[0].src = Portada;
         articuloContenedor.getElementsByClassName("item-valor-portada")[0].alt = Nombre;
         articuloContenedor.getElementsByClassName("item-valor-descripcion")[0].innerText = Descripcion;
         articuloContenedor.getElementsByClassName("item-valor-rating")[0].innerText = Rating;

         const personalizados = Object.keys(item).filter(key => key.startsWith("personalizado_"));
         
         personalizados.forEach((personalizado, index) => {
            articuloContenedor.getElementsByClassName(`item-campo-personalizado_${index + 1}`)[0].innerText = personalizado.split(".")[1];
            articuloContenedor.getElementsByClassName(`item-valor-personalizado_${index + 1}`)[0].innerText = item[personalizado];
         });

         articuloContenedor.id = Id;
      });
   });
});

if (configuracion["modo-test-prod"] === "prod") {
   tabCategoria1.click();
};

//Script funcionalidad del buscador

buscador.addEventListener("keyup", () => {
   const valor = buscador.value.trim().toLowerCase();
   let resultadoNulo = document.querySelector("#seccion-categoria");

   if (valor.length < 3) {
      document.getElementById("mensaje-sin-resultados").style.display = "none";

      // Si se escribe menos de 3 letras, mostrar todos los artículos visibles según categoría
      document.querySelectorAll(".articulo-categoria").forEach(articulo => {
         articulo.style.display = "block";
      });
      return;
   }

   // Buscar categoría activa
   const tabActivo = document.querySelector(".tab-categoria-activa");
   const categoriaActiva = tabActivo ? tabActivo.innerText : null;

   document.querySelectorAll(".articulo-categoria").forEach(articulo => {
      const idArticulo = articulo.id;
      const itemData = items.find(item => item.Id === idArticulo);

      if (!itemData) {
         articulo.style.display = "none";
         resultadoNulo.innerHTML = `
         <p>No hay resultados en su busqueda.</p>
         `;
         return;
      }

      // Si hay categoría activa, filtramos por esa
      if (categoriaActiva && itemData.Categoria !== categoriaActiva) {
         articulo.style.display = "none";
         return;
      }

      const nombre = itemData.Nombre.toLowerCase();
      const autor = itemData.Autor.toLowerCase();
      const coincide = nombre.includes(valor) || autor.includes(valor);

      if (coincide) {
         // Mostrar y actualizar
         articulo.style.display = "block";
         articulo.getElementsByClassName("item-valor-nombre")[0].innerText = itemData.Nombre;
         articulo.getElementsByClassName("item-valor-autor")[0].innerText = itemData.Autor;
         articulo.getElementsByClassName("item-valor-portada")[0].src = itemData.Portada;
         articulo.getElementsByClassName("item-valor-portada")[0].alt = itemData.Nombre;
         articulo.getElementsByClassName("item-valor-descripcion")[0].innerText = itemData.Descripcion;
         articulo.getElementsByClassName("item-valor-rating")[0].innerText = itemData.Rating;

         const personalizados = Object.keys(itemData).filter(key => key.startsWith("personalizado_"));
         personalizados.forEach((personalizado, index) => {
            const campo = articulo.getElementsByClassName(`item-campo-personalizado_${index + 1}`)[0];
            const valorCampo = articulo.getElementsByClassName(`item-valor-personalizado_${index + 1}`)[0];
            if (campo && valorCampo) {
               campo.innerText = personalizado.split(".")[1] || `Personalizado ${index + 1}`;
               valorCampo.innerText = itemData[personalizado];
            }
         });

      } else {
         articulo.style.display = "none";
      }
   });

   const articulosVisibles = [...document.querySelectorAll(".articulo-categoria")]
      .filter(art => art.style.display !== "none");

   const mensaje = document.getElementById("mensaje-sin-resultados");

   if (articulosVisibles.length === 0 && valor.length >= 3) {
      mensaje.style.display = "block";
   } else {
      mensaje.style.display = "none";
   }
});