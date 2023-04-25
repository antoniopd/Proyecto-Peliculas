import Add from "./peli/modules/add.js";
import List from "./peli/modules/list.js";
import Storage from "./peli/modules/storage.js";
export default class App {


    constructor() {
       // Inicializar propiedades
         this.add = new Add();
         this.list = new List();
         this.storage = new Storage();

    }

    load() {
        // Añadir peliculas
        this.add.peliSave();

        // Conseguir array de objetos de localStorage
        const pelis = this.storage.getData();

        // Listar peliculas
        this.list.show(pelis);

        // Buscar peliculas

        console.log("La aplicación se ha cargado correctamente...")
    }
}