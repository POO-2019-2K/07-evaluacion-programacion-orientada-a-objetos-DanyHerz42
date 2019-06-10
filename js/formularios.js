export default class Formulario{
    constructor(formulario){
        this._type = formulario;
    }

    crearFormulario(){
        if (this._type === "registro"){
            this._crearRegistro();
        }
        
    }

    _crearRegistro(){
        let container = document.createElement('div');
        container.classList = "formRegistro";
        container.style.transform = "rotateZ(0deg) translate(0%)"

        document.querySelector('body').appendChild(container);
    }
}