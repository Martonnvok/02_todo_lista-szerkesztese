import Model from "../model/Model.js";
import Megjelenit from "../View/Megjelenit.js";
import UrlapView from "../View/UrlapView.js";
class Controller {
    constructor() {
        const URLAP = new UrlapView();
        const szuloELEM = $(".tarolo");
        const MODEL = new Model();
        new Megjelenit(MODEL.getList(), szuloELEM);

        $(window).on("torles", (event) => {
            console.log(event.detail);
            MODEL.torol(event.detail);
            szuloELEM.empty();
            new Megjelenit(MODEL.getList(), szuloELEM);
        });

        $(window).on("kesz", (event) => {
            console.log(event.detail);
            MODEL.allapot(event.detail);
            szuloELEM.empty();
            new Megjelenit(MODEL.getList(), szuloELEM);
        });

        $(window).on("submit", (event) => {
            console.log(event.detail);
            MODEL.allapot(event.detail);
            szuloELEM.empty();
            new UrlapView({tevekenyseg: "" , hatarido: ""}, szuloELEM);  
        });

       
             
    }

}
export default Controller;