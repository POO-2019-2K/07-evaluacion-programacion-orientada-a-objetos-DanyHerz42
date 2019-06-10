import Nota from './nota.js';
import Formulario from './formularios.js';
class Main{
    constructor(){
        document.querySelector('#btnAdd').addEventListener('click', () => {
            let entorno = document.querySelector("#entorno");
            this.crearNota(entorno);
            let f = new Formulario("registro");
            f.crearFormulario();
        })
    }

    crearNota(entorno){
        let nota = new Nota(entorno);
        nota.crearNota();
    }
}

new Main();