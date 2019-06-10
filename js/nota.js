export default class Nota{
    constructor(entorno){
        this._entorno = entorno;
    }

    crearNota(){
        let div = document.createElement('div');
        div.className = 'nota';

        let name = document.createElement('p');
        name.textContent = "Titulo de Muestra";
        name.className = "tituloNota";

        let tachuela = document.createElement('i')
        tachuela.className = "fas fa-thumbtack tachuela";

        let hr = document.createElement('hr');
        
        let fecha = document.createElement('p');
        fecha.textContent = "dd/mm/aaaa";
        fecha.className = "fechaNota";

        
        div.appendChild(name);
        div.appendChild(tachuela);
        div.appendChild(hr);
        div.appendChild(fecha);
        this._entorno.appendChild(div);
    }
}