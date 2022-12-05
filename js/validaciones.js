export function valiadandoImput(input) {
    const tipoDato = input.dataset.tipo; // nos permite conocer al tipo de input  con data-tipo;

    if (validacionesFunciones[tipoDato]) {
        validacionesFunciones[tipoDato](input);

    };
    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }
    else {
        input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeError(tipoDato, input);
    
    }; 


};
    //este es un arreglo,
const tipoDeError = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];

 function mostrarMensajeError(tipoDato, input){
    let mensage = "";
    tipoDeError.forEach(error => {
        if (input.validity[error]) {
            console.log(TypeError.error);
            console.log(input.validity[error]);
            console.log(mensajesDeEroor[tipoDato][error]);
            mensage = mensajesDeEroor[tipoDato][error];
        };
    });
    return mensage;
};





const mensajesDeEroor = {
    nombre: {
        valueMissing: "este campo no puede estar vacio",
    },
    email: {
        valueMissing: "este campo no puede estar vacio",
        typeMismatch: "el correo no es valido",
    },

    password: {
        valueMissing: "este campo no puede estar vacio",
        patternMismatch: "al menos 6 caracteres ,maximo 12 ,deve una letra de mayuscula , un numero "
        
    },
    nacimiento: {
        valueMissing: "este campo no puede estar vacio",
        customError: "deves tener almenos 18 años",
        
    },
    numero: {
        valueMissing: "este campo numero  no puede estar vacio",

    },
    direccion: {
        valueMissing: "el campo  direccion  no puede estar vacio",
    },
    ciudad: {
        valueMissing: "este campo no puede estar vacio",
        
    },
    estado: {
        valueMissing: "este campo es indispensable ",
    }
    

};
//para saber mas de los campos depenndiendo de del typo utilizamos """"$0.validity""  permite ver el estado de un input para la 
//la agre¿gacion y eliminacion de campos ;

const validacionesFunciones = {
    nacimiento: (input) => comparacionn(input),
};






// es validacion de edad;
function comparacionn(input) {
    const nacimentoCliente = new Date(input.value);

    let mensage = '';
    if (!comparacion(nacimentoCliente)) {
        mensage = "USTED ESMENOR DE EDAD";
        
    };

    input.setCustomValidity(mensage);

};

function comparacion(fecha) {
    const fechaActual = new Date();
    const comparativa = new Date(
        fecha.getUTCFullYear() + 18,
        fecha.getUTCMonth(),
        fecha.getUTCDay(),
    );
    return comparativa <= fechaActual;
};
