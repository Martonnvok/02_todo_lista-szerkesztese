class UrlapView {
    #adat = []
    formElem;
    tevekenysegElem;
    hataridoElem;
    submitElem;
    constructor(adat, szuloElem) {
        const UJADAT = $(".ujadat");
        this.#adat = adat;
        this.szuloElem = szuloElem
        this.szuloElem.html("<form>");
        this.formElem = this.szuloElem.children("form");
        this.submitElem.children("#submit");
        this.#urlapLetrehoz();
        this.submitGomb = this.formElem.children("div").children("#submit");
        console.log(this.submitGomb);
        this.submitGomb.on("click", (event)=>{
            event.preventDefault();
            this.#adatGyujt();
            this.#kattintasTrigger("ujAdatHozzaAdas");
        });
    }

    #adatGyujt() {
        const IDO = $(".ido");
        const TEV = $(".tev");
        this.#adat = IDO.val();


    }

    #urlapLetrehoz() {
        let txt =`<input text ="text" class="valami" >`;
        txt += `<input text ="text" class="valami" >`;
        txt += `<input text ="text" class="valami" >`;
        txt += `<input text ="date" class="ido" >`;
        txt += `<button type = "button" class="submit">Kész<button>`;
        this.formElem.append(txt);
    }

    #kattintasTrigger(esemenyNev) {
        const ESEMENYEM = new CustomEvent(esemenyNev, { detail: this.#adat });
        window.dispatchEvent(ESEMENYEM);
    }

}

export default UrlapView;