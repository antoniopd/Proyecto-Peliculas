import Add from "./peli/modules/add.js";
export default class App {


    constructor() {
       // Inicializar propiedades
         this.add = new Add();


    }

    load() {
        // Añadir peliculas
        this.add.peliSave();

        // Listar peliculas

        // Buscar peliculas

        console.log("La aplicación se ha cargado correctamente...")
    }
}