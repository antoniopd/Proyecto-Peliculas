import Storage from "./storage.js";
import List from "./list.js";


export default function(){


    // Crear Objeto Storage
    const storage = new Storage();
    const list = new List();

    // Datos de las peliculas disponibles
    let pelis_stored = storage.getData();
    let pelis_viewed = document.querySelectorAll("#content .peli-item");

    // Recorrer las peliculas mostradas en el DOM
    pelis_viewed.forEach(peli => {

        let delete_btn = peli.querySelector('.delete');

        // Añadir evento click a los botones de borrado
        delete_btn.onclick = function(){

            // Conseguir id de la pelicula a borrar
            const peli_id = this.getAttribute("data-id");
            
            // Filtrar el array para que elimine la que no quiero
            const new_pelis_stored = pelis_stored.filter((peli) => peli.id !== parseInt(peli_id));

            // Actualizar datos en el localStorage
            storage.save(new_pelis_stored);
        
            // Volver a mostrar el listado actualizado
            list.show(new_pelis_stored);

        }
    });
}