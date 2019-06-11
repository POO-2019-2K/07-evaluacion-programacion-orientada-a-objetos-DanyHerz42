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
        inpName.placeholder = "Type here";
        inpName.className = "form-control";

        let formGroup2 = document.createElement('div');
        formGroup2.className = "form-group";
        let inpDate = document.createElement('input');
        let lbDate = document.createElement('label');
        lbDate.style.color = "white"
        lbDate.textContent = "Date of term";
        inpDate.type = "date";
        inpDate.className = "form-control";

        let btnSave = document.createElement('input');
        btnSave.className = 'btn btn-success';
        btnSave.value = 'S A V E';
        btnSave.style.marginRight = '10px';
        btnSave.type = 'button';

        let btnDel = document.createElement('input');
        btnDel.className = 'btn btn-danger';
        btnDel.value = 'C A N C E L'
        btnDel.type = 'button';

        formGroup1.appendChild(lbName);
        formGroup1.appendChild(inpName);
        formGroup2.appendChild(lbDate);
        formGroup2.appendChild(inpDate);
        form.appendChild(formGroup1);
        form.appendChild(formGroup2);
        form.appendChild(btnSave);
        form.appendChild(btnDel);
        container.appendChild(form);
        divBlack.appendChild(container)
        document.querySelector('body').appendChild(divBlack);
    }
}