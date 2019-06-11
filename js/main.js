import Formulario from './formularios.js';
import Vista from './vista.js';
class Main{
    constructor(){
        // localStorage.removeItem('notas');
        let aNotas = [];
        let checkbox = document.querySelector("#checkbox");
        document.querySelector("#switch").addEventListener("click", () => {
            let vista2 = new Vista(document.querySelector('#entorno'));
            if(checkbox.checked === false){
                vista2.orderByNumber();
            }else{
                vista2.orderByAlphabet();
            }
        })
        let vista = new Vista(document.querySelector('#entorno'));
        document.querySelector('#btnAdd').addEventListener('click', () => {
            let f = new Formulario("registro");
            f.crearFormulario();
        })
        if (!(localStorage.getItem("notas") === null)) {
            aNotas = JSON.parse(localStorage.getItem('notas'));
            vista._generarVista(aNotas);
        }
    }
}

new Main();