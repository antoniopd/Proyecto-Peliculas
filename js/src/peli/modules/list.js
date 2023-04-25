import deleteOfList from "./delete.js";
import edit from "./edit.js";
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

    

    show(pelis){
        // Vaciar DOM del contenedor de peliculas
        this.content.innerHTML = "";

        // Recorrer el listado de peliculas del localStorage
        pelis.forEach(peli => {
            this.content.innerHTML += this.peliTemplate(peli);
        });

        // Funcionalidad de los botones borrado
        deleteOfList();

        // Funcionalidad de los botones edicion
        edit();
    }

};