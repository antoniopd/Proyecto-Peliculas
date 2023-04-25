import Storage from "./storage.js";
import List from "./list.js";

export default function () {

    // Crearlos objetos de las clases
    const storage = new Storage();
    const list = new List();

    // Conseguir elementos del DOM
    let content = document.querySelector("#content");
    let search_btn = document.querySelector("#search");

    // Aplicar evento al formulario de busqueda
    search_btn.onclick = (e) => {
        e.preventDefault();

        // Conseguir el texto intriducido en el input
        let wanted = document.querySelector("#search_field").value;

        // Conseguir los datos actualizados de localStorage
        let pelis_stored = storage.getData();

        // Aplicar finto para encontrar peliculas
        const new_pelis = pelis_stored.filter((peli) => {
            return peli.title.toLowerCase().includes(wanted.toLowerCase());
        });

        // Mostrar el listado de coincidencias
        if(new_pelis.length == 0) {
            content.innerHTML = `<div><h2>No se han encontrado resultados</h2></div>`;
       
        } else {
            list.show(new_pelis, content);
        }
        return false;
    }
}