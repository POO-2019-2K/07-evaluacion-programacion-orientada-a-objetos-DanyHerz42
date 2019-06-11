import Formulario from "./formularios.js"
import Vista from "./vista.js";
export default class Nota {
    constructor(nota) {
        this._entorno = document.querySelector('#entorno');
        this._name = nota.name.toUpperCase();
        this._date = nota.date;
    }

    crearNota(e) {
        let div = document.createElement('div');
        div.className = 'nota';

        let name = document.createElement('p');
        name.textContent = e.name;
        name.className = "tituloNota";

        let tachuela = document.createElement('i');
        tachuela.className = "fas fa-thumbtack tachuela";
        tachuela.style.color = e.color;

        let hr = document.createElement('hr');

        let fecha = document.createElement('p');
        fecha.textContent = e.date;
        fecha.className = "fechaNota";

        let numDays = document.createElement("p");
        numDays.textContent = "Days Left: " + e.days;
        numDays.className = "cont";

        let btnDelete = document.createElement('i');
        btnDelete.className = 'fas fa-trash-alt delete';
        btnDelete.addEventListener('click', () => {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.value) {
                    this._eliminarNota(e.name);
                    this._entorno.removeChild(div);
                    Swal.fire(
                        'Deleted!',
                        'This person has been deleted.',
                        'success'
                    )
                }
            })
        })

        let btnEdit = document.createElement('i');
        btnEdit.className = 'far fa-edit edit';
        btnEdit.addEventListener('click', () => {
            let objEdit = {
                name: e.name,
                date: e.date,
                color: e.color
            }
            let formulario = new Formulario("edicion");
            formulario.crearFormulario(objEdit);
        })

        div.appendChild(name);
        div.appendChild(tachuela);
        div.appendChild(hr);
        div.appendChild(fecha);
       
        div.appendChild(btnDelete);
        div.appendChild(btnEdit);
        div.appendChild(numDays);
        this._entorno.appendChild(div);
    }

    saveOnLocalStorage() {
        let aNotas = [];
        let objNota = {
            name: this._name,
            date: this._obtenerFechaString(this._date),
            days: this._calcularDias(this._obtenerObjetoFecha(this._date)),
            color: this.colorRandom()
        }

        if (localStorage.getItem("notas") === null) {
            aNotas.push(objNota);
            Swal.fire({
                type: "success",
                text: "Added contact!",
                title: "Ready!",
                confirmButtonText: "OK"
            })
        } else {
            aNotas = JSON.parse(localStorage.getItem("notas"));
            let bandera = true;
            aNotas.forEach((e, index) => {
                console.log("hola")
                if (e.name === objNota.name) {

                    Swal.fire({
                        title: 'Error!',
                        text: 'This note is already added!',
                        type: 'error',
                        confirmButtonText: 'OK'
                    });
                    bandera = false;
                }
            })
            if (bandera === true) {
                aNotas = JSON.parse(localStorage.getItem("notas"));
                aNotas.push(objNota);
                Swal.fire({
                    type: "success",
                    text: "Added note!",
                    title: "Ready!",
                    confirmButtonText: "OK"
                })
                let vista = new Vista(document.querySelector('#entorno'));
                vista._generarVista(aNotas);
            }

        }
        let vista = new Vista(document.querySelector('#entorno'));
        localStorage.setItem("notas", JSON.stringify(aNotas));
        vista._generarVista(aNotas);

    }

    _obtenerFechaString(fecha) {
        let objetoFecha = this._obtenerObjetoFecha(fecha)
        let arrayMeses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
        let s = fecha.split("-");
        let stringFecha = s[2] + "/" + arrayMeses[objetoFecha.getMonth()] + "/" + s[0];
        return stringFecha;
    }

    _obtenerObjetoFecha(fecha) {
        let s = fecha.split('-');
        let oFecha = new Date(s[0], s[1] - 1, s[2]);
        return oFecha;
    }

    _calcularDias(fecha) {
        let fechaC = fecha.getTime();
        let now = new Date().getTime();

        let oneDay = 24 * 60 * 60 * 1000;
        let differenceMs = fechaC - now;

        let age = Math.trunc(differenceMs / oneDay);
        return age;
    }

    _eliminarNota(name) {
        let aCont = JSON.parse(localStorage.getItem("notas"));
        aCont.forEach((e, index) => {
            if (name === e.name) {
                
                aCont.splice(index, 1);
            }
        });
        localStorage.setItem("notas", JSON.stringify(aCont));
    }

    _editarNota(edicion) {
        let aNotas = [];
        if (!(localStorage.getItem("notas") === null)) {
            aNotas = JSON.parse(localStorage.getItem("notas"));
        }
        let objNota = {
            name: this._name,
            date: this._obtenerFechaString(this._date),
            days: this._calcularDias(this._obtenerObjetoFecha(this._date)),
            color: edicion.color
        }
        console
        aNotas.forEach((e, index) => {
            if (e.name === edicion.name) {
                console.log(e);
                aNotas.splice(index, 1, objNota);
            }
        })
        localStorage.setItem('notas', JSON.stringify(aNotas));
        Swal.fire({
            title: 'Ready!',
            text: 'workshop successfully edited!',
            type: 'success',
            confirmButtonText: 'OK'
        })
        let vista = new Vista(document.querySelector('#entorno'));
        vista._generarVista(aNotas);
    };

    colorRandom() {
        let random = Math.round(Math.random() * 10);
        let color = 0;
        switch (random) {
            case 1:
                color = '#F30B0B';
                break;
            case 2:
                color = '#0105FE';
                break;
            case 3:
                color = '#018E08';
                break;
            case 4:
                color = '#FB6501';
                break;
            case 5:
                color = '#F3E200';
                break;
            case 6:
                color = '#FB01C9';
                break;
            case 7:
                color = '#8D3030';
                break;
            case 8:
                color = '#00CFFE';
                break;
            case 9:
                color = '#000000';
                break;
            case 10:
                color = '#761EE2';
                break;
            default:
                break;
        }
        return color;
    }

}

