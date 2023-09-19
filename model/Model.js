import { TODOLIST2 } from "../model/adatok.js";
class Model {
    #list = []
    constructor() {
        this.#list = TODOLIST2;
    }

    getList() {
        return this.#list;
    }

    torol(index) {
        this.#list.splice(index, 1);
    }

    allapot(allapot) {
        if (this.#list[allapot].kesz == true) {
            this.#list[allapot].kesz = false;
        } else {
            this.#list[allapot].kesz = true;
        }
        console.log(this.#list[allapot].kesz);
    }

   
}
export default Model;