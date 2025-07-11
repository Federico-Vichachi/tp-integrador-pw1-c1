let categorias = document.querySelectorAll("a.tab-categoria");
let articulos;

document.addEventListener ("DOMContentLoaded", function () {
    cargarEstrellas()
    categorias.forEach(function(categoria) {
	    categoria.addEventListener("click", function () {
		    cargarEstrellas()
        })
    })
});

function cargarEstrellas(){
    articulos = document.querySelectorAll("article")
        articulos.forEach(articulo =>{
        
        if(articulo.classList.contains("popup-article"))
            return;

        let ranking = articulo.querySelector(":scope > header > div.rating > p").textContent
        let cantidadEstrellas = parseInt(ranking);

        if (!isNaN(cantidadEstrellas)) {
            let ratingContainer = articulo.querySelector(":scope > header > div.rating");
            ratingContainer.querySelectorAll("i").forEach(el => el.remove());

            for (let i = 0; i < 5; i++) {                    
                let estrella = document.createElement("i");
                if(i>cantidadEstrellas-1)
                    estrella.className = "bx bxs-star off";
                else
                    estrella.className = "bx bxs-star on";
                ratingContainer.appendChild(estrella);
            }
        }
    });
}

function mostrarDetalle(indice){
    var articulo = indice.parentElement.parentElement.parentElement.parentElement;
    var todosLosDivs = articulo.querySelectorAll(":scope > div");
    todosLosDivs.forEach(div => {
        if(div.classList.contains("ocultar"))
            div.classList.remove("ocultar")
        else
            div.classList.add("ocultar")

    });
}