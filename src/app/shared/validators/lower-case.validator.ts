import { AbstractControl } from "@angular/forms";

//o 'control' como parametro representa o input do usuário
export function lowerCaseValidator(control: AbstractControl) { 

     // se não for vazio e NÃO tiver so minuscula e numero
    if (control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)) {

         //objeto retornado se o validador NÃO for atendido. 
        return { lowerCase: true };

    }

    return null;  // se o validador for atendido.

}