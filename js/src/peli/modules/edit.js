import Storage from "./storage.js";
import List from "./list.js";

export default function () {
  // Crearlos objetos de las clases
  const storage = new Storage();
  const list = new List();

  // Conseguir los datos de peliculas del localStorage
  let pelis = storage.getData();
  let pelis_viewed = document.querySelectorAll(".peli-item");

  // Recorrer el listado de peliculas del localStorage
  pelis_viewed.forEach((peli) => {
    // Seleccionar el boton de edicion
    let edit_btn = peli.querySelector(".edit");

    // Añadir evento click al boton de edicion
    edit_btn.onclick = function () {
      // Conseguir el id de la pelicula a editar
      const peli_id = this.getAttribute("data-id");

      // Quitar los botones de edicion y borrado
      edit_btn.remove();
      peli.querySelector(".delete").remove();

      // Añadir el trozo de html debajo del boton de edicion
      let peli_edit_html = `
            <div class="edit_form">
                    <h3 className="title">Editar pelicula</h3>
                <form>
                    <input type="text" class="edited_title" value="${
                      peli.querySelector(".title").innerHTML
                    }" />
                    <textarea class="edited_description">${
                      peli.querySelector(".description").innerHTML
                    }</textarea>
                    <input type="submit" class="update" value="Actualizar" />
                </form>
            </div>
            `;

      peli.innerHTML += peli_edit_html;

        // Seleccionar el boton de actualizar
        let update_btn = peli.querySelector(".update");

        // Añadir evento click al boton de actualizar
        update_btn.onclick = function (e) {
            e.preventDefault();

              // Buscar el indice de la pelicula a editar
                let index = pelis.findIndex((peli) => peli.id == peli_id);
              
                // Guardar objeto dentro de ese indice
                pelis[index] = {
                    id: peli_id,
                    title: peli.querySelector(".edited_title").value,
                    description: peli.querySelector(".edited_description").value
                };

                console.log(pelis);
                // Actualizar el localStorage
                storage.save(pelis);

                // volver a mostrar el listado de peliculas
                list.show(pelis);

            return false;

        }
    };
  });
}
