import Nota from "./nota.js"
export default class Formulario {
    constructor(formulario) {
        this._type = formulario;
        this._body = document.querySelector("#body");
    }

    crearFormulario(edicion) {
        if (this._type === "registro") {
            this._crearRegistro();
        } else {
            this._crearEdicion(edicion);
        }
    }

    _crearEdicion(edicion) {
        let divBlack = document.createElement('div');
        divBlack.className = "divBlack";
        let container = document.createElement('div');
        container.className = "formRegistro";

        let form = document.createElement('form');
        form.className = "needs-validation p-4";
        form.noValidate = true;

        let formGroup1 = document.createElement('div');
        formGroup1.className = "form-group";
        let inpName = document.createElement('input');
        let lbName = document.createElement('label');
        lbName.style.color = "white"
        lbName.textContent = "Name: "
        inpName.type = "text";
        inpName.required = true;
        inpName.value = edicion.name;
        inpName.placeholder = "Type here";
        inpName.className = "form-control";
        let validFeedback = document.createElement('div');
        validFeedback.textContent = "Correcto";
        validFeedback.className = 'valid-feedback';
        let invalidFeedback = document.createElement('div');
        invalidFeedback.textContent = 'Please complete the field';
        invalidFeedback.className = 'invalid-feedback';

        let formGroup2 = document.createElement('div');
        formGroup2.className = "form-group";
        let inpDate = document.createElement('input');
        let lbDate = document.createElement('label');
        lbDate.style.color = "white"
        lbDate.textContent = "Date of term";
        inpDate.type = "date";
        inpDate.required = true;
        inpDate.value = this._obtenerFechaString(edicion.date);
        inpDate.className = "form-control";
        let validFeedback2 = document.createElement('div');
        validFeedback2.textContent = "Correcto";
        validFeedback2.className = 'valid-feedback';
        let invalidFeedback2 = document.createElement('div');
        invalidFeedback2.textContent = 'Please complete the field';
        invalidFeedback2.className = 'invalid-feedback';

        let btnSave = document.createElement('input');
        btnSave.className = 'btn btn-success';
        btnSave.value = 'S A V E';
        btnSave.style.marginRight = '10px';
        btnSave.type = 'button';
        btnSave.addEventListener('click', () => {
            if (form.checkValidity() === true) {
                let objEdit = {
                    name: inpName.value,
                    date: inpDate.value
                }
                document.querySelector('body').removeChild(divBlack);
                let n = new Nota(objEdit);
                n._editarNota(edicion);  
            }
            form.classList.add('was-validated');

        });

        let btnDel = document.createElement('input');
        btnDel.className = 'btn btn-danger';
        btnDel.value = 'C A N C E L'
        btnDel.type = 'button';
        btnDel.addEventListener('click', () => {
            document.querySelector('body').removeChild(divBlack);
        });

        formGroup1.appendChild(lbName);
        formGroup1.appendChild(inpName);
        formGroup1.appendChild(validFeedback);
        formGroup1.appendChild(invalidFeedback);
        formGroup2.appendChild(lbDate);
        formGroup2.appendChild(inpDate);
        formGroup2.appendChild(validFeedback2);
        formGroup2.appendChild(invalidFeedback2);
        form.appendChild(formGroup1);
        form.appendChild(formGroup2);
        form.appendChild(btnSave);
        form.appendChild(btnDel);
        container.appendChild(form);
        divBlack.appendChild(container)
        document.querySelector('body').appendChild(divBlack);
    }

    _obtenerFechaString(date) {
        let dateE = date;
        dateE = dateE.split("/");
        let fechaCons = dateE[2] + "-" + "0" + this._convertirMesesANum(dateE[1]) + "-" + dateE[0];
        return fechaCons;
    }

    _convertirMesesANum(mes) {
        let newMes = 0;
        switch (mes) {
            case "Ene":
                newMes = 1;
                break;
            case "Feb":
                newMes = 2;
                break;
            case "Mar":
                newMes = 3;
                break;
            case "Abr":
                newMes = 4;
                break;
            case "May":
                newMes = 5;
                break;
            case "Jun":
                newMes = 6;
                break;
            case "Jul":
                newMes = 7;
                break;
            case "Ago":
                newMes = 8;
                break;
            case "Sep":
                newMes = 9;
                break;
            case "Oct":
                newMes = 10;
                break;
            case "Nov":
                newMes = 11;
                break;
            case "Dic":
                newMes = 12;
                break;
        }

        return newMes;
    }

    _crearRegistro() {
        let divBlack = document.createElement('div');
        divBlack.className = "divBlack";
        let container = document.createElement('div');
        container.className = "formRegistro";

        let form = document.createElement('form');
        form.className = "needs-validation p-4";
        form.noValidate = true;

        let formGroup1 = document.createElement('div');
        formGroup1.className = "form-group";
        let inpName = document.createElement('input');
        let lbName = document.createElement('label');
        lbName.style.color = "white"
        lbName.textContent = "Name: "
        inpName.type = "text";
        inpName.required = true;
        inpName.placeholder = "Type here";
        inpName.className = "form-control";
        let validFeedback = document.createElement('div');
        validFeedback.textContent = "Correcto";
        validFeedback.className = 'valid-feedback';
        let invalidFeedback = document.createElement('div');
        invalidFeedback.textContent = 'Please complete the field';
        invalidFeedback.className = 'invalid-feedback';

        let formGroup2 = document.createElement('div');
        formGroup2.className = "form-group";
        let inpDate = document.createElement('input');
        let lbDate = document.createElement('label');
        lbDate.style.color = "white"
        lbDate.textContent = "Date of term";
        inpDate.type = "date";
        inpDate.required = true;
        inpDate.className = "form-control";
        let validFeedback2 = document.createElement('div');
        validFeedback2.textContent = "Correcto";
        validFeedback2.className = 'valid-feedback';
        let invalidFeedback2 = document.createElement('div');
        invalidFeedback2.textContent = 'Please complete the field';
        invalidFeedback2.className = 'invalid-feedback';

        let btnSave = document.createElement('input');
        btnSave.className = 'btn btn-success';
        btnSave.value = 'S A V E';
        btnSave.style.marginRight = '10px';
        btnSave.type = 'button';
        btnSave.addEventListener('click', () => {
            if (form.checkValidity() === true) {
                let objNota = {
                    name: inpName.value,
                    date: inpDate.value
                }
                let n = new Nota(objNota);
                document.querySelector('body').removeChild(divBlack);
                n.saveOnLocalStorage();
            }

            form.classList.add('was-validated')
        });

        let btnDel = document.createElement('input');
        btnDel.className = 'btn btn-danger';
        btnDel.value = 'C A N C E L'
        btnDel.type = 'button';
        btnDel.addEventListener('click', () => {
            document.querySelector('body').removeChild(divBlack);
        });

        formGroup1.appendChild(lbName);
        formGroup1.appendChild(inpName);
        formGroup1.appendChild(validFeedback);
        formGroup1.appendChild(invalidFeedback);
        formGroup2.appendChild(lbDate);
        formGroup2.appendChild(inpDate);
        formGroup2.appendChild(validFeedback2);
        formGroup2.appendChild(invalidFeedback2);
        form.appendChild(formGroup1);
        form.appendChild(formGroup2);
        form.appendChild(btnSave);
        form.appendChild(btnDel);
        container.appendChild(form);
        divBlack.appendChild(container)
        document.querySelector('body').appendChild(divBlack);
    }
}