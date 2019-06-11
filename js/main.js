import Nota from './nota.js';
import Formulario from './formularios.js';
class Main{
    constructor(){
        // localStorage.removeItem('notas');
        document.querySelector('#btnAdd').addEventListener('click', () => {
            let f = new Formulario("registro");
            f.crearFormulario();
        })
    }
}

new Main();