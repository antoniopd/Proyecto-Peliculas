export default class List {

    constructor() {
        // Seleccionar elementos del DOM
        this.content = document.querySelector("#content");
    }

    peliTemplate(peli){
        return  `<article class="peli-item id="peli-${peli.id}">
            <h3 class="title">${peli.title}</h3>
            <p class="description">${peli.description} pd</p>
    
            <button class="edit" data-id="${peli.id}">Editar</button>
            <button class="delete" data-id="${peli.id}">Borrar</button>
         </article>`;
    }

    addToList(peli, list_pelis) {

        // Plantilla de Pelicula a agregar
        let peli_html = this.peliTemplate(peli);

        // Agregar pelicula al DOM
        this.content.innerHTML += peli_html;

        // Mostrar el listado de peliculas
        this.show(list_pelis);
    }

    show(pelis){
        // Vaciar DOM del contenedor de peliculas
        this.content.innerHTML = "";

        // Recorrer el listado de peliculas del localStorage
        pelis.forEach(peli => {
            this.content.innerHTML += this.peliTemplate(peli);
        });
    }

};