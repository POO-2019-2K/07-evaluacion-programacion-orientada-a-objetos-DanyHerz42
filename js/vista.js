import Nota from "./nota.js";
export default class Vista{
    constructor(entorno){
        this._entorno = entorno;    
    }

    _generarVista(notas){
        this._entorno.innerHTML = "";
        notas.forEach((e,index) => {
            let n = new Nota(e);
            n.crearNota(e);
        });
    }
}