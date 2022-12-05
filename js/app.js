import { valiadandoImput } from "./validaciones.js";

const imputs = document.querySelectorAll("input");
imputs.forEach((classs) => {
    classs.addEventListener("blur", (classs) => {
        valiadandoImput(classs.target);
    });
});



/*//expreiones regulares 
/sol/g
    / la / i       //buca en mayuscula  y minuscula 
    / [eo] / g  //  si le quitan la g selecciona la primera letra que encunewtre solo un a bes
    / [5 - 8] / g  
    /.h/ g  //buca caracteres  adjuntado el digito anterior
    /\w / g //selecciona todos los csracteres menos  los simbolos como acon acentos $%&/()!"#$%"
    /\bcds / // nos permite seleccionar  el string qu damos  en el inincio del string
    /cds\b/ // permite seleccionar  el string que vestamos dando en el final del string o  varianlñe
    / abc + / // encunetre ab y c almenos una ves ccccccccccccccccccccccc
        ¿*/