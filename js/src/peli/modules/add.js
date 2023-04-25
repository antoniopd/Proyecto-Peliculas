import Storage from "./storage.js";
import List from "./list.js";

export default class Add {

    constructor(){
        // Crear Objeto Storage
        this.storage = new Storage();
        this.list = new List();

        // Conseguir elementos del DOM a utilizar
        this.title_field = document.querySelector("#title");
        this.description_field = document.querySelector("#description");
        this.save_btn = document.querySelector("#save");
    }

    peliSave(){
        // Añadir peliculas
        this.save_btn.onclick = (e) => {
            e.preventDefault();

            // Conseguir datos Actualizados 
            let pelis = this.storage.getData();
            let lastId = this.storage.getLastId();
            console.log(pelis, lastId);
            
            // Datos a guardar
            let title = this.title_field.value;
            let description = this.description_field.value;

            // Validar datos
            if(title.length < 1 || description.length < 1){ 
                alert("Debes rellenar todos los campos");

            }else{
                // Crear objeto a guardar
                let peli = {
                    id: lastId++,
                    title: title,
                    description: description
                };

                // Añadir objeto a la lista de peliculas
                pelis.push(peli);

                // Guardar en el localStorage
                this.storage.save(pelis);

                // Actualizar la lista de peliculas
                this.list.addToList(peli, pelis);
            }

            return false;
        };
    }
}