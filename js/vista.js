import Nota from "./nota.js";
export default class Vista{
    constructor(entorno){
        this._entorno = entorno;    
    }

    _generarVista(notas){
        this._entorno.innerHTML = "";
        notas.forEach((j,indice) => {
            notas.sort(function (o1, o2) {
                if (o1.name > o2.name) { //comparación lexicogŕafica
                    return 1;
                } else if (o1.name < o2.name) {
                    return -1;
                }
                return 0;
            });
        })
        notas.forEach((e,index) => {
            let n = new Nota(e);
            n.crearNota(e);
        });
    }

    _regenerarVista(notas){
        this._entorno.innerHTML = "";
        notas.forEach((e,index) => {
            let n = new Nota(e);
            n.crearNota(e);
        });
    }

    orderByAlphabet(){
        let comp =[];
        comp = JSON.parse(localStorage.getItem("notas"));
        comp.forEach((j,indice) => {
            comp.sort(function (o1, o2) {
                if (o1.name > o2.name) { //comparación lexicogŕafica
                    return 1;
                } else if (o1.name < o2.name) {
                    return -1;
                }
                return 0;
            });
        })
        
        this._regenerarVista(comp);
    }

    orderByNumber(){
        let comp =[];
        comp = JSON.parse(localStorage.getItem("notas"));
        comp.forEach((j,indice) => {
            comp.sort(function (o1, o2) {
                if (o1.days > o2.days) { //comparación lexicogŕafica
                    return 1;
                } else if (o1.days < o2.days) {
                    return -1;
                }
                return 0;
            });
        })
        
        this._regenerarVista(comp);
    }
}